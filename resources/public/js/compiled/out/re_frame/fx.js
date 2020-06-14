// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__30044 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__30045 = null;
var count__30046 = (0);
var i__30047 = (0);
while(true){
if((i__30047 < count__30046)){
var vec__30048 = cljs.core._nth.call(null,chunk__30045,i__30047);
var effect_key = cljs.core.nth.call(null,vec__30048,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30048,(1),null);
var temp__5733__auto___30054 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30054)){
var effect_fn_30055 = temp__5733__auto___30054;
effect_fn_30055.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__30056 = seq__30044;
var G__30057 = chunk__30045;
var G__30058 = count__30046;
var G__30059 = (i__30047 + (1));
seq__30044 = G__30056;
chunk__30045 = G__30057;
count__30046 = G__30058;
i__30047 = G__30059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30044);
if(temp__5735__auto__){
var seq__30044__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30044__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30044__$1);
var G__30060 = cljs.core.chunk_rest.call(null,seq__30044__$1);
var G__30061 = c__4461__auto__;
var G__30062 = cljs.core.count.call(null,c__4461__auto__);
var G__30063 = (0);
seq__30044 = G__30060;
chunk__30045 = G__30061;
count__30046 = G__30062;
i__30047 = G__30063;
continue;
} else {
var vec__30051 = cljs.core.first.call(null,seq__30044__$1);
var effect_key = cljs.core.nth.call(null,vec__30051,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30051,(1),null);
var temp__5733__auto___30064 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30064)){
var effect_fn_30065 = temp__5733__auto___30064;
effect_fn_30065.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__30066 = cljs.core.next.call(null,seq__30044__$1);
var G__30067 = null;
var G__30068 = (0);
var G__30069 = (0);
seq__30044 = G__30066;
chunk__30045 = G__30067;
count__30046 = G__30068;
i__30047 = G__30069;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__30070 = cljs.core.seq.call(null,value);
var chunk__30071 = null;
var count__30072 = (0);
var i__30073 = (0);
while(true){
if((i__30073 < count__30072)){
var map__30074 = cljs.core._nth.call(null,chunk__30071,i__30073);
var map__30074__$1 = (((((!((map__30074 == null))))?(((((map__30074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30074):map__30074);
var effect = map__30074__$1;
var ms = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30070,chunk__30071,count__30072,i__30073,map__30074,map__30074__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30070,chunk__30071,count__30072,i__30073,map__30074,map__30074__$1,effect,ms,dispatch))
,ms);
}


var G__30078 = seq__30070;
var G__30079 = chunk__30071;
var G__30080 = count__30072;
var G__30081 = (i__30073 + (1));
seq__30070 = G__30078;
chunk__30071 = G__30079;
count__30072 = G__30080;
i__30073 = G__30081;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30070);
if(temp__5735__auto__){
var seq__30070__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30070__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30070__$1);
var G__30082 = cljs.core.chunk_rest.call(null,seq__30070__$1);
var G__30083 = c__4461__auto__;
var G__30084 = cljs.core.count.call(null,c__4461__auto__);
var G__30085 = (0);
seq__30070 = G__30082;
chunk__30071 = G__30083;
count__30072 = G__30084;
i__30073 = G__30085;
continue;
} else {
var map__30076 = cljs.core.first.call(null,seq__30070__$1);
var map__30076__$1 = (((((!((map__30076 == null))))?(((((map__30076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30076):map__30076);
var effect = map__30076__$1;
var ms = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30076__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30070,chunk__30071,count__30072,i__30073,map__30076,map__30076__$1,effect,ms,dispatch,seq__30070__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30070,chunk__30071,count__30072,i__30073,map__30076,map__30076__$1,effect,ms,dispatch,seq__30070__$1,temp__5735__auto__))
,ms);
}


var G__30086 = cljs.core.next.call(null,seq__30070__$1);
var G__30087 = null;
var G__30088 = (0);
var G__30089 = (0);
seq__30070 = G__30086;
chunk__30071 = G__30087;
count__30072 = G__30088;
i__30073 = G__30089;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__30090 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__30091 = null;
var count__30092 = (0);
var i__30093 = (0);
while(true){
if((i__30093 < count__30092)){
var event = cljs.core._nth.call(null,chunk__30091,i__30093);
re_frame.router.dispatch.call(null,event);


var G__30094 = seq__30090;
var G__30095 = chunk__30091;
var G__30096 = count__30092;
var G__30097 = (i__30093 + (1));
seq__30090 = G__30094;
chunk__30091 = G__30095;
count__30092 = G__30096;
i__30093 = G__30097;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30090);
if(temp__5735__auto__){
var seq__30090__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30090__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30090__$1);
var G__30098 = cljs.core.chunk_rest.call(null,seq__30090__$1);
var G__30099 = c__4461__auto__;
var G__30100 = cljs.core.count.call(null,c__4461__auto__);
var G__30101 = (0);
seq__30090 = G__30098;
chunk__30091 = G__30099;
count__30092 = G__30100;
i__30093 = G__30101;
continue;
} else {
var event = cljs.core.first.call(null,seq__30090__$1);
re_frame.router.dispatch.call(null,event);


var G__30102 = cljs.core.next.call(null,seq__30090__$1);
var G__30103 = null;
var G__30104 = (0);
var G__30105 = (0);
seq__30090 = G__30102;
chunk__30091 = G__30103;
count__30092 = G__30104;
i__30093 = G__30105;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__30106 = cljs.core.seq.call(null,value);
var chunk__30107 = null;
var count__30108 = (0);
var i__30109 = (0);
while(true){
if((i__30109 < count__30108)){
var event = cljs.core._nth.call(null,chunk__30107,i__30109);
clear_event.call(null,event);


var G__30110 = seq__30106;
var G__30111 = chunk__30107;
var G__30112 = count__30108;
var G__30113 = (i__30109 + (1));
seq__30106 = G__30110;
chunk__30107 = G__30111;
count__30108 = G__30112;
i__30109 = G__30113;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30106);
if(temp__5735__auto__){
var seq__30106__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30106__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__30106__$1);
var G__30114 = cljs.core.chunk_rest.call(null,seq__30106__$1);
var G__30115 = c__4461__auto__;
var G__30116 = cljs.core.count.call(null,c__4461__auto__);
var G__30117 = (0);
seq__30106 = G__30114;
chunk__30107 = G__30115;
count__30108 = G__30116;
i__30109 = G__30117;
continue;
} else {
var event = cljs.core.first.call(null,seq__30106__$1);
clear_event.call(null,event);


var G__30118 = cljs.core.next.call(null,seq__30106__$1);
var G__30119 = null;
var G__30120 = (0);
var G__30121 = (0);
seq__30106 = G__30118;
chunk__30107 = G__30119;
count__30108 = G__30120;
i__30109 = G__30121;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1590529166354
