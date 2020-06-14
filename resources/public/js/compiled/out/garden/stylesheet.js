// Compiled by ClojureScript 1.10.439 {}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30225 = arguments.length;
var i__4642__auto___30226 = (0);
while(true){
if((i__4642__auto___30226 < len__4641__auto___30225)){
args__4647__auto__.push((arguments[i__4642__auto___30226]));

var G__30227 = (i__4642__auto___30226 + (1));
i__4642__auto___30226 = G__30227;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__30228__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__30228 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__30229__i = 0, G__30229__a = new Array(arguments.length -  0);
while (G__30229__i < G__30229__a.length) {G__30229__a[G__30229__i] = arguments[G__30229__i + 0]; ++G__30229__i;}
  children = new cljs.core.IndexedSeq(G__30229__a,0,null);
} 
return G__30228__delegate.call(this,children);};
G__30228.cljs$lang$maxFixedArity = 0;
G__30228.cljs$lang$applyTo = (function (arglist__30230){
var children = cljs.core.seq(arglist__30230);
return G__30228__delegate(children);
});
G__30228.cljs$core$IFn$_invoke$arity$variadic = G__30228__delegate;
return G__30228;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq30223){
var G__30224 = cljs.core.first.call(null,seq30223);
var seq30223__$1 = cljs.core.next.call(null,seq30223);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30224,seq30223__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__30231__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__30231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30232__i = 0, G__30232__a = new Array(arguments.length -  0);
while (G__30232__i < G__30232__a.length) {G__30232__a[G__30232__i] = arguments[G__30232__i + 0]; ++G__30232__i;}
  args = new cljs.core.IndexedSeq(G__30232__a,0,null);
} 
return G__30231__delegate.call(this,args);};
G__30231.cljs$lang$maxFixedArity = 0;
G__30231.cljs$lang$applyTo = (function (arglist__30233){
var args = cljs.core.seq(arglist__30233);
return G__30231__delegate(args);
});
G__30231.cljs$core$IFn$_invoke$arity$variadic = G__30231__delegate;
return G__30231;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30235 = arguments.length;
var i__4642__auto___30236 = (0);
while(true){
if((i__4642__auto___30236 < len__4641__auto___30235)){
args__4647__auto__.push((arguments[i__4642__auto___30236]));

var G__30237 = (i__4642__auto___30236 + (1));
i__4642__auto___30236 = G__30237;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq30234){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30234));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__30241 = arguments.length;
switch (G__30241) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___30243 = arguments.length;
var i__4642__auto___30244 = (0);
while(true){
if((i__4642__auto___30244 < len__4641__auto___30243)){
args_arr__4662__auto__.push((arguments[i__4642__auto___30244]));

var G__30245 = (i__4642__auto___30244 + (1));
i__4642__auto___30244 = G__30245;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4663__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq30239){
var G__30240 = cljs.core.first.call(null,seq30239);
var seq30239__$1 = cljs.core.next.call(null,seq30239);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30240,seq30239__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30248 = arguments.length;
var i__4642__auto___30249 = (0);
while(true){
if((i__4642__auto___30249 < len__4641__auto___30248)){
args__4647__auto__.push((arguments[i__4642__auto___30249]));

var G__30250 = (i__4642__auto___30249 + (1));
i__4642__auto___30249 = G__30250;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq30246){
var G__30247 = cljs.core.first.call(null,seq30246);
var seq30246__$1 = cljs.core.next.call(null,seq30246);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30247,seq30246__$1);
});

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30253 = arguments.length;
var i__4642__auto___30254 = (0);
while(true){
if((i__4642__auto___30254 < len__4641__auto___30253)){
args__4647__auto__.push((arguments[i__4642__auto___30254]));

var G__30255 = (i__4642__auto___30254 + (1));
i__4642__auto___30254 = G__30255;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq30251){
var G__30252 = cljs.core.first.call(null,seq30251);
var seq30251__$1 = cljs.core.next.call(null,seq30251);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30252,seq30251__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30258 = arguments.length;
var i__4642__auto___30259 = (0);
while(true){
if((i__4642__auto___30259 < len__4641__auto___30258)){
args__4647__auto__.push((arguments[i__4642__auto___30259]));

var G__30260 = (i__4642__auto___30259 + (1));
i__4642__auto___30259 = G__30260;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq30256){
var G__30257 = cljs.core.first.call(null,seq30256);
var seq30256__$1 = cljs.core.next.call(null,seq30256);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30257,seq30256__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1590531130097
