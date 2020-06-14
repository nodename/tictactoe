(ns tictactoe.minimax
  (:require [tictactoe.board :refer [sq-contents get-winner winning-moves]]
            [tictactoe.player :refer [get-opponent]]
            [tictactoe.board :refer [apply-turn print-board]]))

;; https://towardsdatascience.com/lets-beat-games-using-a-bunch-of-code-part-1-tic-tac-toe-1543e981fec1


(def all-squares
  (for [row [0 1 2]
        col [0 1 2]]
    [row col]))

(defn spaces [n]
  (clojure.string/join "" (repeat n " ")))

(def minimax
  (memoize (fn [board player ;; depth
  ]
            ;; (let [indentation (spaces (* 8 depth))]
               ;; (println indentation "player:" player "depth:" depth "board:")
               ;; (print-board board indentation)
               (let [winner (get-winner board)]
                 (cond
                   ;; the three terminal states:
                   (= winner player) {:move nil :score 1}   ;; win
                   (= winner (get-opponent player)) {:move nil :score -1} ;; loss
                   (every? some? (flatten board)) {:move nil :score 0} ;; tie
                   :else (let [value (atom {:move nil :score -2})]
                           (let [empty-squares (filter #(nil? (sq-contents board %)) all-squares)]
                             (doseq [sq empty-squares]
                               ;;   (println indentation "sq" sq)
                               (let [board-with-new-move (apply-turn board player sq)
                                     mm (minimax board-with-new-move (get-opponent player) ;; (inc depth)
                                     )
                                     ;;        _ (println indentation "result:" mm)
                                     score-for-the-move (- (:score mm))]
                                 (when (> score-for-the-move (:score @value))
                                   (reset! value {:move sq :score score-for-the-move})))))
                           (if (nil? (:move @value))
                             {:move nil :score 0}
                             @value)))) ;; )
             )))


