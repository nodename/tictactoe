(ns tictactoe.core
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy]
            [tictactoe.config :as config]
            [tictactoe.routes :as routes]
            [tictactoe.events :as events]
            [tictactoe.app :as app]
            [tictactoe.play :refer [simulate-a-game]]
            [tictactoe.board :refer [starting-board]]))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (r/render [app/app]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/load-app])
  (stylefy/init)
  (dev-setup)
  (mount-root)
  #_(simulate-a-game starting-board :X))
