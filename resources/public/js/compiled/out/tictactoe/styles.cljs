(ns tictactoe.styles
  (:require [stylefy.core :as stylefy :refer [class]]))

(class "board" {:width           "200px"
                :height "200px"
                :border-collapse "collapse"})

(class "boardsquare" {:width         "33.33%"
                      :border        "6px solid #222"
                      ::stylefy/mode {:after         {:content    "X"
                                                      :display    "block"
                                                      :margin-top "100%"}
                                      :first-of-type {::border-left-color "transparent"
                                                      :border-top-color   "transparent"}}})

(class "board-top-center-square" {:border-top-color "transparent"})

(class "board-top-right-square" {:border-right-color "transparent"
                                 :border-top-color "transparent"})

(class "board-bottom-row" {:border-bottom-color "transparent"})






