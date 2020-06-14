// Compiled by ClojureScript 1.10.439 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4047__auto__ = elem.textContent;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__30355 = arguments.length;
switch (G__30355) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__30358 = arguments.length;
switch (G__30358) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__30362 = arguments.length;
switch (G__30362) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__30360_SHARP_){
return (!((p1__30360_SHARP_ === base)));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30376 = arguments.length;
var i__4642__auto___30377 = (0);
while(true){
if((i__4642__auto___30377 < len__4641__auto___30376)){
args__4647__auto__.push((arguments[i__4642__auto___30377]));

var G__30378 = (i__4642__auto___30377 + (1));
i__4642__auto___30377 = G__30378;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__30366_30379 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__30367_30380 = null;
var count__30368_30381 = (0);
var i__30369_30382 = (0);
while(true){
if((i__30369_30382 < count__30368_30381)){
var vec__30370_30383 = cljs.core._nth.call(null,chunk__30367_30380,i__30369_30382);
var k_30384 = cljs.core.nth.call(null,vec__30370_30383,(0),null);
var v_30385 = cljs.core.nth.call(null,vec__30370_30383,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_30384),v_30385);


var G__30386 = seq__30366_30379;
var G__30387 = chunk__30367_30380;
var G__30388 = count__30368_30381;
var G__30389 = (i__30369_30382 + (1));
seq__30366_30379 = G__30386;
chunk__30367_30380 = G__30387;
count__30368_30381 = G__30388;
i__30369_30382 = G__30389;
continue;
} else {
var temp__5735__auto___30390 = cljs.core.seq.call(null,seq__30366_30379);
if(temp__5735__auto___30390){
var seq__30366_30391__$1 = temp__5735__auto___30390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30366_30391__$1)){
var c__4461__auto___30392 = cljs.core.chunk_first.call(null,seq__30366_30391__$1);
var G__30393 = cljs.core.chunk_rest.call(null,seq__30366_30391__$1);
var G__30394 = c__4461__auto___30392;
var G__30395 = cljs.core.count.call(null,c__4461__auto___30392);
var G__30396 = (0);
seq__30366_30379 = G__30393;
chunk__30367_30380 = G__30394;
count__30368_30381 = G__30395;
i__30369_30382 = G__30396;
continue;
} else {
var vec__30373_30397 = cljs.core.first.call(null,seq__30366_30391__$1);
var k_30398 = cljs.core.nth.call(null,vec__30373_30397,(0),null);
var v_30399 = cljs.core.nth.call(null,vec__30373_30397,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_30398),v_30399);


var G__30400 = cljs.core.next.call(null,seq__30366_30391__$1);
var G__30401 = null;
var G__30402 = (0);
var G__30403 = (0);
seq__30366_30379 = G__30400;
chunk__30367_30380 = G__30401;
count__30368_30381 = G__30402;
i__30369_30382 = G__30403;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq30364){
var G__30365 = cljs.core.first.call(null,seq30364);
var seq30364__$1 = cljs.core.next.call(null,seq30364);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30365,seq30364__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30410 = arguments.length;
var i__4642__auto___30411 = (0);
while(true){
if((i__4642__auto___30411 < len__4641__auto___30410)){
args__4647__auto__.push((arguments[i__4642__auto___30411]));

var G__30412 = (i__4642__auto___30411 + (1));
i__4642__auto___30411 = G__30412;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__30406_30413 = cljs.core.seq.call(null,keywords);
var chunk__30407_30414 = null;
var count__30408_30415 = (0);
var i__30409_30416 = (0);
while(true){
if((i__30409_30416 < count__30408_30415)){
var kw_30417 = cljs.core._nth.call(null,chunk__30407_30414,i__30409_30416);
style.removeProperty(dommy.utils.as_str.call(null,kw_30417));


var G__30418 = seq__30406_30413;
var G__30419 = chunk__30407_30414;
var G__30420 = count__30408_30415;
var G__30421 = (i__30409_30416 + (1));
seq__30406_30413 = G__30418;
chunk__30407_30414 = G__30419;
count__30408_30415 = G__30420;
i__30409_30416 = G__30421;
continue;
} else {
var temp__5735__auto___30422 = cljs.core.seq.call(null,seq__30406_30413);
if(temp__5735__auto___30422){
var seq__30406_30423__$1 = temp__5735__auto___30422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30406_30423__$1)){
var c__4461__auto___30424 = cljs.core.chunk_first.call(null,seq__30406_30423__$1);
var G__30425 = cljs.core.chunk_rest.call(null,seq__30406_30423__$1);
var G__30426 = c__4461__auto___30424;
var G__30427 = cljs.core.count.call(null,c__4461__auto___30424);
var G__30428 = (0);
seq__30406_30413 = G__30425;
chunk__30407_30414 = G__30426;
count__30408_30415 = G__30427;
i__30409_30416 = G__30428;
continue;
} else {
var kw_30429 = cljs.core.first.call(null,seq__30406_30423__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_30429));


var G__30430 = cljs.core.next.call(null,seq__30406_30423__$1);
var G__30431 = null;
var G__30432 = (0);
var G__30433 = (0);
seq__30406_30413 = G__30430;
chunk__30407_30414 = G__30431;
count__30408_30415 = G__30432;
i__30409_30416 = G__30433;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq30404){
var G__30405 = cljs.core.first.call(null,seq30404);
var seq30404__$1 = cljs.core.next.call(null,seq30404);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30405,seq30404__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30446 = arguments.length;
var i__4642__auto___30447 = (0);
while(true){
if((i__4642__auto___30447 < len__4641__auto___30446)){
args__4647__auto__.push((arguments[i__4642__auto___30447]));

var G__30448 = (i__4642__auto___30447 + (1));
i__4642__auto___30447 = G__30448;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__30436_30449 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__30437_30450 = null;
var count__30438_30451 = (0);
var i__30439_30452 = (0);
while(true){
if((i__30439_30452 < count__30438_30451)){
var vec__30440_30453 = cljs.core._nth.call(null,chunk__30437_30450,i__30439_30452);
var k_30454 = cljs.core.nth.call(null,vec__30440_30453,(0),null);
var v_30455 = cljs.core.nth.call(null,vec__30440_30453,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_30454,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_30455),"px"].join(''));


var G__30456 = seq__30436_30449;
var G__30457 = chunk__30437_30450;
var G__30458 = count__30438_30451;
var G__30459 = (i__30439_30452 + (1));
seq__30436_30449 = G__30456;
chunk__30437_30450 = G__30457;
count__30438_30451 = G__30458;
i__30439_30452 = G__30459;
continue;
} else {
var temp__5735__auto___30460 = cljs.core.seq.call(null,seq__30436_30449);
if(temp__5735__auto___30460){
var seq__30436_30461__$1 = temp__5735__auto___30460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30436_30461__$1)){
var c__4461__auto___30462 = cljs.core.chunk_first.call(null,seq__30436_30461__$1);
var G__30463 = cljs.core.chunk_rest.call(null,seq__30436_30461__$1);
var G__30464 = c__4461__auto___30462;
var G__30465 = cljs.core.count.call(null,c__4461__auto___30462);
var G__30466 = (0);
seq__30436_30449 = G__30463;
chunk__30437_30450 = G__30464;
count__30438_30451 = G__30465;
i__30439_30452 = G__30466;
continue;
} else {
var vec__30443_30467 = cljs.core.first.call(null,seq__30436_30461__$1);
var k_30468 = cljs.core.nth.call(null,vec__30443_30467,(0),null);
var v_30469 = cljs.core.nth.call(null,vec__30443_30467,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_30468,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_30469),"px"].join(''));


var G__30470 = cljs.core.next.call(null,seq__30436_30461__$1);
var G__30471 = null;
var G__30472 = (0);
var G__30473 = (0);
seq__30436_30449 = G__30470;
chunk__30437_30450 = G__30471;
count__30438_30451 = G__30472;
i__30439_30452 = G__30473;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq30434){
var G__30435 = cljs.core.first.call(null,seq30434);
var seq30434__$1 = cljs.core.next.call(null,seq30434);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30435,seq30434__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__30479 = arguments.length;
switch (G__30479) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___30493 = arguments.length;
var i__4642__auto___30494 = (0);
while(true){
if((i__4642__auto___30494 < len__4641__auto___30493)){
args_arr__4662__auto__.push((arguments[i__4642__auto___30494]));

var G__30495 = (i__4642__auto___30494 + (1));
i__4642__auto___30494 = G__30495;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4663__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__30480 = elem;
(G__30480[k__$1] = v);

return G__30480;
} else {
var G__30481 = elem;
G__30481.setAttribute(k__$1,v);

return G__30481;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__30482_30496 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__30483_30497 = null;
var count__30484_30498 = (0);
var i__30485_30499 = (0);
while(true){
if((i__30485_30499 < count__30484_30498)){
var vec__30486_30500 = cljs.core._nth.call(null,chunk__30483_30497,i__30485_30499);
var k_30501__$1 = cljs.core.nth.call(null,vec__30486_30500,(0),null);
var v_30502__$1 = cljs.core.nth.call(null,vec__30486_30500,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_30501__$1,v_30502__$1);


var G__30503 = seq__30482_30496;
var G__30504 = chunk__30483_30497;
var G__30505 = count__30484_30498;
var G__30506 = (i__30485_30499 + (1));
seq__30482_30496 = G__30503;
chunk__30483_30497 = G__30504;
count__30484_30498 = G__30505;
i__30485_30499 = G__30506;
continue;
} else {
var temp__5735__auto___30507 = cljs.core.seq.call(null,seq__30482_30496);
if(temp__5735__auto___30507){
var seq__30482_30508__$1 = temp__5735__auto___30507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30482_30508__$1)){
var c__4461__auto___30509 = cljs.core.chunk_first.call(null,seq__30482_30508__$1);
var G__30510 = cljs.core.chunk_rest.call(null,seq__30482_30508__$1);
var G__30511 = c__4461__auto___30509;
var G__30512 = cljs.core.count.call(null,c__4461__auto___30509);
var G__30513 = (0);
seq__30482_30496 = G__30510;
chunk__30483_30497 = G__30511;
count__30484_30498 = G__30512;
i__30485_30499 = G__30513;
continue;
} else {
var vec__30489_30514 = cljs.core.first.call(null,seq__30482_30508__$1);
var k_30515__$1 = cljs.core.nth.call(null,vec__30489_30514,(0),null);
var v_30516__$1 = cljs.core.nth.call(null,vec__30489_30514,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_30515__$1,v_30516__$1);


var G__30517 = cljs.core.next.call(null,seq__30482_30508__$1);
var G__30518 = null;
var G__30519 = (0);
var G__30520 = (0);
seq__30482_30496 = G__30517;
chunk__30483_30497 = G__30518;
count__30484_30498 = G__30519;
i__30485_30499 = G__30520;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq30475){
var G__30476 = cljs.core.first.call(null,seq30475);
var seq30475__$1 = cljs.core.next.call(null,seq30475);
var G__30477 = cljs.core.first.call(null,seq30475__$1);
var seq30475__$2 = cljs.core.next.call(null,seq30475__$1);
var G__30478 = cljs.core.first.call(null,seq30475__$2);
var seq30475__$3 = cljs.core.next.call(null,seq30475__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30476,G__30477,G__30478,seq30475__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__30525 = arguments.length;
switch (G__30525) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___30531 = arguments.length;
var i__4642__auto___30532 = (0);
while(true){
if((i__4642__auto___30532 < len__4641__auto___30531)){
args_arr__4662__auto__.push((arguments[i__4642__auto___30532]));

var G__30533 = (i__4642__auto___30532 + (1));
i__4642__auto___30532 = G__30533;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4663__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_30534__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_30534__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_30534__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__30526_30535 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__30527_30536 = null;
var count__30528_30537 = (0);
var i__30529_30538 = (0);
while(true){
if((i__30529_30538 < count__30528_30537)){
var k_30539__$1 = cljs.core._nth.call(null,chunk__30527_30536,i__30529_30538);
dommy.core.remove_attr_BANG_.call(null,elem,k_30539__$1);


var G__30540 = seq__30526_30535;
var G__30541 = chunk__30527_30536;
var G__30542 = count__30528_30537;
var G__30543 = (i__30529_30538 + (1));
seq__30526_30535 = G__30540;
chunk__30527_30536 = G__30541;
count__30528_30537 = G__30542;
i__30529_30538 = G__30543;
continue;
} else {
var temp__5735__auto___30544 = cljs.core.seq.call(null,seq__30526_30535);
if(temp__5735__auto___30544){
var seq__30526_30545__$1 = temp__5735__auto___30544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30526_30545__$1)){
var c__4461__auto___30546 = cljs.core.chunk_first.call(null,seq__30526_30545__$1);
var G__30547 = cljs.core.chunk_rest.call(null,seq__30526_30545__$1);
var G__30548 = c__4461__auto___30546;
var G__30549 = cljs.core.count.call(null,c__4461__auto___30546);
var G__30550 = (0);
seq__30526_30535 = G__30547;
chunk__30527_30536 = G__30548;
count__30528_30537 = G__30549;
i__30529_30538 = G__30550;
continue;
} else {
var k_30551__$1 = cljs.core.first.call(null,seq__30526_30545__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_30551__$1);


var G__30552 = cljs.core.next.call(null,seq__30526_30545__$1);
var G__30553 = null;
var G__30554 = (0);
var G__30555 = (0);
seq__30526_30535 = G__30552;
chunk__30527_30536 = G__30553;
count__30528_30537 = G__30554;
i__30529_30538 = G__30555;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq30522){
var G__30523 = cljs.core.first.call(null,seq30522);
var seq30522__$1 = cljs.core.next.call(null,seq30522);
var G__30524 = cljs.core.first.call(null,seq30522__$1);
var seq30522__$2 = cljs.core.next.call(null,seq30522__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30523,G__30524,seq30522__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__30557 = arguments.length;
switch (G__30557) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__30563 = arguments.length;
switch (G__30563) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___30577 = arguments.length;
var i__4642__auto___30578 = (0);
while(true){
if((i__4642__auto___30578 < len__4641__auto___30577)){
args_arr__4662__auto__.push((arguments[i__4642__auto___30578]));

var G__30579 = (i__4642__auto___30578 + (1));
i__4642__auto___30578 = G__30579;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4663__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__5733__auto___30580 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___30580)){
var class_list_30581 = temp__5733__auto___30580;
var seq__30564_30582 = cljs.core.seq.call(null,classes__$1);
var chunk__30565_30583 = null;
var count__30566_30584 = (0);
var i__30567_30585 = (0);
while(true){
if((i__30567_30585 < count__30566_30584)){
var c_30586 = cljs.core._nth.call(null,chunk__30565_30583,i__30567_30585);
class_list_30581.add(c_30586);


var G__30587 = seq__30564_30582;
var G__30588 = chunk__30565_30583;
var G__30589 = count__30566_30584;
var G__30590 = (i__30567_30585 + (1));
seq__30564_30582 = G__30587;
chunk__30565_30583 = G__30588;
count__30566_30584 = G__30589;
i__30567_30585 = G__30590;
continue;
} else {
var temp__5735__auto___30591 = cljs.core.seq.call(null,seq__30564_30582);
if(temp__5735__auto___30591){
var seq__30564_30592__$1 = temp__5735__auto___30591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30564_30592__$1)){
var c__4461__auto___30593 = cljs.core.chunk_first.call(null,seq__30564_30592__$1);
var G__30594 = cljs.core.chunk_rest.call(null,seq__30564_30592__$1);
var G__30595 = c__4461__auto___30593;
var G__30596 = cljs.core.count.call(null,c__4461__auto___30593);
var G__30597 = (0);
seq__30564_30582 = G__30594;
chunk__30565_30583 = G__30595;
count__30566_30584 = G__30596;
i__30567_30585 = G__30597;
continue;
} else {
var c_30598 = cljs.core.first.call(null,seq__30564_30592__$1);
class_list_30581.add(c_30598);


var G__30599 = cljs.core.next.call(null,seq__30564_30592__$1);
var G__30600 = null;
var G__30601 = (0);
var G__30602 = (0);
seq__30564_30582 = G__30599;
chunk__30565_30583 = G__30600;
count__30566_30584 = G__30601;
i__30567_30585 = G__30602;
continue;
}
} else {
}
}
break;
}
} else {
var seq__30568_30603 = cljs.core.seq.call(null,classes__$1);
var chunk__30569_30604 = null;
var count__30570_30605 = (0);
var i__30571_30606 = (0);
while(true){
if((i__30571_30606 < count__30570_30605)){
var c_30607 = cljs.core._nth.call(null,chunk__30569_30604,i__30571_30606);
var class_name_30608 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_30608,c_30607))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_30608 === ""))?c_30607:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_30608)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_30607)].join('')));
}


var G__30609 = seq__30568_30603;
var G__30610 = chunk__30569_30604;
var G__30611 = count__30570_30605;
var G__30612 = (i__30571_30606 + (1));
seq__30568_30603 = G__30609;
chunk__30569_30604 = G__30610;
count__30570_30605 = G__30611;
i__30571_30606 = G__30612;
continue;
} else {
var temp__5735__auto___30613 = cljs.core.seq.call(null,seq__30568_30603);
if(temp__5735__auto___30613){
var seq__30568_30614__$1 = temp__5735__auto___30613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30568_30614__$1)){
var c__4461__auto___30615 = cljs.core.chunk_first.call(null,seq__30568_30614__$1);
var G__30616 = cljs.core.chunk_rest.call(null,seq__30568_30614__$1);
var G__30617 = c__4461__auto___30615;
var G__30618 = cljs.core.count.call(null,c__4461__auto___30615);
var G__30619 = (0);
seq__30568_30603 = G__30616;
chunk__30569_30604 = G__30617;
count__30570_30605 = G__30618;
i__30571_30606 = G__30619;
continue;
} else {
var c_30620 = cljs.core.first.call(null,seq__30568_30614__$1);
var class_name_30621 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_30621,c_30620))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_30621 === ""))?c_30620:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_30621)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_30620)].join('')));
}


var G__30622 = cljs.core.next.call(null,seq__30568_30614__$1);
var G__30623 = null;
var G__30624 = (0);
var G__30625 = (0);
seq__30568_30603 = G__30622;
chunk__30569_30604 = G__30623;
count__30570_30605 = G__30624;
i__30571_30606 = G__30625;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__30572_30626 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__30573_30627 = null;
var count__30574_30628 = (0);
var i__30575_30629 = (0);
while(true){
if((i__30575_30629 < count__30574_30628)){
var c_30630 = cljs.core._nth.call(null,chunk__30573_30627,i__30575_30629);
dommy.core.add_class_BANG_.call(null,elem,c_30630);


var G__30631 = seq__30572_30626;
var G__30632 = chunk__30573_30627;
var G__30633 = count__30574_30628;
var G__30634 = (i__30575_30629 + (1));
seq__30572_30626 = G__30631;
chunk__30573_30627 = G__30632;
count__30574_30628 = G__30633;
i__30575_30629 = G__30634;
continue;
} else {
var temp__5735__auto___30635 = cljs.core.seq.call(null,seq__30572_30626);
if(temp__5735__auto___30635){
var seq__30572_30636__$1 = temp__5735__auto___30635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30572_30636__$1)){
var c__4461__auto___30637 = cljs.core.chunk_first.call(null,seq__30572_30636__$1);
var G__30638 = cljs.core.chunk_rest.call(null,seq__30572_30636__$1);
var G__30639 = c__4461__auto___30637;
var G__30640 = cljs.core.count.call(null,c__4461__auto___30637);
var G__30641 = (0);
seq__30572_30626 = G__30638;
chunk__30573_30627 = G__30639;
count__30574_30628 = G__30640;
i__30575_30629 = G__30641;
continue;
} else {
var c_30642 = cljs.core.first.call(null,seq__30572_30636__$1);
dommy.core.add_class_BANG_.call(null,elem,c_30642);


var G__30643 = cljs.core.next.call(null,seq__30572_30636__$1);
var G__30644 = null;
var G__30645 = (0);
var G__30646 = (0);
seq__30572_30626 = G__30643;
chunk__30573_30627 = G__30644;
count__30574_30628 = G__30645;
i__30575_30629 = G__30646;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq30560){
var G__30561 = cljs.core.first.call(null,seq30560);
var seq30560__$1 = cljs.core.next.call(null,seq30560);
var G__30562 = cljs.core.first.call(null,seq30560__$1);
var seq30560__$2 = cljs.core.next.call(null,seq30560__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30561,G__30562,seq30560__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__30651 = arguments.length;
switch (G__30651) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___30657 = arguments.length;
var i__4642__auto___30658 = (0);
while(true){
if((i__4642__auto___30658 < len__4641__auto___30657)){
args_arr__4662__auto__.push((arguments[i__4642__auto___30658]));

var G__30659 = (i__4642__auto___30658 + (1));
i__4642__auto___30658 = G__30659;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4663__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5733__auto___30660 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___30660)){
var class_list_30661 = temp__5733__auto___30660;
class_list_30661.remove(c__$1);
} else {
var class_name_30662 = dommy.core.class$.call(null,elem);
var new_class_name_30663 = dommy.utils.remove_class_str.call(null,class_name_30662,c__$1);
if((class_name_30662 === new_class_name_30663)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_30663);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__30652 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__30653 = null;
var count__30654 = (0);
var i__30655 = (0);
while(true){
if((i__30655 < count__30654)){
var c = cljs.core._nth.call(null,chunk__30653,i__30655);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__30664 = seq__30652;
var G__30665 = chunk__30653;
var G__30666 = count__30654;
var G__30667 = (i__30655 + (1));
seq__30652 = G__30664;
chunk__30653 = G__30665;
count__30654 = G__30666;
i__30655 = G__30667;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30652);
if(temp__5735__auto__){
var seq__30652__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30652__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30652__$1);
var G__30668 = cljs.core.chunk_rest.call(null,seq__30652__$1);
var G__30669 = c__4461__auto__;
var G__30670 = cljs.core.count.call(null,c__4461__auto__);
var G__30671 = (0);
seq__30652 = G__30668;
chunk__30653 = G__30669;
count__30654 = G__30670;
i__30655 = G__30671;
continue;
} else {
var c = cljs.core.first.call(null,seq__30652__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__30672 = cljs.core.next.call(null,seq__30652__$1);
var G__30673 = null;
var G__30674 = (0);
var G__30675 = (0);
seq__30652 = G__30672;
chunk__30653 = G__30673;
count__30654 = G__30674;
i__30655 = G__30675;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq30648){
var G__30649 = cljs.core.first.call(null,seq30648);
var seq30648__$1 = cljs.core.next.call(null,seq30648);
var G__30650 = cljs.core.first.call(null,seq30648__$1);
var seq30648__$2 = cljs.core.next.call(null,seq30648__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30649,G__30650,seq30648__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__30677 = arguments.length;
switch (G__30677) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5733__auto___30679 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___30679)){
var class_list_30680 = temp__5733__auto___30679;
class_list_30680.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,(!(dommy.core.has_class_QMARK_.call(null,elem,c__$1))));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__30682 = arguments.length;
switch (G__30682) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__30685 = arguments.length;
switch (G__30685) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__30691 = arguments.length;
switch (G__30691) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___30698 = arguments.length;
var i__4642__auto___30699 = (0);
while(true){
if((i__4642__auto___30699 < len__4641__auto___30698)){
args_arr__4662__auto__.push((arguments[i__4642__auto___30699]));

var G__30700 = (i__4642__auto___30699 + (1));
i__4642__auto___30699 = G__30700;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4663__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__30692 = parent;
G__30692.appendChild(child);

return G__30692;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__30693_30701 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__30694_30702 = null;
var count__30695_30703 = (0);
var i__30696_30704 = (0);
while(true){
if((i__30696_30704 < count__30695_30703)){
var c_30705 = cljs.core._nth.call(null,chunk__30694_30702,i__30696_30704);
dommy.core.append_BANG_.call(null,parent,c_30705);


var G__30706 = seq__30693_30701;
var G__30707 = chunk__30694_30702;
var G__30708 = count__30695_30703;
var G__30709 = (i__30696_30704 + (1));
seq__30693_30701 = G__30706;
chunk__30694_30702 = G__30707;
count__30695_30703 = G__30708;
i__30696_30704 = G__30709;
continue;
} else {
var temp__5735__auto___30710 = cljs.core.seq.call(null,seq__30693_30701);
if(temp__5735__auto___30710){
var seq__30693_30711__$1 = temp__5735__auto___30710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30693_30711__$1)){
var c__4461__auto___30712 = cljs.core.chunk_first.call(null,seq__30693_30711__$1);
var G__30713 = cljs.core.chunk_rest.call(null,seq__30693_30711__$1);
var G__30714 = c__4461__auto___30712;
var G__30715 = cljs.core.count.call(null,c__4461__auto___30712);
var G__30716 = (0);
seq__30693_30701 = G__30713;
chunk__30694_30702 = G__30714;
count__30695_30703 = G__30715;
i__30696_30704 = G__30716;
continue;
} else {
var c_30717 = cljs.core.first.call(null,seq__30693_30711__$1);
dommy.core.append_BANG_.call(null,parent,c_30717);


var G__30718 = cljs.core.next.call(null,seq__30693_30711__$1);
var G__30719 = null;
var G__30720 = (0);
var G__30721 = (0);
seq__30693_30701 = G__30718;
chunk__30694_30702 = G__30719;
count__30695_30703 = G__30720;
i__30696_30704 = G__30721;
continue;
}
} else {
}
}
break;
}

return parent;
});

/** @this {Function} */
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq30688){
var G__30689 = cljs.core.first.call(null,seq30688);
var seq30688__$1 = cljs.core.next.call(null,seq30688);
var G__30690 = cljs.core.first.call(null,seq30688__$1);
var seq30688__$2 = cljs.core.next.call(null,seq30688__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30689,G__30690,seq30688__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__30726 = arguments.length;
switch (G__30726) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___30733 = arguments.length;
var i__4642__auto___30734 = (0);
while(true){
if((i__4642__auto___30734 < len__4641__auto___30733)){
args_arr__4662__auto__.push((arguments[i__4642__auto___30734]));

var G__30735 = (i__4642__auto___30734 + (1));
i__4642__auto___30734 = G__30735;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4663__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__30727 = parent;
G__30727.insertBefore(child,parent.firstChild);

return G__30727;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__30728_30736 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__30729_30737 = null;
var count__30730_30738 = (0);
var i__30731_30739 = (0);
while(true){
if((i__30731_30739 < count__30730_30738)){
var c_30740 = cljs.core._nth.call(null,chunk__30729_30737,i__30731_30739);
dommy.core.prepend_BANG_.call(null,parent,c_30740);


var G__30741 = seq__30728_30736;
var G__30742 = chunk__30729_30737;
var G__30743 = count__30730_30738;
var G__30744 = (i__30731_30739 + (1));
seq__30728_30736 = G__30741;
chunk__30729_30737 = G__30742;
count__30730_30738 = G__30743;
i__30731_30739 = G__30744;
continue;
} else {
var temp__5735__auto___30745 = cljs.core.seq.call(null,seq__30728_30736);
if(temp__5735__auto___30745){
var seq__30728_30746__$1 = temp__5735__auto___30745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30728_30746__$1)){
var c__4461__auto___30747 = cljs.core.chunk_first.call(null,seq__30728_30746__$1);
var G__30748 = cljs.core.chunk_rest.call(null,seq__30728_30746__$1);
var G__30749 = c__4461__auto___30747;
var G__30750 = cljs.core.count.call(null,c__4461__auto___30747);
var G__30751 = (0);
seq__30728_30736 = G__30748;
chunk__30729_30737 = G__30749;
count__30730_30738 = G__30750;
i__30731_30739 = G__30751;
continue;
} else {
var c_30752 = cljs.core.first.call(null,seq__30728_30746__$1);
dommy.core.prepend_BANG_.call(null,parent,c_30752);


var G__30753 = cljs.core.next.call(null,seq__30728_30746__$1);
var G__30754 = null;
var G__30755 = (0);
var G__30756 = (0);
seq__30728_30736 = G__30753;
chunk__30729_30737 = G__30754;
count__30730_30738 = G__30755;
i__30731_30739 = G__30756;
continue;
}
} else {
}
}
break;
}

return parent;
});

/** @this {Function} */
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq30723){
var G__30724 = cljs.core.first.call(null,seq30723);
var seq30723__$1 = cljs.core.next.call(null,seq30723);
var G__30725 = cljs.core.first.call(null,seq30723__$1);
var seq30723__$2 = cljs.core.next.call(null,seq30723__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30724,G__30725,seq30723__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___30757 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___30757)){
var next_30758 = temp__5733__auto___30757;
dommy.core.insert_before_BANG_.call(null,elem,next_30758);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__30760 = arguments.length;
switch (G__30760) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__30761 = p;
G__30761.removeChild(elem);

return G__30761;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30763){
var vec__30764 = p__30763;
var special_mouse_event = cljs.core.nth.call(null,vec__30764,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__30764,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__30764,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__30764,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4047__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4036__auto__ = related_target;
if(cljs.core.truth_(and__4036__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4036__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__30764,special_mouse_event,real_mouse_event))
});})(vec__30764,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4036__auto__ = selected_target;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4036__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4047__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30770 = arguments.length;
var i__4642__auto___30771 = (0);
while(true){
if((i__4642__auto___30771 < len__4641__auto___30770)){
args__4647__auto__.push((arguments[i__4642__auto___30771]));

var G__30772 = (i__4642__auto___30771 + (1));
i__4642__auto___30771 = G__30772;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq30767){
var G__30768 = cljs.core.first.call(null,seq30767);
var seq30767__$1 = cljs.core.next.call(null,seq30767);
var G__30769 = cljs.core.first.call(null,seq30767__$1);
var seq30767__$2 = cljs.core.next.call(null,seq30767__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30768,G__30769,seq30767__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30812 = arguments.length;
var i__4642__auto___30813 = (0);
while(true){
if((i__4642__auto___30813 < len__4641__auto___30812)){
args__4647__auto__.push((arguments[i__4642__auto___30813]));

var G__30814 = (i__4642__auto___30813 + (1));
i__4642__auto___30813 = G__30814;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__30775_30815 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_30816 = cljs.core.nth.call(null,vec__30775_30815,(0),null);
var selector_30817 = cljs.core.nth.call(null,vec__30775_30815,(1),null);
var seq__30778_30818 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__30785_30819 = null;
var count__30786_30820 = (0);
var i__30787_30821 = (0);
while(true){
if((i__30787_30821 < count__30786_30820)){
var vec__30794_30822 = cljs.core._nth.call(null,chunk__30785_30819,i__30787_30821);
var orig_type_30823 = cljs.core.nth.call(null,vec__30794_30822,(0),null);
var f_30824 = cljs.core.nth.call(null,vec__30794_30822,(1),null);
var seq__30788_30825 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30823,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_30823,cljs.core.identity])));
var chunk__30790_30826 = null;
var count__30791_30827 = (0);
var i__30792_30828 = (0);
while(true){
if((i__30792_30828 < count__30791_30827)){
var vec__30797_30829 = cljs.core._nth.call(null,chunk__30790_30826,i__30792_30828);
var actual_type_30830 = cljs.core.nth.call(null,vec__30797_30829,(0),null);
var factory_30831 = cljs.core.nth.call(null,vec__30797_30829,(1),null);
var canonical_f_30832 = (cljs.core.truth_(selector_30817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30816,selector_30817):cljs.core.identity).call(null,factory_30831.call(null,f_30824));
dommy.core.update_event_listeners_BANG_.call(null,elem_30816,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30817,actual_type_30830,f_30824], null),canonical_f_30832);

if(cljs.core.truth_(elem_30816.addEventListener)){
elem_30816.addEventListener(cljs.core.name.call(null,actual_type_30830),canonical_f_30832);
} else {
elem_30816.attachEvent(cljs.core.name.call(null,actual_type_30830),canonical_f_30832);
}


var G__30833 = seq__30788_30825;
var G__30834 = chunk__30790_30826;
var G__30835 = count__30791_30827;
var G__30836 = (i__30792_30828 + (1));
seq__30788_30825 = G__30833;
chunk__30790_30826 = G__30834;
count__30791_30827 = G__30835;
i__30792_30828 = G__30836;
continue;
} else {
var temp__5735__auto___30837 = cljs.core.seq.call(null,seq__30788_30825);
if(temp__5735__auto___30837){
var seq__30788_30838__$1 = temp__5735__auto___30837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30788_30838__$1)){
var c__4461__auto___30839 = cljs.core.chunk_first.call(null,seq__30788_30838__$1);
var G__30840 = cljs.core.chunk_rest.call(null,seq__30788_30838__$1);
var G__30841 = c__4461__auto___30839;
var G__30842 = cljs.core.count.call(null,c__4461__auto___30839);
var G__30843 = (0);
seq__30788_30825 = G__30840;
chunk__30790_30826 = G__30841;
count__30791_30827 = G__30842;
i__30792_30828 = G__30843;
continue;
} else {
var vec__30800_30844 = cljs.core.first.call(null,seq__30788_30838__$1);
var actual_type_30845 = cljs.core.nth.call(null,vec__30800_30844,(0),null);
var factory_30846 = cljs.core.nth.call(null,vec__30800_30844,(1),null);
var canonical_f_30847 = (cljs.core.truth_(selector_30817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30816,selector_30817):cljs.core.identity).call(null,factory_30846.call(null,f_30824));
dommy.core.update_event_listeners_BANG_.call(null,elem_30816,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30817,actual_type_30845,f_30824], null),canonical_f_30847);

if(cljs.core.truth_(elem_30816.addEventListener)){
elem_30816.addEventListener(cljs.core.name.call(null,actual_type_30845),canonical_f_30847);
} else {
elem_30816.attachEvent(cljs.core.name.call(null,actual_type_30845),canonical_f_30847);
}


var G__30848 = cljs.core.next.call(null,seq__30788_30838__$1);
var G__30849 = null;
var G__30850 = (0);
var G__30851 = (0);
seq__30788_30825 = G__30848;
chunk__30790_30826 = G__30849;
count__30791_30827 = G__30850;
i__30792_30828 = G__30851;
continue;
}
} else {
}
}
break;
}

var G__30852 = seq__30778_30818;
var G__30853 = chunk__30785_30819;
var G__30854 = count__30786_30820;
var G__30855 = (i__30787_30821 + (1));
seq__30778_30818 = G__30852;
chunk__30785_30819 = G__30853;
count__30786_30820 = G__30854;
i__30787_30821 = G__30855;
continue;
} else {
var temp__5735__auto___30856 = cljs.core.seq.call(null,seq__30778_30818);
if(temp__5735__auto___30856){
var seq__30778_30857__$1 = temp__5735__auto___30856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30778_30857__$1)){
var c__4461__auto___30858 = cljs.core.chunk_first.call(null,seq__30778_30857__$1);
var G__30859 = cljs.core.chunk_rest.call(null,seq__30778_30857__$1);
var G__30860 = c__4461__auto___30858;
var G__30861 = cljs.core.count.call(null,c__4461__auto___30858);
var G__30862 = (0);
seq__30778_30818 = G__30859;
chunk__30785_30819 = G__30860;
count__30786_30820 = G__30861;
i__30787_30821 = G__30862;
continue;
} else {
var vec__30803_30863 = cljs.core.first.call(null,seq__30778_30857__$1);
var orig_type_30864 = cljs.core.nth.call(null,vec__30803_30863,(0),null);
var f_30865 = cljs.core.nth.call(null,vec__30803_30863,(1),null);
var seq__30779_30866 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30864,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_30864,cljs.core.identity])));
var chunk__30781_30867 = null;
var count__30782_30868 = (0);
var i__30783_30869 = (0);
while(true){
if((i__30783_30869 < count__30782_30868)){
var vec__30806_30870 = cljs.core._nth.call(null,chunk__30781_30867,i__30783_30869);
var actual_type_30871 = cljs.core.nth.call(null,vec__30806_30870,(0),null);
var factory_30872 = cljs.core.nth.call(null,vec__30806_30870,(1),null);
var canonical_f_30873 = (cljs.core.truth_(selector_30817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30816,selector_30817):cljs.core.identity).call(null,factory_30872.call(null,f_30865));
dommy.core.update_event_listeners_BANG_.call(null,elem_30816,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30817,actual_type_30871,f_30865], null),canonical_f_30873);

if(cljs.core.truth_(elem_30816.addEventListener)){
elem_30816.addEventListener(cljs.core.name.call(null,actual_type_30871),canonical_f_30873);
} else {
elem_30816.attachEvent(cljs.core.name.call(null,actual_type_30871),canonical_f_30873);
}


var G__30874 = seq__30779_30866;
var G__30875 = chunk__30781_30867;
var G__30876 = count__30782_30868;
var G__30877 = (i__30783_30869 + (1));
seq__30779_30866 = G__30874;
chunk__30781_30867 = G__30875;
count__30782_30868 = G__30876;
i__30783_30869 = G__30877;
continue;
} else {
var temp__5735__auto___30878__$1 = cljs.core.seq.call(null,seq__30779_30866);
if(temp__5735__auto___30878__$1){
var seq__30779_30879__$1 = temp__5735__auto___30878__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30779_30879__$1)){
var c__4461__auto___30880 = cljs.core.chunk_first.call(null,seq__30779_30879__$1);
var G__30881 = cljs.core.chunk_rest.call(null,seq__30779_30879__$1);
var G__30882 = c__4461__auto___30880;
var G__30883 = cljs.core.count.call(null,c__4461__auto___30880);
var G__30884 = (0);
seq__30779_30866 = G__30881;
chunk__30781_30867 = G__30882;
count__30782_30868 = G__30883;
i__30783_30869 = G__30884;
continue;
} else {
var vec__30809_30885 = cljs.core.first.call(null,seq__30779_30879__$1);
var actual_type_30886 = cljs.core.nth.call(null,vec__30809_30885,(0),null);
var factory_30887 = cljs.core.nth.call(null,vec__30809_30885,(1),null);
var canonical_f_30888 = (cljs.core.truth_(selector_30817)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30816,selector_30817):cljs.core.identity).call(null,factory_30887.call(null,f_30865));
dommy.core.update_event_listeners_BANG_.call(null,elem_30816,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30817,actual_type_30886,f_30865], null),canonical_f_30888);

if(cljs.core.truth_(elem_30816.addEventListener)){
elem_30816.addEventListener(cljs.core.name.call(null,actual_type_30886),canonical_f_30888);
} else {
elem_30816.attachEvent(cljs.core.name.call(null,actual_type_30886),canonical_f_30888);
}


var G__30889 = cljs.core.next.call(null,seq__30779_30879__$1);
var G__30890 = null;
var G__30891 = (0);
var G__30892 = (0);
seq__30779_30866 = G__30889;
chunk__30781_30867 = G__30890;
count__30782_30868 = G__30891;
i__30783_30869 = G__30892;
continue;
}
} else {
}
}
break;
}

var G__30893 = cljs.core.next.call(null,seq__30778_30857__$1);
var G__30894 = null;
var G__30895 = (0);
var G__30896 = (0);
seq__30778_30818 = G__30893;
chunk__30785_30819 = G__30894;
count__30786_30820 = G__30895;
i__30787_30821 = G__30896;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq30773){
var G__30774 = cljs.core.first.call(null,seq30773);
var seq30773__$1 = cljs.core.next.call(null,seq30773);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30774,seq30773__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30936 = arguments.length;
var i__4642__auto___30937 = (0);
while(true){
if((i__4642__auto___30937 < len__4641__auto___30936)){
args__4647__auto__.push((arguments[i__4642__auto___30937]));

var G__30938 = (i__4642__auto___30937 + (1));
i__4642__auto___30937 = G__30938;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__30899_30939 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_30940 = cljs.core.nth.call(null,vec__30899_30939,(0),null);
var selector_30941 = cljs.core.nth.call(null,vec__30899_30939,(1),null);
var seq__30902_30942 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__30909_30943 = null;
var count__30910_30944 = (0);
var i__30911_30945 = (0);
while(true){
if((i__30911_30945 < count__30910_30944)){
var vec__30918_30946 = cljs.core._nth.call(null,chunk__30909_30943,i__30911_30945);
var orig_type_30947 = cljs.core.nth.call(null,vec__30918_30946,(0),null);
var f_30948 = cljs.core.nth.call(null,vec__30918_30946,(1),null);
var seq__30912_30949 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30947,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_30947,cljs.core.identity])));
var chunk__30914_30950 = null;
var count__30915_30951 = (0);
var i__30916_30952 = (0);
while(true){
if((i__30916_30952 < count__30915_30951)){
var vec__30921_30953 = cljs.core._nth.call(null,chunk__30914_30950,i__30916_30952);
var actual_type_30954 = cljs.core.nth.call(null,vec__30921_30953,(0),null);
var __30955 = cljs.core.nth.call(null,vec__30921_30953,(1),null);
var keys_30956 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30941,actual_type_30954,f_30948], null);
var canonical_f_30957 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30940),keys_30956);
dommy.core.update_event_listeners_BANG_.call(null,elem_30940,dommy.utils.dissoc_in,keys_30956);

if(cljs.core.truth_(elem_30940.removeEventListener)){
elem_30940.removeEventListener(cljs.core.name.call(null,actual_type_30954),canonical_f_30957);
} else {
elem_30940.detachEvent(cljs.core.name.call(null,actual_type_30954),canonical_f_30957);
}


var G__30958 = seq__30912_30949;
var G__30959 = chunk__30914_30950;
var G__30960 = count__30915_30951;
var G__30961 = (i__30916_30952 + (1));
seq__30912_30949 = G__30958;
chunk__30914_30950 = G__30959;
count__30915_30951 = G__30960;
i__30916_30952 = G__30961;
continue;
} else {
var temp__5735__auto___30962 = cljs.core.seq.call(null,seq__30912_30949);
if(temp__5735__auto___30962){
var seq__30912_30963__$1 = temp__5735__auto___30962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30912_30963__$1)){
var c__4461__auto___30964 = cljs.core.chunk_first.call(null,seq__30912_30963__$1);
var G__30965 = cljs.core.chunk_rest.call(null,seq__30912_30963__$1);
var G__30966 = c__4461__auto___30964;
var G__30967 = cljs.core.count.call(null,c__4461__auto___30964);
var G__30968 = (0);
seq__30912_30949 = G__30965;
chunk__30914_30950 = G__30966;
count__30915_30951 = G__30967;
i__30916_30952 = G__30968;
continue;
} else {
var vec__30924_30969 = cljs.core.first.call(null,seq__30912_30963__$1);
var actual_type_30970 = cljs.core.nth.call(null,vec__30924_30969,(0),null);
var __30971 = cljs.core.nth.call(null,vec__30924_30969,(1),null);
var keys_30972 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30941,actual_type_30970,f_30948], null);
var canonical_f_30973 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30940),keys_30972);
dommy.core.update_event_listeners_BANG_.call(null,elem_30940,dommy.utils.dissoc_in,keys_30972);

if(cljs.core.truth_(elem_30940.removeEventListener)){
elem_30940.removeEventListener(cljs.core.name.call(null,actual_type_30970),canonical_f_30973);
} else {
elem_30940.detachEvent(cljs.core.name.call(null,actual_type_30970),canonical_f_30973);
}


var G__30974 = cljs.core.next.call(null,seq__30912_30963__$1);
var G__30975 = null;
var G__30976 = (0);
var G__30977 = (0);
seq__30912_30949 = G__30974;
chunk__30914_30950 = G__30975;
count__30915_30951 = G__30976;
i__30916_30952 = G__30977;
continue;
}
} else {
}
}
break;
}

var G__30978 = seq__30902_30942;
var G__30979 = chunk__30909_30943;
var G__30980 = count__30910_30944;
var G__30981 = (i__30911_30945 + (1));
seq__30902_30942 = G__30978;
chunk__30909_30943 = G__30979;
count__30910_30944 = G__30980;
i__30911_30945 = G__30981;
continue;
} else {
var temp__5735__auto___30982 = cljs.core.seq.call(null,seq__30902_30942);
if(temp__5735__auto___30982){
var seq__30902_30983__$1 = temp__5735__auto___30982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30902_30983__$1)){
var c__4461__auto___30984 = cljs.core.chunk_first.call(null,seq__30902_30983__$1);
var G__30985 = cljs.core.chunk_rest.call(null,seq__30902_30983__$1);
var G__30986 = c__4461__auto___30984;
var G__30987 = cljs.core.count.call(null,c__4461__auto___30984);
var G__30988 = (0);
seq__30902_30942 = G__30985;
chunk__30909_30943 = G__30986;
count__30910_30944 = G__30987;
i__30911_30945 = G__30988;
continue;
} else {
var vec__30927_30989 = cljs.core.first.call(null,seq__30902_30983__$1);
var orig_type_30990 = cljs.core.nth.call(null,vec__30927_30989,(0),null);
var f_30991 = cljs.core.nth.call(null,vec__30927_30989,(1),null);
var seq__30903_30992 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30990,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_30990,cljs.core.identity])));
var chunk__30905_30993 = null;
var count__30906_30994 = (0);
var i__30907_30995 = (0);
while(true){
if((i__30907_30995 < count__30906_30994)){
var vec__30930_30996 = cljs.core._nth.call(null,chunk__30905_30993,i__30907_30995);
var actual_type_30997 = cljs.core.nth.call(null,vec__30930_30996,(0),null);
var __30998 = cljs.core.nth.call(null,vec__30930_30996,(1),null);
var keys_30999 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30941,actual_type_30997,f_30991], null);
var canonical_f_31000 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30940),keys_30999);
dommy.core.update_event_listeners_BANG_.call(null,elem_30940,dommy.utils.dissoc_in,keys_30999);

if(cljs.core.truth_(elem_30940.removeEventListener)){
elem_30940.removeEventListener(cljs.core.name.call(null,actual_type_30997),canonical_f_31000);
} else {
elem_30940.detachEvent(cljs.core.name.call(null,actual_type_30997),canonical_f_31000);
}


var G__31001 = seq__30903_30992;
var G__31002 = chunk__30905_30993;
var G__31003 = count__30906_30994;
var G__31004 = (i__30907_30995 + (1));
seq__30903_30992 = G__31001;
chunk__30905_30993 = G__31002;
count__30906_30994 = G__31003;
i__30907_30995 = G__31004;
continue;
} else {
var temp__5735__auto___31005__$1 = cljs.core.seq.call(null,seq__30903_30992);
if(temp__5735__auto___31005__$1){
var seq__30903_31006__$1 = temp__5735__auto___31005__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30903_31006__$1)){
var c__4461__auto___31007 = cljs.core.chunk_first.call(null,seq__30903_31006__$1);
var G__31008 = cljs.core.chunk_rest.call(null,seq__30903_31006__$1);
var G__31009 = c__4461__auto___31007;
var G__31010 = cljs.core.count.call(null,c__4461__auto___31007);
var G__31011 = (0);
seq__30903_30992 = G__31008;
chunk__30905_30993 = G__31009;
count__30906_30994 = G__31010;
i__30907_30995 = G__31011;
continue;
} else {
var vec__30933_31012 = cljs.core.first.call(null,seq__30903_31006__$1);
var actual_type_31013 = cljs.core.nth.call(null,vec__30933_31012,(0),null);
var __31014 = cljs.core.nth.call(null,vec__30933_31012,(1),null);
var keys_31015 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30941,actual_type_31013,f_30991], null);
var canonical_f_31016 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30940),keys_31015);
dommy.core.update_event_listeners_BANG_.call(null,elem_30940,dommy.utils.dissoc_in,keys_31015);

if(cljs.core.truth_(elem_30940.removeEventListener)){
elem_30940.removeEventListener(cljs.core.name.call(null,actual_type_31013),canonical_f_31016);
} else {
elem_30940.detachEvent(cljs.core.name.call(null,actual_type_31013),canonical_f_31016);
}


var G__31017 = cljs.core.next.call(null,seq__30903_31006__$1);
var G__31018 = null;
var G__31019 = (0);
var G__31020 = (0);
seq__30903_30992 = G__31017;
chunk__30905_30993 = G__31018;
count__30906_30994 = G__31019;
i__30907_30995 = G__31020;
continue;
}
} else {
}
}
break;
}

var G__31021 = cljs.core.next.call(null,seq__30902_30983__$1);
var G__31022 = null;
var G__31023 = (0);
var G__31024 = (0);
seq__30902_30942 = G__31021;
chunk__30909_30943 = G__31022;
count__30910_30944 = G__31023;
i__30911_30945 = G__31024;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq30897){
var G__30898 = cljs.core.first.call(null,seq30897);
var seq30897__$1 = cljs.core.next.call(null,seq30897);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30898,seq30897__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31040 = arguments.length;
var i__4642__auto___31041 = (0);
while(true){
if((i__4642__auto___31041 < len__4641__auto___31040)){
args__4647__auto__.push((arguments[i__4642__auto___31041]));

var G__31042 = (i__4642__auto___31041 + (1));
i__4642__auto___31041 = G__31042;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__31027_31043 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_31044 = cljs.core.nth.call(null,vec__31027_31043,(0),null);
var selector_31045 = cljs.core.nth.call(null,vec__31027_31043,(1),null);
var seq__31030_31046 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__31031_31047 = null;
var count__31032_31048 = (0);
var i__31033_31049 = (0);
while(true){
if((i__31033_31049 < count__31032_31048)){
var vec__31034_31050 = cljs.core._nth.call(null,chunk__31031_31047,i__31033_31049);
var type_31051 = cljs.core.nth.call(null,vec__31034_31050,(0),null);
var f_31052 = cljs.core.nth.call(null,vec__31034_31050,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_31051,((function (seq__31030_31046,chunk__31031_31047,count__31032_31048,i__31033_31049,vec__31034_31050,type_31051,f_31052,vec__31027_31043,elem_31044,selector_31045){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_31051,dommy$core$this_fn);

return f_31052.call(null,e);
});})(seq__31030_31046,chunk__31031_31047,count__31032_31048,i__31033_31049,vec__31034_31050,type_31051,f_31052,vec__31027_31043,elem_31044,selector_31045))
);


var G__31053 = seq__31030_31046;
var G__31054 = chunk__31031_31047;
var G__31055 = count__31032_31048;
var G__31056 = (i__31033_31049 + (1));
seq__31030_31046 = G__31053;
chunk__31031_31047 = G__31054;
count__31032_31048 = G__31055;
i__31033_31049 = G__31056;
continue;
} else {
var temp__5735__auto___31057 = cljs.core.seq.call(null,seq__31030_31046);
if(temp__5735__auto___31057){
var seq__31030_31058__$1 = temp__5735__auto___31057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31030_31058__$1)){
var c__4461__auto___31059 = cljs.core.chunk_first.call(null,seq__31030_31058__$1);
var G__31060 = cljs.core.chunk_rest.call(null,seq__31030_31058__$1);
var G__31061 = c__4461__auto___31059;
var G__31062 = cljs.core.count.call(null,c__4461__auto___31059);
var G__31063 = (0);
seq__31030_31046 = G__31060;
chunk__31031_31047 = G__31061;
count__31032_31048 = G__31062;
i__31033_31049 = G__31063;
continue;
} else {
var vec__31037_31064 = cljs.core.first.call(null,seq__31030_31058__$1);
var type_31065 = cljs.core.nth.call(null,vec__31037_31064,(0),null);
var f_31066 = cljs.core.nth.call(null,vec__31037_31064,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_31065,((function (seq__31030_31046,chunk__31031_31047,count__31032_31048,i__31033_31049,vec__31037_31064,type_31065,f_31066,seq__31030_31058__$1,temp__5735__auto___31057,vec__31027_31043,elem_31044,selector_31045){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_31065,dommy$core$this_fn);

return f_31066.call(null,e);
});})(seq__31030_31046,chunk__31031_31047,count__31032_31048,i__31033_31049,vec__31037_31064,type_31065,f_31066,seq__31030_31058__$1,temp__5735__auto___31057,vec__31027_31043,elem_31044,selector_31045))
);


var G__31067 = cljs.core.next.call(null,seq__31030_31058__$1);
var G__31068 = null;
var G__31069 = (0);
var G__31070 = (0);
seq__31030_31046 = G__31067;
chunk__31031_31047 = G__31068;
count__31032_31048 = G__31069;
i__31033_31049 = G__31070;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq31025){
var G__31026 = cljs.core.first.call(null,seq31025);
var seq31025__$1 = cljs.core.next.call(null,seq31025);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31026,seq31025__$1);
});


//# sourceMappingURL=core.js.map?rel=1590531130406
