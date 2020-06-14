// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__29921_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__29921_SHARP_));
});
if((!(re_frame.interop.debug_enabled_QMARK_))){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__5735__auto___29922 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5735__auto___29922)){
var not_i_29923 = temp__5735__auto___29922;
if(cljs.core.fn_QMARK_.call(null,not_i_29923)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_29923);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_29923);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__5733__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5733__auto__)){
var interceptors = temp__5733__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR__orig_val__29924 = re_frame.events._STAR_handling_STAR_;
var _STAR_handling_STAR__temp_val__29925 = event_v;
re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__temp_val__29925;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__29926 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__29927 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__29927;

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__29869__auto___29940 = re_frame.interop.now.call(null);
var duration__29870__auto___29941 = (end__29869__auto___29940 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__29928_29942 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__29929_29943 = null;
var count__29930_29944 = (0);
var i__29931_29945 = (0);
while(true){
if((i__29931_29945 < count__29930_29944)){
var vec__29932_29946 = cljs.core._nth.call(null,chunk__29929_29943,i__29931_29945);
var k__29871__auto___29947 = cljs.core.nth.call(null,vec__29932_29946,(0),null);
var cb__29872__auto___29948 = cljs.core.nth.call(null,vec__29932_29946,(1),null);
try{cb__29872__auto___29948.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29870__auto___29941,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e29935){if((e29935 instanceof java.lang.Exception)){
var e__29873__auto___29949 = e29935;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29871__auto___29947,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29873__auto___29949);
} else {
throw e29935;

}
}

var G__29950 = seq__29928_29942;
var G__29951 = chunk__29929_29943;
var G__29952 = count__29930_29944;
var G__29953 = (i__29931_29945 + (1));
seq__29928_29942 = G__29950;
chunk__29929_29943 = G__29951;
count__29930_29944 = G__29952;
i__29931_29945 = G__29953;
continue;
} else {
var temp__5735__auto___29954 = cljs.core.seq.call(null,seq__29928_29942);
if(temp__5735__auto___29954){
var seq__29928_29955__$1 = temp__5735__auto___29954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29928_29955__$1)){
var c__4461__auto___29956 = cljs.core.chunk_first.call(null,seq__29928_29955__$1);
var G__29957 = cljs.core.chunk_rest.call(null,seq__29928_29955__$1);
var G__29958 = c__4461__auto___29956;
var G__29959 = cljs.core.count.call(null,c__4461__auto___29956);
var G__29960 = (0);
seq__29928_29942 = G__29957;
chunk__29929_29943 = G__29958;
count__29930_29944 = G__29959;
i__29931_29945 = G__29960;
continue;
} else {
var vec__29936_29961 = cljs.core.first.call(null,seq__29928_29955__$1);
var k__29871__auto___29962 = cljs.core.nth.call(null,vec__29936_29961,(0),null);
var cb__29872__auto___29963 = cljs.core.nth.call(null,vec__29936_29961,(1),null);
try{cb__29872__auto___29963.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29870__auto___29941,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e29939){if((e29939 instanceof java.lang.Exception)){
var e__29873__auto___29964 = e29939;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29871__auto___29962,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__29873__auto___29964);
} else {
throw e29939;

}
}

var G__29965 = cljs.core.next.call(null,seq__29928_29955__$1);
var G__29966 = null;
var G__29967 = (0);
var G__29968 = (0);
seq__29928_29942 = G__29965;
chunk__29929_29943 = G__29966;
count__29930_29944 = G__29967;
i__29931_29945 = G__29968;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__29926;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR__orig_val__29924;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1590529166223
