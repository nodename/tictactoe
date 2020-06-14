(ns tictactoe.board-display
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [class]]))


(class "board" {:width           "200px"
                :height          "200px"
                :border-collapse "collapse"})

(class "boardsquare" {:width         "33.33%"
                      :height        "33.33%"
                      :border        "6px solid #222"
                      ::stylefy/mode {:after         {:content    ""
                                                      :display    "block"
                                                      :margin-top "100%"}
                                      :first-of-type {::border-left-color "transparent"
                                                      :border-top-color   "transparent"}}})

(class "board-top-square" {:border-top-color "transparent"})

(class "board-right-square" {:border-right-color "transparent"})

(class "board-bottom-square" {:border-bottom-color "transparent"})


(defn board-display [board]
  (let [[row0 row1 row2] board
        [sq00 sq01 sq02] row0
        [sq10 sq11 sq12] row1
        [sq20 sq21 sq22] row2]
  [:div {:style {:width  "100%"
                 :height "100%"}}
   [:table.board
    [:tbody {:style {:width  "100%"
                     :height "100%"}}
     [:tr
      [:td.boardsquare sq00]
      [:td.boardsquare.board-top-square sq01]
      [:td.boardsquare.board-top-square.board-right-square sq02]]
     [:tr
      [:td.boardsquare sq10]
      [:td.boardsquare sq11]
      [:td.boardsquare.board-right-square sq12]]
     [:tr.board-bottom-row
      [:td.boardsquare.board-bottom-square sq20]
      [:td.boardsquare.board-bottom-square sq21]
      [:td.boardsquare.board-bottom-square.board-right-square sq22]]]]]))