(ns tictactoe.play
  (:require [tictactoe.board :refer [print-board get-winner apply-turn starting-board]]
            [tictactoe.player :refer [get-opponent]]
            [tictactoe.minimax :refer [minimax]]))

;; computer plays both X and O, prints boards to console
(defn simulate-a-game [board first-player]
  (loop [board board
         player first-player
         turn 0]
    (print-board board)
    (let [move (:move (minimax board player))]
      (if (nil? move) ;; game over
        (let [result (condp = (get-winner board)
                       nil "Tie game!"
                       (keyword "X") "X wins!"
                       (keyword "O") "O wins!")]
          (newline)
          (println result))
        (do
          (newline)
          (println "turn" turn "player" (name player))
          (recur (apply-turn board player move)
                 (get-opponent player)
                 (inc turn)))))))
