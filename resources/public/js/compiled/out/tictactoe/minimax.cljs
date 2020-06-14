(ns tictactoe.minimax
  (:require [tictactoe.board :refer [sq-contents winning-moves]]
            [tictactoe.player :refer [get-opponent]]
            [tictactoe.board :refer [apply-turn print-board]]))

;enum Player: Int {
;                  case Human = -1
;                  case Blank = 0
;                  case Computer = 1
;                  }

(def all-squares
  (for [x [0 1 2]
        y [0 1 2]]
    [x y]))



(defn minimax [board player depth]
  (println "player:" player "depth:" depth "board:")
  (print-board board)
  (if (every? nil? (flatten board))
    {:move [1 1] :score 1}
    (if (every? some? (flatten board))
      {:move nil :score 0}
      (let [winners (winning-moves board player)
            opponent-winners (winning-moves board (get-opponent player))]
        (println "winners" winners "opponent-winners" opponent-winners)
        (if (seq winners)                                   ;; seq means not empty
          {:move (first winners) :score 1}
          (if (seq opponent-winners)
            {:move (first opponent-winners) :score -1}
            (let [move (atom nil)
                  score (atom -2)]
              (println "doseq")
              (doseq [sq all-squares]
                (println "sq" sq)
                (if (nil? (sq-contents board sq))
                  (let [board-with-new-move (apply-turn board player sq)
                        _ (println "board with new move:")
                        _ (print-board board-with-new-move)
                        score-for-the-move (- (:score (minimax board-with-new-move (get-opponent player) (inc depth))))
                        _ (println "score-for-the-move" score-for-the-move)]
                    (when (> score-for-the-move @score)
                      (reset! score score-for-the-move)
                      (reset! move sq)))))
              (if (nil? @move)
                {:move nil :score 0}
                {:move @move :score @score}))))))))