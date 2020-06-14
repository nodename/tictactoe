// Compiled by ClojureScript 1.10.439 {}
goog.provide('tictactoe.player');
goog.require('cljs.core');
tictactoe.player.get_opponent = (function tictactoe$player$get_opponent(player){
var pred__40361 = cljs.core._EQ_;
var expr__40362 = player;
if(cljs.core.truth_(pred__40361.call(null,new cljs.core.Keyword(null,"X","X",1705996313),expr__40362))){
return new cljs.core.Keyword(null,"O","O",795252742);
} else {
if(cljs.core.truth_(pred__40361.call(null,new cljs.core.Keyword(null,"O","O",795252742),expr__40362))){
return new cljs.core.Keyword(null,"X","X",1705996313);
} else {
return ["unexpected value \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
}
}
});
tictactoe.player.string_rep = (function tictactoe$player$string_rep(player){
var pred__40364 = cljs.core._EQ_;
var expr__40365 = player;
if(cljs.core.truth_(pred__40364.call(null,new cljs.core.Keyword(null,"X","X",1705996313),expr__40365))){
return "X";
} else {
if(cljs.core.truth_(pred__40364.call(null,new cljs.core.Keyword(null,"O","O",795252742),expr__40365))){
return "O";
} else {
if(cljs.core.truth_(pred__40364.call(null,null,expr__40365))){
return "-";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__40365)].join('')));
}
}
}
});

//# sourceMappingURL=player.js.map?rel=1590700458494
