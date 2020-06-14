// Compiled by ClojureScript 1.10.439 {}
goog.provide('day8.re_frame.trace.d3');
goog.require('cljs.core');
goog.require('reagent.core');
day8.re_frame.trace.d3.no_op = (function day8$re_frame$trace$d3$no_op(desc){
return (function() { 
var G__33731__delegate = function (args){
return null;
};
var G__33731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33732__i = 0, G__33732__a = new Array(arguments.length -  0);
while (G__33732__i < G__33732__a.length) {G__33732__a[G__33732__i] = arguments[G__33732__i + 0]; ++G__33732__i;}
  args = new cljs.core.IndexedSeq(G__33732__a,0,null);
} 
return G__33731__delegate.call(this,args);};
G__33731.cljs$lang$maxFixedArity = 0;
G__33731.cljs$lang$applyTo = (function (arglist__33733){
var args = cljs.core.seq(arglist__33733);
return G__33731__delegate(args);
});
G__33731.cljs$core$IFn$_invoke$arity$variadic = G__33731__delegate;
return G__33731;
})()
;
});
day8.re_frame.trace.d3.component_did_update = (function day8$re_frame$trace$d3$component_did_update(p__33734,ratoms){
var map__33735 = p__33734;
var map__33735__$1 = (((((!((map__33735 == null))))?(((((map__33735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33735):map__33735);
var d3_update = cljs.core.get.call(null,map__33735__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552));
return cljs.core.apply.call(null,d3_update,ratoms);
});
day8.re_frame.trace.d3.component_did_mount = (function day8$re_frame$trace$d3$component_did_mount(p__33737,ratoms){
var map__33738 = p__33737;
var map__33738__$1 = (((((!((map__33738 == null))))?(((((map__33738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33738):map__33738);
var lifecycle_fns = map__33738__$1;
var d3_once = cljs.core.get.call(null,map__33738__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478));
cljs.core.apply.call(null,d3_once,ratoms);

return day8.re_frame.trace.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});
/**
 * Creates a bridging component from Reagent to D3. Takes a map of
 *   lifecycle functions, and reactive data sources.
 * 
 *   :render-component - Render the outer Reagent component, and a place for your D3 component to mount to (probably an SVG element)
 *   :d3-once - Function called after the component has been rendered, for you to setup anything you need in D3 (e.g. adding <g> or classes)
 *   :d3-update - Run the D3 general update pattern: https://bl.ocks.org/mbostock/3808218
 *   
 */
day8.re_frame.trace.d3.create_d3 = (function day8$re_frame$trace$d3$create_d3(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33749 = arguments.length;
var i__4642__auto___33750 = (0);
while(true){
if((i__4642__auto___33750 < len__4641__auto___33749)){
args__4647__auto__.push((arguments[i__4642__auto___33750]));

var G__33751 = (i__4642__auto___33750 + (1));
i__4642__auto___33750 = G__33751;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

day8.re_frame.trace.d3.create_d3.cljs$core$IFn$_invoke$arity$variadic = (function (p__33742,ratoms){
var map__33743 = p__33742;
var map__33743__$1 = (((((!((map__33743 == null))))?(((((map__33743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33743):map__33743);
var render_component = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"render-component","render-component",21088873),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"render","render",-1408033454)));
var d3_once = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-did-mount","d3-did-mount",1382769638)));
var d3_update = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),day8.re_frame.trace.d3.no_op.call(null,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552)));
var lifecycle_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),render_component,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),d3_once,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),d3_update], null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (lifecycle_fns,map__33743,map__33743__$1,render_component,d3_once,d3_update){
return (function (){
var seq__33745_33752 = cljs.core.seq.call(null,ratoms);
var chunk__33746_33753 = null;
var count__33747_33754 = (0);
var i__33748_33755 = (0);
while(true){
if((i__33748_33755 < count__33747_33754)){
var r_33756 = cljs.core._nth.call(null,chunk__33746_33753,i__33748_33755);
cljs.core.deref.call(null,r_33756);


var G__33757 = seq__33745_33752;
var G__33758 = chunk__33746_33753;
var G__33759 = count__33747_33754;
var G__33760 = (i__33748_33755 + (1));
seq__33745_33752 = G__33757;
chunk__33746_33753 = G__33758;
count__33747_33754 = G__33759;
i__33748_33755 = G__33760;
continue;
} else {
var temp__5735__auto___33761 = cljs.core.seq.call(null,seq__33745_33752);
if(temp__5735__auto___33761){
var seq__33745_33762__$1 = temp__5735__auto___33761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33745_33762__$1)){
var c__4461__auto___33763 = cljs.core.chunk_first.call(null,seq__33745_33762__$1);
var G__33764 = cljs.core.chunk_rest.call(null,seq__33745_33762__$1);
var G__33765 = c__4461__auto___33763;
var G__33766 = cljs.core.count.call(null,c__4461__auto___33763);
var G__33767 = (0);
seq__33745_33752 = G__33764;
chunk__33746_33753 = G__33765;
count__33747_33754 = G__33766;
i__33748_33755 = G__33767;
continue;
} else {
var r_33768 = cljs.core.first.call(null,seq__33745_33762__$1);
cljs.core.deref.call(null,r_33768);


var G__33769 = cljs.core.next.call(null,seq__33745_33762__$1);
var G__33770 = null;
var G__33771 = (0);
var G__33772 = (0);
seq__33745_33752 = G__33769;
chunk__33746_33753 = G__33770;
count__33747_33754 = G__33771;
i__33748_33755 = G__33772;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,render_component,ratoms);
});})(lifecycle_fns,map__33743,map__33743__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (lifecycle_fns,map__33743,map__33743__$1,render_component,d3_once,d3_update){
return (function (this$){
return day8.re_frame.trace.d3.component_did_mount.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__33743,map__33743__$1,render_component,d3_once,d3_update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (lifecycle_fns,map__33743,map__33743__$1,render_component,d3_once,d3_update){
return (function (this$,old_argv){
return day8.re_frame.trace.d3.component_did_update.call(null,lifecycle_fns,ratoms);
});})(lifecycle_fns,map__33743,map__33743__$1,render_component,d3_once,d3_update))
], null));
});

day8.re_frame.trace.d3.create_d3.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame.trace.d3.create_d3.cljs$lang$applyTo = (function (seq33740){
var G__33741 = cljs.core.first.call(null,seq33740);
var seq33740__$1 = cljs.core.next.call(null,seq33740);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33741,seq33740__$1);
});


//# sourceMappingURL=d3.js.map?rel=1590529170431
