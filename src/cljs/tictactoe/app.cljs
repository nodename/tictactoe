(ns tictactoe.app
  (:require [tictactoe.player :refer [string-rep]]
            [tictactoe.boards :refer [initial-board]]
            [tictactoe.board :refer [apply-turns print-board]]
            [tictactoe.board-display :as display]
            [tictactoe.minimax :refer [minimax]]
            [tictactoe.boards :refer []]
            [tictactoe.game-events-and-subs] ;; must require this for the subscriptions to work
            [re-frame.core :as rf]))

(defn app []
  [:div {:style {:width "100%" :height "100%"}}
   (let [turn @(rf/subscribe [:game/next-turn-index])
         player @(rf/subscribe [:game/next-player])
         game-over? @(rf/subscribe [:game/over?])]
     [:div {:style {:width          "200px"
                    :height         "50px"
                    :margin         "0 auto"
                    :text-align     "center"
                    :vertical-align "middle"
                    :line-height    "50px"}}
      (if game-over?
        "GAME OVER"
        (str "turn " turn " player " (string-rep player)))])

   [display/display :X]

   (let [winner @(rf/subscribe [:game/winner])
         tied? @(rf/subscribe [:game/tied?])]
     [:div {:style {:width          "200px"
                    :height         "50px"
                    :margin         "0 auto"
                    :text-align     "center"
                    :vertical-align "middle"
                    :line-height    "50px"}}
      (cond
        (some? winner) (str (string-rep winner) " WINS!")
        tied? "TIE GAME"
        :otherwise "")])

   [:div
    (pr-str @(rf/subscribe [:game/board]))]
   [:div
    (pr-str @(rf/subscribe [:game/turns]))]])