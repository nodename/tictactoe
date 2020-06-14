(ns tictactoe.core-test
  (:require [clojure.test :refer :all]
            [tictactoe.core :refer :all]
            [tictactoe.minimax :refer :all]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 1))))

(deftest minimax-test
  (testing "Huh"
    (let [mm0 (minimax initial-board :X 0)]
      (println "minimax-initial" mm0)
      (let [board-1 (apply-turn initial-board :X (:move mm0))
            _ (println "board-1:")
            _ (print-board board-1)
            ; mm1 (minimax board-1 :O 0)
            ]
        ; (println "mm1" mm1)
        ))))