// Compiled by ClojureScript 1.10.439 {}
goog.provide('tictactoe.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('tictactoe.player');
goog.require('tictactoe.boards');
goog.require('tictactoe.board');
goog.require('tictactoe.board_display');
goog.require('tictactoe.strategy');
goog.require('tictactoe.minimax');
tictactoe.app.tictactoe = (function tictactoe$app$tictactoe(){
var state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plays","plays",-1373778553),cljs.core.PersistentVector.EMPTY], null));
return null;
});
tictactoe.app.add_turn = (function tictactoe$app$add_turn(x,y,state){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"plays","plays",-1373778553),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
tictactoe.app.turns_reducer = (function tictactoe$app$turns_reducer(player){
var player__$1 = cljs.core.atom.call(null,tictactoe.player.get_opponent.call(null,player));
return ((function (player__$1){
return (function (board,turn){
cljs.core.swap_BANG_.call(null,player__$1,tictactoe.player.get_opponent);

return tictactoe.board.apply_turn.call(null,board,cljs.core.deref.call(null,player__$1),turn);
});
;})(player__$1))
});
tictactoe.app.apply_turns = (function tictactoe$app$apply_turns(board,last_player,turns){
return cljs.core.reduce.call(null,tictactoe.app.turns_reducer.call(null,last_player),board,turns);
});
tictactoe.app.string_rep = (function tictactoe$app$string_rep(player){
var pred__39771 = cljs.core._EQ_;
var expr__39772 = player;
if(cljs.core.truth_(pred__39771.call(null,new cljs.core.Keyword(null,"X","X",1705996313),expr__39772))){
return "X";
} else {
if(cljs.core.truth_(pred__39771.call(null,new cljs.core.Keyword(null,"O","O",795252742),expr__39772))){
return "O";
} else {
if(cljs.core.truth_(pred__39771.call(null,null,expr__39772))){
return "-";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39772)].join('')));
}
}
}
});
tictactoe.app.app = (function tictactoe$app$app(){
var mm0_39774 = tictactoe.minimax.minimax.call(null,tictactoe.boards.initial_board,new cljs.core.Keyword(null,"X","X",1705996313),(0));
cljs.core.println.call(null,"minimax-initial",mm0_39774);

var board_1_39775 = tictactoe.board.apply_turn.call(null,tictactoe.boards.initial_board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(mm0_39774));
var __39776 = cljs.core.println.call(null,"board-1:");
var __39777__$1 = tictactoe.board.print_board.call(null,board_1_39775);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"800px",new cljs.core.Keyword(null,"height","height",1025178622),"800px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.board_display.board_display,tictactoe.app.apply_turns.call(null,tictactoe.boards.initial_board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null))], null)], null)], null);
});

//# sourceMappingURL=app.js.map?rel=1590815479422
