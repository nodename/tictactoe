// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28927__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28928__i = 0, G__28928__a = new Array(arguments.length -  0);
while (G__28928__i < G__28928__a.length) {G__28928__a[G__28928__i] = arguments[G__28928__i + 0]; ++G__28928__i;}
  args = new cljs.core.IndexedSeq(G__28928__a,0,null);
} 
return G__28927__delegate.call(this,args);};
G__28927.cljs$lang$maxFixedArity = 0;
G__28927.cljs$lang$applyTo = (function (arglist__28929){
var args = cljs.core.seq(arglist__28929);
return G__28927__delegate(args);
});
G__28927.cljs$core$IFn$_invoke$arity$variadic = G__28927__delegate;
return G__28927;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28930__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28931__i = 0, G__28931__a = new Array(arguments.length -  0);
while (G__28931__i < G__28931__a.length) {G__28931__a[G__28931__i] = arguments[G__28931__i + 0]; ++G__28931__i;}
  args = new cljs.core.IndexedSeq(G__28931__a,0,null);
} 
return G__28930__delegate.call(this,args);};
G__28930.cljs$lang$maxFixedArity = 0;
G__28930.cljs$lang$applyTo = (function (arglist__28932){
var args = cljs.core.seq(arglist__28932);
return G__28930__delegate(args);
});
G__28930.cljs$core$IFn$_invoke$arity$variadic = G__28930__delegate;
return G__28930;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1590529164839
