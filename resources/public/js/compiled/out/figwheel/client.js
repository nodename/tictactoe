// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e41040){if((e41040 instanceof Error)){
var e = e41040;
return "Error: Unable to stringify";
} else {
throw e41040;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__41043 = arguments.length;
switch (G__41043) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__41041_SHARP_){
if(typeof p1__41041_SHARP_ === 'string'){
return p1__41041_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__41041_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___41046 = arguments.length;
var i__4642__auto___41047 = (0);
while(true){
if((i__4642__auto___41047 < len__4641__auto___41046)){
args__4647__auto__.push((arguments[i__4642__auto___41047]));

var G__41048 = (i__4642__auto___41047 + (1));
i__4642__auto___41047 = G__41048;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41045){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41045));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___41050 = arguments.length;
var i__4642__auto___41051 = (0);
while(true){
if((i__4642__auto___41051 < len__4641__auto___41050)){
args__4647__auto__.push((arguments[i__4642__auto___41051]));

var G__41052 = (i__4642__auto___41051 + (1));
i__4642__auto___41051 = G__41052;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41049){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41049));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41053){
var map__41054 = p__41053;
var map__41054__$1 = (((((!((map__41054 == null))))?(((((map__41054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41054):map__41054);
var message = cljs.core.get.call(null,map__41054__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41054__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35904__auto___41133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___41133,ch){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___41133,ch){
return (function (state_41105){
var state_val_41106 = (state_41105[(1)]);
if((state_val_41106 === (7))){
var inst_41101 = (state_41105[(2)]);
var state_41105__$1 = state_41105;
var statearr_41107_41134 = state_41105__$1;
(statearr_41107_41134[(2)] = inst_41101);

(statearr_41107_41134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (1))){
var state_41105__$1 = state_41105;
var statearr_41108_41135 = state_41105__$1;
(statearr_41108_41135[(2)] = null);

(statearr_41108_41135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (4))){
var inst_41058 = (state_41105[(7)]);
var inst_41058__$1 = (state_41105[(2)]);
var state_41105__$1 = (function (){var statearr_41109 = state_41105;
(statearr_41109[(7)] = inst_41058__$1);

return statearr_41109;
})();
if(cljs.core.truth_(inst_41058__$1)){
var statearr_41110_41136 = state_41105__$1;
(statearr_41110_41136[(1)] = (5));

} else {
var statearr_41111_41137 = state_41105__$1;
(statearr_41111_41137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (15))){
var inst_41065 = (state_41105[(8)]);
var inst_41080 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41065);
var inst_41081 = cljs.core.first.call(null,inst_41080);
var inst_41082 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41081);
var inst_41083 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41082)].join('');
var inst_41084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41083);
var state_41105__$1 = state_41105;
var statearr_41112_41138 = state_41105__$1;
(statearr_41112_41138[(2)] = inst_41084);

(statearr_41112_41138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (13))){
var inst_41089 = (state_41105[(2)]);
var state_41105__$1 = state_41105;
var statearr_41113_41139 = state_41105__$1;
(statearr_41113_41139[(2)] = inst_41089);

(statearr_41113_41139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (6))){
var state_41105__$1 = state_41105;
var statearr_41114_41140 = state_41105__$1;
(statearr_41114_41140[(2)] = null);

(statearr_41114_41140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (17))){
var inst_41087 = (state_41105[(2)]);
var state_41105__$1 = state_41105;
var statearr_41115_41141 = state_41105__$1;
(statearr_41115_41141[(2)] = inst_41087);

(statearr_41115_41141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (3))){
var inst_41103 = (state_41105[(2)]);
var state_41105__$1 = state_41105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41105__$1,inst_41103);
} else {
if((state_val_41106 === (12))){
var inst_41064 = (state_41105[(9)]);
var inst_41078 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41064,opts);
var state_41105__$1 = state_41105;
if(inst_41078){
var statearr_41116_41142 = state_41105__$1;
(statearr_41116_41142[(1)] = (15));

} else {
var statearr_41117_41143 = state_41105__$1;
(statearr_41117_41143[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (2))){
var state_41105__$1 = state_41105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41105__$1,(4),ch);
} else {
if((state_val_41106 === (11))){
var inst_41065 = (state_41105[(8)]);
var inst_41070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41071 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41065);
var inst_41072 = cljs.core.async.timeout.call(null,(1000));
var inst_41073 = [inst_41071,inst_41072];
var inst_41074 = (new cljs.core.PersistentVector(null,2,(5),inst_41070,inst_41073,null));
var state_41105__$1 = state_41105;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41105__$1,(14),inst_41074);
} else {
if((state_val_41106 === (9))){
var inst_41065 = (state_41105[(8)]);
var inst_41091 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41092 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41065);
var inst_41093 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41092);
var inst_41094 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41093)].join('');
var inst_41095 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41094);
var state_41105__$1 = (function (){var statearr_41118 = state_41105;
(statearr_41118[(10)] = inst_41091);

return statearr_41118;
})();
var statearr_41119_41144 = state_41105__$1;
(statearr_41119_41144[(2)] = inst_41095);

(statearr_41119_41144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (5))){
var inst_41058 = (state_41105[(7)]);
var inst_41060 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41061 = (new cljs.core.PersistentArrayMap(null,2,inst_41060,null));
var inst_41062 = (new cljs.core.PersistentHashSet(null,inst_41061,null));
var inst_41063 = figwheel.client.focus_msgs.call(null,inst_41062,inst_41058);
var inst_41064 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41063);
var inst_41065 = cljs.core.first.call(null,inst_41063);
var inst_41066 = figwheel.client.autoload_QMARK_.call(null);
var state_41105__$1 = (function (){var statearr_41120 = state_41105;
(statearr_41120[(8)] = inst_41065);

(statearr_41120[(9)] = inst_41064);

return statearr_41120;
})();
if(cljs.core.truth_(inst_41066)){
var statearr_41121_41145 = state_41105__$1;
(statearr_41121_41145[(1)] = (8));

} else {
var statearr_41122_41146 = state_41105__$1;
(statearr_41122_41146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (14))){
var inst_41076 = (state_41105[(2)]);
var state_41105__$1 = state_41105;
var statearr_41123_41147 = state_41105__$1;
(statearr_41123_41147[(2)] = inst_41076);

(statearr_41123_41147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (16))){
var state_41105__$1 = state_41105;
var statearr_41124_41148 = state_41105__$1;
(statearr_41124_41148[(2)] = null);

(statearr_41124_41148[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (10))){
var inst_41097 = (state_41105[(2)]);
var state_41105__$1 = (function (){var statearr_41125 = state_41105;
(statearr_41125[(11)] = inst_41097);

return statearr_41125;
})();
var statearr_41126_41149 = state_41105__$1;
(statearr_41126_41149[(2)] = null);

(statearr_41126_41149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41106 === (8))){
var inst_41064 = (state_41105[(9)]);
var inst_41068 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41064,opts);
var state_41105__$1 = state_41105;
if(cljs.core.truth_(inst_41068)){
var statearr_41127_41150 = state_41105__$1;
(statearr_41127_41150[(1)] = (11));

} else {
var statearr_41128_41151 = state_41105__$1;
(statearr_41128_41151[(1)] = (12));

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
});})(c__35904__auto___41133,ch))
;
return ((function (switch__35809__auto__,c__35904__auto___41133,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35810__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35810__auto____0 = (function (){
var statearr_41129 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41129[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35810__auto__);

(statearr_41129[(1)] = (1));

return statearr_41129;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35810__auto____1 = (function (state_41105){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_41105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e41130){if((e41130 instanceof Object)){
var ex__35813__auto__ = e41130;
var statearr_41131_41152 = state_41105;
(statearr_41131_41152[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41153 = state_41105;
state_41105 = G__41153;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35810__auto__ = function(state_41105){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35810__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35810__auto____1.call(this,state_41105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35810__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35810__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___41133,ch))
})();
var state__35906__auto__ = (function (){var statearr_41132 = f__35905__auto__.call(null);
(statearr_41132[(6)] = c__35904__auto___41133);

return statearr_41132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___41133,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41154_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41154_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41160 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41160){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41156 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41157 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41158 = true;
var _STAR_print_fn_STAR__temp_val__41159 = ((function (_STAR_print_newline_STAR__orig_val__41156,_STAR_print_fn_STAR__orig_val__41157,_STAR_print_newline_STAR__temp_val__41158,sb,base_path_41160){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__41156,_STAR_print_fn_STAR__orig_val__41157,_STAR_print_newline_STAR__temp_val__41158,sb,base_path_41160))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41158;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41159;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41157;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41156;
}}catch (e41155){if((e41155 instanceof Error)){
var e = e41155;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41160], null));
} else {
var e = e41155;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41160))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41161){
var map__41162 = p__41161;
var map__41162__$1 = (((((!((map__41162 == null))))?(((((map__41162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41162):map__41162);
var opts = map__41162__$1;
var build_id = cljs.core.get.call(null,map__41162__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41162,map__41162__$1,opts,build_id){
return (function (p__41164){
var vec__41165 = p__41164;
var seq__41166 = cljs.core.seq.call(null,vec__41165);
var first__41167 = cljs.core.first.call(null,seq__41166);
var seq__41166__$1 = cljs.core.next.call(null,seq__41166);
var map__41168 = first__41167;
var map__41168__$1 = (((((!((map__41168 == null))))?(((((map__41168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41168):map__41168);
var msg = map__41168__$1;
var msg_name = cljs.core.get.call(null,map__41168__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41166__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41165,seq__41166,first__41167,seq__41166__$1,map__41168,map__41168__$1,msg,msg_name,_,map__41162,map__41162__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41165,seq__41166,first__41167,seq__41166__$1,map__41168,map__41168__$1,msg,msg_name,_,map__41162,map__41162__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41162,map__41162__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41170){
var vec__41171 = p__41170;
var seq__41172 = cljs.core.seq.call(null,vec__41171);
var first__41173 = cljs.core.first.call(null,seq__41172);
var seq__41172__$1 = cljs.core.next.call(null,seq__41172);
var map__41174 = first__41173;
var map__41174__$1 = (((((!((map__41174 == null))))?(((((map__41174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41174):map__41174);
var msg = map__41174__$1;
var msg_name = cljs.core.get.call(null,map__41174__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41172__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41176){
var map__41177 = p__41176;
var map__41177__$1 = (((((!((map__41177 == null))))?(((((map__41177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41177):map__41177);
var on_compile_warning = cljs.core.get.call(null,map__41177__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41177__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41177,map__41177__$1,on_compile_warning,on_compile_fail){
return (function (p__41179){
var vec__41180 = p__41179;
var seq__41181 = cljs.core.seq.call(null,vec__41180);
var first__41182 = cljs.core.first.call(null,seq__41181);
var seq__41181__$1 = cljs.core.next.call(null,seq__41181);
var map__41183 = first__41182;
var map__41183__$1 = (((((!((map__41183 == null))))?(((((map__41183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41183):map__41183);
var msg = map__41183__$1;
var msg_name = cljs.core.get.call(null,map__41183__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41181__$1;
var pred__41185 = cljs.core._EQ_;
var expr__41186 = msg_name;
if(cljs.core.truth_(pred__41185.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41186))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41185.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41186))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41177,map__41177__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__,msg_hist,msg_names,msg){
return (function (state_41275){
var state_val_41276 = (state_41275[(1)]);
if((state_val_41276 === (7))){
var inst_41195 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
if(cljs.core.truth_(inst_41195)){
var statearr_41277_41324 = state_41275__$1;
(statearr_41277_41324[(1)] = (8));

} else {
var statearr_41278_41325 = state_41275__$1;
(statearr_41278_41325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (20))){
var inst_41269 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41279_41326 = state_41275__$1;
(statearr_41279_41326[(2)] = inst_41269);

(statearr_41279_41326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (27))){
var inst_41265 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41280_41327 = state_41275__$1;
(statearr_41280_41327[(2)] = inst_41265);

(statearr_41280_41327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (1))){
var inst_41188 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41275__$1 = state_41275;
if(cljs.core.truth_(inst_41188)){
var statearr_41281_41328 = state_41275__$1;
(statearr_41281_41328[(1)] = (2));

} else {
var statearr_41282_41329 = state_41275__$1;
(statearr_41282_41329[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (24))){
var inst_41267 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41283_41330 = state_41275__$1;
(statearr_41283_41330[(2)] = inst_41267);

(statearr_41283_41330[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (4))){
var inst_41273 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41275__$1,inst_41273);
} else {
if((state_val_41276 === (15))){
var inst_41271 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41284_41331 = state_41275__$1;
(statearr_41284_41331[(2)] = inst_41271);

(statearr_41284_41331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (21))){
var inst_41224 = (state_41275[(2)]);
var inst_41225 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41226 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41225);
var state_41275__$1 = (function (){var statearr_41285 = state_41275;
(statearr_41285[(7)] = inst_41224);

return statearr_41285;
})();
var statearr_41286_41332 = state_41275__$1;
(statearr_41286_41332[(2)] = inst_41226);

(statearr_41286_41332[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (31))){
var inst_41254 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41275__$1 = state_41275;
if(inst_41254){
var statearr_41287_41333 = state_41275__$1;
(statearr_41287_41333[(1)] = (34));

} else {
var statearr_41288_41334 = state_41275__$1;
(statearr_41288_41334[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (32))){
var inst_41263 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41289_41335 = state_41275__$1;
(statearr_41289_41335[(2)] = inst_41263);

(statearr_41289_41335[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (33))){
var inst_41250 = (state_41275[(2)]);
var inst_41251 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41252 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41251);
var state_41275__$1 = (function (){var statearr_41290 = state_41275;
(statearr_41290[(8)] = inst_41250);

return statearr_41290;
})();
var statearr_41291_41336 = state_41275__$1;
(statearr_41291_41336[(2)] = inst_41252);

(statearr_41291_41336[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (13))){
var inst_41209 = figwheel.client.heads_up.clear.call(null);
var state_41275__$1 = state_41275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41275__$1,(16),inst_41209);
} else {
if((state_val_41276 === (22))){
var inst_41230 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41231 = figwheel.client.heads_up.append_warning_message.call(null,inst_41230);
var state_41275__$1 = state_41275;
var statearr_41292_41337 = state_41275__$1;
(statearr_41292_41337[(2)] = inst_41231);

(statearr_41292_41337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (36))){
var inst_41261 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41293_41338 = state_41275__$1;
(statearr_41293_41338[(2)] = inst_41261);

(statearr_41293_41338[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (29))){
var inst_41241 = (state_41275[(2)]);
var inst_41242 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41243 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41242);
var state_41275__$1 = (function (){var statearr_41294 = state_41275;
(statearr_41294[(9)] = inst_41241);

return statearr_41294;
})();
var statearr_41295_41339 = state_41275__$1;
(statearr_41295_41339[(2)] = inst_41243);

(statearr_41295_41339[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (6))){
var inst_41190 = (state_41275[(10)]);
var state_41275__$1 = state_41275;
var statearr_41296_41340 = state_41275__$1;
(statearr_41296_41340[(2)] = inst_41190);

(statearr_41296_41340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (28))){
var inst_41237 = (state_41275[(2)]);
var inst_41238 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41239 = figwheel.client.heads_up.display_warning.call(null,inst_41238);
var state_41275__$1 = (function (){var statearr_41297 = state_41275;
(statearr_41297[(11)] = inst_41237);

return statearr_41297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41275__$1,(29),inst_41239);
} else {
if((state_val_41276 === (25))){
var inst_41235 = figwheel.client.heads_up.clear.call(null);
var state_41275__$1 = state_41275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41275__$1,(28),inst_41235);
} else {
if((state_val_41276 === (34))){
var inst_41256 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41275__$1 = state_41275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41275__$1,(37),inst_41256);
} else {
if((state_val_41276 === (17))){
var inst_41215 = (state_41275[(2)]);
var inst_41216 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41217 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41216);
var state_41275__$1 = (function (){var statearr_41298 = state_41275;
(statearr_41298[(12)] = inst_41215);

return statearr_41298;
})();
var statearr_41299_41341 = state_41275__$1;
(statearr_41299_41341[(2)] = inst_41217);

(statearr_41299_41341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (3))){
var inst_41207 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41275__$1 = state_41275;
if(inst_41207){
var statearr_41300_41342 = state_41275__$1;
(statearr_41300_41342[(1)] = (13));

} else {
var statearr_41301_41343 = state_41275__$1;
(statearr_41301_41343[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (12))){
var inst_41203 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41302_41344 = state_41275__$1;
(statearr_41302_41344[(2)] = inst_41203);

(statearr_41302_41344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (2))){
var inst_41190 = (state_41275[(10)]);
var inst_41190__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41275__$1 = (function (){var statearr_41303 = state_41275;
(statearr_41303[(10)] = inst_41190__$1);

return statearr_41303;
})();
if(cljs.core.truth_(inst_41190__$1)){
var statearr_41304_41345 = state_41275__$1;
(statearr_41304_41345[(1)] = (5));

} else {
var statearr_41305_41346 = state_41275__$1;
(statearr_41305_41346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (23))){
var inst_41233 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41275__$1 = state_41275;
if(inst_41233){
var statearr_41306_41347 = state_41275__$1;
(statearr_41306_41347[(1)] = (25));

} else {
var statearr_41307_41348 = state_41275__$1;
(statearr_41307_41348[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (35))){
var state_41275__$1 = state_41275;
var statearr_41308_41349 = state_41275__$1;
(statearr_41308_41349[(2)] = null);

(statearr_41308_41349[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (19))){
var inst_41228 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41275__$1 = state_41275;
if(inst_41228){
var statearr_41309_41350 = state_41275__$1;
(statearr_41309_41350[(1)] = (22));

} else {
var statearr_41310_41351 = state_41275__$1;
(statearr_41310_41351[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (11))){
var inst_41199 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41311_41352 = state_41275__$1;
(statearr_41311_41352[(2)] = inst_41199);

(statearr_41311_41352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (9))){
var inst_41201 = figwheel.client.heads_up.clear.call(null);
var state_41275__$1 = state_41275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41275__$1,(12),inst_41201);
} else {
if((state_val_41276 === (5))){
var inst_41192 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41275__$1 = state_41275;
var statearr_41312_41353 = state_41275__$1;
(statearr_41312_41353[(2)] = inst_41192);

(statearr_41312_41353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (14))){
var inst_41219 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41275__$1 = state_41275;
if(inst_41219){
var statearr_41313_41354 = state_41275__$1;
(statearr_41313_41354[(1)] = (18));

} else {
var statearr_41314_41355 = state_41275__$1;
(statearr_41314_41355[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (26))){
var inst_41245 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41275__$1 = state_41275;
if(inst_41245){
var statearr_41315_41356 = state_41275__$1;
(statearr_41315_41356[(1)] = (30));

} else {
var statearr_41316_41357 = state_41275__$1;
(statearr_41316_41357[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (16))){
var inst_41211 = (state_41275[(2)]);
var inst_41212 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41213 = figwheel.client.heads_up.display_exception.call(null,inst_41212);
var state_41275__$1 = (function (){var statearr_41317 = state_41275;
(statearr_41317[(13)] = inst_41211);

return statearr_41317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41275__$1,(17),inst_41213);
} else {
if((state_val_41276 === (30))){
var inst_41247 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41248 = figwheel.client.heads_up.display_warning.call(null,inst_41247);
var state_41275__$1 = state_41275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41275__$1,(33),inst_41248);
} else {
if((state_val_41276 === (10))){
var inst_41205 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41318_41358 = state_41275__$1;
(statearr_41318_41358[(2)] = inst_41205);

(statearr_41318_41358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (18))){
var inst_41221 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41222 = figwheel.client.heads_up.display_exception.call(null,inst_41221);
var state_41275__$1 = state_41275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41275__$1,(21),inst_41222);
} else {
if((state_val_41276 === (37))){
var inst_41258 = (state_41275[(2)]);
var state_41275__$1 = state_41275;
var statearr_41319_41359 = state_41275__$1;
(statearr_41319_41359[(2)] = inst_41258);

(statearr_41319_41359[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41276 === (8))){
var inst_41197 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41275__$1 = state_41275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41275__$1,(11),inst_41197);
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
});})(c__35904__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35809__auto__,c__35904__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto____0 = (function (){
var statearr_41320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41320[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto__);

(statearr_41320[(1)] = (1));

return statearr_41320;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto____1 = (function (state_41275){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_41275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e41321){if((e41321 instanceof Object)){
var ex__35813__auto__ = e41321;
var statearr_41322_41360 = state_41275;
(statearr_41322_41360[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41361 = state_41275;
state_41275 = G__41361;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto__ = function(state_41275){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto____1.call(this,state_41275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__,msg_hist,msg_names,msg))
})();
var state__35906__auto__ = (function (){var statearr_41323 = f__35905__auto__.call(null);
(statearr_41323[(6)] = c__35904__auto__);

return statearr_41323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__,msg_hist,msg_names,msg))
);

return c__35904__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35904__auto___41390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___41390,ch){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___41390,ch){
return (function (state_41376){
var state_val_41377 = (state_41376[(1)]);
if((state_val_41377 === (1))){
var state_41376__$1 = state_41376;
var statearr_41378_41391 = state_41376__$1;
(statearr_41378_41391[(2)] = null);

(statearr_41378_41391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41377 === (2))){
var state_41376__$1 = state_41376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41376__$1,(4),ch);
} else {
if((state_val_41377 === (3))){
var inst_41374 = (state_41376[(2)]);
var state_41376__$1 = state_41376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41376__$1,inst_41374);
} else {
if((state_val_41377 === (4))){
var inst_41364 = (state_41376[(7)]);
var inst_41364__$1 = (state_41376[(2)]);
var state_41376__$1 = (function (){var statearr_41379 = state_41376;
(statearr_41379[(7)] = inst_41364__$1);

return statearr_41379;
})();
if(cljs.core.truth_(inst_41364__$1)){
var statearr_41380_41392 = state_41376__$1;
(statearr_41380_41392[(1)] = (5));

} else {
var statearr_41381_41393 = state_41376__$1;
(statearr_41381_41393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41377 === (5))){
var inst_41364 = (state_41376[(7)]);
var inst_41366 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41364);
var state_41376__$1 = state_41376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41376__$1,(8),inst_41366);
} else {
if((state_val_41377 === (6))){
var state_41376__$1 = state_41376;
var statearr_41382_41394 = state_41376__$1;
(statearr_41382_41394[(2)] = null);

(statearr_41382_41394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41377 === (7))){
var inst_41372 = (state_41376[(2)]);
var state_41376__$1 = state_41376;
var statearr_41383_41395 = state_41376__$1;
(statearr_41383_41395[(2)] = inst_41372);

(statearr_41383_41395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41377 === (8))){
var inst_41368 = (state_41376[(2)]);
var state_41376__$1 = (function (){var statearr_41384 = state_41376;
(statearr_41384[(8)] = inst_41368);

return statearr_41384;
})();
var statearr_41385_41396 = state_41376__$1;
(statearr_41385_41396[(2)] = null);

(statearr_41385_41396[(1)] = (2));


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
});})(c__35904__auto___41390,ch))
;
return ((function (switch__35809__auto__,c__35904__auto___41390,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35810__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35810__auto____0 = (function (){
var statearr_41386 = [null,null,null,null,null,null,null,null,null];
(statearr_41386[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35810__auto__);

(statearr_41386[(1)] = (1));

return statearr_41386;
});
var figwheel$client$heads_up_plugin_$_state_machine__35810__auto____1 = (function (state_41376){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_41376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e41387){if((e41387 instanceof Object)){
var ex__35813__auto__ = e41387;
var statearr_41388_41397 = state_41376;
(statearr_41388_41397[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41398 = state_41376;
state_41376 = G__41398;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35810__auto__ = function(state_41376){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35810__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35810__auto____1.call(this,state_41376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35810__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35810__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___41390,ch))
})();
var state__35906__auto__ = (function (){var statearr_41389 = f__35905__auto__.call(null);
(statearr_41389[(6)] = c__35904__auto___41390);

return statearr_41389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___41390,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__){
return (function (state_41404){
var state_val_41405 = (state_41404[(1)]);
if((state_val_41405 === (1))){
var inst_41399 = cljs.core.async.timeout.call(null,(3000));
var state_41404__$1 = state_41404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41404__$1,(2),inst_41399);
} else {
if((state_val_41405 === (2))){
var inst_41401 = (state_41404[(2)]);
var inst_41402 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41404__$1 = (function (){var statearr_41406 = state_41404;
(statearr_41406[(7)] = inst_41401);

return statearr_41406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41404__$1,inst_41402);
} else {
return null;
}
}
});})(c__35904__auto__))
;
return ((function (switch__35809__auto__,c__35904__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35810__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35810__auto____0 = (function (){
var statearr_41407 = [null,null,null,null,null,null,null,null];
(statearr_41407[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35810__auto__);

(statearr_41407[(1)] = (1));

return statearr_41407;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35810__auto____1 = (function (state_41404){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_41404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e41408){if((e41408 instanceof Object)){
var ex__35813__auto__ = e41408;
var statearr_41409_41411 = state_41404;
(statearr_41409_41411[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41412 = state_41404;
state_41404 = G__41412;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35810__auto__ = function(state_41404){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35810__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35810__auto____1.call(this,state_41404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35810__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35810__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__))
})();
var state__35906__auto__ = (function (){var statearr_41410 = f__35905__auto__.call(null);
(statearr_41410[(6)] = c__35904__auto__);

return statearr_41410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__))
);

return c__35904__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__,figwheel_version,temp__5735__auto__){
return (function (state_41419){
var state_val_41420 = (state_41419[(1)]);
if((state_val_41420 === (1))){
var inst_41413 = cljs.core.async.timeout.call(null,(2000));
var state_41419__$1 = state_41419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41419__$1,(2),inst_41413);
} else {
if((state_val_41420 === (2))){
var inst_41415 = (state_41419[(2)]);
var inst_41416 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_41417 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41416);
var state_41419__$1 = (function (){var statearr_41421 = state_41419;
(statearr_41421[(7)] = inst_41415);

return statearr_41421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41419__$1,inst_41417);
} else {
return null;
}
}
});})(c__35904__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__35809__auto__,c__35904__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto____0 = (function (){
var statearr_41422 = [null,null,null,null,null,null,null,null];
(statearr_41422[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto__);

(statearr_41422[(1)] = (1));

return statearr_41422;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto____1 = (function (state_41419){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_41419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e41423){if((e41423 instanceof Object)){
var ex__35813__auto__ = e41423;
var statearr_41424_41426 = state_41419;
(statearr_41424_41426[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41427 = state_41419;
state_41419 = G__41427;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto__ = function(state_41419){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto____1.call(this,state_41419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__,figwheel_version,temp__5735__auto__))
})();
var state__35906__auto__ = (function (){var statearr_41425 = f__35905__auto__.call(null);
(statearr_41425[(6)] = c__35904__auto__);

return statearr_41425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__,figwheel_version,temp__5735__auto__))
);

return c__35904__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41428){
var map__41429 = p__41428;
var map__41429__$1 = (((((!((map__41429 == null))))?(((((map__41429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41429):map__41429);
var file = cljs.core.get.call(null,map__41429__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41429__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41429__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41431 = "";
var G__41431__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41431),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__41431);
var G__41431__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41431__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__41431__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41431__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__41431__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41432){
var map__41433 = p__41432;
var map__41433__$1 = (((((!((map__41433 == null))))?(((((map__41433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41433):map__41433);
var ed = map__41433__$1;
var exception_data = cljs.core.get.call(null,map__41433__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41433__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_41436 = (function (){var G__41435 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41435)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__41435;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_41436);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41437){
var map__41438 = p__41437;
var map__41438__$1 = (((((!((map__41438 == null))))?(((((map__41438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41438):map__41438);
var w = map__41438__$1;
var message = cljs.core.get.call(null,map__41438__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41440 = cljs.core.seq.call(null,plugins);
var chunk__41441 = null;
var count__41442 = (0);
var i__41443 = (0);
while(true){
if((i__41443 < count__41442)){
var vec__41444 = cljs.core._nth.call(null,chunk__41441,i__41443);
var k = cljs.core.nth.call(null,vec__41444,(0),null);
var plugin = cljs.core.nth.call(null,vec__41444,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41450 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41440,chunk__41441,count__41442,i__41443,pl_41450,vec__41444,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41450.call(null,msg_hist);
});})(seq__41440,chunk__41441,count__41442,i__41443,pl_41450,vec__41444,k,plugin))
);
} else {
}


var G__41451 = seq__41440;
var G__41452 = chunk__41441;
var G__41453 = count__41442;
var G__41454 = (i__41443 + (1));
seq__41440 = G__41451;
chunk__41441 = G__41452;
count__41442 = G__41453;
i__41443 = G__41454;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41440);
if(temp__5735__auto__){
var seq__41440__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41440__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__41440__$1);
var G__41455 = cljs.core.chunk_rest.call(null,seq__41440__$1);
var G__41456 = c__4461__auto__;
var G__41457 = cljs.core.count.call(null,c__4461__auto__);
var G__41458 = (0);
seq__41440 = G__41455;
chunk__41441 = G__41456;
count__41442 = G__41457;
i__41443 = G__41458;
continue;
} else {
var vec__41447 = cljs.core.first.call(null,seq__41440__$1);
var k = cljs.core.nth.call(null,vec__41447,(0),null);
var plugin = cljs.core.nth.call(null,vec__41447,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41459 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41440,chunk__41441,count__41442,i__41443,pl_41459,vec__41447,k,plugin,seq__41440__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41459.call(null,msg_hist);
});})(seq__41440,chunk__41441,count__41442,i__41443,pl_41459,vec__41447,k,plugin,seq__41440__$1,temp__5735__auto__))
);
} else {
}


var G__41460 = cljs.core.next.call(null,seq__41440__$1);
var G__41461 = null;
var G__41462 = (0);
var G__41463 = (0);
seq__41440 = G__41460;
chunk__41441 = G__41461;
count__41442 = G__41462;
i__41443 = G__41463;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__41465 = arguments.length;
switch (G__41465) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__41466_41471 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__41467_41472 = null;
var count__41468_41473 = (0);
var i__41469_41474 = (0);
while(true){
if((i__41469_41474 < count__41468_41473)){
var msg_41475 = cljs.core._nth.call(null,chunk__41467_41472,i__41469_41474);
figwheel.client.socket.handle_incoming_message.call(null,msg_41475);


var G__41476 = seq__41466_41471;
var G__41477 = chunk__41467_41472;
var G__41478 = count__41468_41473;
var G__41479 = (i__41469_41474 + (1));
seq__41466_41471 = G__41476;
chunk__41467_41472 = G__41477;
count__41468_41473 = G__41478;
i__41469_41474 = G__41479;
continue;
} else {
var temp__5735__auto___41480 = cljs.core.seq.call(null,seq__41466_41471);
if(temp__5735__auto___41480){
var seq__41466_41481__$1 = temp__5735__auto___41480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41466_41481__$1)){
var c__4461__auto___41482 = cljs.core.chunk_first.call(null,seq__41466_41481__$1);
var G__41483 = cljs.core.chunk_rest.call(null,seq__41466_41481__$1);
var G__41484 = c__4461__auto___41482;
var G__41485 = cljs.core.count.call(null,c__4461__auto___41482);
var G__41486 = (0);
seq__41466_41471 = G__41483;
chunk__41467_41472 = G__41484;
count__41468_41473 = G__41485;
i__41469_41474 = G__41486;
continue;
} else {
var msg_41487 = cljs.core.first.call(null,seq__41466_41481__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_41487);


var G__41488 = cljs.core.next.call(null,seq__41466_41481__$1);
var G__41489 = null;
var G__41490 = (0);
var G__41491 = (0);
seq__41466_41471 = G__41488;
chunk__41467_41472 = G__41489;
count__41468_41473 = G__41490;
i__41469_41474 = G__41491;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___41496 = arguments.length;
var i__4642__auto___41497 = (0);
while(true){
if((i__4642__auto___41497 < len__4641__auto___41496)){
args__4647__auto__.push((arguments[i__4642__auto___41497]));

var G__41498 = (i__4642__auto___41497 + (1));
i__4642__auto___41497 = G__41498;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41493){
var map__41494 = p__41493;
var map__41494__$1 = (((((!((map__41494 == null))))?(((((map__41494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41494):map__41494);
var opts = map__41494__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41492){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41492));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41499){if((e41499 instanceof Error)){
var e = e41499;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41499;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__41500){
var map__41501 = p__41500;
var map__41501__$1 = (((((!((map__41501 == null))))?(((((map__41501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41501):map__41501);
var msg_name = cljs.core.get.call(null,map__41501__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1590529178591
