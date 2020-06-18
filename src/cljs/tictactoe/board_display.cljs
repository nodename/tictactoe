(ns tictactoe.board-display
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy :refer [class keyframes]]
            [re-frame.core :as rf]
            [tictactoe.player :refer [get-opponent]]))


(class "board" {:width           "200px"
                :height          "200px"
                :margin          "0 auto"
                :border-collapse "collapse"})

(class "board-sq" {:width         "33.33%"
                   :height        "33.33%"
                   :border        "6px solid #222"
                   ::stylefy/mode {:after {:content    ""
                                           :display    "block"
                                           :margin-top "100%"}}})

(class "top-sq" {:border-top-color "transparent"})
(class "right-sq" {:border-right-color "transparent"})
(class "bottom-sq" {:border-bottom-color "transparent"})
(class "left-sq" {:border-left-color "transparent"})

(keyframes "pulsate"
           [:from {:opacity 0.0}]
           [:to {:opacity 1.0}])

(class "pulsate" {:animation-name            "pulsate"
                  :animation-duration        "1s"
                  :animation-iteration-count "5"})

(defn sq [classes row col user-player]
  (let [this-sq-is-empty? (nil? @(rf/subscribe [:game/who-played [row col]]))
        next-player @(rf/subscribe [:game/next-player])
        its-users-turn? (= next-player user-player)]
    [:td {:class    (if this-sq-is-empty?
                      classes
                      (str classes " " "pulsate"))
          :id       (str "sq-" row "-" col)
          :style    {:text-align     "center"
                     :vertical-align "middle"
                     :line-height    "100%"}
          :on-click (when (and its-users-turn? this-sq-is-empty?)
                      (fn [e]
                        (.preventDefault e)
                        (rf/dispatch [:game/add-turn [row col]])))}
     @(rf/subscribe [:game/sq-content [row col]])]))


(defn computer [computer-player]
  (let [next-player @(rf/subscribe [:game/next-player])
        computers-next-move @(rf/subscribe [:game/computers-next-move])
        its-computers-turn? (= computer-player next-player)]
     (when its-computers-turn?
       (js/setTimeout #(rf/dispatch [:game/add-turn computers-next-move]) 5000))))


(defn display [user-player]
  (computer (get-opponent user-player))
  [:div {:style {:width  "100%"
                 :height "100%"}}
   [:table.board
    [:tbody {:style {:width  "100%"
                     :height "100%"}}
     [:tr
      [sq "board-sq top-sq left-sq" 0 0 user-player]
      [sq "board-sq top-sq" 0 1 user-player]
      [sq "board-sq top-sq right-sq" 0 2 user-player]]
     [:tr
      [sq "board-sq left-sq" 1 0 user-player]
      [sq "board-sq" 1 1 user-player]
      [sq "board-sq right-sq" 1 2 user-player]]
     [:tr
      [sq "board-sq bottom-sq left-sq" 2 0 user-player]
      [sq "board-sq bottom-sq" 2 1 user-player]
      [sq "board-sq bottom-sq right-sq" 2 2 user-player]]]]])