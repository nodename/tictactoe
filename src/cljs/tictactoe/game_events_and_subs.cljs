(ns tictactoe.game-events-and-subs
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [tictactoe.player :refer [string-rep]]
            [tictactoe.board :refer [starting-board apply-turns get-winner sq-contents]]))

(rf/reg-sub
  :game/turns
  (fn [db]
    (:game db)))

(rf/reg-sub
  :game/board
  (fn []
    (rf/subscribe [:game/turns]))
  (fn [turns]
    (let [turns (->>
                  turns
                  vals
                  (sort-by :id)
                  (map :sq))]
      (apply-turns starting-board :X turns))))

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
    (rf/subscribe [:game/turns]))
  (fn [turns _]
    (count turns)))

(rf/reg-sub
  :game/next-player
  (fn []
    (rf/subscribe [:game/next-turn-index]))
  (fn [index _]
    (if (even? index)
      :X
      :O)))

(rf/reg-sub
  :game/sq-content
  (fn [[_ sq]]
    (rf/subscribe [:game/who-played sq]))
  (fn [player [_ _]]
    (string-rep player)))

(rf/reg-event-fx
  :game/error
  (fn [cofx [_ msg]]
    {:db (assoc (:db cofx) :error msg)}))

(rf/reg-event-fx
  :game/add-turn
  (fn [cofx [_ sq]]
    {:db (let [n @(rf/subscribe [:game/next-turn-index])]
           (update-in (:db cofx) [:game] (fnil assoc {}) n {:id n
                                                            :sq sq}))}))
