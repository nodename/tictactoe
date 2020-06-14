(ns tictactoe.strategy
  (:require [tictactoe.player :refer [get-opponent]]
            [tictactoe.board :refer [sq-contents line-contents all-lines winning-moves]]))

; https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy

(defn intersections [line0 line1]
  (clojure.set/intersection (set line0) (set line1)))

(defn forking-moves [board player]
  (set
    (for [line0 all-lines
          line1 all-lines
          :when (not= line0 line1)
          :let [crossings (intersections line0 line1)]
          :when (seq crossings)
          :let [intersection (first crossings)]
          :when (nil? (sq-contents board intersection))
          :let [contents0 (line-contents board line0)]
          :let [freqs0 (frequencies contents0)]
          :when (and (= 2 (get freqs0 nil))
                     (= 1 (get freqs0 player)))
          :let [contents1 (line-contents board line1)]
          :let [freqs1 (frequencies contents1)]
          :when (and (= 2 (get freqs1 nil))
                     (= 1 (get freqs1 player)))]
      intersection)))

(defn fork-blocking-moves [board player]
  (let [opponents-forking-moves (forking-moves board (get-opponent player))]
    (if (= 1 (count opponents-forking-moves))
      (first opponents-forking-moves)
      )))


(defn best-move [board player]
  (let [winning (winning-moves board player)]
    (if (seq winning)                                       ;; seq means not empty
      (first winning)
      (let [blocking (winning-moves board (get-opponent player))]
        (if (seq blocking)
          (first blocking)
          (let [forking (forking-moves board player)]
            (if (seq forking)
              (first forking)
              nil)))))))



