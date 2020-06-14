(ns tictactoe.app
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [tictactoe.player :refer [get-opponent]]
            [tictactoe.boards :refer [initial-board]]
            [tictactoe.board :refer [apply-turn print-board]]
            [tictactoe.board-display :as display]
            [tictactoe.strategy :as strategy]
            [tictactoe.minimax :refer [minimax]]
            [tictactoe.boards :refer []]))

(defn tictactoe []
  (let [state (r/atom {:plays []})]
    ))

(defn add-turn [x y state]
  (swap! state update :plays conj [x y]))


(defn turns-reducer [player]
  (let [player (atom (get-opponent player))]
    (fn [board turn]
      (swap! player get-opponent)
      (apply-turn board @player turn))))

(defn apply-turns [board last-player turns]
  (reduce (turns-reducer last-player) board turns))

(defn string-rep [player]
  (condp = player
    :X "X"
    :O "O"
    nil "-"))

(defn app []
  ;(loop [board initial-board
  ;       player :X
  ;       turn 0]
  ;  (println "turn" turn)
  ;  (board/print-board board)
  ;  (if (> turn 1)
  ;    board
  ;    (recur (apply-turn board player (:move (minimax board player)))
  ;           (get-opponent player)
  ;           (inc turn))))

  (let [mm0 (minimax initial-board :X 0)]
    (println "minimax-initial" mm0)
  (let [board-1 (apply-turn initial-board :X (:move mm0))
        _ (println "board-1:")
        _ (print-board board-1)
       ; mm1 (minimax board-1 :O 0)
        ]
   ; (println "mm1" mm1)
    ))

  ;(print-board (apply-turns initial-board :O [[0 0] [0 1]]))
  ;(println (apply-turns initial-board :O [[0 0] [0 1]]))
  ;(println "contents" (strategy/line-contents (apply-turns initial-board :O [[0 0] [0 1]]) '([0 0] [1 0] [2 0])))
  ;(println "best move:" (strategy/best-move winning-board :O))
  ;(println "forking:" (strategy/forking-moves forking-board :X))
  [:div {:style {:width "800px" :height "800px"}}
   [:div {:style {:width "500px" :height "500px"}}
    [display/board-display (apply-turns initial-board :O [[0 0] [0 1]])
     ]]])