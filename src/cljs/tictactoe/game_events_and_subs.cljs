(ns tictactoe.game-events-and-subs
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [tictactoe.player :refer [string-rep]]
            [tictactoe.board :refer [starting-board apply-turns board-history get-winner sq-contents]]
            [tictactoe.minimax :refer [minimax]]))

(rf/reg-sub
  :game/turns
  (fn [db]
    (->>
      (:game db)
      vals
      (sort-by :id)
      (map :sq))))

(rf/reg-sub
  :game/board
  (fn []
    (rf/subscribe [:game/turns]))
  (fn [turns]
    (apply-turns starting-board :X turns)))

(rf/reg-sub
  :game/board-history
  (fn []
    (rf/subscribe [:game/turns]))
  (fn [turns]
    (board-history starting-board :X turns)))

(rf/reg-sub
  :game/winner
  (fn []
    (rf/subscribe [:game/board]))
  (fn [board]
    (get-winner board)))

(rf/reg-sub
  :game/tied?
  (fn []
    [(rf/subscribe [:game/board])
     (rf/subscribe [:game/winner])])
  (fn [[board winner]]
    (and (every? some? (flatten board))
         (nil? winner))))

(rf/reg-sub
  :game/over?
  (fn []
    [(rf/subscribe [:game/winner])
     (rf/subscribe [:game/tied?])])
  (fn [[winner tied?]]
    (or (some? winner) tied?)))

(rf/reg-sub
  :game/who-played
  (fn []
    (rf/subscribe [:game/board]))
  (fn [board [_ sq]]
    (sq-contents board sq)))

(rf/reg-sub
  :game/next-turn-index
  (fn []
    [(rf/subscribe [:game/turns])
     (rf/subscribe [:game/over?])])
  (fn [[turns over?]]
    (when (not over?)
      (count turns))))

(rf/reg-sub
  :game/next-player
  (fn []
    (rf/subscribe [:game/next-turn-index]))
  (fn [index _]
    (cond
      (nil? index) nil
      (even? index) :X
      :otherwise :O)))

(rf/reg-sub
  :game/computers-next-move
  (fn []
    [(rf/subscribe [:game/board])
     (rf/subscribe [:game/next-player])])
  (fn [[board player]]
    (:move (minimax board player))))

(rf/reg-sub
  :game/sq-content
  (fn [[_ sq]]
    (rf/subscribe [:game/who-played sq]))
  (fn [player [_ _]]
    (string-rep player)))

(rf/reg-event-fx
  :game/add-turn
  (fn [cofx [_ sq]]
    {:db (let [n @(rf/subscribe [:game/next-turn-index])]
           (update-in (:db cofx) [:game] (fnil assoc {}) n {:id n
                                                            :sq sq}))}))
