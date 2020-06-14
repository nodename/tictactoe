(ns tictactoe.board
  (:require [tictactoe.player :refer [string-rep]]))

;(defn neighbors [[x y]]
;  (for [dx [-1 0 1]
;        dy [-1 0 1]
;        :let [newx (+ x dx)
;              newy (+ y dy)]
;        :when (and (>= newx 0)
;                   (<= newx 2)
;                   (>= newy 0)
;                   (<= newy 2)
;                   (not= [newx newy] [x y]))]
;    [newx newy]))

(def cols
  (for [col [0 1 2]]
    (for [row [0 1 2]]
      [col row])))

(def rows
  (for [y [0 1 2]]
    (for [x [0 1 2]]
      [x y])))

(def diags
  (cons (for [x [0 1 2]]
          [x x])
        [(for [x [0 1 2]]
           [x (- 2 x)])]))

(def all-lines (concat cols rows diags))

(defn sq-contents [board [col row]]
  (let [row (get board row)]
    (get row col)))

(defn line-contents [board line]
  (for [coords line]
    (sq-contents board coords)))

(defn print-board [board & [indent]]
  (doall (map #(println indent (mapv string-rep (get board %))) [0 1 2])))

(defn apply-turn [board player [x y]]
  (assoc-in board [y x] player))                      ;; y comes first!

(defn turns-reducer [player]
  (let [player (atom (get-opponent player))]
    (fn [board turn]
      (swap! player get-opponent)
      (apply-turn board @player turn))))

(defn apply-turns [board last-player turns]
  (reduce (turns-reducer last-player) board turns))

(defn get-line-winner [board line]
  (let [contents (line-contents board line)]
    (cond
      (every? #{:X} contents) :X
      (every? #{:O} contents) :O
      :else nil)))

(defn get-winner [board]
    (doseq [line all-lines]
      (let [line-winner (get-line-winner board line)]
        (when (some? line-winner)
          line-winner))))

(defn winning-moves [board player]
  (for [line all-lines
        :let [contents (line-contents board line)]
        :let [freqs (frequencies contents)]
        :when (and (= 2 (get freqs player))
                   (= 1 (get freqs nil)))
        :let [index (.indexOf contents nil)]
        :let [sq (get (vec line) index)]]
    sq))