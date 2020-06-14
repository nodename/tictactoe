// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__41532__delegate = function (x__41516__auto__){
if(cljs.core.truth_(tictactoe.core.mount_root)){
return cljs.core.apply.call(null,tictactoe.core.mount_root,x__41516__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("tictactoe.core/mount-root"),"' is missing"].join(''));
}
};
var G__41532 = function (var_args){
var x__41516__auto__ = null;
if (arguments.length > 0) {
var G__41533__i = 0, G__41533__a = new Array(arguments.length -  0);
while (G__41533__i < G__41533__a.length) {G__41533__a[G__41533__i] = arguments[G__41533__i + 0]; ++G__41533__i;}
  x__41516__auto__ = new cljs.core.IndexedSeq(G__41533__a,0,null);
} 
return G__41532__delegate.call(this,x__41516__auto__);};
G__41532.cljs$lang$maxFixedArity = 0;
G__41532.cljs$lang$applyTo = (function (arglist__41534){
var x__41516__auto__ = cljs.core.seq(arglist__41534);
return G__41532__delegate(x__41516__auto__);
});
G__41532.cljs$core$IFn$_invoke$arity$variadic = G__41532__delegate;
return G__41532;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1590529178678
