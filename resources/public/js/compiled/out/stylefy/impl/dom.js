// Compiled by ClojureScript 1.10.439 {}
goog.provide('stylefy.impl.dom');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('cljs.core.async');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.conversion');
goog.require('garden.stylesheet');
goog.require('clojure.set');
stylefy.impl.dom.stylefy_initialised_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.dom.styles_in_dom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.dom_update_requested_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.dom.styles_as_css = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.keyframes_in_use = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.font_faces_in_use = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_tags_in_use = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_classes_in_use = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.stylefy_node_id = "#_stylefy-styles_";
stylefy.impl.dom.stylefy_constant_node_id = "#_stylefy-constant-styles_";
stylefy.impl.dom.stylefy_base_node = cljs.core.atom.call(null,null);
stylefy.impl.dom.stylefy_instance_id = cljs.core.atom.call(null,null);
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(style_hash){
if(cljs.core.truth_(style_hash)){
return cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_as_css),style_hash);
} else {
return null;
}
});
stylefy.impl.dom.update_style_tags_BANG_ = (function stylefy$impl$dom$update_style_tags_BANG_(node_stylefy,node_stylefy_constant){
var styles_in_css = cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),stylefy.impl.dom.style_by_hash),cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_as_css)));
var keyframes_in_css = cljs.core.vals.call(null,cljs.core.deref.call(null,stylefy.impl.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.call(null,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),cljs.core.deref.call(null,stylefy.impl.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.call(null,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),cljs.core.deref.call(null,stylefy.impl.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.call(null,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),cljs.core.deref.call(null,stylefy.impl.dom.custom_classes_in_use));
var new_style_constant_css = cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,font_faces_in_use,keyframes_in_css,custom_tags_in_use,custom_classes_in_use));
var new_style_css = cljs.core.apply.call(null,cljs.core.str,styles_in_css);
if(cljs.core._EQ_.call(null,dommy.core.text.call(null,node_stylefy_constant),new_style_constant_css)){
} else {
dommy.core.set_text_BANG_.call(null,node_stylefy_constant,new_style_constant_css);
}

return dommy.core.set_text_BANG_.call(null,node_stylefy,new_style_css);
});
stylefy.impl.dom.mark_all_styles_added_in_dom_BANG_ = (function stylefy$impl$dom$mark_all_styles_added_in_dom_BANG_(){
var seq__33480 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_dom)));
var chunk__33481 = null;
var count__33482 = (0);
var i__33483 = (0);
while(true){
if((i__33483 < count__33482)){
var style_hash = cljs.core._nth.call(null,chunk__33481,i__33483);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_dom),style_hash),true);


var G__33484 = seq__33480;
var G__33485 = chunk__33481;
var G__33486 = count__33482;
var G__33487 = (i__33483 + (1));
seq__33480 = G__33484;
chunk__33481 = G__33485;
count__33482 = G__33486;
i__33483 = G__33487;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33480);
if(temp__5735__auto__){
var seq__33480__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33480__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__33480__$1);
var G__33488 = cljs.core.chunk_rest.call(null,seq__33480__$1);
var G__33489 = c__4461__auto__;
var G__33490 = cljs.core.count.call(null,c__4461__auto__);
var G__33491 = (0);
seq__33480 = G__33488;
chunk__33481 = G__33489;
count__33482 = G__33490;
i__33483 = G__33491;
continue;
} else {
var style_hash = cljs.core.first.call(null,seq__33480__$1);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_dom),style_hash),true);


var G__33492 = cljs.core.next.call(null,seq__33480__$1);
var G__33493 = null;
var G__33494 = (0);
var G__33495 = (0);
seq__33480 = G__33492;
chunk__33481 = G__33493;
count__33482 = G__33494;
i__33483 = G__33495;
continue;
}
} else {
return null;
}
}
break;
}
});
stylefy.impl.dom.get_stylefy_node = (function stylefy$impl$dom$get_stylefy_node(id,base_node,instance_id){
var final_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(instance_id)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id):null))].join('');
if((base_node == null)){
return document.querySelector(dommy.core.selector.call(null,final_id));
} else {
return base_node.querySelector(dommy.core.selector.call(null,final_id));
}
});
stylefy.impl.dom.update_dom = (function stylefy$impl$dom$update_dom(){
var node_stylefy = stylefy.impl.dom.get_stylefy_node.call(null,stylefy.impl.dom.stylefy_node_id,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_base_node),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));
var node_stylefy_constant = stylefy.impl.dom.get_stylefy_node.call(null,stylefy.impl.dom.stylefy_constant_node_id,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_base_node),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));
if(cljs.core.truth_((function (){var and__4036__auto__ = node_stylefy;
if(cljs.core.truth_(and__4036__auto__)){
return node_stylefy_constant;
} else {
return and__4036__auto__;
}
})())){
stylefy.impl.dom.update_style_tags_BANG_.call(null,node_stylefy,node_stylefy_constant);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_update_requested_QMARK_,false);

try{stylefy.impl.cache.cache_styles.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_as_css),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));
}catch (e33496){var e_33497 = e33496;
console.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_33497)].join(''));

stylefy.impl.cache.clear_styles.call(null,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));

}
return stylefy.impl.dom.mark_all_styles_added_in_dom_BANG_.call(null);
} else {
return console.error("stylefy is unable to find the required <style> tags!");
}
});
stylefy.impl.dom.update_dom_if_requested = (function stylefy$impl$dom$update_dom_if_requested(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_update_requested_QMARK_))){
return stylefy.impl.dom.update_dom.call(null);
} else {
return null;
}
});
stylefy.impl.dom.request_asynchronous_dom_update = (function stylefy$impl$dom$request_asynchronous_dom_update(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.stylefy_initialised_QMARK_))){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_update_requested_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_update_requested_QMARK_,true);

var c__33402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33402__auto__){
return (function (){
var f__33403__auto__ = (function (){var switch__33379__auto__ = ((function (c__33402__auto__){
return (function (state_33500){
var state_val_33501 = (state_33500[(1)]);
if((state_val_33501 === (1))){
var inst_33498 = stylefy.impl.dom.update_dom.call(null);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33500__$1,inst_33498);
} else {
return null;
}
});})(c__33402__auto__))
;
return ((function (switch__33379__auto__,c__33402__auto__){
return (function() {
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto__ = null;
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto____0 = (function (){
var statearr_33502 = [null,null,null,null,null,null,null];
(statearr_33502[(0)] = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto__);

(statearr_33502[(1)] = (1));

return statearr_33502;
});
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto____1 = (function (state_33500){
while(true){
var ret_value__33381__auto__ = (function (){try{while(true){
var result__33382__auto__ = switch__33379__auto__.call(null,state_33500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33382__auto__;
}
break;
}
}catch (e33503){if((e33503 instanceof Object)){
var ex__33383__auto__ = e33503;
var statearr_33504_33506 = state_33500;
(statearr_33504_33506[(5)] = ex__33383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33507 = state_33500;
state_33500 = G__33507;
continue;
} else {
return ret_value__33381__auto__;
}
break;
}
});
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto__ = function(state_33500){
switch(arguments.length){
case 0:
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto____0.call(this);
case 1:
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto____1.call(this,state_33500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto__.cljs$core$IFn$_invoke$arity$0 = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto____0;
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto__.cljs$core$IFn$_invoke$arity$1 = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto____1;
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__33380__auto__;
})()
;})(switch__33379__auto__,c__33402__auto__))
})();
var state__33404__auto__ = (function (){var statearr_33505 = f__33403__auto__.call(null);
(statearr_33505[(6)] = c__33402__auto__);

return statearr_33505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33404__auto__);
});})(c__33402__auto__))
);

return c__33402__auto__;
}
} else {
return null;
}
});
stylefy.impl.dom.check_stylefy_initialisation = (function stylefy$impl$dom$check_stylefy_initialisation(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.stylefy_initialised_QMARK_))){
return null;
} else {
return console.warn("use-style called before stylefy was initialised!");
}
});
stylefy.impl.dom.init_multi_instance = (function stylefy$impl$dom$init_multi_instance(p__33508){
var map__33509 = p__33508;
var map__33509__$1 = (((((!((map__33509 == null))))?(((((map__33509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33509):map__33509);
var options = map__33509__$1;
var multi_instance = cljs.core.get.call(null,map__33509__$1,new cljs.core.Keyword(null,"multi-instance","multi-instance",-1525956512));
var base_node = new cljs.core.Keyword(null,"base-node","base-node",-275497090).cljs$core$IFn$_invoke$arity$1(multi_instance);
var instance_id = new cljs.core.Keyword(null,"instance-id","instance-id",951361263).cljs$core$IFn$_invoke$arity$1(multi_instance);
if((((instance_id == null)) || (typeof instance_id === 'string'))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["instance-id must be string. Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,base_node,instance_id))].join('')),"\n","(or (nil? instance-id) (string? instance-id))"].join('')));
}

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.stylefy_base_node,base_node);

return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.stylefy_instance_id,instance_id);
});
stylefy.impl.dom.init_cache = (function stylefy$impl$dom$init_cache(options){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313).cljs$core$IFn$_invoke$arity$1(options),false)){
stylefy.impl.cache.use_caching_BANG_.call(null,new cljs.core.Keyword(null,"cache-options","cache-options",1443503739).cljs$core$IFn$_invoke$arity$1(options),cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id));

var temp__5735__auto__ = stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_styles.call(null,cljs.core.deref.call(null,stylefy.impl.dom.stylefy_instance_id)));
if(cljs.core.truth_(temp__5735__auto__)){
var cached_styles = temp__5735__auto__;
cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_as_css,(function (){var or__4047__auto__ = cached_styles;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_dom,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (cached_styles,temp__5735__auto__){
return (function (p1__33511_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__33511_SHARP_,reagent.core.atom.call(null,false)]);
});})(cached_styles,temp__5735__auto__))
,cljs.core.keys.call(null,cached_styles))));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__33512){
var map__33513 = p__33512;
var map__33513__$1 = (((((!((map__33513 == null))))?(((((map__33513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33513):map__33513);
var style = map__33513__$1;
var props = cljs.core.get.call(null,map__33513__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__33513__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(props)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","props"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_css = stylefy.impl.conversion.style__GT_css.call(null,style);
var style_to_be_saved = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),style_css], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.styles_as_css,cljs.core.assoc,hash,style_to_be_saved);

cljs.core.swap_BANG_.call(null,stylefy.impl.dom.styles_in_dom,cljs.core.assoc,hash,reagent.core.atom.call(null,false));

return stylefy.impl.dom.request_asynchronous_dom_update.call(null);
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$.call(null,cljs.core.deref.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_dom),style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33517 = arguments.length;
var i__4642__auto___33518 = (0);
while(true){
if((i__4642__auto___33518 < len__4641__auto___33517)){
args__4647__auto__.push((arguments[i__4642__auto___33518]));

var G__33519 = (i__4642__auto___33518 + (1));
i__4642__auto___33518 = G__33519;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
var garden_definition = cljs.core.apply.call(null,garden.stylesheet.at_keyframes,identifier,frames);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.keyframes_in_use,cljs.core.assoc,identifier,garden.core.css.call(null,garden_definition));

stylefy.impl.dom.request_asynchronous_dom_update.call(null);

return garden_definition;
});

stylefy.impl.dom.add_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.dom.add_keyframes.cljs$lang$applyTo = (function (seq33515){
var G__33516 = cljs.core.first.call(null,seq33515);
var seq33515__$1 = cljs.core.next.call(null,seq33515);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33516,seq33515__$1);
});

stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(properties){
var garden_definition = garden.stylesheet.at_font_face.call(null,properties);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.font_faces_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),garden.core.css.call(null,garden_definition)], null));

stylefy.impl.dom.request_asynchronous_dom_update.call(null);

return garden_definition;
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(name,properties){
var custom_tag_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087),name,new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_tags_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),stylefy.impl.conversion.style__GT_css.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703).cljs$core$IFn$_invoke$arity$1(custom_tag_definition),new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087).cljs$core$IFn$_invoke$arity$1(custom_tag_definition)], null))], null));

stylefy.impl.dom.request_asynchronous_dom_update.call(null);

return custom_tag_definition;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(name,properties){
var custom_class_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126),name,new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),stylefy.impl.conversion.style__GT_css.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216).cljs$core$IFn$_invoke$arity$1(custom_class_definition),new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),stylefy.impl.conversion.class_selector.call(null,new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126).cljs$core$IFn$_invoke$arity$1(custom_class_definition))], null))], null));

stylefy.impl.dom.request_asynchronous_dom_update.call(null);

return custom_class_definition;
});

//# sourceMappingURL=dom.js.map?rel=1590531132116
