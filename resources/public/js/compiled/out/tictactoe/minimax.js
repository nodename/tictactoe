// Compiled by ClojureScript 1.10.439 {}
goog.provide('tictactoe.minimax');
goog.require('cljs.core');
goog.require('tictactoe.board');
goog.require('tictactoe.player');
tictactoe.minimax.all_squares = (function (){var iter__4434__auto__ = (function tictactoe$minimax$iter__39728(s__39729){
return (new cljs.core.LazySeq(null,(function (){
var s__39729__$1 = s__39729;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__39729__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4430__auto__ = ((function (s__39729__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function tictactoe$minimax$iter__39728_$_iter__39730(s__39731){
return (new cljs.core.LazySeq(null,((function (s__39729__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__39731__$1 = s__39731;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__39731__$1);
if(temp__5735__auto____$1){
var s__39731__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39731__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__39731__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__39733 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__39732 = (0);
while(true){
if((i__39732 < size__4433__auto__)){
var y = cljs.core._nth.call(null,c__4432__auto__,i__39732);
cljs.core.chunk_append.call(null,b__39733,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__39734 = (i__39732 + (1));
i__39732 = G__39734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39733),tictactoe$minimax$iter__39728_$_iter__39730.call(null,cljs.core.chunk_rest.call(null,s__39731__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39733),null);
}
} else {
var y = cljs.core.first.call(null,s__39731__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),tictactoe$minimax$iter__39728_$_iter__39730.call(null,cljs.core.rest.call(null,s__39731__$2)));
}
} else {
return null;
}
break;
}
});})(s__39729__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__39729__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,tictactoe$minimax$iter__39728.call(null,cljs.core.rest.call(null,s__39729__$1)));
} else {
var G__39735 = cljs.core.rest.call(null,s__39729__$1);
s__39729__$1 = G__39735;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
})();
tictactoe.minimax.spaces = (function tictactoe$minimax$spaces(n){
return clojure.string.join.call(null,"",cljs.core.repeat.call(null,n," "));
});
tictactoe.minimax.minimax = cljs.core.memoize.call(null,(function (board,player,depth){
var indentation = tictactoe.minimax.spaces.call(null,((8) * depth));
var winner = tictactoe.board.get_winner.call(null,board);
if(cljs.core._EQ_.call(null,winner,player)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"score","score",-1963588780),(1)], null);
} else {
if(cljs.core._EQ_.call(null,winner,tictactoe.player.get_opponent.call(null,player))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"score","score",-1963588780),(-1)], null);
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.some_QMARK_,cljs.core.flatten.call(null,board))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"score","score",-1963588780),(0)], null);
} else {
var move = cljs.core.atom.call(null,null);
var score = cljs.core.atom.call(null,(-2));
var empty_squares_39741 = cljs.core.filter.call(null,((function (move,score,winner,indentation){
return (function (p1__39736_SHARP_){
return (tictactoe.board.sq_contents.call(null,board,p1__39736_SHARP_) == null);
});})(move,score,winner,indentation))
,tictactoe.minimax.all_squares);
var seq__39737_39742 = cljs.core.seq.call(null,empty_squares_39741);
var chunk__39738_39743 = null;
var count__39739_39744 = (0);
var i__39740_39745 = (0);
while(true){
if((i__39740_39745 < count__39739_39744)){
var sq_39746 = cljs.core._nth.call(null,chunk__39738_39743,i__39740_39745);
var board_with_new_move_39747 = tictactoe.board.apply_turn.call(null,board,player,sq_39746);
var mm_39748 = tictactoe.minimax.minimax.call(null,board_with_new_move_39747,tictactoe.player.get_opponent.call(null,player),(depth + (1)));
var score_for_the_move_39749 = (- new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(mm_39748));
if((score_for_the_move_39749 > cljs.core.deref.call(null,score))){
cljs.core.reset_BANG_.call(null,score,score_for_the_move_39749);

cljs.core.reset_BANG_.call(null,move,sq_39746);
} else {
}


var G__39750 = seq__39737_39742;
var G__39751 = chunk__39738_39743;
var G__39752 = count__39739_39744;
var G__39753 = (i__39740_39745 + (1));
seq__39737_39742 = G__39750;
chunk__39738_39743 = G__39751;
count__39739_39744 = G__39752;
i__39740_39745 = G__39753;
continue;
} else {
var temp__5735__auto___39754 = cljs.core.seq.call(null,seq__39737_39742);
if(temp__5735__auto___39754){
var seq__39737_39755__$1 = temp__5735__auto___39754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39737_39755__$1)){
var c__4461__auto___39756 = cljs.core.chunk_first.call(null,seq__39737_39755__$1);
var G__39757 = cljs.core.chunk_rest.call(null,seq__39737_39755__$1);
var G__39758 = c__4461__auto___39756;
var G__39759 = cljs.core.count.call(null,c__4461__auto___39756);
var G__39760 = (0);
seq__39737_39742 = G__39757;
chunk__39738_39743 = G__39758;
count__39739_39744 = G__39759;
i__39740_39745 = G__39760;
continue;
} else {
var sq_39761 = cljs.core.first.call(null,seq__39737_39755__$1);
var board_with_new_move_39762 = tictactoe.board.apply_turn.call(null,board,player,sq_39761);
var mm_39763 = tictactoe.minimax.minimax.call(null,board_with_new_move_39762,tictactoe.player.get_opponent.call(null,player),(depth + (1)));
var score_for_the_move_39764 = (- new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(mm_39763));
if((score_for_the_move_39764 > cljs.core.deref.call(null,score))){
cljs.core.reset_BANG_.call(null,score,score_for_the_move_39764);

cljs.core.reset_BANG_.call(null,move,sq_39761);
} else {
}


var G__39765 = cljs.core.next.call(null,seq__39737_39755__$1);
var G__39766 = null;
var G__39767 = (0);
var G__39768 = (0);
seq__39737_39742 = G__39765;
chunk__39738_39743 = G__39766;
count__39739_39744 = G__39767;
i__39740_39745 = G__39768;
continue;
}
} else {
}
}
break;
}

if((cljs.core.deref.call(null,move) == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),null,new cljs.core.Keyword(null,"score","score",-1963588780),(0)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),cljs.core.deref.call(null,move),new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.deref.call(null,score)], null);
}

}
}
}
}));

//# sourceMappingURL=minimax.js.map?rel=1590815479232
