(ns tictactoe.app
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [tictactoe.player :refer [get-opponent]]
            [tictactoe.boards :refer [initial-board]]
            [tictactoe.board :refer [apply-turns print-board]]
            [tictactoe.board-display :as display]
            [tictactoe.strategy :as strategy]
            [tictactoe.minimax :refer [minimax]]
            [tictactoe.boards :refer []]))

(def app-state (atom {:game nil}))

(defn app []
  [:div {:style {:width "800px" :height "800px"}}
   [:div {:style {:width "500px" :height "500px"}}
    [display/board-display (apply-turns initial-board :O [[0 0] [0 1]])
     ]]])