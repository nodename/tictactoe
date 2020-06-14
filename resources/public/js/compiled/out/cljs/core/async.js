// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35964 = arguments.length;
switch (G__35964) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35965 = (function (f,blockable,meta35966){
this.f = f;
this.blockable = blockable;
this.meta35966 = meta35966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35967,meta35966__$1){
var self__ = this;
var _35967__$1 = this;
return (new cljs.core.async.t_cljs$core$async35965(self__.f,self__.blockable,meta35966__$1));
});

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35967){
var self__ = this;
var _35967__$1 = this;
return self__.meta35966;
});

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35965.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35966","meta35966",-203222394,null)], null);
});

cljs.core.async.t_cljs$core$async35965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35965";

cljs.core.async.t_cljs$core$async35965.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async35965");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35965.
 */
cljs.core.async.__GT_t_cljs$core$async35965 = (function cljs$core$async$__GT_t_cljs$core$async35965(f__$1,blockable__$1,meta35966){
return (new cljs.core.async.t_cljs$core$async35965(f__$1,blockable__$1,meta35966));
});

}

return (new cljs.core.async.t_cljs$core$async35965(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__35971 = arguments.length;
switch (G__35971) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35974 = arguments.length;
switch (G__35974) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__35977 = arguments.length;
switch (G__35977) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35979 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35979);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35979,ret){
return (function (){
return fn1.call(null,val_35979);
});})(val_35979,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35981 = arguments.length;
switch (G__35981) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___35983 = n;
var x_35984 = (0);
while(true){
if((x_35984 < n__4518__auto___35983)){
(a[x_35984] = (0));

var G__35985 = (x_35984 + (1));
x_35984 = G__35985;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35986 = (i + (1));
i = G__35986;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35987 = (function (flag,meta35988){
this.flag = flag;
this.meta35988 = meta35988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35989,meta35988__$1){
var self__ = this;
var _35989__$1 = this;
return (new cljs.core.async.t_cljs$core$async35987(self__.flag,meta35988__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35989){
var self__ = this;
var _35989__$1 = this;
return self__.meta35988;
});})(flag))
;

cljs.core.async.t_cljs$core$async35987.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35987.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35987.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35988","meta35988",1745650911,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35987";

cljs.core.async.t_cljs$core$async35987.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async35987");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35987.
 */
cljs.core.async.__GT_t_cljs$core$async35987 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35987(flag__$1,meta35988){
return (new cljs.core.async.t_cljs$core$async35987(flag__$1,meta35988));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35987(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35990 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35990 = (function (flag,cb,meta35991){
this.flag = flag;
this.cb = cb;
this.meta35991 = meta35991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35992,meta35991__$1){
var self__ = this;
var _35992__$1 = this;
return (new cljs.core.async.t_cljs$core$async35990(self__.flag,self__.cb,meta35991__$1));
});

cljs.core.async.t_cljs$core$async35990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35992){
var self__ = this;
var _35992__$1 = this;
return self__.meta35991;
});

cljs.core.async.t_cljs$core$async35990.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35990.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35991","meta35991",1900033717,null)], null);
});

cljs.core.async.t_cljs$core$async35990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35990";

cljs.core.async.t_cljs$core$async35990.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async35990");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35990.
 */
cljs.core.async.__GT_t_cljs$core$async35990 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35990(flag__$1,cb__$1,meta35991){
return (new cljs.core.async.t_cljs$core$async35990(flag__$1,cb__$1,meta35991));
});

}

return (new cljs.core.async.t_cljs$core$async35990(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35993_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35993_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35994_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35994_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35995 = (i + (1));
i = G__35995;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36001 = arguments.length;
var i__4642__auto___36002 = (0);
while(true){
if((i__4642__auto___36002 < len__4641__auto___36001)){
args__4647__auto__.push((arguments[i__4642__auto___36002]));

var G__36003 = (i__4642__auto___36002 + (1));
i__4642__auto___36002 = G__36003;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35998){
var map__35999 = p__35998;
var map__35999__$1 = (((((!((map__35999 == null))))?(((((map__35999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35999):map__35999);
var opts = map__35999__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35996){
var G__35997 = cljs.core.first.call(null,seq35996);
var seq35996__$1 = cljs.core.next.call(null,seq35996);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35997,seq35996__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36005 = arguments.length;
switch (G__36005) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35904__auto___36051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___36051){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___36051){
return (function (state_36029){
var state_val_36030 = (state_36029[(1)]);
if((state_val_36030 === (7))){
var inst_36025 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36031_36052 = state_36029__$1;
(statearr_36031_36052[(2)] = inst_36025);

(statearr_36031_36052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (1))){
var state_36029__$1 = state_36029;
var statearr_36032_36053 = state_36029__$1;
(statearr_36032_36053[(2)] = null);

(statearr_36032_36053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (4))){
var inst_36008 = (state_36029[(7)]);
var inst_36008__$1 = (state_36029[(2)]);
var inst_36009 = (inst_36008__$1 == null);
var state_36029__$1 = (function (){var statearr_36033 = state_36029;
(statearr_36033[(7)] = inst_36008__$1);

return statearr_36033;
})();
if(cljs.core.truth_(inst_36009)){
var statearr_36034_36054 = state_36029__$1;
(statearr_36034_36054[(1)] = (5));

} else {
var statearr_36035_36055 = state_36029__$1;
(statearr_36035_36055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (13))){
var state_36029__$1 = state_36029;
var statearr_36036_36056 = state_36029__$1;
(statearr_36036_36056[(2)] = null);

(statearr_36036_36056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (6))){
var inst_36008 = (state_36029[(7)]);
var state_36029__$1 = state_36029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36029__$1,(11),to,inst_36008);
} else {
if((state_val_36030 === (3))){
var inst_36027 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36029__$1,inst_36027);
} else {
if((state_val_36030 === (12))){
var state_36029__$1 = state_36029;
var statearr_36037_36057 = state_36029__$1;
(statearr_36037_36057[(2)] = null);

(statearr_36037_36057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (2))){
var state_36029__$1 = state_36029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36029__$1,(4),from);
} else {
if((state_val_36030 === (11))){
var inst_36018 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
if(cljs.core.truth_(inst_36018)){
var statearr_36038_36058 = state_36029__$1;
(statearr_36038_36058[(1)] = (12));

} else {
var statearr_36039_36059 = state_36029__$1;
(statearr_36039_36059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (9))){
var state_36029__$1 = state_36029;
var statearr_36040_36060 = state_36029__$1;
(statearr_36040_36060[(2)] = null);

(statearr_36040_36060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (5))){
var state_36029__$1 = state_36029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36041_36061 = state_36029__$1;
(statearr_36041_36061[(1)] = (8));

} else {
var statearr_36042_36062 = state_36029__$1;
(statearr_36042_36062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (14))){
var inst_36023 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36043_36063 = state_36029__$1;
(statearr_36043_36063[(2)] = inst_36023);

(statearr_36043_36063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (10))){
var inst_36015 = (state_36029[(2)]);
var state_36029__$1 = state_36029;
var statearr_36044_36064 = state_36029__$1;
(statearr_36044_36064[(2)] = inst_36015);

(statearr_36044_36064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36030 === (8))){
var inst_36012 = cljs.core.async.close_BANG_.call(null,to);
var state_36029__$1 = state_36029;
var statearr_36045_36065 = state_36029__$1;
(statearr_36045_36065[(2)] = inst_36012);

(statearr_36045_36065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___36051))
;
return ((function (switch__35809__auto__,c__35904__auto___36051){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_36046 = [null,null,null,null,null,null,null,null];
(statearr_36046[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_36046[(1)] = (1));

return statearr_36046;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_36029){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36047){if((e36047 instanceof Object)){
var ex__35813__auto__ = e36047;
var statearr_36048_36066 = state_36029;
(statearr_36048_36066[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36067 = state_36029;
state_36029 = G__36067;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_36029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_36029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___36051))
})();
var state__35906__auto__ = (function (){var statearr_36049 = f__35905__auto__.call(null);
(statearr_36049[(6)] = c__35904__auto___36051);

return statearr_36049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___36051))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36068){
var vec__36069 = p__36068;
var v = cljs.core.nth.call(null,vec__36069,(0),null);
var p = cljs.core.nth.call(null,vec__36069,(1),null);
var job = vec__36069;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35904__auto___36240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___36240,res,vec__36069,v,p,job,jobs,results){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___36240,res,vec__36069,v,p,job,jobs,results){
return (function (state_36076){
var state_val_36077 = (state_36076[(1)]);
if((state_val_36077 === (1))){
var state_36076__$1 = state_36076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36076__$1,(2),res,v);
} else {
if((state_val_36077 === (2))){
var inst_36073 = (state_36076[(2)]);
var inst_36074 = cljs.core.async.close_BANG_.call(null,res);
var state_36076__$1 = (function (){var statearr_36078 = state_36076;
(statearr_36078[(7)] = inst_36073);

return statearr_36078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36076__$1,inst_36074);
} else {
return null;
}
}
});})(c__35904__auto___36240,res,vec__36069,v,p,job,jobs,results))
;
return ((function (switch__35809__auto__,c__35904__auto___36240,res,vec__36069,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0 = (function (){
var statearr_36079 = [null,null,null,null,null,null,null,null];
(statearr_36079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__);

(statearr_36079[(1)] = (1));

return statearr_36079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1 = (function (state_36076){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36080){if((e36080 instanceof Object)){
var ex__35813__auto__ = e36080;
var statearr_36081_36241 = state_36076;
(statearr_36081_36241[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36242 = state_36076;
state_36076 = G__36242;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__ = function(state_36076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1.call(this,state_36076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___36240,res,vec__36069,v,p,job,jobs,results))
})();
var state__35906__auto__ = (function (){var statearr_36082 = f__35905__auto__.call(null);
(statearr_36082[(6)] = c__35904__auto___36240);

return statearr_36082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___36240,res,vec__36069,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36083){
var vec__36084 = p__36083;
var v = cljs.core.nth.call(null,vec__36084,(0),null);
var p = cljs.core.nth.call(null,vec__36084,(1),null);
var job = vec__36084;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___36243 = n;
var __36244 = (0);
while(true){
if((__36244 < n__4518__auto___36243)){
var G__36087_36245 = type;
var G__36087_36246__$1 = (((G__36087_36245 instanceof cljs.core.Keyword))?G__36087_36245.fqn:null);
switch (G__36087_36246__$1) {
case "compute":
var c__35904__auto___36248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36244,c__35904__auto___36248,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (__36244,c__35904__auto___36248,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async){
return (function (state_36100){
var state_val_36101 = (state_36100[(1)]);
if((state_val_36101 === (1))){
var state_36100__$1 = state_36100;
var statearr_36102_36249 = state_36100__$1;
(statearr_36102_36249[(2)] = null);

(statearr_36102_36249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (2))){
var state_36100__$1 = state_36100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36100__$1,(4),jobs);
} else {
if((state_val_36101 === (3))){
var inst_36098 = (state_36100[(2)]);
var state_36100__$1 = state_36100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36100__$1,inst_36098);
} else {
if((state_val_36101 === (4))){
var inst_36090 = (state_36100[(2)]);
var inst_36091 = process.call(null,inst_36090);
var state_36100__$1 = state_36100;
if(cljs.core.truth_(inst_36091)){
var statearr_36103_36250 = state_36100__$1;
(statearr_36103_36250[(1)] = (5));

} else {
var statearr_36104_36251 = state_36100__$1;
(statearr_36104_36251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (5))){
var state_36100__$1 = state_36100;
var statearr_36105_36252 = state_36100__$1;
(statearr_36105_36252[(2)] = null);

(statearr_36105_36252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (6))){
var state_36100__$1 = state_36100;
var statearr_36106_36253 = state_36100__$1;
(statearr_36106_36253[(2)] = null);

(statearr_36106_36253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36101 === (7))){
var inst_36096 = (state_36100[(2)]);
var state_36100__$1 = state_36100;
var statearr_36107_36254 = state_36100__$1;
(statearr_36107_36254[(2)] = inst_36096);

(statearr_36107_36254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36244,c__35904__auto___36248,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async))
;
return ((function (__36244,switch__35809__auto__,c__35904__auto___36248,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0 = (function (){
var statearr_36108 = [null,null,null,null,null,null,null];
(statearr_36108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__);

(statearr_36108[(1)] = (1));

return statearr_36108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1 = (function (state_36100){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36109){if((e36109 instanceof Object)){
var ex__35813__auto__ = e36109;
var statearr_36110_36255 = state_36100;
(statearr_36110_36255[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36256 = state_36100;
state_36100 = G__36256;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__ = function(state_36100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1.call(this,state_36100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__;
})()
;})(__36244,switch__35809__auto__,c__35904__auto___36248,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async))
})();
var state__35906__auto__ = (function (){var statearr_36111 = f__35905__auto__.call(null);
(statearr_36111[(6)] = c__35904__auto___36248);

return statearr_36111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(__36244,c__35904__auto___36248,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async))
);


break;
case "async":
var c__35904__auto___36257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36244,c__35904__auto___36257,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (__36244,c__35904__auto___36257,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async){
return (function (state_36124){
var state_val_36125 = (state_36124[(1)]);
if((state_val_36125 === (1))){
var state_36124__$1 = state_36124;
var statearr_36126_36258 = state_36124__$1;
(statearr_36126_36258[(2)] = null);

(statearr_36126_36258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (2))){
var state_36124__$1 = state_36124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36124__$1,(4),jobs);
} else {
if((state_val_36125 === (3))){
var inst_36122 = (state_36124[(2)]);
var state_36124__$1 = state_36124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36124__$1,inst_36122);
} else {
if((state_val_36125 === (4))){
var inst_36114 = (state_36124[(2)]);
var inst_36115 = async.call(null,inst_36114);
var state_36124__$1 = state_36124;
if(cljs.core.truth_(inst_36115)){
var statearr_36127_36259 = state_36124__$1;
(statearr_36127_36259[(1)] = (5));

} else {
var statearr_36128_36260 = state_36124__$1;
(statearr_36128_36260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (5))){
var state_36124__$1 = state_36124;
var statearr_36129_36261 = state_36124__$1;
(statearr_36129_36261[(2)] = null);

(statearr_36129_36261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (6))){
var state_36124__$1 = state_36124;
var statearr_36130_36262 = state_36124__$1;
(statearr_36130_36262[(2)] = null);

(statearr_36130_36262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36125 === (7))){
var inst_36120 = (state_36124[(2)]);
var state_36124__$1 = state_36124;
var statearr_36131_36263 = state_36124__$1;
(statearr_36131_36263[(2)] = inst_36120);

(statearr_36131_36263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36244,c__35904__auto___36257,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async))
;
return ((function (__36244,switch__35809__auto__,c__35904__auto___36257,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0 = (function (){
var statearr_36132 = [null,null,null,null,null,null,null];
(statearr_36132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__);

(statearr_36132[(1)] = (1));

return statearr_36132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1 = (function (state_36124){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36133){if((e36133 instanceof Object)){
var ex__35813__auto__ = e36133;
var statearr_36134_36264 = state_36124;
(statearr_36134_36264[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36265 = state_36124;
state_36124 = G__36265;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__ = function(state_36124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1.call(this,state_36124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__;
})()
;})(__36244,switch__35809__auto__,c__35904__auto___36257,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async))
})();
var state__35906__auto__ = (function (){var statearr_36135 = f__35905__auto__.call(null);
(statearr_36135[(6)] = c__35904__auto___36257);

return statearr_36135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(__36244,c__35904__auto___36257,G__36087_36245,G__36087_36246__$1,n__4518__auto___36243,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36087_36246__$1)].join('')));

}

var G__36266 = (__36244 + (1));
__36244 = G__36266;
continue;
} else {
}
break;
}

var c__35904__auto___36267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___36267,jobs,results,process,async){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___36267,jobs,results,process,async){
return (function (state_36157){
var state_val_36158 = (state_36157[(1)]);
if((state_val_36158 === (7))){
var inst_36153 = (state_36157[(2)]);
var state_36157__$1 = state_36157;
var statearr_36159_36268 = state_36157__$1;
(statearr_36159_36268[(2)] = inst_36153);

(statearr_36159_36268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36158 === (1))){
var state_36157__$1 = state_36157;
var statearr_36160_36269 = state_36157__$1;
(statearr_36160_36269[(2)] = null);

(statearr_36160_36269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36158 === (4))){
var inst_36138 = (state_36157[(7)]);
var inst_36138__$1 = (state_36157[(2)]);
var inst_36139 = (inst_36138__$1 == null);
var state_36157__$1 = (function (){var statearr_36161 = state_36157;
(statearr_36161[(7)] = inst_36138__$1);

return statearr_36161;
})();
if(cljs.core.truth_(inst_36139)){
var statearr_36162_36270 = state_36157__$1;
(statearr_36162_36270[(1)] = (5));

} else {
var statearr_36163_36271 = state_36157__$1;
(statearr_36163_36271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36158 === (6))){
var inst_36138 = (state_36157[(7)]);
var inst_36143 = (state_36157[(8)]);
var inst_36143__$1 = cljs.core.async.chan.call(null,(1));
var inst_36144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36145 = [inst_36138,inst_36143__$1];
var inst_36146 = (new cljs.core.PersistentVector(null,2,(5),inst_36144,inst_36145,null));
var state_36157__$1 = (function (){var statearr_36164 = state_36157;
(statearr_36164[(8)] = inst_36143__$1);

return statearr_36164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36157__$1,(8),jobs,inst_36146);
} else {
if((state_val_36158 === (3))){
var inst_36155 = (state_36157[(2)]);
var state_36157__$1 = state_36157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36157__$1,inst_36155);
} else {
if((state_val_36158 === (2))){
var state_36157__$1 = state_36157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36157__$1,(4),from);
} else {
if((state_val_36158 === (9))){
var inst_36150 = (state_36157[(2)]);
var state_36157__$1 = (function (){var statearr_36165 = state_36157;
(statearr_36165[(9)] = inst_36150);

return statearr_36165;
})();
var statearr_36166_36272 = state_36157__$1;
(statearr_36166_36272[(2)] = null);

(statearr_36166_36272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36158 === (5))){
var inst_36141 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36157__$1 = state_36157;
var statearr_36167_36273 = state_36157__$1;
(statearr_36167_36273[(2)] = inst_36141);

(statearr_36167_36273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36158 === (8))){
var inst_36143 = (state_36157[(8)]);
var inst_36148 = (state_36157[(2)]);
var state_36157__$1 = (function (){var statearr_36168 = state_36157;
(statearr_36168[(10)] = inst_36148);

return statearr_36168;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36157__$1,(9),results,inst_36143);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___36267,jobs,results,process,async))
;
return ((function (switch__35809__auto__,c__35904__auto___36267,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0 = (function (){
var statearr_36169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__);

(statearr_36169[(1)] = (1));

return statearr_36169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1 = (function (state_36157){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36170){if((e36170 instanceof Object)){
var ex__35813__auto__ = e36170;
var statearr_36171_36274 = state_36157;
(statearr_36171_36274[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36275 = state_36157;
state_36157 = G__36275;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__ = function(state_36157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1.call(this,state_36157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___36267,jobs,results,process,async))
})();
var state__35906__auto__ = (function (){var statearr_36172 = f__35905__auto__.call(null);
(statearr_36172[(6)] = c__35904__auto___36267);

return statearr_36172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___36267,jobs,results,process,async))
);


var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__,jobs,results,process,async){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__,jobs,results,process,async){
return (function (state_36210){
var state_val_36211 = (state_36210[(1)]);
if((state_val_36211 === (7))){
var inst_36206 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36212_36276 = state_36210__$1;
(statearr_36212_36276[(2)] = inst_36206);

(statearr_36212_36276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (20))){
var state_36210__$1 = state_36210;
var statearr_36213_36277 = state_36210__$1;
(statearr_36213_36277[(2)] = null);

(statearr_36213_36277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (1))){
var state_36210__$1 = state_36210;
var statearr_36214_36278 = state_36210__$1;
(statearr_36214_36278[(2)] = null);

(statearr_36214_36278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (4))){
var inst_36175 = (state_36210[(7)]);
var inst_36175__$1 = (state_36210[(2)]);
var inst_36176 = (inst_36175__$1 == null);
var state_36210__$1 = (function (){var statearr_36215 = state_36210;
(statearr_36215[(7)] = inst_36175__$1);

return statearr_36215;
})();
if(cljs.core.truth_(inst_36176)){
var statearr_36216_36279 = state_36210__$1;
(statearr_36216_36279[(1)] = (5));

} else {
var statearr_36217_36280 = state_36210__$1;
(statearr_36217_36280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (15))){
var inst_36188 = (state_36210[(8)]);
var state_36210__$1 = state_36210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36210__$1,(18),to,inst_36188);
} else {
if((state_val_36211 === (21))){
var inst_36201 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36218_36281 = state_36210__$1;
(statearr_36218_36281[(2)] = inst_36201);

(statearr_36218_36281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (13))){
var inst_36203 = (state_36210[(2)]);
var state_36210__$1 = (function (){var statearr_36219 = state_36210;
(statearr_36219[(9)] = inst_36203);

return statearr_36219;
})();
var statearr_36220_36282 = state_36210__$1;
(statearr_36220_36282[(2)] = null);

(statearr_36220_36282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (6))){
var inst_36175 = (state_36210[(7)]);
var state_36210__$1 = state_36210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36210__$1,(11),inst_36175);
} else {
if((state_val_36211 === (17))){
var inst_36196 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
if(cljs.core.truth_(inst_36196)){
var statearr_36221_36283 = state_36210__$1;
(statearr_36221_36283[(1)] = (19));

} else {
var statearr_36222_36284 = state_36210__$1;
(statearr_36222_36284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (3))){
var inst_36208 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36210__$1,inst_36208);
} else {
if((state_val_36211 === (12))){
var inst_36185 = (state_36210[(10)]);
var state_36210__$1 = state_36210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36210__$1,(14),inst_36185);
} else {
if((state_val_36211 === (2))){
var state_36210__$1 = state_36210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36210__$1,(4),results);
} else {
if((state_val_36211 === (19))){
var state_36210__$1 = state_36210;
var statearr_36223_36285 = state_36210__$1;
(statearr_36223_36285[(2)] = null);

(statearr_36223_36285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (11))){
var inst_36185 = (state_36210[(2)]);
var state_36210__$1 = (function (){var statearr_36224 = state_36210;
(statearr_36224[(10)] = inst_36185);

return statearr_36224;
})();
var statearr_36225_36286 = state_36210__$1;
(statearr_36225_36286[(2)] = null);

(statearr_36225_36286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (9))){
var state_36210__$1 = state_36210;
var statearr_36226_36287 = state_36210__$1;
(statearr_36226_36287[(2)] = null);

(statearr_36226_36287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (5))){
var state_36210__$1 = state_36210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36227_36288 = state_36210__$1;
(statearr_36227_36288[(1)] = (8));

} else {
var statearr_36228_36289 = state_36210__$1;
(statearr_36228_36289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (14))){
var inst_36188 = (state_36210[(8)]);
var inst_36190 = (state_36210[(11)]);
var inst_36188__$1 = (state_36210[(2)]);
var inst_36189 = (inst_36188__$1 == null);
var inst_36190__$1 = cljs.core.not.call(null,inst_36189);
var state_36210__$1 = (function (){var statearr_36229 = state_36210;
(statearr_36229[(8)] = inst_36188__$1);

(statearr_36229[(11)] = inst_36190__$1);

return statearr_36229;
})();
if(inst_36190__$1){
var statearr_36230_36290 = state_36210__$1;
(statearr_36230_36290[(1)] = (15));

} else {
var statearr_36231_36291 = state_36210__$1;
(statearr_36231_36291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (16))){
var inst_36190 = (state_36210[(11)]);
var state_36210__$1 = state_36210;
var statearr_36232_36292 = state_36210__$1;
(statearr_36232_36292[(2)] = inst_36190);

(statearr_36232_36292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (10))){
var inst_36182 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36233_36293 = state_36210__$1;
(statearr_36233_36293[(2)] = inst_36182);

(statearr_36233_36293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (18))){
var inst_36193 = (state_36210[(2)]);
var state_36210__$1 = state_36210;
var statearr_36234_36294 = state_36210__$1;
(statearr_36234_36294[(2)] = inst_36193);

(statearr_36234_36294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36211 === (8))){
var inst_36179 = cljs.core.async.close_BANG_.call(null,to);
var state_36210__$1 = state_36210;
var statearr_36235_36295 = state_36210__$1;
(statearr_36235_36295[(2)] = inst_36179);

(statearr_36235_36295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto__,jobs,results,process,async))
;
return ((function (switch__35809__auto__,c__35904__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0 = (function (){
var statearr_36236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__);

(statearr_36236[(1)] = (1));

return statearr_36236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1 = (function (state_36210){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36237){if((e36237 instanceof Object)){
var ex__35813__auto__ = e36237;
var statearr_36238_36296 = state_36210;
(statearr_36238_36296[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36297 = state_36210;
state_36210 = G__36297;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__ = function(state_36210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1.call(this,state_36210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__,jobs,results,process,async))
})();
var state__35906__auto__ = (function (){var statearr_36239 = f__35905__auto__.call(null);
(statearr_36239[(6)] = c__35904__auto__);

return statearr_36239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__,jobs,results,process,async))
);

return c__35904__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36299 = arguments.length;
switch (G__36299) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36302 = arguments.length;
switch (G__36302) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36305 = arguments.length;
switch (G__36305) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35904__auto___36354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___36354,tc,fc){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___36354,tc,fc){
return (function (state_36331){
var state_val_36332 = (state_36331[(1)]);
if((state_val_36332 === (7))){
var inst_36327 = (state_36331[(2)]);
var state_36331__$1 = state_36331;
var statearr_36333_36355 = state_36331__$1;
(statearr_36333_36355[(2)] = inst_36327);

(statearr_36333_36355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (1))){
var state_36331__$1 = state_36331;
var statearr_36334_36356 = state_36331__$1;
(statearr_36334_36356[(2)] = null);

(statearr_36334_36356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (4))){
var inst_36308 = (state_36331[(7)]);
var inst_36308__$1 = (state_36331[(2)]);
var inst_36309 = (inst_36308__$1 == null);
var state_36331__$1 = (function (){var statearr_36335 = state_36331;
(statearr_36335[(7)] = inst_36308__$1);

return statearr_36335;
})();
if(cljs.core.truth_(inst_36309)){
var statearr_36336_36357 = state_36331__$1;
(statearr_36336_36357[(1)] = (5));

} else {
var statearr_36337_36358 = state_36331__$1;
(statearr_36337_36358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (13))){
var state_36331__$1 = state_36331;
var statearr_36338_36359 = state_36331__$1;
(statearr_36338_36359[(2)] = null);

(statearr_36338_36359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (6))){
var inst_36308 = (state_36331[(7)]);
var inst_36314 = p.call(null,inst_36308);
var state_36331__$1 = state_36331;
if(cljs.core.truth_(inst_36314)){
var statearr_36339_36360 = state_36331__$1;
(statearr_36339_36360[(1)] = (9));

} else {
var statearr_36340_36361 = state_36331__$1;
(statearr_36340_36361[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (3))){
var inst_36329 = (state_36331[(2)]);
var state_36331__$1 = state_36331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36331__$1,inst_36329);
} else {
if((state_val_36332 === (12))){
var state_36331__$1 = state_36331;
var statearr_36341_36362 = state_36331__$1;
(statearr_36341_36362[(2)] = null);

(statearr_36341_36362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (2))){
var state_36331__$1 = state_36331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36331__$1,(4),ch);
} else {
if((state_val_36332 === (11))){
var inst_36308 = (state_36331[(7)]);
var inst_36318 = (state_36331[(2)]);
var state_36331__$1 = state_36331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36331__$1,(8),inst_36318,inst_36308);
} else {
if((state_val_36332 === (9))){
var state_36331__$1 = state_36331;
var statearr_36342_36363 = state_36331__$1;
(statearr_36342_36363[(2)] = tc);

(statearr_36342_36363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (5))){
var inst_36311 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36312 = cljs.core.async.close_BANG_.call(null,fc);
var state_36331__$1 = (function (){var statearr_36343 = state_36331;
(statearr_36343[(8)] = inst_36311);

return statearr_36343;
})();
var statearr_36344_36364 = state_36331__$1;
(statearr_36344_36364[(2)] = inst_36312);

(statearr_36344_36364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (14))){
var inst_36325 = (state_36331[(2)]);
var state_36331__$1 = state_36331;
var statearr_36345_36365 = state_36331__$1;
(statearr_36345_36365[(2)] = inst_36325);

(statearr_36345_36365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (10))){
var state_36331__$1 = state_36331;
var statearr_36346_36366 = state_36331__$1;
(statearr_36346_36366[(2)] = fc);

(statearr_36346_36366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36332 === (8))){
var inst_36320 = (state_36331[(2)]);
var state_36331__$1 = state_36331;
if(cljs.core.truth_(inst_36320)){
var statearr_36347_36367 = state_36331__$1;
(statearr_36347_36367[(1)] = (12));

} else {
var statearr_36348_36368 = state_36331__$1;
(statearr_36348_36368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___36354,tc,fc))
;
return ((function (switch__35809__auto__,c__35904__auto___36354,tc,fc){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_36349 = [null,null,null,null,null,null,null,null,null];
(statearr_36349[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_36349[(1)] = (1));

return statearr_36349;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_36331){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36350){if((e36350 instanceof Object)){
var ex__35813__auto__ = e36350;
var statearr_36351_36369 = state_36331;
(statearr_36351_36369[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36370 = state_36331;
state_36331 = G__36370;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_36331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_36331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___36354,tc,fc))
})();
var state__35906__auto__ = (function (){var statearr_36352 = f__35905__auto__.call(null);
(statearr_36352[(6)] = c__35904__auto___36354);

return statearr_36352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___36354,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__){
return (function (state_36391){
var state_val_36392 = (state_36391[(1)]);
if((state_val_36392 === (7))){
var inst_36387 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36393_36411 = state_36391__$1;
(statearr_36393_36411[(2)] = inst_36387);

(statearr_36393_36411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (1))){
var inst_36371 = init;
var state_36391__$1 = (function (){var statearr_36394 = state_36391;
(statearr_36394[(7)] = inst_36371);

return statearr_36394;
})();
var statearr_36395_36412 = state_36391__$1;
(statearr_36395_36412[(2)] = null);

(statearr_36395_36412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (4))){
var inst_36374 = (state_36391[(8)]);
var inst_36374__$1 = (state_36391[(2)]);
var inst_36375 = (inst_36374__$1 == null);
var state_36391__$1 = (function (){var statearr_36396 = state_36391;
(statearr_36396[(8)] = inst_36374__$1);

return statearr_36396;
})();
if(cljs.core.truth_(inst_36375)){
var statearr_36397_36413 = state_36391__$1;
(statearr_36397_36413[(1)] = (5));

} else {
var statearr_36398_36414 = state_36391__$1;
(statearr_36398_36414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (6))){
var inst_36371 = (state_36391[(7)]);
var inst_36374 = (state_36391[(8)]);
var inst_36378 = (state_36391[(9)]);
var inst_36378__$1 = f.call(null,inst_36371,inst_36374);
var inst_36379 = cljs.core.reduced_QMARK_.call(null,inst_36378__$1);
var state_36391__$1 = (function (){var statearr_36399 = state_36391;
(statearr_36399[(9)] = inst_36378__$1);

return statearr_36399;
})();
if(inst_36379){
var statearr_36400_36415 = state_36391__$1;
(statearr_36400_36415[(1)] = (8));

} else {
var statearr_36401_36416 = state_36391__$1;
(statearr_36401_36416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (3))){
var inst_36389 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36391__$1,inst_36389);
} else {
if((state_val_36392 === (2))){
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36391__$1,(4),ch);
} else {
if((state_val_36392 === (9))){
var inst_36378 = (state_36391[(9)]);
var inst_36371 = inst_36378;
var state_36391__$1 = (function (){var statearr_36402 = state_36391;
(statearr_36402[(7)] = inst_36371);

return statearr_36402;
})();
var statearr_36403_36417 = state_36391__$1;
(statearr_36403_36417[(2)] = null);

(statearr_36403_36417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (5))){
var inst_36371 = (state_36391[(7)]);
var state_36391__$1 = state_36391;
var statearr_36404_36418 = state_36391__$1;
(statearr_36404_36418[(2)] = inst_36371);

(statearr_36404_36418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (10))){
var inst_36385 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36405_36419 = state_36391__$1;
(statearr_36405_36419[(2)] = inst_36385);

(statearr_36405_36419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (8))){
var inst_36378 = (state_36391[(9)]);
var inst_36381 = cljs.core.deref.call(null,inst_36378);
var state_36391__$1 = state_36391;
var statearr_36406_36420 = state_36391__$1;
(statearr_36406_36420[(2)] = inst_36381);

(statearr_36406_36420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto__))
;
return ((function (switch__35809__auto__,c__35904__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35810__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35810__auto____0 = (function (){
var statearr_36407 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36407[(0)] = cljs$core$async$reduce_$_state_machine__35810__auto__);

(statearr_36407[(1)] = (1));

return statearr_36407;
});
var cljs$core$async$reduce_$_state_machine__35810__auto____1 = (function (state_36391){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36408){if((e36408 instanceof Object)){
var ex__35813__auto__ = e36408;
var statearr_36409_36421 = state_36391;
(statearr_36409_36421[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36422 = state_36391;
state_36391 = G__36422;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35810__auto__ = function(state_36391){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35810__auto____1.call(this,state_36391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35810__auto____0;
cljs$core$async$reduce_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35810__auto____1;
return cljs$core$async$reduce_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__))
})();
var state__35906__auto__ = (function (){var statearr_36410 = f__35905__auto__.call(null);
(statearr_36410[(6)] = c__35904__auto__);

return statearr_36410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__))
);

return c__35904__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__,f__$1){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__,f__$1){
return (function (state_36428){
var state_val_36429 = (state_36428[(1)]);
if((state_val_36429 === (1))){
var inst_36423 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36428__$1 = state_36428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36428__$1,(2),inst_36423);
} else {
if((state_val_36429 === (2))){
var inst_36425 = (state_36428[(2)]);
var inst_36426 = f__$1.call(null,inst_36425);
var state_36428__$1 = state_36428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36428__$1,inst_36426);
} else {
return null;
}
}
});})(c__35904__auto__,f__$1))
;
return ((function (switch__35809__auto__,c__35904__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35810__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35810__auto____0 = (function (){
var statearr_36430 = [null,null,null,null,null,null,null];
(statearr_36430[(0)] = cljs$core$async$transduce_$_state_machine__35810__auto__);

(statearr_36430[(1)] = (1));

return statearr_36430;
});
var cljs$core$async$transduce_$_state_machine__35810__auto____1 = (function (state_36428){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36431){if((e36431 instanceof Object)){
var ex__35813__auto__ = e36431;
var statearr_36432_36434 = state_36428;
(statearr_36432_36434[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36435 = state_36428;
state_36428 = G__36435;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35810__auto__ = function(state_36428){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35810__auto____1.call(this,state_36428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35810__auto____0;
cljs$core$async$transduce_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35810__auto____1;
return cljs$core$async$transduce_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__,f__$1))
})();
var state__35906__auto__ = (function (){var statearr_36433 = f__35905__auto__.call(null);
(statearr_36433[(6)] = c__35904__auto__);

return statearr_36433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__,f__$1))
);

return c__35904__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36437 = arguments.length;
switch (G__36437) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__){
return (function (state_36462){
var state_val_36463 = (state_36462[(1)]);
if((state_val_36463 === (7))){
var inst_36444 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36464_36485 = state_36462__$1;
(statearr_36464_36485[(2)] = inst_36444);

(statearr_36464_36485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (1))){
var inst_36438 = cljs.core.seq.call(null,coll);
var inst_36439 = inst_36438;
var state_36462__$1 = (function (){var statearr_36465 = state_36462;
(statearr_36465[(7)] = inst_36439);

return statearr_36465;
})();
var statearr_36466_36486 = state_36462__$1;
(statearr_36466_36486[(2)] = null);

(statearr_36466_36486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (4))){
var inst_36439 = (state_36462[(7)]);
var inst_36442 = cljs.core.first.call(null,inst_36439);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36462__$1,(7),ch,inst_36442);
} else {
if((state_val_36463 === (13))){
var inst_36456 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36467_36487 = state_36462__$1;
(statearr_36467_36487[(2)] = inst_36456);

(statearr_36467_36487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (6))){
var inst_36447 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
if(cljs.core.truth_(inst_36447)){
var statearr_36468_36488 = state_36462__$1;
(statearr_36468_36488[(1)] = (8));

} else {
var statearr_36469_36489 = state_36462__$1;
(statearr_36469_36489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (3))){
var inst_36460 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36462__$1,inst_36460);
} else {
if((state_val_36463 === (12))){
var state_36462__$1 = state_36462;
var statearr_36470_36490 = state_36462__$1;
(statearr_36470_36490[(2)] = null);

(statearr_36470_36490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (2))){
var inst_36439 = (state_36462[(7)]);
var state_36462__$1 = state_36462;
if(cljs.core.truth_(inst_36439)){
var statearr_36471_36491 = state_36462__$1;
(statearr_36471_36491[(1)] = (4));

} else {
var statearr_36472_36492 = state_36462__$1;
(statearr_36472_36492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (11))){
var inst_36453 = cljs.core.async.close_BANG_.call(null,ch);
var state_36462__$1 = state_36462;
var statearr_36473_36493 = state_36462__$1;
(statearr_36473_36493[(2)] = inst_36453);

(statearr_36473_36493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (9))){
var state_36462__$1 = state_36462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36474_36494 = state_36462__$1;
(statearr_36474_36494[(1)] = (11));

} else {
var statearr_36475_36495 = state_36462__$1;
(statearr_36475_36495[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (5))){
var inst_36439 = (state_36462[(7)]);
var state_36462__$1 = state_36462;
var statearr_36476_36496 = state_36462__$1;
(statearr_36476_36496[(2)] = inst_36439);

(statearr_36476_36496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (10))){
var inst_36458 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36477_36497 = state_36462__$1;
(statearr_36477_36497[(2)] = inst_36458);

(statearr_36477_36497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (8))){
var inst_36439 = (state_36462[(7)]);
var inst_36449 = cljs.core.next.call(null,inst_36439);
var inst_36439__$1 = inst_36449;
var state_36462__$1 = (function (){var statearr_36478 = state_36462;
(statearr_36478[(7)] = inst_36439__$1);

return statearr_36478;
})();
var statearr_36479_36498 = state_36462__$1;
(statearr_36479_36498[(2)] = null);

(statearr_36479_36498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto__))
;
return ((function (switch__35809__auto__,c__35904__auto__){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_36480 = [null,null,null,null,null,null,null,null];
(statearr_36480[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_36480[(1)] = (1));

return statearr_36480;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_36462){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36481){if((e36481 instanceof Object)){
var ex__35813__auto__ = e36481;
var statearr_36482_36499 = state_36462;
(statearr_36482_36499[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36500 = state_36462;
state_36462 = G__36500;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_36462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_36462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__))
})();
var state__35906__auto__ = (function (){var statearr_36483 = f__35905__auto__.call(null);
(statearr_36483[(6)] = c__35904__auto__);

return statearr_36483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__))
);

return c__35904__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36501 = (function (ch,cs,meta36502){
this.ch = ch;
this.cs = cs;
this.meta36502 = meta36502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36503,meta36502__$1){
var self__ = this;
var _36503__$1 = this;
return (new cljs.core.async.t_cljs$core$async36501(self__.ch,self__.cs,meta36502__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36503){
var self__ = this;
var _36503__$1 = this;
return self__.meta36502;
});})(cs))
;

cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36501.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36501.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36502","meta36502",46903045,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36501";

cljs.core.async.t_cljs$core$async36501.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36501");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36501.
 */
cljs.core.async.__GT_t_cljs$core$async36501 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36501(ch__$1,cs__$1,meta36502){
return (new cljs.core.async.t_cljs$core$async36501(ch__$1,cs__$1,meta36502));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36501(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__35904__auto___36723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___36723,cs,m,dchan,dctr,done){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___36723,cs,m,dchan,dctr,done){
return (function (state_36638){
var state_val_36639 = (state_36638[(1)]);
if((state_val_36639 === (7))){
var inst_36634 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36640_36724 = state_36638__$1;
(statearr_36640_36724[(2)] = inst_36634);

(statearr_36640_36724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (20))){
var inst_36537 = (state_36638[(7)]);
var inst_36549 = cljs.core.first.call(null,inst_36537);
var inst_36550 = cljs.core.nth.call(null,inst_36549,(0),null);
var inst_36551 = cljs.core.nth.call(null,inst_36549,(1),null);
var state_36638__$1 = (function (){var statearr_36641 = state_36638;
(statearr_36641[(8)] = inst_36550);

return statearr_36641;
})();
if(cljs.core.truth_(inst_36551)){
var statearr_36642_36725 = state_36638__$1;
(statearr_36642_36725[(1)] = (22));

} else {
var statearr_36643_36726 = state_36638__$1;
(statearr_36643_36726[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (27))){
var inst_36586 = (state_36638[(9)]);
var inst_36579 = (state_36638[(10)]);
var inst_36506 = (state_36638[(11)]);
var inst_36581 = (state_36638[(12)]);
var inst_36586__$1 = cljs.core._nth.call(null,inst_36579,inst_36581);
var inst_36587 = cljs.core.async.put_BANG_.call(null,inst_36586__$1,inst_36506,done);
var state_36638__$1 = (function (){var statearr_36644 = state_36638;
(statearr_36644[(9)] = inst_36586__$1);

return statearr_36644;
})();
if(cljs.core.truth_(inst_36587)){
var statearr_36645_36727 = state_36638__$1;
(statearr_36645_36727[(1)] = (30));

} else {
var statearr_36646_36728 = state_36638__$1;
(statearr_36646_36728[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (1))){
var state_36638__$1 = state_36638;
var statearr_36647_36729 = state_36638__$1;
(statearr_36647_36729[(2)] = null);

(statearr_36647_36729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (24))){
var inst_36537 = (state_36638[(7)]);
var inst_36556 = (state_36638[(2)]);
var inst_36557 = cljs.core.next.call(null,inst_36537);
var inst_36515 = inst_36557;
var inst_36516 = null;
var inst_36517 = (0);
var inst_36518 = (0);
var state_36638__$1 = (function (){var statearr_36648 = state_36638;
(statearr_36648[(13)] = inst_36516);

(statearr_36648[(14)] = inst_36515);

(statearr_36648[(15)] = inst_36556);

(statearr_36648[(16)] = inst_36518);

(statearr_36648[(17)] = inst_36517);

return statearr_36648;
})();
var statearr_36649_36730 = state_36638__$1;
(statearr_36649_36730[(2)] = null);

(statearr_36649_36730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (39))){
var state_36638__$1 = state_36638;
var statearr_36653_36731 = state_36638__$1;
(statearr_36653_36731[(2)] = null);

(statearr_36653_36731[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (4))){
var inst_36506 = (state_36638[(11)]);
var inst_36506__$1 = (state_36638[(2)]);
var inst_36507 = (inst_36506__$1 == null);
var state_36638__$1 = (function (){var statearr_36654 = state_36638;
(statearr_36654[(11)] = inst_36506__$1);

return statearr_36654;
})();
if(cljs.core.truth_(inst_36507)){
var statearr_36655_36732 = state_36638__$1;
(statearr_36655_36732[(1)] = (5));

} else {
var statearr_36656_36733 = state_36638__$1;
(statearr_36656_36733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (15))){
var inst_36516 = (state_36638[(13)]);
var inst_36515 = (state_36638[(14)]);
var inst_36518 = (state_36638[(16)]);
var inst_36517 = (state_36638[(17)]);
var inst_36533 = (state_36638[(2)]);
var inst_36534 = (inst_36518 + (1));
var tmp36650 = inst_36516;
var tmp36651 = inst_36515;
var tmp36652 = inst_36517;
var inst_36515__$1 = tmp36651;
var inst_36516__$1 = tmp36650;
var inst_36517__$1 = tmp36652;
var inst_36518__$1 = inst_36534;
var state_36638__$1 = (function (){var statearr_36657 = state_36638;
(statearr_36657[(13)] = inst_36516__$1);

(statearr_36657[(18)] = inst_36533);

(statearr_36657[(14)] = inst_36515__$1);

(statearr_36657[(16)] = inst_36518__$1);

(statearr_36657[(17)] = inst_36517__$1);

return statearr_36657;
})();
var statearr_36658_36734 = state_36638__$1;
(statearr_36658_36734[(2)] = null);

(statearr_36658_36734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (21))){
var inst_36560 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36662_36735 = state_36638__$1;
(statearr_36662_36735[(2)] = inst_36560);

(statearr_36662_36735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (31))){
var inst_36586 = (state_36638[(9)]);
var inst_36590 = done.call(null,null);
var inst_36591 = cljs.core.async.untap_STAR_.call(null,m,inst_36586);
var state_36638__$1 = (function (){var statearr_36663 = state_36638;
(statearr_36663[(19)] = inst_36590);

return statearr_36663;
})();
var statearr_36664_36736 = state_36638__$1;
(statearr_36664_36736[(2)] = inst_36591);

(statearr_36664_36736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (32))){
var inst_36579 = (state_36638[(10)]);
var inst_36580 = (state_36638[(20)]);
var inst_36578 = (state_36638[(21)]);
var inst_36581 = (state_36638[(12)]);
var inst_36593 = (state_36638[(2)]);
var inst_36594 = (inst_36581 + (1));
var tmp36659 = inst_36579;
var tmp36660 = inst_36580;
var tmp36661 = inst_36578;
var inst_36578__$1 = tmp36661;
var inst_36579__$1 = tmp36659;
var inst_36580__$1 = tmp36660;
var inst_36581__$1 = inst_36594;
var state_36638__$1 = (function (){var statearr_36665 = state_36638;
(statearr_36665[(22)] = inst_36593);

(statearr_36665[(10)] = inst_36579__$1);

(statearr_36665[(20)] = inst_36580__$1);

(statearr_36665[(21)] = inst_36578__$1);

(statearr_36665[(12)] = inst_36581__$1);

return statearr_36665;
})();
var statearr_36666_36737 = state_36638__$1;
(statearr_36666_36737[(2)] = null);

(statearr_36666_36737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (40))){
var inst_36606 = (state_36638[(23)]);
var inst_36610 = done.call(null,null);
var inst_36611 = cljs.core.async.untap_STAR_.call(null,m,inst_36606);
var state_36638__$1 = (function (){var statearr_36667 = state_36638;
(statearr_36667[(24)] = inst_36610);

return statearr_36667;
})();
var statearr_36668_36738 = state_36638__$1;
(statearr_36668_36738[(2)] = inst_36611);

(statearr_36668_36738[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (33))){
var inst_36597 = (state_36638[(25)]);
var inst_36599 = cljs.core.chunked_seq_QMARK_.call(null,inst_36597);
var state_36638__$1 = state_36638;
if(inst_36599){
var statearr_36669_36739 = state_36638__$1;
(statearr_36669_36739[(1)] = (36));

} else {
var statearr_36670_36740 = state_36638__$1;
(statearr_36670_36740[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (13))){
var inst_36527 = (state_36638[(26)]);
var inst_36530 = cljs.core.async.close_BANG_.call(null,inst_36527);
var state_36638__$1 = state_36638;
var statearr_36671_36741 = state_36638__$1;
(statearr_36671_36741[(2)] = inst_36530);

(statearr_36671_36741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (22))){
var inst_36550 = (state_36638[(8)]);
var inst_36553 = cljs.core.async.close_BANG_.call(null,inst_36550);
var state_36638__$1 = state_36638;
var statearr_36672_36742 = state_36638__$1;
(statearr_36672_36742[(2)] = inst_36553);

(statearr_36672_36742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (36))){
var inst_36597 = (state_36638[(25)]);
var inst_36601 = cljs.core.chunk_first.call(null,inst_36597);
var inst_36602 = cljs.core.chunk_rest.call(null,inst_36597);
var inst_36603 = cljs.core.count.call(null,inst_36601);
var inst_36578 = inst_36602;
var inst_36579 = inst_36601;
var inst_36580 = inst_36603;
var inst_36581 = (0);
var state_36638__$1 = (function (){var statearr_36673 = state_36638;
(statearr_36673[(10)] = inst_36579);

(statearr_36673[(20)] = inst_36580);

(statearr_36673[(21)] = inst_36578);

(statearr_36673[(12)] = inst_36581);

return statearr_36673;
})();
var statearr_36674_36743 = state_36638__$1;
(statearr_36674_36743[(2)] = null);

(statearr_36674_36743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (41))){
var inst_36597 = (state_36638[(25)]);
var inst_36613 = (state_36638[(2)]);
var inst_36614 = cljs.core.next.call(null,inst_36597);
var inst_36578 = inst_36614;
var inst_36579 = null;
var inst_36580 = (0);
var inst_36581 = (0);
var state_36638__$1 = (function (){var statearr_36675 = state_36638;
(statearr_36675[(10)] = inst_36579);

(statearr_36675[(20)] = inst_36580);

(statearr_36675[(21)] = inst_36578);

(statearr_36675[(27)] = inst_36613);

(statearr_36675[(12)] = inst_36581);

return statearr_36675;
})();
var statearr_36676_36744 = state_36638__$1;
(statearr_36676_36744[(2)] = null);

(statearr_36676_36744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (43))){
var state_36638__$1 = state_36638;
var statearr_36677_36745 = state_36638__$1;
(statearr_36677_36745[(2)] = null);

(statearr_36677_36745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (29))){
var inst_36622 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36678_36746 = state_36638__$1;
(statearr_36678_36746[(2)] = inst_36622);

(statearr_36678_36746[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (44))){
var inst_36631 = (state_36638[(2)]);
var state_36638__$1 = (function (){var statearr_36679 = state_36638;
(statearr_36679[(28)] = inst_36631);

return statearr_36679;
})();
var statearr_36680_36747 = state_36638__$1;
(statearr_36680_36747[(2)] = null);

(statearr_36680_36747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (6))){
var inst_36570 = (state_36638[(29)]);
var inst_36569 = cljs.core.deref.call(null,cs);
var inst_36570__$1 = cljs.core.keys.call(null,inst_36569);
var inst_36571 = cljs.core.count.call(null,inst_36570__$1);
var inst_36572 = cljs.core.reset_BANG_.call(null,dctr,inst_36571);
var inst_36577 = cljs.core.seq.call(null,inst_36570__$1);
var inst_36578 = inst_36577;
var inst_36579 = null;
var inst_36580 = (0);
var inst_36581 = (0);
var state_36638__$1 = (function (){var statearr_36681 = state_36638;
(statearr_36681[(30)] = inst_36572);

(statearr_36681[(10)] = inst_36579);

(statearr_36681[(20)] = inst_36580);

(statearr_36681[(21)] = inst_36578);

(statearr_36681[(12)] = inst_36581);

(statearr_36681[(29)] = inst_36570__$1);

return statearr_36681;
})();
var statearr_36682_36748 = state_36638__$1;
(statearr_36682_36748[(2)] = null);

(statearr_36682_36748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (28))){
var inst_36578 = (state_36638[(21)]);
var inst_36597 = (state_36638[(25)]);
var inst_36597__$1 = cljs.core.seq.call(null,inst_36578);
var state_36638__$1 = (function (){var statearr_36683 = state_36638;
(statearr_36683[(25)] = inst_36597__$1);

return statearr_36683;
})();
if(inst_36597__$1){
var statearr_36684_36749 = state_36638__$1;
(statearr_36684_36749[(1)] = (33));

} else {
var statearr_36685_36750 = state_36638__$1;
(statearr_36685_36750[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (25))){
var inst_36580 = (state_36638[(20)]);
var inst_36581 = (state_36638[(12)]);
var inst_36583 = (inst_36581 < inst_36580);
var inst_36584 = inst_36583;
var state_36638__$1 = state_36638;
if(cljs.core.truth_(inst_36584)){
var statearr_36686_36751 = state_36638__$1;
(statearr_36686_36751[(1)] = (27));

} else {
var statearr_36687_36752 = state_36638__$1;
(statearr_36687_36752[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (34))){
var state_36638__$1 = state_36638;
var statearr_36688_36753 = state_36638__$1;
(statearr_36688_36753[(2)] = null);

(statearr_36688_36753[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (17))){
var state_36638__$1 = state_36638;
var statearr_36689_36754 = state_36638__$1;
(statearr_36689_36754[(2)] = null);

(statearr_36689_36754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (3))){
var inst_36636 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36638__$1,inst_36636);
} else {
if((state_val_36639 === (12))){
var inst_36565 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36690_36755 = state_36638__$1;
(statearr_36690_36755[(2)] = inst_36565);

(statearr_36690_36755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (2))){
var state_36638__$1 = state_36638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36638__$1,(4),ch);
} else {
if((state_val_36639 === (23))){
var state_36638__$1 = state_36638;
var statearr_36691_36756 = state_36638__$1;
(statearr_36691_36756[(2)] = null);

(statearr_36691_36756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (35))){
var inst_36620 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36692_36757 = state_36638__$1;
(statearr_36692_36757[(2)] = inst_36620);

(statearr_36692_36757[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (19))){
var inst_36537 = (state_36638[(7)]);
var inst_36541 = cljs.core.chunk_first.call(null,inst_36537);
var inst_36542 = cljs.core.chunk_rest.call(null,inst_36537);
var inst_36543 = cljs.core.count.call(null,inst_36541);
var inst_36515 = inst_36542;
var inst_36516 = inst_36541;
var inst_36517 = inst_36543;
var inst_36518 = (0);
var state_36638__$1 = (function (){var statearr_36693 = state_36638;
(statearr_36693[(13)] = inst_36516);

(statearr_36693[(14)] = inst_36515);

(statearr_36693[(16)] = inst_36518);

(statearr_36693[(17)] = inst_36517);

return statearr_36693;
})();
var statearr_36694_36758 = state_36638__$1;
(statearr_36694_36758[(2)] = null);

(statearr_36694_36758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (11))){
var inst_36515 = (state_36638[(14)]);
var inst_36537 = (state_36638[(7)]);
var inst_36537__$1 = cljs.core.seq.call(null,inst_36515);
var state_36638__$1 = (function (){var statearr_36695 = state_36638;
(statearr_36695[(7)] = inst_36537__$1);

return statearr_36695;
})();
if(inst_36537__$1){
var statearr_36696_36759 = state_36638__$1;
(statearr_36696_36759[(1)] = (16));

} else {
var statearr_36697_36760 = state_36638__$1;
(statearr_36697_36760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (9))){
var inst_36567 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36698_36761 = state_36638__$1;
(statearr_36698_36761[(2)] = inst_36567);

(statearr_36698_36761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (5))){
var inst_36513 = cljs.core.deref.call(null,cs);
var inst_36514 = cljs.core.seq.call(null,inst_36513);
var inst_36515 = inst_36514;
var inst_36516 = null;
var inst_36517 = (0);
var inst_36518 = (0);
var state_36638__$1 = (function (){var statearr_36699 = state_36638;
(statearr_36699[(13)] = inst_36516);

(statearr_36699[(14)] = inst_36515);

(statearr_36699[(16)] = inst_36518);

(statearr_36699[(17)] = inst_36517);

return statearr_36699;
})();
var statearr_36700_36762 = state_36638__$1;
(statearr_36700_36762[(2)] = null);

(statearr_36700_36762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (14))){
var state_36638__$1 = state_36638;
var statearr_36701_36763 = state_36638__$1;
(statearr_36701_36763[(2)] = null);

(statearr_36701_36763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (45))){
var inst_36628 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36702_36764 = state_36638__$1;
(statearr_36702_36764[(2)] = inst_36628);

(statearr_36702_36764[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (26))){
var inst_36570 = (state_36638[(29)]);
var inst_36624 = (state_36638[(2)]);
var inst_36625 = cljs.core.seq.call(null,inst_36570);
var state_36638__$1 = (function (){var statearr_36703 = state_36638;
(statearr_36703[(31)] = inst_36624);

return statearr_36703;
})();
if(inst_36625){
var statearr_36704_36765 = state_36638__$1;
(statearr_36704_36765[(1)] = (42));

} else {
var statearr_36705_36766 = state_36638__$1;
(statearr_36705_36766[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (16))){
var inst_36537 = (state_36638[(7)]);
var inst_36539 = cljs.core.chunked_seq_QMARK_.call(null,inst_36537);
var state_36638__$1 = state_36638;
if(inst_36539){
var statearr_36706_36767 = state_36638__$1;
(statearr_36706_36767[(1)] = (19));

} else {
var statearr_36707_36768 = state_36638__$1;
(statearr_36707_36768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (38))){
var inst_36617 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36708_36769 = state_36638__$1;
(statearr_36708_36769[(2)] = inst_36617);

(statearr_36708_36769[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (30))){
var state_36638__$1 = state_36638;
var statearr_36709_36770 = state_36638__$1;
(statearr_36709_36770[(2)] = null);

(statearr_36709_36770[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (10))){
var inst_36516 = (state_36638[(13)]);
var inst_36518 = (state_36638[(16)]);
var inst_36526 = cljs.core._nth.call(null,inst_36516,inst_36518);
var inst_36527 = cljs.core.nth.call(null,inst_36526,(0),null);
var inst_36528 = cljs.core.nth.call(null,inst_36526,(1),null);
var state_36638__$1 = (function (){var statearr_36710 = state_36638;
(statearr_36710[(26)] = inst_36527);

return statearr_36710;
})();
if(cljs.core.truth_(inst_36528)){
var statearr_36711_36771 = state_36638__$1;
(statearr_36711_36771[(1)] = (13));

} else {
var statearr_36712_36772 = state_36638__$1;
(statearr_36712_36772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (18))){
var inst_36563 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
var statearr_36713_36773 = state_36638__$1;
(statearr_36713_36773[(2)] = inst_36563);

(statearr_36713_36773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (42))){
var state_36638__$1 = state_36638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36638__$1,(45),dchan);
} else {
if((state_val_36639 === (37))){
var inst_36606 = (state_36638[(23)]);
var inst_36506 = (state_36638[(11)]);
var inst_36597 = (state_36638[(25)]);
var inst_36606__$1 = cljs.core.first.call(null,inst_36597);
var inst_36607 = cljs.core.async.put_BANG_.call(null,inst_36606__$1,inst_36506,done);
var state_36638__$1 = (function (){var statearr_36714 = state_36638;
(statearr_36714[(23)] = inst_36606__$1);

return statearr_36714;
})();
if(cljs.core.truth_(inst_36607)){
var statearr_36715_36774 = state_36638__$1;
(statearr_36715_36774[(1)] = (39));

} else {
var statearr_36716_36775 = state_36638__$1;
(statearr_36716_36775[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (8))){
var inst_36518 = (state_36638[(16)]);
var inst_36517 = (state_36638[(17)]);
var inst_36520 = (inst_36518 < inst_36517);
var inst_36521 = inst_36520;
var state_36638__$1 = state_36638;
if(cljs.core.truth_(inst_36521)){
var statearr_36717_36776 = state_36638__$1;
(statearr_36717_36776[(1)] = (10));

} else {
var statearr_36718_36777 = state_36638__$1;
(statearr_36718_36777[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___36723,cs,m,dchan,dctr,done))
;
return ((function (switch__35809__auto__,c__35904__auto___36723,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35810__auto__ = null;
var cljs$core$async$mult_$_state_machine__35810__auto____0 = (function (){
var statearr_36719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36719[(0)] = cljs$core$async$mult_$_state_machine__35810__auto__);

(statearr_36719[(1)] = (1));

return statearr_36719;
});
var cljs$core$async$mult_$_state_machine__35810__auto____1 = (function (state_36638){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36720){if((e36720 instanceof Object)){
var ex__35813__auto__ = e36720;
var statearr_36721_36778 = state_36638;
(statearr_36721_36778[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36779 = state_36638;
state_36638 = G__36779;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35810__auto__ = function(state_36638){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35810__auto____1.call(this,state_36638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35810__auto____0;
cljs$core$async$mult_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35810__auto____1;
return cljs$core$async$mult_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___36723,cs,m,dchan,dctr,done))
})();
var state__35906__auto__ = (function (){var statearr_36722 = f__35905__auto__.call(null);
(statearr_36722[(6)] = c__35904__auto___36723);

return statearr_36722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___36723,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36781 = arguments.length;
switch (G__36781) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36793 = arguments.length;
var i__4642__auto___36794 = (0);
while(true){
if((i__4642__auto___36794 < len__4641__auto___36793)){
args__4647__auto__.push((arguments[i__4642__auto___36794]));

var G__36795 = (i__4642__auto___36794 + (1));
i__4642__auto___36794 = G__36795;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36787){
var map__36788 = p__36787;
var map__36788__$1 = (((((!((map__36788 == null))))?(((((map__36788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36788):map__36788);
var opts = map__36788__$1;
var statearr_36790_36796 = state;
(statearr_36790_36796[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__36788,map__36788__$1,opts){
return (function (val){
var statearr_36791_36797 = state;
(statearr_36791_36797[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36788,map__36788__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_36792_36798 = state;
(statearr_36792_36798[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36783){
var G__36784 = cljs.core.first.call(null,seq36783);
var seq36783__$1 = cljs.core.next.call(null,seq36783);
var G__36785 = cljs.core.first.call(null,seq36783__$1);
var seq36783__$2 = cljs.core.next.call(null,seq36783__$1);
var G__36786 = cljs.core.first.call(null,seq36783__$2);
var seq36783__$3 = cljs.core.next.call(null,seq36783__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36784,G__36785,G__36786,seq36783__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36799 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36800){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36800 = meta36800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36801,meta36800__$1){
var self__ = this;
var _36801__$1 = this;
return (new cljs.core.async.t_cljs$core$async36799(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36800__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36801){
var self__ = this;
var _36801__$1 = this;
return self__.meta36800;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36799.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36800","meta36800",1976287611,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36799";

cljs.core.async.t_cljs$core$async36799.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async36799");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36799.
 */
cljs.core.async.__GT_t_cljs$core$async36799 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36799(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36800){
return (new cljs.core.async.t_cljs$core$async36799(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36800));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36799(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35904__auto___36963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___36963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___36963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36903){
var state_val_36904 = (state_36903[(1)]);
if((state_val_36904 === (7))){
var inst_36818 = (state_36903[(2)]);
var state_36903__$1 = state_36903;
var statearr_36905_36964 = state_36903__$1;
(statearr_36905_36964[(2)] = inst_36818);

(statearr_36905_36964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (20))){
var inst_36830 = (state_36903[(7)]);
var state_36903__$1 = state_36903;
var statearr_36906_36965 = state_36903__$1;
(statearr_36906_36965[(2)] = inst_36830);

(statearr_36906_36965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (27))){
var state_36903__$1 = state_36903;
var statearr_36907_36966 = state_36903__$1;
(statearr_36907_36966[(2)] = null);

(statearr_36907_36966[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (1))){
var inst_36805 = (state_36903[(8)]);
var inst_36805__$1 = calc_state.call(null);
var inst_36807 = (inst_36805__$1 == null);
var inst_36808 = cljs.core.not.call(null,inst_36807);
var state_36903__$1 = (function (){var statearr_36908 = state_36903;
(statearr_36908[(8)] = inst_36805__$1);

return statearr_36908;
})();
if(inst_36808){
var statearr_36909_36967 = state_36903__$1;
(statearr_36909_36967[(1)] = (2));

} else {
var statearr_36910_36968 = state_36903__$1;
(statearr_36910_36968[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (24))){
var inst_36877 = (state_36903[(9)]);
var inst_36863 = (state_36903[(10)]);
var inst_36854 = (state_36903[(11)]);
var inst_36877__$1 = inst_36854.call(null,inst_36863);
var state_36903__$1 = (function (){var statearr_36911 = state_36903;
(statearr_36911[(9)] = inst_36877__$1);

return statearr_36911;
})();
if(cljs.core.truth_(inst_36877__$1)){
var statearr_36912_36969 = state_36903__$1;
(statearr_36912_36969[(1)] = (29));

} else {
var statearr_36913_36970 = state_36903__$1;
(statearr_36913_36970[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (4))){
var inst_36821 = (state_36903[(2)]);
var state_36903__$1 = state_36903;
if(cljs.core.truth_(inst_36821)){
var statearr_36914_36971 = state_36903__$1;
(statearr_36914_36971[(1)] = (8));

} else {
var statearr_36915_36972 = state_36903__$1;
(statearr_36915_36972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (15))){
var inst_36848 = (state_36903[(2)]);
var state_36903__$1 = state_36903;
if(cljs.core.truth_(inst_36848)){
var statearr_36916_36973 = state_36903__$1;
(statearr_36916_36973[(1)] = (19));

} else {
var statearr_36917_36974 = state_36903__$1;
(statearr_36917_36974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (21))){
var inst_36853 = (state_36903[(12)]);
var inst_36853__$1 = (state_36903[(2)]);
var inst_36854 = cljs.core.get.call(null,inst_36853__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36855 = cljs.core.get.call(null,inst_36853__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36856 = cljs.core.get.call(null,inst_36853__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36903__$1 = (function (){var statearr_36918 = state_36903;
(statearr_36918[(12)] = inst_36853__$1);

(statearr_36918[(13)] = inst_36855);

(statearr_36918[(11)] = inst_36854);

return statearr_36918;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36903__$1,(22),inst_36856);
} else {
if((state_val_36904 === (31))){
var inst_36885 = (state_36903[(2)]);
var state_36903__$1 = state_36903;
if(cljs.core.truth_(inst_36885)){
var statearr_36919_36975 = state_36903__$1;
(statearr_36919_36975[(1)] = (32));

} else {
var statearr_36920_36976 = state_36903__$1;
(statearr_36920_36976[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (32))){
var inst_36862 = (state_36903[(14)]);
var state_36903__$1 = state_36903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36903__$1,(35),out,inst_36862);
} else {
if((state_val_36904 === (33))){
var inst_36853 = (state_36903[(12)]);
var inst_36830 = inst_36853;
var state_36903__$1 = (function (){var statearr_36921 = state_36903;
(statearr_36921[(7)] = inst_36830);

return statearr_36921;
})();
var statearr_36922_36977 = state_36903__$1;
(statearr_36922_36977[(2)] = null);

(statearr_36922_36977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (13))){
var inst_36830 = (state_36903[(7)]);
var inst_36837 = inst_36830.cljs$lang$protocol_mask$partition0$;
var inst_36838 = (inst_36837 & (64));
var inst_36839 = inst_36830.cljs$core$ISeq$;
var inst_36840 = (cljs.core.PROTOCOL_SENTINEL === inst_36839);
var inst_36841 = ((inst_36838) || (inst_36840));
var state_36903__$1 = state_36903;
if(cljs.core.truth_(inst_36841)){
var statearr_36923_36978 = state_36903__$1;
(statearr_36923_36978[(1)] = (16));

} else {
var statearr_36924_36979 = state_36903__$1;
(statearr_36924_36979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (22))){
var inst_36863 = (state_36903[(10)]);
var inst_36862 = (state_36903[(14)]);
var inst_36861 = (state_36903[(2)]);
var inst_36862__$1 = cljs.core.nth.call(null,inst_36861,(0),null);
var inst_36863__$1 = cljs.core.nth.call(null,inst_36861,(1),null);
var inst_36864 = (inst_36862__$1 == null);
var inst_36865 = cljs.core._EQ_.call(null,inst_36863__$1,change);
var inst_36866 = ((inst_36864) || (inst_36865));
var state_36903__$1 = (function (){var statearr_36925 = state_36903;
(statearr_36925[(10)] = inst_36863__$1);

(statearr_36925[(14)] = inst_36862__$1);

return statearr_36925;
})();
if(cljs.core.truth_(inst_36866)){
var statearr_36926_36980 = state_36903__$1;
(statearr_36926_36980[(1)] = (23));

} else {
var statearr_36927_36981 = state_36903__$1;
(statearr_36927_36981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (36))){
var inst_36853 = (state_36903[(12)]);
var inst_36830 = inst_36853;
var state_36903__$1 = (function (){var statearr_36928 = state_36903;
(statearr_36928[(7)] = inst_36830);

return statearr_36928;
})();
var statearr_36929_36982 = state_36903__$1;
(statearr_36929_36982[(2)] = null);

(statearr_36929_36982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (29))){
var inst_36877 = (state_36903[(9)]);
var state_36903__$1 = state_36903;
var statearr_36930_36983 = state_36903__$1;
(statearr_36930_36983[(2)] = inst_36877);

(statearr_36930_36983[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (6))){
var state_36903__$1 = state_36903;
var statearr_36931_36984 = state_36903__$1;
(statearr_36931_36984[(2)] = false);

(statearr_36931_36984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (28))){
var inst_36873 = (state_36903[(2)]);
var inst_36874 = calc_state.call(null);
var inst_36830 = inst_36874;
var state_36903__$1 = (function (){var statearr_36932 = state_36903;
(statearr_36932[(15)] = inst_36873);

(statearr_36932[(7)] = inst_36830);

return statearr_36932;
})();
var statearr_36933_36985 = state_36903__$1;
(statearr_36933_36985[(2)] = null);

(statearr_36933_36985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (25))){
var inst_36899 = (state_36903[(2)]);
var state_36903__$1 = state_36903;
var statearr_36934_36986 = state_36903__$1;
(statearr_36934_36986[(2)] = inst_36899);

(statearr_36934_36986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (34))){
var inst_36897 = (state_36903[(2)]);
var state_36903__$1 = state_36903;
var statearr_36935_36987 = state_36903__$1;
(statearr_36935_36987[(2)] = inst_36897);

(statearr_36935_36987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (17))){
var state_36903__$1 = state_36903;
var statearr_36936_36988 = state_36903__$1;
(statearr_36936_36988[(2)] = false);

(statearr_36936_36988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (3))){
var state_36903__$1 = state_36903;
var statearr_36937_36989 = state_36903__$1;
(statearr_36937_36989[(2)] = false);

(statearr_36937_36989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (12))){
var inst_36901 = (state_36903[(2)]);
var state_36903__$1 = state_36903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36903__$1,inst_36901);
} else {
if((state_val_36904 === (2))){
var inst_36805 = (state_36903[(8)]);
var inst_36810 = inst_36805.cljs$lang$protocol_mask$partition0$;
var inst_36811 = (inst_36810 & (64));
var inst_36812 = inst_36805.cljs$core$ISeq$;
var inst_36813 = (cljs.core.PROTOCOL_SENTINEL === inst_36812);
var inst_36814 = ((inst_36811) || (inst_36813));
var state_36903__$1 = state_36903;
if(cljs.core.truth_(inst_36814)){
var statearr_36938_36990 = state_36903__$1;
(statearr_36938_36990[(1)] = (5));

} else {
var statearr_36939_36991 = state_36903__$1;
(statearr_36939_36991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (23))){
var inst_36862 = (state_36903[(14)]);
var inst_36868 = (inst_36862 == null);
var state_36903__$1 = state_36903;
if(cljs.core.truth_(inst_36868)){
var statearr_36940_36992 = state_36903__$1;
(statearr_36940_36992[(1)] = (26));

} else {
var statearr_36941_36993 = state_36903__$1;
(statearr_36941_36993[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (35))){
var inst_36888 = (state_36903[(2)]);
var state_36903__$1 = state_36903;
if(cljs.core.truth_(inst_36888)){
var statearr_36942_36994 = state_36903__$1;
(statearr_36942_36994[(1)] = (36));

} else {
var statearr_36943_36995 = state_36903__$1;
(statearr_36943_36995[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (19))){
var inst_36830 = (state_36903[(7)]);
var inst_36850 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36830);
var state_36903__$1 = state_36903;
var statearr_36944_36996 = state_36903__$1;
(statearr_36944_36996[(2)] = inst_36850);

(statearr_36944_36996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (11))){
var inst_36830 = (state_36903[(7)]);
var inst_36834 = (inst_36830 == null);
var inst_36835 = cljs.core.not.call(null,inst_36834);
var state_36903__$1 = state_36903;
if(inst_36835){
var statearr_36945_36997 = state_36903__$1;
(statearr_36945_36997[(1)] = (13));

} else {
var statearr_36946_36998 = state_36903__$1;
(statearr_36946_36998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (9))){
var inst_36805 = (state_36903[(8)]);
var state_36903__$1 = state_36903;
var statearr_36947_36999 = state_36903__$1;
(statearr_36947_36999[(2)] = inst_36805);

(statearr_36947_36999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (5))){
var state_36903__$1 = state_36903;
var statearr_36948_37000 = state_36903__$1;
(statearr_36948_37000[(2)] = true);

(statearr_36948_37000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (14))){
var state_36903__$1 = state_36903;
var statearr_36949_37001 = state_36903__$1;
(statearr_36949_37001[(2)] = false);

(statearr_36949_37001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (26))){
var inst_36863 = (state_36903[(10)]);
var inst_36870 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36863);
var state_36903__$1 = state_36903;
var statearr_36950_37002 = state_36903__$1;
(statearr_36950_37002[(2)] = inst_36870);

(statearr_36950_37002[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (16))){
var state_36903__$1 = state_36903;
var statearr_36951_37003 = state_36903__$1;
(statearr_36951_37003[(2)] = true);

(statearr_36951_37003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (38))){
var inst_36893 = (state_36903[(2)]);
var state_36903__$1 = state_36903;
var statearr_36952_37004 = state_36903__$1;
(statearr_36952_37004[(2)] = inst_36893);

(statearr_36952_37004[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (30))){
var inst_36855 = (state_36903[(13)]);
var inst_36863 = (state_36903[(10)]);
var inst_36854 = (state_36903[(11)]);
var inst_36880 = cljs.core.empty_QMARK_.call(null,inst_36854);
var inst_36881 = inst_36855.call(null,inst_36863);
var inst_36882 = cljs.core.not.call(null,inst_36881);
var inst_36883 = ((inst_36880) && (inst_36882));
var state_36903__$1 = state_36903;
var statearr_36953_37005 = state_36903__$1;
(statearr_36953_37005[(2)] = inst_36883);

(statearr_36953_37005[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (10))){
var inst_36805 = (state_36903[(8)]);
var inst_36826 = (state_36903[(2)]);
var inst_36827 = cljs.core.get.call(null,inst_36826,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36828 = cljs.core.get.call(null,inst_36826,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36829 = cljs.core.get.call(null,inst_36826,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36830 = inst_36805;
var state_36903__$1 = (function (){var statearr_36954 = state_36903;
(statearr_36954[(16)] = inst_36829);

(statearr_36954[(17)] = inst_36827);

(statearr_36954[(7)] = inst_36830);

(statearr_36954[(18)] = inst_36828);

return statearr_36954;
})();
var statearr_36955_37006 = state_36903__$1;
(statearr_36955_37006[(2)] = null);

(statearr_36955_37006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (18))){
var inst_36845 = (state_36903[(2)]);
var state_36903__$1 = state_36903;
var statearr_36956_37007 = state_36903__$1;
(statearr_36956_37007[(2)] = inst_36845);

(statearr_36956_37007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (37))){
var state_36903__$1 = state_36903;
var statearr_36957_37008 = state_36903__$1;
(statearr_36957_37008[(2)] = null);

(statearr_36957_37008[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36904 === (8))){
var inst_36805 = (state_36903[(8)]);
var inst_36823 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36805);
var state_36903__$1 = state_36903;
var statearr_36958_37009 = state_36903__$1;
(statearr_36958_37009[(2)] = inst_36823);

(statearr_36958_37009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___36963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35809__auto__,c__35904__auto___36963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35810__auto__ = null;
var cljs$core$async$mix_$_state_machine__35810__auto____0 = (function (){
var statearr_36959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36959[(0)] = cljs$core$async$mix_$_state_machine__35810__auto__);

(statearr_36959[(1)] = (1));

return statearr_36959;
});
var cljs$core$async$mix_$_state_machine__35810__auto____1 = (function (state_36903){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_36903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e36960){if((e36960 instanceof Object)){
var ex__35813__auto__ = e36960;
var statearr_36961_37010 = state_36903;
(statearr_36961_37010[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37011 = state_36903;
state_36903 = G__37011;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35810__auto__ = function(state_36903){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35810__auto____1.call(this,state_36903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35810__auto____0;
cljs$core$async$mix_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35810__auto____1;
return cljs$core$async$mix_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___36963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35906__auto__ = (function (){var statearr_36962 = f__35905__auto__.call(null);
(statearr_36962[(6)] = c__35904__auto___36963);

return statearr_36962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___36963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37013 = arguments.length;
switch (G__37013) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37017 = arguments.length;
switch (G__37017) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__37015_SHARP_){
if(cljs.core.truth_(p1__37015_SHARP_.call(null,topic))){
return p1__37015_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37015_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37018 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37019){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37019 = meta37019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37020,meta37019__$1){
var self__ = this;
var _37020__$1 = this;
return (new cljs.core.async.t_cljs$core$async37018(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37019__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37020){
var self__ = this;
var _37020__$1 = this;
return self__.meta37019;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37018.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37019","meta37019",-513122008,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37018";

cljs.core.async.t_cljs$core$async37018.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async37018");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37018.
 */
cljs.core.async.__GT_t_cljs$core$async37018 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37019){
return (new cljs.core.async.t_cljs$core$async37018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37019));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37018(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35904__auto___37138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___37138,mults,ensure_mult,p){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___37138,mults,ensure_mult,p){
return (function (state_37092){
var state_val_37093 = (state_37092[(1)]);
if((state_val_37093 === (7))){
var inst_37088 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37094_37139 = state_37092__$1;
(statearr_37094_37139[(2)] = inst_37088);

(statearr_37094_37139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (20))){
var state_37092__$1 = state_37092;
var statearr_37095_37140 = state_37092__$1;
(statearr_37095_37140[(2)] = null);

(statearr_37095_37140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (1))){
var state_37092__$1 = state_37092;
var statearr_37096_37141 = state_37092__$1;
(statearr_37096_37141[(2)] = null);

(statearr_37096_37141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (24))){
var inst_37071 = (state_37092[(7)]);
var inst_37080 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37071);
var state_37092__$1 = state_37092;
var statearr_37097_37142 = state_37092__$1;
(statearr_37097_37142[(2)] = inst_37080);

(statearr_37097_37142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (4))){
var inst_37023 = (state_37092[(8)]);
var inst_37023__$1 = (state_37092[(2)]);
var inst_37024 = (inst_37023__$1 == null);
var state_37092__$1 = (function (){var statearr_37098 = state_37092;
(statearr_37098[(8)] = inst_37023__$1);

return statearr_37098;
})();
if(cljs.core.truth_(inst_37024)){
var statearr_37099_37143 = state_37092__$1;
(statearr_37099_37143[(1)] = (5));

} else {
var statearr_37100_37144 = state_37092__$1;
(statearr_37100_37144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (15))){
var inst_37065 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37101_37145 = state_37092__$1;
(statearr_37101_37145[(2)] = inst_37065);

(statearr_37101_37145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (21))){
var inst_37085 = (state_37092[(2)]);
var state_37092__$1 = (function (){var statearr_37102 = state_37092;
(statearr_37102[(9)] = inst_37085);

return statearr_37102;
})();
var statearr_37103_37146 = state_37092__$1;
(statearr_37103_37146[(2)] = null);

(statearr_37103_37146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (13))){
var inst_37047 = (state_37092[(10)]);
var inst_37049 = cljs.core.chunked_seq_QMARK_.call(null,inst_37047);
var state_37092__$1 = state_37092;
if(inst_37049){
var statearr_37104_37147 = state_37092__$1;
(statearr_37104_37147[(1)] = (16));

} else {
var statearr_37105_37148 = state_37092__$1;
(statearr_37105_37148[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (22))){
var inst_37077 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37077)){
var statearr_37106_37149 = state_37092__$1;
(statearr_37106_37149[(1)] = (23));

} else {
var statearr_37107_37150 = state_37092__$1;
(statearr_37107_37150[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (6))){
var inst_37023 = (state_37092[(8)]);
var inst_37071 = (state_37092[(7)]);
var inst_37073 = (state_37092[(11)]);
var inst_37071__$1 = topic_fn.call(null,inst_37023);
var inst_37072 = cljs.core.deref.call(null,mults);
var inst_37073__$1 = cljs.core.get.call(null,inst_37072,inst_37071__$1);
var state_37092__$1 = (function (){var statearr_37108 = state_37092;
(statearr_37108[(7)] = inst_37071__$1);

(statearr_37108[(11)] = inst_37073__$1);

return statearr_37108;
})();
if(cljs.core.truth_(inst_37073__$1)){
var statearr_37109_37151 = state_37092__$1;
(statearr_37109_37151[(1)] = (19));

} else {
var statearr_37110_37152 = state_37092__$1;
(statearr_37110_37152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (25))){
var inst_37082 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37111_37153 = state_37092__$1;
(statearr_37111_37153[(2)] = inst_37082);

(statearr_37111_37153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (17))){
var inst_37047 = (state_37092[(10)]);
var inst_37056 = cljs.core.first.call(null,inst_37047);
var inst_37057 = cljs.core.async.muxch_STAR_.call(null,inst_37056);
var inst_37058 = cljs.core.async.close_BANG_.call(null,inst_37057);
var inst_37059 = cljs.core.next.call(null,inst_37047);
var inst_37033 = inst_37059;
var inst_37034 = null;
var inst_37035 = (0);
var inst_37036 = (0);
var state_37092__$1 = (function (){var statearr_37112 = state_37092;
(statearr_37112[(12)] = inst_37036);

(statearr_37112[(13)] = inst_37034);

(statearr_37112[(14)] = inst_37058);

(statearr_37112[(15)] = inst_37035);

(statearr_37112[(16)] = inst_37033);

return statearr_37112;
})();
var statearr_37113_37154 = state_37092__$1;
(statearr_37113_37154[(2)] = null);

(statearr_37113_37154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (3))){
var inst_37090 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37092__$1,inst_37090);
} else {
if((state_val_37093 === (12))){
var inst_37067 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37114_37155 = state_37092__$1;
(statearr_37114_37155[(2)] = inst_37067);

(statearr_37114_37155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (2))){
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37092__$1,(4),ch);
} else {
if((state_val_37093 === (23))){
var state_37092__$1 = state_37092;
var statearr_37115_37156 = state_37092__$1;
(statearr_37115_37156[(2)] = null);

(statearr_37115_37156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (19))){
var inst_37023 = (state_37092[(8)]);
var inst_37073 = (state_37092[(11)]);
var inst_37075 = cljs.core.async.muxch_STAR_.call(null,inst_37073);
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37092__$1,(22),inst_37075,inst_37023);
} else {
if((state_val_37093 === (11))){
var inst_37047 = (state_37092[(10)]);
var inst_37033 = (state_37092[(16)]);
var inst_37047__$1 = cljs.core.seq.call(null,inst_37033);
var state_37092__$1 = (function (){var statearr_37116 = state_37092;
(statearr_37116[(10)] = inst_37047__$1);

return statearr_37116;
})();
if(inst_37047__$1){
var statearr_37117_37157 = state_37092__$1;
(statearr_37117_37157[(1)] = (13));

} else {
var statearr_37118_37158 = state_37092__$1;
(statearr_37118_37158[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (9))){
var inst_37069 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37119_37159 = state_37092__$1;
(statearr_37119_37159[(2)] = inst_37069);

(statearr_37119_37159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (5))){
var inst_37030 = cljs.core.deref.call(null,mults);
var inst_37031 = cljs.core.vals.call(null,inst_37030);
var inst_37032 = cljs.core.seq.call(null,inst_37031);
var inst_37033 = inst_37032;
var inst_37034 = null;
var inst_37035 = (0);
var inst_37036 = (0);
var state_37092__$1 = (function (){var statearr_37120 = state_37092;
(statearr_37120[(12)] = inst_37036);

(statearr_37120[(13)] = inst_37034);

(statearr_37120[(15)] = inst_37035);

(statearr_37120[(16)] = inst_37033);

return statearr_37120;
})();
var statearr_37121_37160 = state_37092__$1;
(statearr_37121_37160[(2)] = null);

(statearr_37121_37160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (14))){
var state_37092__$1 = state_37092;
var statearr_37125_37161 = state_37092__$1;
(statearr_37125_37161[(2)] = null);

(statearr_37125_37161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (16))){
var inst_37047 = (state_37092[(10)]);
var inst_37051 = cljs.core.chunk_first.call(null,inst_37047);
var inst_37052 = cljs.core.chunk_rest.call(null,inst_37047);
var inst_37053 = cljs.core.count.call(null,inst_37051);
var inst_37033 = inst_37052;
var inst_37034 = inst_37051;
var inst_37035 = inst_37053;
var inst_37036 = (0);
var state_37092__$1 = (function (){var statearr_37126 = state_37092;
(statearr_37126[(12)] = inst_37036);

(statearr_37126[(13)] = inst_37034);

(statearr_37126[(15)] = inst_37035);

(statearr_37126[(16)] = inst_37033);

return statearr_37126;
})();
var statearr_37127_37162 = state_37092__$1;
(statearr_37127_37162[(2)] = null);

(statearr_37127_37162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (10))){
var inst_37036 = (state_37092[(12)]);
var inst_37034 = (state_37092[(13)]);
var inst_37035 = (state_37092[(15)]);
var inst_37033 = (state_37092[(16)]);
var inst_37041 = cljs.core._nth.call(null,inst_37034,inst_37036);
var inst_37042 = cljs.core.async.muxch_STAR_.call(null,inst_37041);
var inst_37043 = cljs.core.async.close_BANG_.call(null,inst_37042);
var inst_37044 = (inst_37036 + (1));
var tmp37122 = inst_37034;
var tmp37123 = inst_37035;
var tmp37124 = inst_37033;
var inst_37033__$1 = tmp37124;
var inst_37034__$1 = tmp37122;
var inst_37035__$1 = tmp37123;
var inst_37036__$1 = inst_37044;
var state_37092__$1 = (function (){var statearr_37128 = state_37092;
(statearr_37128[(12)] = inst_37036__$1);

(statearr_37128[(13)] = inst_37034__$1);

(statearr_37128[(17)] = inst_37043);

(statearr_37128[(15)] = inst_37035__$1);

(statearr_37128[(16)] = inst_37033__$1);

return statearr_37128;
})();
var statearr_37129_37163 = state_37092__$1;
(statearr_37129_37163[(2)] = null);

(statearr_37129_37163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (18))){
var inst_37062 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37130_37164 = state_37092__$1;
(statearr_37130_37164[(2)] = inst_37062);

(statearr_37130_37164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (8))){
var inst_37036 = (state_37092[(12)]);
var inst_37035 = (state_37092[(15)]);
var inst_37038 = (inst_37036 < inst_37035);
var inst_37039 = inst_37038;
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37039)){
var statearr_37131_37165 = state_37092__$1;
(statearr_37131_37165[(1)] = (10));

} else {
var statearr_37132_37166 = state_37092__$1;
(statearr_37132_37166[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___37138,mults,ensure_mult,p))
;
return ((function (switch__35809__auto__,c__35904__auto___37138,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_37133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37133[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_37133[(1)] = (1));

return statearr_37133;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_37092){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_37092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e37134){if((e37134 instanceof Object)){
var ex__35813__auto__ = e37134;
var statearr_37135_37167 = state_37092;
(statearr_37135_37167[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37168 = state_37092;
state_37092 = G__37168;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_37092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_37092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___37138,mults,ensure_mult,p))
})();
var state__35906__auto__ = (function (){var statearr_37136 = f__35905__auto__.call(null);
(statearr_37136[(6)] = c__35904__auto___37138);

return statearr_37136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___37138,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37170 = arguments.length;
switch (G__37170) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37173 = arguments.length;
switch (G__37173) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__37176 = arguments.length;
switch (G__37176) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__35904__auto___37243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___37243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___37243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37215){
var state_val_37216 = (state_37215[(1)]);
if((state_val_37216 === (7))){
var state_37215__$1 = state_37215;
var statearr_37217_37244 = state_37215__$1;
(statearr_37217_37244[(2)] = null);

(statearr_37217_37244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (1))){
var state_37215__$1 = state_37215;
var statearr_37218_37245 = state_37215__$1;
(statearr_37218_37245[(2)] = null);

(statearr_37218_37245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (4))){
var inst_37179 = (state_37215[(7)]);
var inst_37181 = (inst_37179 < cnt);
var state_37215__$1 = state_37215;
if(cljs.core.truth_(inst_37181)){
var statearr_37219_37246 = state_37215__$1;
(statearr_37219_37246[(1)] = (6));

} else {
var statearr_37220_37247 = state_37215__$1;
(statearr_37220_37247[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (15))){
var inst_37211 = (state_37215[(2)]);
var state_37215__$1 = state_37215;
var statearr_37221_37248 = state_37215__$1;
(statearr_37221_37248[(2)] = inst_37211);

(statearr_37221_37248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (13))){
var inst_37204 = cljs.core.async.close_BANG_.call(null,out);
var state_37215__$1 = state_37215;
var statearr_37222_37249 = state_37215__$1;
(statearr_37222_37249[(2)] = inst_37204);

(statearr_37222_37249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (6))){
var state_37215__$1 = state_37215;
var statearr_37223_37250 = state_37215__$1;
(statearr_37223_37250[(2)] = null);

(statearr_37223_37250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (3))){
var inst_37213 = (state_37215[(2)]);
var state_37215__$1 = state_37215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37215__$1,inst_37213);
} else {
if((state_val_37216 === (12))){
var inst_37201 = (state_37215[(8)]);
var inst_37201__$1 = (state_37215[(2)]);
var inst_37202 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37201__$1);
var state_37215__$1 = (function (){var statearr_37224 = state_37215;
(statearr_37224[(8)] = inst_37201__$1);

return statearr_37224;
})();
if(cljs.core.truth_(inst_37202)){
var statearr_37225_37251 = state_37215__$1;
(statearr_37225_37251[(1)] = (13));

} else {
var statearr_37226_37252 = state_37215__$1;
(statearr_37226_37252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (2))){
var inst_37178 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37179 = (0);
var state_37215__$1 = (function (){var statearr_37227 = state_37215;
(statearr_37227[(7)] = inst_37179);

(statearr_37227[(9)] = inst_37178);

return statearr_37227;
})();
var statearr_37228_37253 = state_37215__$1;
(statearr_37228_37253[(2)] = null);

(statearr_37228_37253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (11))){
var inst_37179 = (state_37215[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37215,(10),Object,null,(9));
var inst_37188 = chs__$1.call(null,inst_37179);
var inst_37189 = done.call(null,inst_37179);
var inst_37190 = cljs.core.async.take_BANG_.call(null,inst_37188,inst_37189);
var state_37215__$1 = state_37215;
var statearr_37229_37254 = state_37215__$1;
(statearr_37229_37254[(2)] = inst_37190);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (9))){
var inst_37179 = (state_37215[(7)]);
var inst_37192 = (state_37215[(2)]);
var inst_37193 = (inst_37179 + (1));
var inst_37179__$1 = inst_37193;
var state_37215__$1 = (function (){var statearr_37230 = state_37215;
(statearr_37230[(10)] = inst_37192);

(statearr_37230[(7)] = inst_37179__$1);

return statearr_37230;
})();
var statearr_37231_37255 = state_37215__$1;
(statearr_37231_37255[(2)] = null);

(statearr_37231_37255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (5))){
var inst_37199 = (state_37215[(2)]);
var state_37215__$1 = (function (){var statearr_37232 = state_37215;
(statearr_37232[(11)] = inst_37199);

return statearr_37232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37215__$1,(12),dchan);
} else {
if((state_val_37216 === (14))){
var inst_37201 = (state_37215[(8)]);
var inst_37206 = cljs.core.apply.call(null,f,inst_37201);
var state_37215__$1 = state_37215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37215__$1,(16),out,inst_37206);
} else {
if((state_val_37216 === (16))){
var inst_37208 = (state_37215[(2)]);
var state_37215__$1 = (function (){var statearr_37233 = state_37215;
(statearr_37233[(12)] = inst_37208);

return statearr_37233;
})();
var statearr_37234_37256 = state_37215__$1;
(statearr_37234_37256[(2)] = null);

(statearr_37234_37256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (10))){
var inst_37183 = (state_37215[(2)]);
var inst_37184 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37215__$1 = (function (){var statearr_37235 = state_37215;
(statearr_37235[(13)] = inst_37183);

return statearr_37235;
})();
var statearr_37236_37257 = state_37215__$1;
(statearr_37236_37257[(2)] = inst_37184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37216 === (8))){
var inst_37197 = (state_37215[(2)]);
var state_37215__$1 = state_37215;
var statearr_37237_37258 = state_37215__$1;
(statearr_37237_37258[(2)] = inst_37197);

(statearr_37237_37258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___37243,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35809__auto__,c__35904__auto___37243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_37238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37238[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_37238[(1)] = (1));

return statearr_37238;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_37215){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_37215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e37239){if((e37239 instanceof Object)){
var ex__35813__auto__ = e37239;
var statearr_37240_37259 = state_37215;
(statearr_37240_37259[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37260 = state_37215;
state_37215 = G__37260;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_37215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_37215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___37243,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35906__auto__ = (function (){var statearr_37241 = f__35905__auto__.call(null);
(statearr_37241[(6)] = c__35904__auto___37243);

return statearr_37241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___37243,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37263 = arguments.length;
switch (G__37263) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35904__auto___37317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___37317,out){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___37317,out){
return (function (state_37295){
var state_val_37296 = (state_37295[(1)]);
if((state_val_37296 === (7))){
var inst_37275 = (state_37295[(7)]);
var inst_37274 = (state_37295[(8)]);
var inst_37274__$1 = (state_37295[(2)]);
var inst_37275__$1 = cljs.core.nth.call(null,inst_37274__$1,(0),null);
var inst_37276 = cljs.core.nth.call(null,inst_37274__$1,(1),null);
var inst_37277 = (inst_37275__$1 == null);
var state_37295__$1 = (function (){var statearr_37297 = state_37295;
(statearr_37297[(9)] = inst_37276);

(statearr_37297[(7)] = inst_37275__$1);

(statearr_37297[(8)] = inst_37274__$1);

return statearr_37297;
})();
if(cljs.core.truth_(inst_37277)){
var statearr_37298_37318 = state_37295__$1;
(statearr_37298_37318[(1)] = (8));

} else {
var statearr_37299_37319 = state_37295__$1;
(statearr_37299_37319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37296 === (1))){
var inst_37264 = cljs.core.vec.call(null,chs);
var inst_37265 = inst_37264;
var state_37295__$1 = (function (){var statearr_37300 = state_37295;
(statearr_37300[(10)] = inst_37265);

return statearr_37300;
})();
var statearr_37301_37320 = state_37295__$1;
(statearr_37301_37320[(2)] = null);

(statearr_37301_37320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37296 === (4))){
var inst_37265 = (state_37295[(10)]);
var state_37295__$1 = state_37295;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37295__$1,(7),inst_37265);
} else {
if((state_val_37296 === (6))){
var inst_37291 = (state_37295[(2)]);
var state_37295__$1 = state_37295;
var statearr_37302_37321 = state_37295__$1;
(statearr_37302_37321[(2)] = inst_37291);

(statearr_37302_37321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37296 === (3))){
var inst_37293 = (state_37295[(2)]);
var state_37295__$1 = state_37295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37295__$1,inst_37293);
} else {
if((state_val_37296 === (2))){
var inst_37265 = (state_37295[(10)]);
var inst_37267 = cljs.core.count.call(null,inst_37265);
var inst_37268 = (inst_37267 > (0));
var state_37295__$1 = state_37295;
if(cljs.core.truth_(inst_37268)){
var statearr_37304_37322 = state_37295__$1;
(statearr_37304_37322[(1)] = (4));

} else {
var statearr_37305_37323 = state_37295__$1;
(statearr_37305_37323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37296 === (11))){
var inst_37265 = (state_37295[(10)]);
var inst_37284 = (state_37295[(2)]);
var tmp37303 = inst_37265;
var inst_37265__$1 = tmp37303;
var state_37295__$1 = (function (){var statearr_37306 = state_37295;
(statearr_37306[(10)] = inst_37265__$1);

(statearr_37306[(11)] = inst_37284);

return statearr_37306;
})();
var statearr_37307_37324 = state_37295__$1;
(statearr_37307_37324[(2)] = null);

(statearr_37307_37324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37296 === (9))){
var inst_37275 = (state_37295[(7)]);
var state_37295__$1 = state_37295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37295__$1,(11),out,inst_37275);
} else {
if((state_val_37296 === (5))){
var inst_37289 = cljs.core.async.close_BANG_.call(null,out);
var state_37295__$1 = state_37295;
var statearr_37308_37325 = state_37295__$1;
(statearr_37308_37325[(2)] = inst_37289);

(statearr_37308_37325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37296 === (10))){
var inst_37287 = (state_37295[(2)]);
var state_37295__$1 = state_37295;
var statearr_37309_37326 = state_37295__$1;
(statearr_37309_37326[(2)] = inst_37287);

(statearr_37309_37326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37296 === (8))){
var inst_37276 = (state_37295[(9)]);
var inst_37275 = (state_37295[(7)]);
var inst_37274 = (state_37295[(8)]);
var inst_37265 = (state_37295[(10)]);
var inst_37279 = (function (){var cs = inst_37265;
var vec__37270 = inst_37274;
var v = inst_37275;
var c = inst_37276;
return ((function (cs,vec__37270,v,c,inst_37276,inst_37275,inst_37274,inst_37265,state_val_37296,c__35904__auto___37317,out){
return (function (p1__37261_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37261_SHARP_);
});
;})(cs,vec__37270,v,c,inst_37276,inst_37275,inst_37274,inst_37265,state_val_37296,c__35904__auto___37317,out))
})();
var inst_37280 = cljs.core.filterv.call(null,inst_37279,inst_37265);
var inst_37265__$1 = inst_37280;
var state_37295__$1 = (function (){var statearr_37310 = state_37295;
(statearr_37310[(10)] = inst_37265__$1);

return statearr_37310;
})();
var statearr_37311_37327 = state_37295__$1;
(statearr_37311_37327[(2)] = null);

(statearr_37311_37327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___37317,out))
;
return ((function (switch__35809__auto__,c__35904__auto___37317,out){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_37312 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37312[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_37312[(1)] = (1));

return statearr_37312;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_37295){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_37295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e37313){if((e37313 instanceof Object)){
var ex__35813__auto__ = e37313;
var statearr_37314_37328 = state_37295;
(statearr_37314_37328[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37329 = state_37295;
state_37295 = G__37329;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_37295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_37295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___37317,out))
})();
var state__35906__auto__ = (function (){var statearr_37315 = f__35905__auto__.call(null);
(statearr_37315[(6)] = c__35904__auto___37317);

return statearr_37315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___37317,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37331 = arguments.length;
switch (G__37331) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35904__auto___37376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___37376,out){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___37376,out){
return (function (state_37355){
var state_val_37356 = (state_37355[(1)]);
if((state_val_37356 === (7))){
var inst_37337 = (state_37355[(7)]);
var inst_37337__$1 = (state_37355[(2)]);
var inst_37338 = (inst_37337__$1 == null);
var inst_37339 = cljs.core.not.call(null,inst_37338);
var state_37355__$1 = (function (){var statearr_37357 = state_37355;
(statearr_37357[(7)] = inst_37337__$1);

return statearr_37357;
})();
if(inst_37339){
var statearr_37358_37377 = state_37355__$1;
(statearr_37358_37377[(1)] = (8));

} else {
var statearr_37359_37378 = state_37355__$1;
(statearr_37359_37378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (1))){
var inst_37332 = (0);
var state_37355__$1 = (function (){var statearr_37360 = state_37355;
(statearr_37360[(8)] = inst_37332);

return statearr_37360;
})();
var statearr_37361_37379 = state_37355__$1;
(statearr_37361_37379[(2)] = null);

(statearr_37361_37379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (4))){
var state_37355__$1 = state_37355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37355__$1,(7),ch);
} else {
if((state_val_37356 === (6))){
var inst_37350 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
var statearr_37362_37380 = state_37355__$1;
(statearr_37362_37380[(2)] = inst_37350);

(statearr_37362_37380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (3))){
var inst_37352 = (state_37355[(2)]);
var inst_37353 = cljs.core.async.close_BANG_.call(null,out);
var state_37355__$1 = (function (){var statearr_37363 = state_37355;
(statearr_37363[(9)] = inst_37352);

return statearr_37363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37355__$1,inst_37353);
} else {
if((state_val_37356 === (2))){
var inst_37332 = (state_37355[(8)]);
var inst_37334 = (inst_37332 < n);
var state_37355__$1 = state_37355;
if(cljs.core.truth_(inst_37334)){
var statearr_37364_37381 = state_37355__$1;
(statearr_37364_37381[(1)] = (4));

} else {
var statearr_37365_37382 = state_37355__$1;
(statearr_37365_37382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (11))){
var inst_37332 = (state_37355[(8)]);
var inst_37342 = (state_37355[(2)]);
var inst_37343 = (inst_37332 + (1));
var inst_37332__$1 = inst_37343;
var state_37355__$1 = (function (){var statearr_37366 = state_37355;
(statearr_37366[(8)] = inst_37332__$1);

(statearr_37366[(10)] = inst_37342);

return statearr_37366;
})();
var statearr_37367_37383 = state_37355__$1;
(statearr_37367_37383[(2)] = null);

(statearr_37367_37383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (9))){
var state_37355__$1 = state_37355;
var statearr_37368_37384 = state_37355__$1;
(statearr_37368_37384[(2)] = null);

(statearr_37368_37384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (5))){
var state_37355__$1 = state_37355;
var statearr_37369_37385 = state_37355__$1;
(statearr_37369_37385[(2)] = null);

(statearr_37369_37385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (10))){
var inst_37347 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
var statearr_37370_37386 = state_37355__$1;
(statearr_37370_37386[(2)] = inst_37347);

(statearr_37370_37386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (8))){
var inst_37337 = (state_37355[(7)]);
var state_37355__$1 = state_37355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37355__$1,(11),out,inst_37337);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___37376,out))
;
return ((function (switch__35809__auto__,c__35904__auto___37376,out){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_37371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37371[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_37371[(1)] = (1));

return statearr_37371;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_37355){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_37355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e37372){if((e37372 instanceof Object)){
var ex__35813__auto__ = e37372;
var statearr_37373_37387 = state_37355;
(statearr_37373_37387[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37388 = state_37355;
state_37355 = G__37388;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_37355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_37355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___37376,out))
})();
var state__35906__auto__ = (function (){var statearr_37374 = f__35905__auto__.call(null);
(statearr_37374[(6)] = c__35904__auto___37376);

return statearr_37374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___37376,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37390 = (function (f,ch,meta37391){
this.f = f;
this.ch = ch;
this.meta37391 = meta37391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37392,meta37391__$1){
var self__ = this;
var _37392__$1 = this;
return (new cljs.core.async.t_cljs$core$async37390(self__.f,self__.ch,meta37391__$1));
});

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37392){
var self__ = this;
var _37392__$1 = this;
return self__.meta37391;
});

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37393 = (function (f,ch,meta37391,_,fn1,meta37394){
this.f = f;
this.ch = ch;
this.meta37391 = meta37391;
this._ = _;
this.fn1 = fn1;
this.meta37394 = meta37394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37395,meta37394__$1){
var self__ = this;
var _37395__$1 = this;
return (new cljs.core.async.t_cljs$core$async37393(self__.f,self__.ch,self__.meta37391,self__._,self__.fn1,meta37394__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37395){
var self__ = this;
var _37395__$1 = this;
return self__.meta37394;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37389_SHARP_){
return f1.call(null,(((p1__37389_SHARP_ == null))?null:self__.f.call(null,p1__37389_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37393.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37391","meta37391",-1863668214,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37390","cljs.core.async/t_cljs$core$async37390",1890522855,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37394","meta37394",-1436523363,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37393";

cljs.core.async.t_cljs$core$async37393.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async37393");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37393.
 */
cljs.core.async.__GT_t_cljs$core$async37393 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37393(f__$1,ch__$1,meta37391__$1,___$2,fn1__$1,meta37394){
return (new cljs.core.async.t_cljs$core$async37393(f__$1,ch__$1,meta37391__$1,___$2,fn1__$1,meta37394));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37393(self__.f,self__.ch,self__.meta37391,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37391","meta37391",-1863668214,null)], null);
});

cljs.core.async.t_cljs$core$async37390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37390";

cljs.core.async.t_cljs$core$async37390.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async37390");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37390.
 */
cljs.core.async.__GT_t_cljs$core$async37390 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37390(f__$1,ch__$1,meta37391){
return (new cljs.core.async.t_cljs$core$async37390(f__$1,ch__$1,meta37391));
});

}

return (new cljs.core.async.t_cljs$core$async37390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37396 = (function (f,ch,meta37397){
this.f = f;
this.ch = ch;
this.meta37397 = meta37397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37398,meta37397__$1){
var self__ = this;
var _37398__$1 = this;
return (new cljs.core.async.t_cljs$core$async37396(self__.f,self__.ch,meta37397__$1));
});

cljs.core.async.t_cljs$core$async37396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37398){
var self__ = this;
var _37398__$1 = this;
return self__.meta37397;
});

cljs.core.async.t_cljs$core$async37396.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37396.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37396.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37397","meta37397",-217484005,null)], null);
});

cljs.core.async.t_cljs$core$async37396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37396";

cljs.core.async.t_cljs$core$async37396.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async37396");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37396.
 */
cljs.core.async.__GT_t_cljs$core$async37396 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37396(f__$1,ch__$1,meta37397){
return (new cljs.core.async.t_cljs$core$async37396(f__$1,ch__$1,meta37397));
});

}

return (new cljs.core.async.t_cljs$core$async37396(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37399 = (function (p,ch,meta37400){
this.p = p;
this.ch = ch;
this.meta37400 = meta37400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37401,meta37400__$1){
var self__ = this;
var _37401__$1 = this;
return (new cljs.core.async.t_cljs$core$async37399(self__.p,self__.ch,meta37400__$1));
});

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37401){
var self__ = this;
var _37401__$1 = this;
return self__.meta37400;
});

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37400","meta37400",-1680796556,null)], null);
});

cljs.core.async.t_cljs$core$async37399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37399";

cljs.core.async.t_cljs$core$async37399.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async37399");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37399.
 */
cljs.core.async.__GT_t_cljs$core$async37399 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37399(p__$1,ch__$1,meta37400){
return (new cljs.core.async.t_cljs$core$async37399(p__$1,ch__$1,meta37400));
});

}

return (new cljs.core.async.t_cljs$core$async37399(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37403 = arguments.length;
switch (G__37403) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35904__auto___37443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___37443,out){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___37443,out){
return (function (state_37424){
var state_val_37425 = (state_37424[(1)]);
if((state_val_37425 === (7))){
var inst_37420 = (state_37424[(2)]);
var state_37424__$1 = state_37424;
var statearr_37426_37444 = state_37424__$1;
(statearr_37426_37444[(2)] = inst_37420);

(statearr_37426_37444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37425 === (1))){
var state_37424__$1 = state_37424;
var statearr_37427_37445 = state_37424__$1;
(statearr_37427_37445[(2)] = null);

(statearr_37427_37445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37425 === (4))){
var inst_37406 = (state_37424[(7)]);
var inst_37406__$1 = (state_37424[(2)]);
var inst_37407 = (inst_37406__$1 == null);
var state_37424__$1 = (function (){var statearr_37428 = state_37424;
(statearr_37428[(7)] = inst_37406__$1);

return statearr_37428;
})();
if(cljs.core.truth_(inst_37407)){
var statearr_37429_37446 = state_37424__$1;
(statearr_37429_37446[(1)] = (5));

} else {
var statearr_37430_37447 = state_37424__$1;
(statearr_37430_37447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37425 === (6))){
var inst_37406 = (state_37424[(7)]);
var inst_37411 = p.call(null,inst_37406);
var state_37424__$1 = state_37424;
if(cljs.core.truth_(inst_37411)){
var statearr_37431_37448 = state_37424__$1;
(statearr_37431_37448[(1)] = (8));

} else {
var statearr_37432_37449 = state_37424__$1;
(statearr_37432_37449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37425 === (3))){
var inst_37422 = (state_37424[(2)]);
var state_37424__$1 = state_37424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37424__$1,inst_37422);
} else {
if((state_val_37425 === (2))){
var state_37424__$1 = state_37424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37424__$1,(4),ch);
} else {
if((state_val_37425 === (11))){
var inst_37414 = (state_37424[(2)]);
var state_37424__$1 = state_37424;
var statearr_37433_37450 = state_37424__$1;
(statearr_37433_37450[(2)] = inst_37414);

(statearr_37433_37450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37425 === (9))){
var state_37424__$1 = state_37424;
var statearr_37434_37451 = state_37424__$1;
(statearr_37434_37451[(2)] = null);

(statearr_37434_37451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37425 === (5))){
var inst_37409 = cljs.core.async.close_BANG_.call(null,out);
var state_37424__$1 = state_37424;
var statearr_37435_37452 = state_37424__$1;
(statearr_37435_37452[(2)] = inst_37409);

(statearr_37435_37452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37425 === (10))){
var inst_37417 = (state_37424[(2)]);
var state_37424__$1 = (function (){var statearr_37436 = state_37424;
(statearr_37436[(8)] = inst_37417);

return statearr_37436;
})();
var statearr_37437_37453 = state_37424__$1;
(statearr_37437_37453[(2)] = null);

(statearr_37437_37453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37425 === (8))){
var inst_37406 = (state_37424[(7)]);
var state_37424__$1 = state_37424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37424__$1,(11),out,inst_37406);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___37443,out))
;
return ((function (switch__35809__auto__,c__35904__auto___37443,out){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_37438 = [null,null,null,null,null,null,null,null,null];
(statearr_37438[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_37438[(1)] = (1));

return statearr_37438;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_37424){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_37424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e37439){if((e37439 instanceof Object)){
var ex__35813__auto__ = e37439;
var statearr_37440_37454 = state_37424;
(statearr_37440_37454[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37455 = state_37424;
state_37424 = G__37455;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_37424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_37424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___37443,out))
})();
var state__35906__auto__ = (function (){var statearr_37441 = f__35905__auto__.call(null);
(statearr_37441[(6)] = c__35904__auto___37443);

return statearr_37441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___37443,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37457 = arguments.length;
switch (G__37457) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__){
return (function (state_37520){
var state_val_37521 = (state_37520[(1)]);
if((state_val_37521 === (7))){
var inst_37516 = (state_37520[(2)]);
var state_37520__$1 = state_37520;
var statearr_37522_37560 = state_37520__$1;
(statearr_37522_37560[(2)] = inst_37516);

(statearr_37522_37560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (20))){
var inst_37486 = (state_37520[(7)]);
var inst_37497 = (state_37520[(2)]);
var inst_37498 = cljs.core.next.call(null,inst_37486);
var inst_37472 = inst_37498;
var inst_37473 = null;
var inst_37474 = (0);
var inst_37475 = (0);
var state_37520__$1 = (function (){var statearr_37523 = state_37520;
(statearr_37523[(8)] = inst_37473);

(statearr_37523[(9)] = inst_37497);

(statearr_37523[(10)] = inst_37474);

(statearr_37523[(11)] = inst_37472);

(statearr_37523[(12)] = inst_37475);

return statearr_37523;
})();
var statearr_37524_37561 = state_37520__$1;
(statearr_37524_37561[(2)] = null);

(statearr_37524_37561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (1))){
var state_37520__$1 = state_37520;
var statearr_37525_37562 = state_37520__$1;
(statearr_37525_37562[(2)] = null);

(statearr_37525_37562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (4))){
var inst_37461 = (state_37520[(13)]);
var inst_37461__$1 = (state_37520[(2)]);
var inst_37462 = (inst_37461__$1 == null);
var state_37520__$1 = (function (){var statearr_37526 = state_37520;
(statearr_37526[(13)] = inst_37461__$1);

return statearr_37526;
})();
if(cljs.core.truth_(inst_37462)){
var statearr_37527_37563 = state_37520__$1;
(statearr_37527_37563[(1)] = (5));

} else {
var statearr_37528_37564 = state_37520__$1;
(statearr_37528_37564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (15))){
var state_37520__$1 = state_37520;
var statearr_37532_37565 = state_37520__$1;
(statearr_37532_37565[(2)] = null);

(statearr_37532_37565[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (21))){
var state_37520__$1 = state_37520;
var statearr_37533_37566 = state_37520__$1;
(statearr_37533_37566[(2)] = null);

(statearr_37533_37566[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (13))){
var inst_37473 = (state_37520[(8)]);
var inst_37474 = (state_37520[(10)]);
var inst_37472 = (state_37520[(11)]);
var inst_37475 = (state_37520[(12)]);
var inst_37482 = (state_37520[(2)]);
var inst_37483 = (inst_37475 + (1));
var tmp37529 = inst_37473;
var tmp37530 = inst_37474;
var tmp37531 = inst_37472;
var inst_37472__$1 = tmp37531;
var inst_37473__$1 = tmp37529;
var inst_37474__$1 = tmp37530;
var inst_37475__$1 = inst_37483;
var state_37520__$1 = (function (){var statearr_37534 = state_37520;
(statearr_37534[(8)] = inst_37473__$1);

(statearr_37534[(10)] = inst_37474__$1);

(statearr_37534[(11)] = inst_37472__$1);

(statearr_37534[(12)] = inst_37475__$1);

(statearr_37534[(14)] = inst_37482);

return statearr_37534;
})();
var statearr_37535_37567 = state_37520__$1;
(statearr_37535_37567[(2)] = null);

(statearr_37535_37567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (22))){
var state_37520__$1 = state_37520;
var statearr_37536_37568 = state_37520__$1;
(statearr_37536_37568[(2)] = null);

(statearr_37536_37568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (6))){
var inst_37461 = (state_37520[(13)]);
var inst_37470 = f.call(null,inst_37461);
var inst_37471 = cljs.core.seq.call(null,inst_37470);
var inst_37472 = inst_37471;
var inst_37473 = null;
var inst_37474 = (0);
var inst_37475 = (0);
var state_37520__$1 = (function (){var statearr_37537 = state_37520;
(statearr_37537[(8)] = inst_37473);

(statearr_37537[(10)] = inst_37474);

(statearr_37537[(11)] = inst_37472);

(statearr_37537[(12)] = inst_37475);

return statearr_37537;
})();
var statearr_37538_37569 = state_37520__$1;
(statearr_37538_37569[(2)] = null);

(statearr_37538_37569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (17))){
var inst_37486 = (state_37520[(7)]);
var inst_37490 = cljs.core.chunk_first.call(null,inst_37486);
var inst_37491 = cljs.core.chunk_rest.call(null,inst_37486);
var inst_37492 = cljs.core.count.call(null,inst_37490);
var inst_37472 = inst_37491;
var inst_37473 = inst_37490;
var inst_37474 = inst_37492;
var inst_37475 = (0);
var state_37520__$1 = (function (){var statearr_37539 = state_37520;
(statearr_37539[(8)] = inst_37473);

(statearr_37539[(10)] = inst_37474);

(statearr_37539[(11)] = inst_37472);

(statearr_37539[(12)] = inst_37475);

return statearr_37539;
})();
var statearr_37540_37570 = state_37520__$1;
(statearr_37540_37570[(2)] = null);

(statearr_37540_37570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (3))){
var inst_37518 = (state_37520[(2)]);
var state_37520__$1 = state_37520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37520__$1,inst_37518);
} else {
if((state_val_37521 === (12))){
var inst_37506 = (state_37520[(2)]);
var state_37520__$1 = state_37520;
var statearr_37541_37571 = state_37520__$1;
(statearr_37541_37571[(2)] = inst_37506);

(statearr_37541_37571[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (2))){
var state_37520__$1 = state_37520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37520__$1,(4),in$);
} else {
if((state_val_37521 === (23))){
var inst_37514 = (state_37520[(2)]);
var state_37520__$1 = state_37520;
var statearr_37542_37572 = state_37520__$1;
(statearr_37542_37572[(2)] = inst_37514);

(statearr_37542_37572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (19))){
var inst_37501 = (state_37520[(2)]);
var state_37520__$1 = state_37520;
var statearr_37543_37573 = state_37520__$1;
(statearr_37543_37573[(2)] = inst_37501);

(statearr_37543_37573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (11))){
var inst_37486 = (state_37520[(7)]);
var inst_37472 = (state_37520[(11)]);
var inst_37486__$1 = cljs.core.seq.call(null,inst_37472);
var state_37520__$1 = (function (){var statearr_37544 = state_37520;
(statearr_37544[(7)] = inst_37486__$1);

return statearr_37544;
})();
if(inst_37486__$1){
var statearr_37545_37574 = state_37520__$1;
(statearr_37545_37574[(1)] = (14));

} else {
var statearr_37546_37575 = state_37520__$1;
(statearr_37546_37575[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (9))){
var inst_37508 = (state_37520[(2)]);
var inst_37509 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37520__$1 = (function (){var statearr_37547 = state_37520;
(statearr_37547[(15)] = inst_37508);

return statearr_37547;
})();
if(cljs.core.truth_(inst_37509)){
var statearr_37548_37576 = state_37520__$1;
(statearr_37548_37576[(1)] = (21));

} else {
var statearr_37549_37577 = state_37520__$1;
(statearr_37549_37577[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (5))){
var inst_37464 = cljs.core.async.close_BANG_.call(null,out);
var state_37520__$1 = state_37520;
var statearr_37550_37578 = state_37520__$1;
(statearr_37550_37578[(2)] = inst_37464);

(statearr_37550_37578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (14))){
var inst_37486 = (state_37520[(7)]);
var inst_37488 = cljs.core.chunked_seq_QMARK_.call(null,inst_37486);
var state_37520__$1 = state_37520;
if(inst_37488){
var statearr_37551_37579 = state_37520__$1;
(statearr_37551_37579[(1)] = (17));

} else {
var statearr_37552_37580 = state_37520__$1;
(statearr_37552_37580[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (16))){
var inst_37504 = (state_37520[(2)]);
var state_37520__$1 = state_37520;
var statearr_37553_37581 = state_37520__$1;
(statearr_37553_37581[(2)] = inst_37504);

(statearr_37553_37581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37521 === (10))){
var inst_37473 = (state_37520[(8)]);
var inst_37475 = (state_37520[(12)]);
var inst_37480 = cljs.core._nth.call(null,inst_37473,inst_37475);
var state_37520__$1 = state_37520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37520__$1,(13),out,inst_37480);
} else {
if((state_val_37521 === (18))){
var inst_37486 = (state_37520[(7)]);
var inst_37495 = cljs.core.first.call(null,inst_37486);
var state_37520__$1 = state_37520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37520__$1,(20),out,inst_37495);
} else {
if((state_val_37521 === (8))){
var inst_37474 = (state_37520[(10)]);
var inst_37475 = (state_37520[(12)]);
var inst_37477 = (inst_37475 < inst_37474);
var inst_37478 = inst_37477;
var state_37520__$1 = state_37520;
if(cljs.core.truth_(inst_37478)){
var statearr_37554_37582 = state_37520__$1;
(statearr_37554_37582[(1)] = (10));

} else {
var statearr_37555_37583 = state_37520__$1;
(statearr_37555_37583[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto__))
;
return ((function (switch__35809__auto__,c__35904__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35810__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35810__auto____0 = (function (){
var statearr_37556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37556[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35810__auto__);

(statearr_37556[(1)] = (1));

return statearr_37556;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35810__auto____1 = (function (state_37520){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_37520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e37557){if((e37557 instanceof Object)){
var ex__35813__auto__ = e37557;
var statearr_37558_37584 = state_37520;
(statearr_37558_37584[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37585 = state_37520;
state_37520 = G__37585;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35810__auto__ = function(state_37520){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35810__auto____1.call(this,state_37520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35810__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35810__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__))
})();
var state__35906__auto__ = (function (){var statearr_37559 = f__35905__auto__.call(null);
(statearr_37559[(6)] = c__35904__auto__);

return statearr_37559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__))
);

return c__35904__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37587 = arguments.length;
switch (G__37587) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37590 = arguments.length;
switch (G__37590) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37593 = arguments.length;
switch (G__37593) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35904__auto___37640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___37640,out){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___37640,out){
return (function (state_37617){
var state_val_37618 = (state_37617[(1)]);
if((state_val_37618 === (7))){
var inst_37612 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
var statearr_37619_37641 = state_37617__$1;
(statearr_37619_37641[(2)] = inst_37612);

(statearr_37619_37641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (1))){
var inst_37594 = null;
var state_37617__$1 = (function (){var statearr_37620 = state_37617;
(statearr_37620[(7)] = inst_37594);

return statearr_37620;
})();
var statearr_37621_37642 = state_37617__$1;
(statearr_37621_37642[(2)] = null);

(statearr_37621_37642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (4))){
var inst_37597 = (state_37617[(8)]);
var inst_37597__$1 = (state_37617[(2)]);
var inst_37598 = (inst_37597__$1 == null);
var inst_37599 = cljs.core.not.call(null,inst_37598);
var state_37617__$1 = (function (){var statearr_37622 = state_37617;
(statearr_37622[(8)] = inst_37597__$1);

return statearr_37622;
})();
if(inst_37599){
var statearr_37623_37643 = state_37617__$1;
(statearr_37623_37643[(1)] = (5));

} else {
var statearr_37624_37644 = state_37617__$1;
(statearr_37624_37644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (6))){
var state_37617__$1 = state_37617;
var statearr_37625_37645 = state_37617__$1;
(statearr_37625_37645[(2)] = null);

(statearr_37625_37645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (3))){
var inst_37614 = (state_37617[(2)]);
var inst_37615 = cljs.core.async.close_BANG_.call(null,out);
var state_37617__$1 = (function (){var statearr_37626 = state_37617;
(statearr_37626[(9)] = inst_37614);

return statearr_37626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37617__$1,inst_37615);
} else {
if((state_val_37618 === (2))){
var state_37617__$1 = state_37617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37617__$1,(4),ch);
} else {
if((state_val_37618 === (11))){
var inst_37597 = (state_37617[(8)]);
var inst_37606 = (state_37617[(2)]);
var inst_37594 = inst_37597;
var state_37617__$1 = (function (){var statearr_37627 = state_37617;
(statearr_37627[(10)] = inst_37606);

(statearr_37627[(7)] = inst_37594);

return statearr_37627;
})();
var statearr_37628_37646 = state_37617__$1;
(statearr_37628_37646[(2)] = null);

(statearr_37628_37646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (9))){
var inst_37597 = (state_37617[(8)]);
var state_37617__$1 = state_37617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37617__$1,(11),out,inst_37597);
} else {
if((state_val_37618 === (5))){
var inst_37597 = (state_37617[(8)]);
var inst_37594 = (state_37617[(7)]);
var inst_37601 = cljs.core._EQ_.call(null,inst_37597,inst_37594);
var state_37617__$1 = state_37617;
if(inst_37601){
var statearr_37630_37647 = state_37617__$1;
(statearr_37630_37647[(1)] = (8));

} else {
var statearr_37631_37648 = state_37617__$1;
(statearr_37631_37648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (10))){
var inst_37609 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
var statearr_37632_37649 = state_37617__$1;
(statearr_37632_37649[(2)] = inst_37609);

(statearr_37632_37649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (8))){
var inst_37594 = (state_37617[(7)]);
var tmp37629 = inst_37594;
var inst_37594__$1 = tmp37629;
var state_37617__$1 = (function (){var statearr_37633 = state_37617;
(statearr_37633[(7)] = inst_37594__$1);

return statearr_37633;
})();
var statearr_37634_37650 = state_37617__$1;
(statearr_37634_37650[(2)] = null);

(statearr_37634_37650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___37640,out))
;
return ((function (switch__35809__auto__,c__35904__auto___37640,out){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_37635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37635[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_37635[(1)] = (1));

return statearr_37635;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_37617){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_37617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e37636){if((e37636 instanceof Object)){
var ex__35813__auto__ = e37636;
var statearr_37637_37651 = state_37617;
(statearr_37637_37651[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37652 = state_37617;
state_37617 = G__37652;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_37617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_37617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___37640,out))
})();
var state__35906__auto__ = (function (){var statearr_37638 = f__35905__auto__.call(null);
(statearr_37638[(6)] = c__35904__auto___37640);

return statearr_37638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___37640,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37654 = arguments.length;
switch (G__37654) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35904__auto___37720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___37720,out){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___37720,out){
return (function (state_37692){
var state_val_37693 = (state_37692[(1)]);
if((state_val_37693 === (7))){
var inst_37688 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37694_37721 = state_37692__$1;
(statearr_37694_37721[(2)] = inst_37688);

(statearr_37694_37721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (1))){
var inst_37655 = (new Array(n));
var inst_37656 = inst_37655;
var inst_37657 = (0);
var state_37692__$1 = (function (){var statearr_37695 = state_37692;
(statearr_37695[(7)] = inst_37656);

(statearr_37695[(8)] = inst_37657);

return statearr_37695;
})();
var statearr_37696_37722 = state_37692__$1;
(statearr_37696_37722[(2)] = null);

(statearr_37696_37722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (4))){
var inst_37660 = (state_37692[(9)]);
var inst_37660__$1 = (state_37692[(2)]);
var inst_37661 = (inst_37660__$1 == null);
var inst_37662 = cljs.core.not.call(null,inst_37661);
var state_37692__$1 = (function (){var statearr_37697 = state_37692;
(statearr_37697[(9)] = inst_37660__$1);

return statearr_37697;
})();
if(inst_37662){
var statearr_37698_37723 = state_37692__$1;
(statearr_37698_37723[(1)] = (5));

} else {
var statearr_37699_37724 = state_37692__$1;
(statearr_37699_37724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (15))){
var inst_37682 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37700_37725 = state_37692__$1;
(statearr_37700_37725[(2)] = inst_37682);

(statearr_37700_37725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (13))){
var state_37692__$1 = state_37692;
var statearr_37701_37726 = state_37692__$1;
(statearr_37701_37726[(2)] = null);

(statearr_37701_37726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (6))){
var inst_37657 = (state_37692[(8)]);
var inst_37678 = (inst_37657 > (0));
var state_37692__$1 = state_37692;
if(cljs.core.truth_(inst_37678)){
var statearr_37702_37727 = state_37692__$1;
(statearr_37702_37727[(1)] = (12));

} else {
var statearr_37703_37728 = state_37692__$1;
(statearr_37703_37728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (3))){
var inst_37690 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37692__$1,inst_37690);
} else {
if((state_val_37693 === (12))){
var inst_37656 = (state_37692[(7)]);
var inst_37680 = cljs.core.vec.call(null,inst_37656);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37692__$1,(15),out,inst_37680);
} else {
if((state_val_37693 === (2))){
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37692__$1,(4),ch);
} else {
if((state_val_37693 === (11))){
var inst_37672 = (state_37692[(2)]);
var inst_37673 = (new Array(n));
var inst_37656 = inst_37673;
var inst_37657 = (0);
var state_37692__$1 = (function (){var statearr_37704 = state_37692;
(statearr_37704[(7)] = inst_37656);

(statearr_37704[(10)] = inst_37672);

(statearr_37704[(8)] = inst_37657);

return statearr_37704;
})();
var statearr_37705_37729 = state_37692__$1;
(statearr_37705_37729[(2)] = null);

(statearr_37705_37729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (9))){
var inst_37656 = (state_37692[(7)]);
var inst_37670 = cljs.core.vec.call(null,inst_37656);
var state_37692__$1 = state_37692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37692__$1,(11),out,inst_37670);
} else {
if((state_val_37693 === (5))){
var inst_37656 = (state_37692[(7)]);
var inst_37660 = (state_37692[(9)]);
var inst_37657 = (state_37692[(8)]);
var inst_37665 = (state_37692[(11)]);
var inst_37664 = (inst_37656[inst_37657] = inst_37660);
var inst_37665__$1 = (inst_37657 + (1));
var inst_37666 = (inst_37665__$1 < n);
var state_37692__$1 = (function (){var statearr_37706 = state_37692;
(statearr_37706[(12)] = inst_37664);

(statearr_37706[(11)] = inst_37665__$1);

return statearr_37706;
})();
if(cljs.core.truth_(inst_37666)){
var statearr_37707_37730 = state_37692__$1;
(statearr_37707_37730[(1)] = (8));

} else {
var statearr_37708_37731 = state_37692__$1;
(statearr_37708_37731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (14))){
var inst_37685 = (state_37692[(2)]);
var inst_37686 = cljs.core.async.close_BANG_.call(null,out);
var state_37692__$1 = (function (){var statearr_37710 = state_37692;
(statearr_37710[(13)] = inst_37685);

return statearr_37710;
})();
var statearr_37711_37732 = state_37692__$1;
(statearr_37711_37732[(2)] = inst_37686);

(statearr_37711_37732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (10))){
var inst_37676 = (state_37692[(2)]);
var state_37692__$1 = state_37692;
var statearr_37712_37733 = state_37692__$1;
(statearr_37712_37733[(2)] = inst_37676);

(statearr_37712_37733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37693 === (8))){
var inst_37656 = (state_37692[(7)]);
var inst_37665 = (state_37692[(11)]);
var tmp37709 = inst_37656;
var inst_37656__$1 = tmp37709;
var inst_37657 = inst_37665;
var state_37692__$1 = (function (){var statearr_37713 = state_37692;
(statearr_37713[(7)] = inst_37656__$1);

(statearr_37713[(8)] = inst_37657);

return statearr_37713;
})();
var statearr_37714_37734 = state_37692__$1;
(statearr_37714_37734[(2)] = null);

(statearr_37714_37734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___37720,out))
;
return ((function (switch__35809__auto__,c__35904__auto___37720,out){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_37715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37715[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_37715[(1)] = (1));

return statearr_37715;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_37692){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_37692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e37716){if((e37716 instanceof Object)){
var ex__35813__auto__ = e37716;
var statearr_37717_37735 = state_37692;
(statearr_37717_37735[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37736 = state_37692;
state_37692 = G__37736;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_37692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_37692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___37720,out))
})();
var state__35906__auto__ = (function (){var statearr_37718 = f__35905__auto__.call(null);
(statearr_37718[(6)] = c__35904__auto___37720);

return statearr_37718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___37720,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37738 = arguments.length;
switch (G__37738) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35904__auto___37808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___37808,out){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___37808,out){
return (function (state_37780){
var state_val_37781 = (state_37780[(1)]);
if((state_val_37781 === (7))){
var inst_37776 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
var statearr_37782_37809 = state_37780__$1;
(statearr_37782_37809[(2)] = inst_37776);

(statearr_37782_37809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (1))){
var inst_37739 = [];
var inst_37740 = inst_37739;
var inst_37741 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37780__$1 = (function (){var statearr_37783 = state_37780;
(statearr_37783[(7)] = inst_37740);

(statearr_37783[(8)] = inst_37741);

return statearr_37783;
})();
var statearr_37784_37810 = state_37780__$1;
(statearr_37784_37810[(2)] = null);

(statearr_37784_37810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (4))){
var inst_37744 = (state_37780[(9)]);
var inst_37744__$1 = (state_37780[(2)]);
var inst_37745 = (inst_37744__$1 == null);
var inst_37746 = cljs.core.not.call(null,inst_37745);
var state_37780__$1 = (function (){var statearr_37785 = state_37780;
(statearr_37785[(9)] = inst_37744__$1);

return statearr_37785;
})();
if(inst_37746){
var statearr_37786_37811 = state_37780__$1;
(statearr_37786_37811[(1)] = (5));

} else {
var statearr_37787_37812 = state_37780__$1;
(statearr_37787_37812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (15))){
var inst_37770 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
var statearr_37788_37813 = state_37780__$1;
(statearr_37788_37813[(2)] = inst_37770);

(statearr_37788_37813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (13))){
var state_37780__$1 = state_37780;
var statearr_37789_37814 = state_37780__$1;
(statearr_37789_37814[(2)] = null);

(statearr_37789_37814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (6))){
var inst_37740 = (state_37780[(7)]);
var inst_37765 = inst_37740.length;
var inst_37766 = (inst_37765 > (0));
var state_37780__$1 = state_37780;
if(cljs.core.truth_(inst_37766)){
var statearr_37790_37815 = state_37780__$1;
(statearr_37790_37815[(1)] = (12));

} else {
var statearr_37791_37816 = state_37780__$1;
(statearr_37791_37816[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (3))){
var inst_37778 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37780__$1,inst_37778);
} else {
if((state_val_37781 === (12))){
var inst_37740 = (state_37780[(7)]);
var inst_37768 = cljs.core.vec.call(null,inst_37740);
var state_37780__$1 = state_37780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37780__$1,(15),out,inst_37768);
} else {
if((state_val_37781 === (2))){
var state_37780__$1 = state_37780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37780__$1,(4),ch);
} else {
if((state_val_37781 === (11))){
var inst_37748 = (state_37780[(10)]);
var inst_37744 = (state_37780[(9)]);
var inst_37758 = (state_37780[(2)]);
var inst_37759 = [];
var inst_37760 = inst_37759.push(inst_37744);
var inst_37740 = inst_37759;
var inst_37741 = inst_37748;
var state_37780__$1 = (function (){var statearr_37792 = state_37780;
(statearr_37792[(11)] = inst_37758);

(statearr_37792[(7)] = inst_37740);

(statearr_37792[(12)] = inst_37760);

(statearr_37792[(8)] = inst_37741);

return statearr_37792;
})();
var statearr_37793_37817 = state_37780__$1;
(statearr_37793_37817[(2)] = null);

(statearr_37793_37817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (9))){
var inst_37740 = (state_37780[(7)]);
var inst_37756 = cljs.core.vec.call(null,inst_37740);
var state_37780__$1 = state_37780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37780__$1,(11),out,inst_37756);
} else {
if((state_val_37781 === (5))){
var inst_37748 = (state_37780[(10)]);
var inst_37744 = (state_37780[(9)]);
var inst_37741 = (state_37780[(8)]);
var inst_37748__$1 = f.call(null,inst_37744);
var inst_37749 = cljs.core._EQ_.call(null,inst_37748__$1,inst_37741);
var inst_37750 = cljs.core.keyword_identical_QMARK_.call(null,inst_37741,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37751 = ((inst_37749) || (inst_37750));
var state_37780__$1 = (function (){var statearr_37794 = state_37780;
(statearr_37794[(10)] = inst_37748__$1);

return statearr_37794;
})();
if(cljs.core.truth_(inst_37751)){
var statearr_37795_37818 = state_37780__$1;
(statearr_37795_37818[(1)] = (8));

} else {
var statearr_37796_37819 = state_37780__$1;
(statearr_37796_37819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (14))){
var inst_37773 = (state_37780[(2)]);
var inst_37774 = cljs.core.async.close_BANG_.call(null,out);
var state_37780__$1 = (function (){var statearr_37798 = state_37780;
(statearr_37798[(13)] = inst_37773);

return statearr_37798;
})();
var statearr_37799_37820 = state_37780__$1;
(statearr_37799_37820[(2)] = inst_37774);

(statearr_37799_37820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (10))){
var inst_37763 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
var statearr_37800_37821 = state_37780__$1;
(statearr_37800_37821[(2)] = inst_37763);

(statearr_37800_37821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (8))){
var inst_37748 = (state_37780[(10)]);
var inst_37744 = (state_37780[(9)]);
var inst_37740 = (state_37780[(7)]);
var inst_37753 = inst_37740.push(inst_37744);
var tmp37797 = inst_37740;
var inst_37740__$1 = tmp37797;
var inst_37741 = inst_37748;
var state_37780__$1 = (function (){var statearr_37801 = state_37780;
(statearr_37801[(14)] = inst_37753);

(statearr_37801[(7)] = inst_37740__$1);

(statearr_37801[(8)] = inst_37741);

return statearr_37801;
})();
var statearr_37802_37822 = state_37780__$1;
(statearr_37802_37822[(2)] = null);

(statearr_37802_37822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35904__auto___37808,out))
;
return ((function (switch__35809__auto__,c__35904__auto___37808,out){
return (function() {
var cljs$core$async$state_machine__35810__auto__ = null;
var cljs$core$async$state_machine__35810__auto____0 = (function (){
var statearr_37803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37803[(0)] = cljs$core$async$state_machine__35810__auto__);

(statearr_37803[(1)] = (1));

return statearr_37803;
});
var cljs$core$async$state_machine__35810__auto____1 = (function (state_37780){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_37780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e37804){if((e37804 instanceof Object)){
var ex__35813__auto__ = e37804;
var statearr_37805_37823 = state_37780;
(statearr_37805_37823[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37824 = state_37780;
state_37780 = G__37824;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
cljs$core$async$state_machine__35810__auto__ = function(state_37780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35810__auto____1.call(this,state_37780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35810__auto____0;
cljs$core$async$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35810__auto____1;
return cljs$core$async$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___37808,out))
})();
var state__35906__auto__ = (function (){var statearr_37806 = f__35905__auto__.call(null);
(statearr_37806[(6)] = c__35904__auto___37808);

return statearr_37806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___37808,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1590529173249
