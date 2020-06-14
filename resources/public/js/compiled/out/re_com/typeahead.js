// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__37920){
var map__37921 = p__37920;
var map__37921__$1 = (((((!((map__37921 == null))))?(((((map__37921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37921):map__37921);
var args = map__37921__$1;
var on_change = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__37921__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__37923 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4047__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__37923,external_model_value);
} else {
return G__37923;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__37924,event){
var map__37925 = p__37924;
var map__37925__$1 = (((((!((map__37925 == null))))?(((((map__37925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37925):map__37925);
var state = map__37925__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__37925__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__37925__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__37927 = event;
var G__37927__$1 = (((G__37927 instanceof cljs.core.Keyword))?G__37927.fqn:null);
switch (G__37927__$1) {
case "input-text-blurred":
var and__4036__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__4036__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__4047__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37927__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__37929,event){
var map__37930 = p__37929;
var map__37930__$1 = (((((!((map__37930 == null))))?(((((map__37930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37930):map__37930);
var state = map__37930__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__37930__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__37932 = event;
var G__37932__$1 = (((G__37932 instanceof cljs.core.Keyword))?G__37932.fqn:null);
switch (G__37932__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__37934,new_value){
var map__37935 = p__37934;
var map__37935__$1 = (((((!((map__37935 == null))))?(((((map__37935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37935):map__37935);
var state = map__37935__$1;
var on_change = cljs.core.get.call(null,map__37935__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__37937,suggestion){
var map__37938 = p__37937;
var map__37938__$1 = (((((!((map__37938 == null))))?(((((map__37938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37938):map__37938);
var state = map__37938__$1;
var suggestion_to_string = cljs.core.get.call(null,map__37938__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__37940 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__37940,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__37940;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__37941,index){
var map__37942 = p__37941;
var map__37942__$1 = (((((!((map__37942 == null))))?(((((map__37942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37942):map__37942);
var state = map__37942__$1;
var suggestions = cljs.core.get.call(null,map__37942__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__37944 = state;
var G__37944__$1 = cljs.core.assoc.call(null,G__37944,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__37944__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__37944__$1,suggestion):G__37944__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__37944__$2,suggestion);
} else {
return G__37944__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__37945,index){
var map__37946 = p__37945;
var map__37946__$1 = (((((!((map__37946 == null))))?(((((map__37946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37946):map__37946);
var state = map__37946__$1;
var suggestions = cljs.core.get.call(null,map__37946__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__37948){
var map__37949 = p__37948;
var map__37949__$1 = (((((!((map__37949 == null))))?(((((map__37949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37949):map__37949);
var state = map__37949__$1;
var suggestion_active_index = cljs.core.get.call(null,map__37949__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__37951 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__37951,suggestion_active_index);
} else {
return G__37951;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__37952){
var map__37953 = p__37952;
var map__37953__$1 = (((((!((map__37953 == null))))?(((((map__37953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37953):map__37953);
var state = map__37953__$1;
var suggestions = cljs.core.get.call(null,map__37953__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__37953__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__37955 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__37955,re_com.typeahead.wrap.call(null,((function (){var or__4047__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__37955;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__37956){
var map__37957 = p__37956;
var map__37957__$1 = (((((!((map__37957 == null))))?(((((map__37957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37957):map__37957);
var state = map__37957__$1;
var suggestions = cljs.core.get.call(null,map__37957__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__37957__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__37959 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__37959,re_com.typeahead.wrap.call(null,((function (){var or__4047__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__37959;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__37960 = state;
var G__37960__$1 = re_com.typeahead.clear_suggestions.call(null,G__37960)
;
var G__37960__$2 = cljs.core.assoc.call(null,G__37960__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__37960__$2,null);
} else {
return G__37960__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__37961){
var map__37962 = p__37961;
var map__37962__$1 = (((((!((map__37962 == null))))?(((((map__37962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37962):map__37962);
var state = map__37962__$1;
var input_text = cljs.core.get.call(null,map__37962__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__37962__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__37964 = state;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__4036__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__4036__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__37964,input_text);
} else {
return G__37964;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5733__auto__ = data_source.call(null,text,(function (p1__37965_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__37965_SHARP_);
}));
if(cljs.core.truth_(temp__5733__auto__)){
var return_value = temp__5733__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__){
return (function (state_37982){
var state_val_37983 = (state_37982[(1)]);
if((state_val_37983 === (1))){
var state_37982__$1 = state_37982;
var statearr_37984_37996 = state_37982__$1;
(statearr_37984_37996[(2)] = null);

(statearr_37984_37996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37983 === (2))){
var state_37982__$1 = state_37982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37982__$1,(4),c_search);
} else {
if((state_val_37983 === (3))){
var inst_37980 = (state_37982[(2)]);
var state_37982__$1 = state_37982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37982__$1,inst_37980);
} else {
if((state_val_37983 === (4))){
var inst_37968 = (state_37982[(7)]);
var inst_37968__$1 = (state_37982[(2)]);
var inst_37969 = cljs.core.deref.call(null,state_atom);
var inst_37970 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_37969);
var inst_37971 = cljs.core._EQ_.call(null,"",inst_37968__$1);
var state_37982__$1 = (function (){var statearr_37985 = state_37982;
(statearr_37985[(8)] = inst_37970);

(statearr_37985[(7)] = inst_37968__$1);

return statearr_37985;
})();
if(inst_37971){
var statearr_37986_37997 = state_37982__$1;
(statearr_37986_37997[(1)] = (5));

} else {
var statearr_37987_37998 = state_37982__$1;
(statearr_37987_37998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37983 === (5))){
var inst_37973 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_37982__$1 = state_37982;
var statearr_37988_37999 = state_37982__$1;
(statearr_37988_37999[(2)] = inst_37973);

(statearr_37988_37999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37983 === (6))){
var inst_37970 = (state_37982[(8)]);
var inst_37968 = (state_37982[(7)]);
var inst_37975 = re_com.typeahead.search_data_source_BANG_.call(null,inst_37970,state_atom,inst_37968);
var state_37982__$1 = state_37982;
var statearr_37989_38000 = state_37982__$1;
(statearr_37989_38000[(2)] = inst_37975);

(statearr_37989_38000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37983 === (7))){
var inst_37977 = (state_37982[(2)]);
var state_37982__$1 = (function (){var statearr_37990 = state_37982;
(statearr_37990[(9)] = inst_37977);

return statearr_37990;
})();
var statearr_37991_38001 = state_37982__$1;
(statearr_37991_38001[(2)] = null);

(statearr_37991_38001[(1)] = (2));


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
});})(c__35904__auto__))
;
return ((function (switch__35809__auto__,c__35904__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto____0 = (function (){
var statearr_37992 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37992[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto__);

(statearr_37992[(1)] = (1));

return statearr_37992;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto____1 = (function (state_37982){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_37982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e37993){if((e37993 instanceof Object)){
var ex__35813__auto__ = e37993;
var statearr_37994_38002 = state_37982;
(statearr_37994_38002[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38003 = state_37982;
state_37982 = G__38003;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto__ = function(state_37982){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto____1.call(this,state_37982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__))
})();
var state__35906__auto__ = (function (){var statearr_37995 = f__35905__auto__.call(null);
(statearr_37995[(6)] = c__35904__auto__);

return statearr_37995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__))
);

return c__35904__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__38005 = cljs.core.deref.call(null,state_atom);
var map__38005__$1 = (((((!((map__38005 == null))))?(((((map__38005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38005):map__38005);
var state = map__38005__$1;
var input_text = cljs.core.get.call(null,map__38005__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__38005__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__38005,map__38005__$1,state,input_text,c_input){
return (function (p1__38004_SHARP_){
var G__38007 = p1__38004_SHARP_;
var G__38007__$1 = cljs.core.assoc.call(null,G__38007,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__38007__$1,new_text);
} else {
return G__38007__$1;
}
});})(map__38005,map__38005__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__38008 = cljs.core._EQ_;
var expr__38009 = event.which;
if(cljs.core.truth_(pred__38008.call(null,goog.events.KeyCodes.UP,expr__38009))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__38008.call(null,goog.events.KeyCodes.DOWN,expr__38009))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__38008.call(null,goog.events.KeyCodes.ENTER,expr__38009))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__38008.call(null,goog.events.KeyCodes.ESC,expr__38009))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__38008.call(null,goog.events.KeyCodes.TAB,expr__38009))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38033 = arguments.length;
var i__4642__auto___38034 = (0);
while(true){
if((i__4642__auto___38034 < len__4641__auto___38033)){
args__4647__auto__.push((arguments[i__4642__auto___38034]));

var G__38035 = (i__4642__auto___38034 + (1));
i__4642__auto___38034 = G__38035;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__38013){
var map__38014 = p__38013;
var map__38014__$1 = (((((!((map__38014 == null))))?(((((map__38014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38014):map__38014);
var args = map__38014__$1;
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__38016 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__38016__$1 = (((((!((map__38016 == null))))?(((((map__38016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38016):map__38016);
var state = map__38016__$1;
var c_search = cljs.core.get.call(null,map__38016__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__38016__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args){
return (function() { 
var G__38036__delegate = function (p__38018){
var map__38019 = p__38018;
var map__38019__$1 = (((((!((map__38019 == null))))?(((((map__38019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38019):map__38019);
var args__$1 = map__38019__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__38021 = cljs.core.deref.call(null,state_atom);
var map__38021__$1 = (((((!((map__38021 == null))))?(((((map__38021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38021):map__38021);
var state__$1 = map__38021__$1;
var suggestions = cljs.core.get.call(null,map__38021__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__38021__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__38021__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__38021__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__4047__auto__ = width;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4434__auto__ = ((function (map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args){
return (function re_com$typeahead$iter__38023(s__38024){
return (new cljs.core.LazySeq(null,((function (map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args){
return (function (){
var s__38024__$1 = s__38024;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__38024__$1);
if(temp__5735__auto__){
var s__38024__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38024__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38024__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38026 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38025 = (0);
while(true){
if((i__38025 < size__4433__auto__)){
var vec__38027 = cljs.core._nth.call(null,c__4432__auto__,i__38025);
var i = cljs.core.nth.call(null,vec__38027,(0),null);
var s = cljs.core.nth.call(null,vec__38027,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__38026,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__38025,selected_QMARK_,vec__38027,i,s,c__4432__auto__,size__4433__auto__,b__38026,s__38024__$2,temp__5735__auto__,map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__38025,selected_QMARK_,vec__38027,i,s,c__4432__auto__,size__4433__auto__,b__38026,s__38024__$2,temp__5735__auto__,map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__38025,selected_QMARK_,vec__38027,i,s,c__4432__auto__,size__4433__auto__,b__38026,s__38024__$2,temp__5735__auto__,map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args){
return (function (p1__38011_SHARP_){
p1__38011_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__38025,selected_QMARK_,vec__38027,i,s,c__4432__auto__,size__4433__auto__,b__38026,s__38024__$2,temp__5735__auto__,map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__38037 = (i__38025 + (1));
i__38025 = G__38037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38026),re_com$typeahead$iter__38023.call(null,cljs.core.chunk_rest.call(null,s__38024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38026),null);
}
} else {
var vec__38030 = cljs.core.first.call(null,s__38024__$2);
var i = cljs.core.nth.call(null,vec__38030,(0),null);
var s = cljs.core.nth.call(null,vec__38030,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__38030,i,s,s__38024__$2,temp__5735__auto__,map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__38030,i,s,s__38024__$2,temp__5735__auto__,map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__38030,i,s,s__38024__$2,temp__5735__auto__,map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args){
return (function (p1__38011_SHARP_){
p1__38011_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__38030,i,s,s__38024__$2,temp__5735__auto__,map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__38023.call(null,cljs.core.rest.call(null,s__38024__$2)));
}
} else {
return null;
}
break;
}
});})(map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args))
,null,null));
});})(map__38021,map__38021__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__38019,map__38019__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args))
;
return iter__4434__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__38036 = function (var_args){
var p__38018 = null;
if (arguments.length > 0) {
var G__38038__i = 0, G__38038__a = new Array(arguments.length -  0);
while (G__38038__i < G__38038__a.length) {G__38038__a[G__38038__i] = arguments[G__38038__i + 0]; ++G__38038__i;}
  p__38018 = new cljs.core.IndexedSeq(G__38038__a,0,null);
} 
return G__38036__delegate.call(this,p__38018);};
G__38036.cljs$lang$maxFixedArity = 0;
G__38036.cljs$lang$applyTo = (function (arglist__38039){
var p__38018 = cljs.core.seq(arglist__38039);
return G__38036__delegate(p__38018);
});
G__38036.cljs$core$IFn$_invoke$arity$variadic = G__38036__delegate;
return G__38036;
})()
;
;})(map__38016,map__38016__$1,state,c_search,c_input,state_atom,input_text_model,map__38014,map__38014__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq38012){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38012));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__35904__auto___38120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___38120,out){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___38120,out){
return (function (state_38090){
var state_val_38091 = (state_38090[(1)]);
if((state_val_38091 === (7))){
var inst_38045 = (state_38090[(2)]);
var state_38090__$1 = state_38090;
var statearr_38092_38121 = state_38090__$1;
(statearr_38092_38121[(2)] = inst_38045);

(statearr_38092_38121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (1))){
var inst_38040 = null;
var state_38090__$1 = (function (){var statearr_38093 = state_38090;
(statearr_38093[(7)] = inst_38040);

return statearr_38093;
})();
var statearr_38094_38122 = state_38090__$1;
(statearr_38094_38122[(2)] = null);

(statearr_38094_38122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (4))){
var state_38090__$1 = state_38090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38090__$1,(7),in$);
} else {
if((state_val_38091 === (15))){
var inst_38075 = (state_38090[(2)]);
var state_38090__$1 = (function (){var statearr_38095 = state_38090;
(statearr_38095[(8)] = inst_38075);

return statearr_38095;
})();
var statearr_38096_38123 = state_38090__$1;
(statearr_38096_38123[(2)] = null);

(statearr_38096_38123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (13))){
var inst_38063 = (state_38090[(9)]);
var inst_38077 = cljs.core._EQ_.call(null,inst_38063,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_38090__$1 = state_38090;
if(inst_38077){
var statearr_38097_38124 = state_38090__$1;
(statearr_38097_38124[(1)] = (16));

} else {
var statearr_38098_38125 = state_38090__$1;
(statearr_38098_38125[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (6))){
var inst_38049 = (state_38090[(10)]);
var inst_38048 = (state_38090[(2)]);
var inst_38049__$1 = cljs.core.async.timeout.call(null,ms);
var inst_38057 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38058 = [in$,inst_38049__$1];
var inst_38059 = (new cljs.core.PersistentVector(null,2,(5),inst_38057,inst_38058,null));
var state_38090__$1 = (function (){var statearr_38099 = state_38090;
(statearr_38099[(10)] = inst_38049__$1);

(statearr_38099[(11)] = inst_38048);

return statearr_38099;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38090__$1,(8),inst_38059);
} else {
if((state_val_38091 === (17))){
var state_38090__$1 = state_38090;
var statearr_38100_38126 = state_38090__$1;
(statearr_38100_38126[(2)] = null);

(statearr_38100_38126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (3))){
var inst_38088 = (state_38090[(2)]);
var state_38090__$1 = state_38090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38090__$1,inst_38088);
} else {
if((state_val_38091 === (12))){
var inst_38048 = (state_38090[(11)]);
var state_38090__$1 = state_38090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38090__$1,(15),out,inst_38048);
} else {
if((state_val_38091 === (2))){
var inst_38040 = (state_38090[(7)]);
var inst_38042 = (inst_38040 == null);
var state_38090__$1 = state_38090;
if(cljs.core.truth_(inst_38042)){
var statearr_38101_38127 = state_38090__$1;
(statearr_38101_38127[(1)] = (4));

} else {
var statearr_38102_38128 = state_38090__$1;
(statearr_38102_38128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (11))){
var inst_38085 = (state_38090[(2)]);
var inst_38040 = inst_38085;
var state_38090__$1 = (function (){var statearr_38103 = state_38090;
(statearr_38103[(7)] = inst_38040);

return statearr_38103;
})();
var statearr_38104_38129 = state_38090__$1;
(statearr_38104_38129[(2)] = null);

(statearr_38104_38129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (9))){
var inst_38061 = (state_38090[(12)]);
var inst_38069 = cljs.core.nth.call(null,inst_38061,(0),null);
var inst_38070 = cljs.core.nth.call(null,inst_38061,(1),null);
var state_38090__$1 = (function (){var statearr_38105 = state_38090;
(statearr_38105[(13)] = inst_38070);

return statearr_38105;
})();
var statearr_38106_38130 = state_38090__$1;
(statearr_38106_38130[(2)] = inst_38069);

(statearr_38106_38130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (5))){
var inst_38040 = (state_38090[(7)]);
var state_38090__$1 = state_38090;
var statearr_38107_38131 = state_38090__$1;
(statearr_38107_38131[(2)] = inst_38040);

(statearr_38107_38131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (14))){
var inst_38083 = (state_38090[(2)]);
var state_38090__$1 = state_38090;
var statearr_38108_38132 = state_38090__$1;
(statearr_38108_38132[(2)] = inst_38083);

(statearr_38108_38132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (16))){
var inst_38062 = (state_38090[(14)]);
var state_38090__$1 = state_38090;
var statearr_38109_38133 = state_38090__$1;
(statearr_38109_38133[(2)] = inst_38062);

(statearr_38109_38133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (10))){
var inst_38049 = (state_38090[(10)]);
var inst_38063 = (state_38090[(9)]);
var inst_38072 = cljs.core._EQ_.call(null,inst_38063,inst_38049);
var state_38090__$1 = state_38090;
if(inst_38072){
var statearr_38110_38134 = state_38090__$1;
(statearr_38110_38134[(1)] = (12));

} else {
var statearr_38111_38135 = state_38090__$1;
(statearr_38111_38135[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (18))){
var inst_38081 = (state_38090[(2)]);
var state_38090__$1 = state_38090;
var statearr_38112_38136 = state_38090__$1;
(statearr_38112_38136[(2)] = inst_38081);

(statearr_38112_38136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38091 === (8))){
var inst_38061 = (state_38090[(12)]);
var inst_38063 = (state_38090[(9)]);
var inst_38061__$1 = (state_38090[(2)]);
var inst_38062 = cljs.core.nth.call(null,inst_38061__$1,(0),null);
var inst_38063__$1 = cljs.core.nth.call(null,inst_38061__$1,(1),null);
var inst_38064 = cljs.core._EQ_.call(null,inst_38063__$1,in$);
var state_38090__$1 = (function (){var statearr_38113 = state_38090;
(statearr_38113[(12)] = inst_38061__$1);

(statearr_38113[(9)] = inst_38063__$1);

(statearr_38113[(14)] = inst_38062);

return statearr_38113;
})();
if(inst_38064){
var statearr_38114_38137 = state_38090__$1;
(statearr_38114_38137[(1)] = (9));

} else {
var statearr_38115_38138 = state_38090__$1;
(statearr_38115_38138[(1)] = (10));

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
});})(c__35904__auto___38120,out))
;
return ((function (switch__35809__auto__,c__35904__auto___38120,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__35810__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__35810__auto____0 = (function (){
var statearr_38116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38116[(0)] = re_com$typeahead$debounce_$_state_machine__35810__auto__);

(statearr_38116[(1)] = (1));

return statearr_38116;
});
var re_com$typeahead$debounce_$_state_machine__35810__auto____1 = (function (state_38090){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_38090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e38117){if((e38117 instanceof Object)){
var ex__35813__auto__ = e38117;
var statearr_38118_38139 = state_38090;
(statearr_38118_38139[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38140 = state_38090;
state_38090 = G__38140;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__35810__auto__ = function(state_38090){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__35810__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__35810__auto____1.call(this,state_38090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__35810__auto____0;
re_com$typeahead$debounce_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__35810__auto____1;
return re_com$typeahead$debounce_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___38120,out))
})();
var state__35906__auto__ = (function (){var statearr_38119 = f__35905__auto__.call(null);
(statearr_38119[(6)] = c__35904__auto___38120);

return statearr_38119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___38120,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1590529173833
