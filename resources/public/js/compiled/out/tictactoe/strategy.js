// Compiled by ClojureScript 1.10.439 {}
goog.provide('tictactoe.strategy');
goog.require('cljs.core');
goog.require('tictactoe.player');
goog.require('tictactoe.board');
tictactoe.strategy.intersections = (function tictactoe$strategy$intersections(line0,line1){
return clojure.set.intersection.call(null,cljs.core.set.call(null,line0),cljs.core.set.call(null,line1));
});
tictactoe.strategy.forking_moves = (function tictactoe$strategy$forking_moves(board,player){
return cljs.core.set.call(null,(function (){var iter__4434__auto__ = (function tictactoe$strategy$forking_moves_$_iter__38229(s__38230){
return (new cljs.core.LazySeq(null,(function (){
var s__38230__$1 = s__38230;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__38230__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var line0 = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4430__auto__ = ((function (s__38230__$1,line0,xs__6292__auto__,temp__5735__auto__){
return (function tictactoe$strategy$forking_moves_$_iter__38229_$_iter__38231(s__38232){
return (new cljs.core.LazySeq(null,((function (s__38230__$1,line0,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__38232__$1 = s__38232;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__38232__$1);
if(temp__5735__auto____$1){
var s__38232__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38232__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38232__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38234 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38233 = (0);
while(true){
if((i__38233 < size__4433__auto__)){
var line1 = cljs.core._nth.call(null,c__4432__auto__,i__38233);
if(cljs.core.not_EQ_.call(null,line0,line1)){
var crossings = tictactoe.strategy.intersections.call(null,line0,line1);
if(cljs.core.seq.call(null,crossings)){
var intersection = cljs.core.first.call(null,crossings);
var _ = cljs.core.println.call(null,intersection);
if((tictactoe.board.sq_contents.call(null,board,intersection) == null)){
var contents0 = tictactoe.board.line_contents.call(null,board,line0);
var freqs0 = cljs.core.frequencies.call(null,contents0);
if(((cljs.core._EQ_.call(null,(2),cljs.core.get.call(null,freqs0,null))) && (cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,freqs0,player))))){
var contents1 = tictactoe.board.line_contents.call(null,board,line1);
var freqs1 = cljs.core.frequencies.call(null,contents1);
if(((cljs.core._EQ_.call(null,(2),cljs.core.get.call(null,freqs1,null))) && (cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,freqs1,player))))){
cljs.core.chunk_append.call(null,b__38234,intersection);

var G__38235 = (i__38233 + (1));
i__38233 = G__38235;
continue;
} else {
var G__38236 = (i__38233 + (1));
i__38233 = G__38236;
continue;
}
} else {
var G__38237 = (i__38233 + (1));
i__38233 = G__38237;
continue;
}
} else {
var G__38238 = (i__38233 + (1));
i__38233 = G__38238;
continue;
}
} else {
var G__38239 = (i__38233 + (1));
i__38233 = G__38239;
continue;
}
} else {
var G__38240 = (i__38233 + (1));
i__38233 = G__38240;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38234),tictactoe$strategy$forking_moves_$_iter__38229_$_iter__38231.call(null,cljs.core.chunk_rest.call(null,s__38232__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38234),null);
}
} else {
var line1 = cljs.core.first.call(null,s__38232__$2);
if(cljs.core.not_EQ_.call(null,line0,line1)){
var crossings = tictactoe.strategy.intersections.call(null,line0,line1);
if(cljs.core.seq.call(null,crossings)){
var intersection = cljs.core.first.call(null,crossings);
var _ = cljs.core.println.call(null,intersection);
if((tictactoe.board.sq_contents.call(null,board,intersection) == null)){
var contents0 = tictactoe.board.line_contents.call(null,board,line0);
var freqs0 = cljs.core.frequencies.call(null,contents0);
if(((cljs.core._EQ_.call(null,(2),cljs.core.get.call(null,freqs0,null))) && (cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,freqs0,player))))){
var contents1 = tictactoe.board.line_contents.call(null,board,line1);
var freqs1 = cljs.core.frequencies.call(null,contents1);
if(((cljs.core._EQ_.call(null,(2),cljs.core.get.call(null,freqs1,null))) && (cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,freqs1,player))))){
return cljs.core.cons.call(null,intersection,tictactoe$strategy$forking_moves_$_iter__38229_$_iter__38231.call(null,cljs.core.rest.call(null,s__38232__$2)));
} else {
var G__38241 = cljs.core.rest.call(null,s__38232__$2);
s__38232__$1 = G__38241;
continue;
}
} else {
var G__38242 = cljs.core.rest.call(null,s__38232__$2);
s__38232__$1 = G__38242;
continue;
}
} else {
var G__38243 = cljs.core.rest.call(null,s__38232__$2);
s__38232__$1 = G__38243;
continue;
}
} else {
var G__38244 = cljs.core.rest.call(null,s__38232__$2);
s__38232__$1 = G__38244;
continue;
}
} else {
var G__38245 = cljs.core.rest.call(null,s__38232__$2);
s__38232__$1 = G__38245;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__38230__$1,line0,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__38230__$1,line0,xs__6292__auto__,temp__5735__auto__))
;
var fs__4431__auto__ = cljs.core.seq.call(null,iterys__4430__auto__.call(null,tictactoe.board.all_lines));
if(fs__4431__auto__){
return cljs.core.concat.call(null,fs__4431__auto__,tictactoe$strategy$forking_moves_$_iter__38229.call(null,cljs.core.rest.call(null,s__38230__$1)));
} else {
var G__38246 = cljs.core.rest.call(null,s__38230__$1);
s__38230__$1 = G__38246;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,tictactoe.board.all_lines);
})());
});
tictactoe.strategy.fork_blocking_moves = (function tictactoe$strategy$fork_blocking_moves(board,player){
var opponents_forking_moves = tictactoe.strategy.forking_moves.call(null,board,tictactoe.player.get_opponent.call(null,player));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,opponents_forking_moves))){
return cljs.core.first.call(null,opponents_forking_moves);
} else {
return null;
}
});
tictactoe.strategy.best_move = (function tictactoe$strategy$best_move(board,player){
var winning = tictactoe.board.winning_moves.call(null,board,player);
if(cljs.core.seq.call(null,winning)){
return cljs.core.first.call(null,winning);
} else {
var blocking = tictactoe.board.winning_moves.call(null,board,tictactoe.player.get_opponent.call(null,player));
if(cljs.core.seq.call(null,blocking)){
return cljs.core.first.call(null,blocking);
} else {
var forking = tictactoe.strategy.forking_moves.call(null,board,player);
if(cljs.core.seq.call(null,forking)){
return cljs.core.first.call(null,forking);
} else {
return null;
}
}
}
});

//# sourceMappingURL=strategy.js.map?rel=1590799100578
