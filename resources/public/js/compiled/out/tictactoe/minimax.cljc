(ns tictactoe.minimax
  (:require [tictactoe.board :refer [sq-contents get-winner winning-moves]]
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

(defn spaces [n]
  (clojure.string/join "" (repeat n " ")))

(def minimax
  (memoize (fn [board player depth]
             (let [indentation (spaces (* 8 depth))]
               ;; (println indentation "player:" player "depth:" depth "board:")
               ;; (print-board board indentation)
               (let [winner (get-winner board)]
                 (cond
                   ;; the terminal states:
                   (= winner player) {:move nil :score 1}   ;; win
                   (= winner (get-opponent player)) {:move nil :score -1} ;; loss
                   (every? some? (flatten board)) {:move nil :score 0} ;; tie
                   :else (let [move (atom nil)
                               score (atom -2)]
                           (let [empty-squares (filter #(nil? (sq-contents board %)) all-squares)]
                             (doseq [sq empty-squares]
                               ;;   (println indentation "sq" sq)
                               (let [board-with-new-move (apply-turn board player sq)
                                     mm (minimax board-with-new-move (get-opponent player) (inc depth))
                                     ;;        _ (println indentation "result:" mm)
                                     score-for-the-move (- (:score mm))]
                                 (when (> score-for-the-move @score)
                                   (reset! score score-for-the-move)
                                   (reset! move sq)))))
                           (if (nil? @move)
                             {:move nil :score 0}
                             {:move @move :score @score}))))))))


