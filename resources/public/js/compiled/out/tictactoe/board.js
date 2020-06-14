// Compiled by ClojureScript 1.10.439 {}
goog.provide('tictactoe.board');
goog.require('cljs.core');
goog.require('tictactoe.player');
tictactoe.board.cols = (function (){var iter__4434__auto__ = (function tictactoe$board$iter__38085(s__38086){
return (new cljs.core.LazySeq(null,(function (){
var s__38086__$1 = s__38086;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__38086__$1);
if(temp__5735__auto__){
var s__38086__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38086__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38086__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38088 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38087 = (0);
while(true){
if((i__38087 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__38087);
cljs.core.chunk_append.call(null,b__38088,(function (){var iter__4434__auto__ = ((function (i__38087,x,c__4432__auto__,size__4433__auto__,b__38088,s__38086__$2,temp__5735__auto__){
return (function tictactoe$board$iter__38085_$_iter__38089(s__38090){
return (new cljs.core.LazySeq(null,((function (i__38087,x,c__4432__auto__,size__4433__auto__,b__38088,s__38086__$2,temp__5735__auto__){
return (function (){
var s__38090__$1 = s__38090;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__38090__$1);
if(temp__5735__auto____$1){
var s__38090__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38090__$2)){
var c__4432__auto____$1 = cljs.core.chunk_first.call(null,s__38090__$2);
var size__4433__auto____$1 = cljs.core.count.call(null,c__4432__auto____$1);
var b__38092 = cljs.core.chunk_buffer.call(null,size__4433__auto____$1);
if((function (){var i__38091 = (0);
while(true){
if((i__38091 < size__4433__auto____$1)){
var y = cljs.core._nth.call(null,c__4432__auto____$1,i__38091);
cljs.core.chunk_append.call(null,b__38092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__38097 = (i__38091 + (1));
i__38091 = G__38097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38092),tictactoe$board$iter__38085_$_iter__38089.call(null,cljs.core.chunk_rest.call(null,s__38090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38092),null);
}
} else {
var y = cljs.core.first.call(null,s__38090__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),tictactoe$board$iter__38085_$_iter__38089.call(null,cljs.core.rest.call(null,s__38090__$2)));
}
} else {
return null;
}
break;
}
});})(i__38087,x,c__4432__auto__,size__4433__auto__,b__38088,s__38086__$2,temp__5735__auto__))
,null,null));
});})(i__38087,x,c__4432__auto__,size__4433__auto__,b__38088,s__38086__$2,temp__5735__auto__))
;
return iter__4434__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
})());

var G__38098 = (i__38087 + (1));
i__38087 = G__38098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38088),tictactoe$board$iter__38085.call(null,cljs.core.chunk_rest.call(null,s__38086__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38088),null);
}
} else {
var x = cljs.core.first.call(null,s__38086__$2);
return cljs.core.cons.call(null,(function (){var iter__4434__auto__ = ((function (x,s__38086__$2,temp__5735__auto__){
return (function tictactoe$board$iter__38085_$_iter__38093(s__38094){
return (new cljs.core.LazySeq(null,((function (x,s__38086__$2,temp__5735__auto__){
return (function (){
var s__38094__$1 = s__38094;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__38094__$1);
if(temp__5735__auto____$1){
var s__38094__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38094__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38094__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38096 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38095 = (0);
while(true){
if((i__38095 < size__4433__auto__)){
var y = cljs.core._nth.call(null,c__4432__auto__,i__38095);
cljs.core.chunk_append.call(null,b__38096,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__38099 = (i__38095 + (1));
i__38095 = G__38099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38096),tictactoe$board$iter__38085_$_iter__38093.call(null,cljs.core.chunk_rest.call(null,s__38094__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38096),null);
}
} else {
var y = cljs.core.first.call(null,s__38094__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),tictactoe$board$iter__38085_$_iter__38093.call(null,cljs.core.rest.call(null,s__38094__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__38086__$2,temp__5735__auto__))
,null,null));
});})(x,s__38086__$2,temp__5735__auto__))
;
return iter__4434__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
})(),tictactoe$board$iter__38085.call(null,cljs.core.rest.call(null,s__38086__$2)));
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
tictactoe.board.rows = (function (){var iter__4434__auto__ = (function tictactoe$board$iter__38100(s__38101){
return (new cljs.core.LazySeq(null,(function (){
var s__38101__$1 = s__38101;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__38101__$1);
if(temp__5735__auto__){
var s__38101__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38101__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38101__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38103 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38102 = (0);
while(true){
if((i__38102 < size__4433__auto__)){
var y = cljs.core._nth.call(null,c__4432__auto__,i__38102);
cljs.core.chunk_append.call(null,b__38103,(function (){var iter__4434__auto__ = ((function (i__38102,y,c__4432__auto__,size__4433__auto__,b__38103,s__38101__$2,temp__5735__auto__){
return (function tictactoe$board$iter__38100_$_iter__38104(s__38105){
return (new cljs.core.LazySeq(null,((function (i__38102,y,c__4432__auto__,size__4433__auto__,b__38103,s__38101__$2,temp__5735__auto__){
return (function (){
var s__38105__$1 = s__38105;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__38105__$1);
if(temp__5735__auto____$1){
var s__38105__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38105__$2)){
var c__4432__auto____$1 = cljs.core.chunk_first.call(null,s__38105__$2);
var size__4433__auto____$1 = cljs.core.count.call(null,c__4432__auto____$1);
var b__38107 = cljs.core.chunk_buffer.call(null,size__4433__auto____$1);
if((function (){var i__38106 = (0);
while(true){
if((i__38106 < size__4433__auto____$1)){
var x = cljs.core._nth.call(null,c__4432__auto____$1,i__38106);
cljs.core.chunk_append.call(null,b__38107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__38112 = (i__38106 + (1));
i__38106 = G__38112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38107),tictactoe$board$iter__38100_$_iter__38104.call(null,cljs.core.chunk_rest.call(null,s__38105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38107),null);
}
} else {
var x = cljs.core.first.call(null,s__38105__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),tictactoe$board$iter__38100_$_iter__38104.call(null,cljs.core.rest.call(null,s__38105__$2)));
}
} else {
return null;
}
break;
}
});})(i__38102,y,c__4432__auto__,size__4433__auto__,b__38103,s__38101__$2,temp__5735__auto__))
,null,null));
});})(i__38102,y,c__4432__auto__,size__4433__auto__,b__38103,s__38101__$2,temp__5735__auto__))
;
return iter__4434__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
})());

var G__38113 = (i__38102 + (1));
i__38102 = G__38113;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38103),tictactoe$board$iter__38100.call(null,cljs.core.chunk_rest.call(null,s__38101__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38103),null);
}
} else {
var y = cljs.core.first.call(null,s__38101__$2);
return cljs.core.cons.call(null,(function (){var iter__4434__auto__ = ((function (y,s__38101__$2,temp__5735__auto__){
return (function tictactoe$board$iter__38100_$_iter__38108(s__38109){
return (new cljs.core.LazySeq(null,((function (y,s__38101__$2,temp__5735__auto__){
return (function (){
var s__38109__$1 = s__38109;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__38109__$1);
if(temp__5735__auto____$1){
var s__38109__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38109__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38109__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38111 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38110 = (0);
while(true){
if((i__38110 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__38110);
cljs.core.chunk_append.call(null,b__38111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__38114 = (i__38110 + (1));
i__38110 = G__38114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38111),tictactoe$board$iter__38100_$_iter__38108.call(null,cljs.core.chunk_rest.call(null,s__38109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38111),null);
}
} else {
var x = cljs.core.first.call(null,s__38109__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),tictactoe$board$iter__38100_$_iter__38108.call(null,cljs.core.rest.call(null,s__38109__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__38101__$2,temp__5735__auto__))
,null,null));
});})(y,s__38101__$2,temp__5735__auto__))
;
return iter__4434__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
})(),tictactoe$board$iter__38100.call(null,cljs.core.rest.call(null,s__38101__$2)));
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
tictactoe.board.diags = cljs.core.cons.call(null,(function (){var iter__4434__auto__ = (function tictactoe$board$iter__38115(s__38116){
return (new cljs.core.LazySeq(null,(function (){
var s__38116__$1 = s__38116;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__38116__$1);
if(temp__5735__auto__){
var s__38116__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38116__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38116__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38118 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38117 = (0);
while(true){
if((i__38117 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__38117);
cljs.core.chunk_append.call(null,b__38118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null));

var G__38123 = (i__38117 + (1));
i__38117 = G__38123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38118),tictactoe$board$iter__38115.call(null,cljs.core.chunk_rest.call(null,s__38116__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38118),null);
}
} else {
var x = cljs.core.first.call(null,s__38116__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null),tictactoe$board$iter__38115.call(null,cljs.core.rest.call(null,s__38116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4434__auto__ = (function tictactoe$board$iter__38119(s__38120){
return (new cljs.core.LazySeq(null,(function (){
var s__38120__$1 = s__38120;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__38120__$1);
if(temp__5735__auto__){
var s__38120__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38120__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38120__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38122 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38121 = (0);
while(true){
if((i__38121 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__38121);
cljs.core.chunk_append.call(null,b__38122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((2) - x)], null));

var G__38124 = (i__38121 + (1));
i__38121 = G__38124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38122),tictactoe$board$iter__38119.call(null,cljs.core.chunk_rest.call(null,s__38120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38122),null);
}
} else {
var x = cljs.core.first.call(null,s__38120__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((2) - x)], null),tictactoe$board$iter__38119.call(null,cljs.core.rest.call(null,s__38120__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
})()], null));
tictactoe.board.all_lines = cljs.core.concat.call(null,tictactoe.board.cols,tictactoe.board.rows,tictactoe.board.diags);
tictactoe.board.sq_contents = (function tictactoe$board$sq_contents(board,p__38125){
var vec__38126 = p__38125;
var x = cljs.core.nth.call(null,vec__38126,(0),null);
var y = cljs.core.nth.call(null,vec__38126,(1),null);
var row = cljs.core.get.call(null,board,y);
return cljs.core.get.call(null,row,x);
});
tictactoe.board.line_contents = (function tictactoe$board$line_contents(board,line){
var iter__4434__auto__ = (function tictactoe$board$line_contents_$_iter__38129(s__38130){
return (new cljs.core.LazySeq(null,(function (){
var s__38130__$1 = s__38130;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__38130__$1);
if(temp__5735__auto__){
var s__38130__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38130__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38130__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38132 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38131 = (0);
while(true){
if((i__38131 < size__4433__auto__)){
var coords = cljs.core._nth.call(null,c__4432__auto__,i__38131);
cljs.core.chunk_append.call(null,b__38132,tictactoe.board.sq_contents.call(null,board,coords));

var G__38133 = (i__38131 + (1));
i__38131 = G__38133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38132),tictactoe$board$line_contents_$_iter__38129.call(null,cljs.core.chunk_rest.call(null,s__38130__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38132),null);
}
} else {
var coords = cljs.core.first.call(null,s__38130__$2);
return cljs.core.cons.call(null,tictactoe.board.sq_contents.call(null,board,coords),tictactoe$board$line_contents_$_iter__38129.call(null,cljs.core.rest.call(null,s__38130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,line);
});
tictactoe.board.print_board = (function tictactoe$board$print_board(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38141 = arguments.length;
var i__4642__auto___38142 = (0);
while(true){
if((i__4642__auto___38142 < len__4641__auto___38141)){
args__4647__auto__.push((arguments[i__4642__auto___38142]));

var G__38143 = (i__4642__auto___38142 + (1));
i__4642__auto___38142 = G__38143;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return tictactoe.board.print_board.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

tictactoe.board.print_board.cljs$core$IFn$_invoke$arity$variadic = (function (board,p__38137){
var vec__38138 = p__38137;
var indent = cljs.core.nth.call(null,vec__38138,(0),null);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (vec__38138,indent){
return (function (p1__38134_SHARP_){
return cljs.core.println.call(null,indent,cljs.core.mapv.call(null,tictactoe.player.string_rep,cljs.core.get.call(null,board,p1__38134_SHARP_)));
});})(vec__38138,indent))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)));
});

tictactoe.board.print_board.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tictactoe.board.print_board.cljs$lang$applyTo = (function (seq38135){
var G__38136 = cljs.core.first.call(null,seq38135);
var seq38135__$1 = cljs.core.next.call(null,seq38135);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38136,seq38135__$1);
});

tictactoe.board.apply_turn = (function tictactoe$board$apply_turn(board,player,p__38144){
var vec__38145 = p__38144;
var x = cljs.core.nth.call(null,vec__38145,(0),null);
var y = cljs.core.nth.call(null,vec__38145,(1),null);
return cljs.core.assoc_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),player);
});
tictactoe.board.get_line_winner = (function tictactoe$board$get_line_winner(board,line){
var contents = tictactoe.board.line_contents.call(null,board,line);
if(cljs.core._EQ_.call(null,contents,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313)], null))){
return new cljs.core.Keyword(null,"X","X",1705996313);
} else {
if(cljs.core._EQ_.call(null,contents,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null))){
return new cljs.core.Keyword(null,"O","O",795252742);
} else {
return null;

}
}
});
tictactoe.board.get_winner = (function tictactoe$board$get_winner(board){
var winner = cljs.core.atom.call(null,null);
var seq__38148_38152 = cljs.core.seq.call(null,tictactoe.board.all_lines);
var chunk__38149_38153 = null;
var count__38150_38154 = (0);
var i__38151_38155 = (0);
while(true){
if((i__38151_38155 < count__38150_38154)){
var line_38156 = cljs.core._nth.call(null,chunk__38149_38153,i__38151_38155);
var line_winner_38157 = tictactoe.board.get_line_winner.call(null,board,line_38156);
if((!((line_winner_38157 == null)))){
cljs.core.reset_BANG_.call(null,winner,line_winner_38157);
} else {
}


var G__38158 = seq__38148_38152;
var G__38159 = chunk__38149_38153;
var G__38160 = count__38150_38154;
var G__38161 = (i__38151_38155 + (1));
seq__38148_38152 = G__38158;
chunk__38149_38153 = G__38159;
count__38150_38154 = G__38160;
i__38151_38155 = G__38161;
continue;
} else {
var temp__5735__auto___38162 = cljs.core.seq.call(null,seq__38148_38152);
if(temp__5735__auto___38162){
var seq__38148_38163__$1 = temp__5735__auto___38162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38148_38163__$1)){
var c__4461__auto___38164 = cljs.core.chunk_first.call(null,seq__38148_38163__$1);
var G__38165 = cljs.core.chunk_rest.call(null,seq__38148_38163__$1);
var G__38166 = c__4461__auto___38164;
var G__38167 = cljs.core.count.call(null,c__4461__auto___38164);
var G__38168 = (0);
seq__38148_38152 = G__38165;
chunk__38149_38153 = G__38166;
count__38150_38154 = G__38167;
i__38151_38155 = G__38168;
continue;
} else {
var line_38169 = cljs.core.first.call(null,seq__38148_38163__$1);
var line_winner_38170 = tictactoe.board.get_line_winner.call(null,board,line_38169);
if((!((line_winner_38170 == null)))){
cljs.core.reset_BANG_.call(null,winner,line_winner_38170);
} else {
}


var G__38171 = cljs.core.next.call(null,seq__38148_38163__$1);
var G__38172 = null;
var G__38173 = (0);
var G__38174 = (0);
seq__38148_38152 = G__38171;
chunk__38149_38153 = G__38172;
count__38150_38154 = G__38173;
i__38151_38155 = G__38174;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,winner);
});
tictactoe.board.winning_moves = (function tictactoe$board$winning_moves(board,player){
var iter__4434__auto__ = (function tictactoe$board$winning_moves_$_iter__38175(s__38176){
return (new cljs.core.LazySeq(null,(function (){
var s__38176__$1 = s__38176;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__38176__$1);
if(temp__5735__auto__){
var s__38176__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38176__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38176__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38178 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38177 = (0);
while(true){
if((i__38177 < size__4433__auto__)){
var line = cljs.core._nth.call(null,c__4432__auto__,i__38177);
var contents = tictactoe.board.line_contents.call(null,board,line);
var freqs = cljs.core.frequencies.call(null,contents);
if(((cljs.core._EQ_.call(null,(2),cljs.core.get.call(null,freqs,player))) && (cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,freqs,null))))){
var index = contents.indexOf(null);
var sq = cljs.core.get.call(null,cljs.core.vec.call(null,line),index);
cljs.core.chunk_append.call(null,b__38178,sq);

var G__38179 = (i__38177 + (1));
i__38177 = G__38179;
continue;
} else {
var G__38180 = (i__38177 + (1));
i__38177 = G__38180;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38178),tictactoe$board$winning_moves_$_iter__38175.call(null,cljs.core.chunk_rest.call(null,s__38176__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38178),null);
}
} else {
var line = cljs.core.first.call(null,s__38176__$2);
var contents = tictactoe.board.line_contents.call(null,board,line);
var freqs = cljs.core.frequencies.call(null,contents);
if(((cljs.core._EQ_.call(null,(2),cljs.core.get.call(null,freqs,player))) && (cljs.core._EQ_.call(null,(1),cljs.core.get.call(null,freqs,null))))){
var index = contents.indexOf(null);
var sq = cljs.core.get.call(null,cljs.core.vec.call(null,line),index);
return cljs.core.cons.call(null,sq,tictactoe$board$winning_moves_$_iter__38175.call(null,cljs.core.rest.call(null,s__38176__$2)));
} else {
var G__38181 = cljs.core.rest.call(null,s__38176__$2);
s__38176__$1 = G__38181;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,tictactoe.board.all_lines);
});

//# sourceMappingURL=board.js.map?rel=1590799100379
