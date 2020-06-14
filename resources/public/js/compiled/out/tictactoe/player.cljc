(ns tictactoe.player)

(defn get-opponent [player]
  (condp = player
    :X :O
    :O :X
    (str "unexpected value \"" player \")))

(defn string-rep [player]
  (condp = player
    :X "X"
    :O "O"
    nil "-"))