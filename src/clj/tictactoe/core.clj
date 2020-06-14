(ns tictactoe.core
  (:require [tictactoe.board :refer [apply-turn get-winner print-board]]
            [tictactoe.player :refer [get-opponent]]
            [tictactoe.boards :refer :all]
            [tictactoe.minimax :refer :all]))

(defn test-full-board []
  (let [mm (minimax full-board :X 0)]                       ;; {:move nil :score 0}
    (println mm)))

(defn test-x-winning-board-x []
  (let [mm (minimax x-winning-board :X 0)]                  ;; {:move [2 2] :score 1}
    (println mm)))

(defn test-x-winning-board-o []
  (let [mm (minimax x-winning-board :O 0)]                  ;; {:move [2 2] :score -1}
    (println mm)))

(defn test-o-forking-board []
  (let [mm (minimax o-forking-board :O 0)]                  ;; {:move [1 1] :score 1}
    (println mm)))

(defn test-o-forking-board-x []
  (let [mm (minimax o-forking-board :X 0)]                  ;; {:move [2 2] :score -1}
    (println mm)))

(defn play-a-game [board first-player]
  (loop [board board
         player first-player
         turn 0]
    (print-board board)
    (let [move (:move (minimax board player))]
      (if (nil? move) ;; game over
        (let [winner (get-winner board)]
          (println)
          (condp = winner
            nil (println "Tie game!")
            (keyword "X") (println "X wins!")
            (keyword "O") (println "O wins!")))
        (do
          (println)
          (println "turn" turn "player" (name player))
          (recur (apply-turn board player move)
                 (get-opponent player)
                 (inc turn)))))))

(defn -main []
  (play-a-game o-forking-board :O))