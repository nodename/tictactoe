(ns tictactoe.boards)

(def initial-board [[nil nil nil]
                    [nil nil nil]
                    [nil nil nil]])

(def x-winning-board [[:X nil nil]
                      [nil :X nil]
                      [nil nil nil]])

(def forking-board [[:X nil nil]
                    [nil nil nil]
                    [nil :X nil]])

(def full-board [[:X :O :X]
                 [:X :O :X]
                 [:O :X :O]])

(def o-forking-board [[:O nil :X]
                     [:X nil nil]
                     [nil :O nil]])