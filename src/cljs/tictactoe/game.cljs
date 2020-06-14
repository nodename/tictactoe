(ns tictactoe.game
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))


(rf/reg-event-db
  :add-turn
  (fn [db [_ turn]]
    (udate-in db [:game] (fnil conj []) turn)))