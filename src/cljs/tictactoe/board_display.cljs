(ns tictactoe.board-display
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [class]]
            [re-frame.core :as rf]))


(class "board" {:width           "200px"
                :height          "200px"
                :margin          "0 auto"
                :border-collapse "collapse"})

(class "boardsquare" {:width         "33.33%"
                      :height        "33.33%"
                      :border        "6px solid #222"
                      ::stylefy/mode {:after {:content    ""
                                              :display    "block"
                                              :margin-top "100%"}}})

(class "top-sq" {:border-top-color "transparent"})
(class "right-sq" {:border-right-color "transparent"})
(class "bottom-sq" {:border-bottom-color "transparent"})
(class "left-sq" {:border-left-color "transparent"})

(defn sq [classes row col]
  (let [who-played @(rf/subscribe [:game/who-played [row col]])
        winner @(rf/subscribe [:game/winner])]
    [:td {:class    classes
          :id       (str "sq-" row "-" col)
          :style    {:text-align     "center"
                     :vertical-align "middle"
                     :line-height    "100%"}
          :on-click (when (and (nil? who-played) (nil? winner))
                      (fn [e]
                        (.preventDefault e)
                        (rf/dispatch [:game/add-turn [row col]])))}
     @(rf/subscribe [:game/sq-content [row col]])]))


(defn board-display []
  [:div {:style {:width  "100%"
                 :height "100%"}}
   [:table.board
    [:tbody {:style {:width  "100%"
                     :height "100%"}}
     [:tr
      [sq "boardsquare top-sq left-sq" 0 0]
      [sq "boardsquare top-sq" 0 1]
      [sq "boardsquare top-sq right-sq" 0 2]]
     [:tr
      [sq "boardsquare left-sq" 1 0]
      [sq "boardsquare" 1 1]
      [sq "boardsquare right-sq" 1 2]]
     [:tr
      [sq "boardsquare bottom-sq left-sq" 2 0]
      [sq "boardsquare bottom-sq" 2 1]
      [sq "boardsquare bottom-sq right-sq" 2 2]]]]])