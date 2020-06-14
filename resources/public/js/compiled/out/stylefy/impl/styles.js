// Compiled by ClojureScript 1.10.439 {}
goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('stylefy.impl.dom');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('stylefy.impl.hashing');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.conversion');
goog.require('clojure.set');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.call(null,new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.call(null,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null));
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__33524){
var map__33525 = p__33524;
var map__33525__$1 = (((((!((map__33525 == null))))?(((((map__33525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33525):map__33525);
var style = map__33525__$1;
var props = cljs.core.get.call(null,map__33525__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__33525__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
stylefy.impl.dom.save_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null));

var seq__33527 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__33528 = null;
var count__33529 = (0);
var i__33530 = (0);
while(true){
if((i__33530 < count__33529)){
var sub_style = cljs.core._nth.call(null,chunk__33528,i__33530);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style.call(null,sub_style)], null));


var G__33531 = seq__33527;
var G__33532 = chunk__33528;
var G__33533 = count__33529;
var G__33534 = (i__33530 + (1));
seq__33527 = G__33531;
chunk__33528 = G__33532;
count__33529 = G__33533;
i__33530 = G__33534;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33527);
if(temp__5735__auto__){
var seq__33527__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33527__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__33527__$1);
var G__33535 = cljs.core.chunk_rest.call(null,seq__33527__$1);
var G__33536 = c__4461__auto__;
var G__33537 = cljs.core.count.call(null,c__4461__auto__);
var G__33538 = (0);
seq__33527 = G__33535;
chunk__33528 = G__33536;
count__33529 = G__33537;
i__33530 = G__33538;
continue;
} else {
var sub_style = cljs.core.first.call(null,seq__33527__$1);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style.call(null,sub_style)], null));


var G__33539 = cljs.core.next.call(null,seq__33527__$1);
var G__33540 = null;
var G__33541 = (0);
var G__33542 = (0);
seq__33527 = G__33539;
chunk__33528 = G__33540;
count__33529 = G__33541;
i__33530 = G__33542;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given a style, hash and options, returns HTML attributes for a Hiccup component,
 * or nil if there are not any attributes.
 */
stylefy.impl.styles.prepare_style_return_value = (function stylefy$impl$styles$prepare_style_return_value(style,style_hash,options){
var with_classes = cljs.core.concat.call(null,new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options));
var html_attributes = stylefy.impl.utils.filter_css_props.call(null,options);
var html_attributes_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(html_attributes);
var final_class = clojure.string.trim.call(null,(((html_attributes_class == null))?clojure.string.join.call(null," ",cljs.core.concat.call(null,with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((typeof html_attributes_class === 'string')?clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [html_attributes_class], null),with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((cljs.core.vector_QMARK_.call(null,html_attributes_class))?clojure.string.join.call(null," ",cljs.core.concat.call(null,html_attributes_class,with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):null))));
var final_html_attributes = cljs.core.merge.call(null,html_attributes,(((!(cljs.core.empty_QMARK_.call(null,final_class))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),final_class], null):null));
if((((html_attributes_class == null)) || (typeof html_attributes_class === 'string') || (cljs.core.vector_QMARK_.call(null,html_attributes_class)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Unsupported :class type (should be nil, string or vector). Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,html_attributes_class))].join('')),"\n","(or (nil? html-attributes-class) (string? html-attributes-class) (vector? html-attributes-class))"].join('')));
}

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

if((!(cljs.core.empty_QMARK_.call(null,final_html_attributes)))){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value.call(null,style,style_hash,options);
if(((cljs.core.empty_QMARK_.call(null,style)) || (stylefy.impl.dom.style_in_dom_QMARK_.call(null,style_hash)))){
return return_map;
} else {
var contains_media_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_feature_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_manual_mode_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(style) == null)));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style);
var mode_names = ((cljs.core.map_QMARK_.call(null,modes))?cljs.core.set.call(null,cljs.core.keys.call(null,modes)):((cljs.core.vector_QMARK_.call(null,modes))?cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,modes)):cljs.core.PersistentHashSet.EMPTY
));
var contains_modes_not_excluded_QMARK_ = (!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,excluded_modes),mode_names))));
var inline_style = stylefy.impl.conversion.garden_units__GT_css.call(null,stylefy.impl.utils.filter_css_props.call(null,style));
if(((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_manual_mode_QMARK_) || (contains_modes_not_excluded_QMARK_))){
return cljs.core.merge.call(null,return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,inline_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null))], null));
} else {
return cljs.core.merge.call(null,return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inline_style], null));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options){
var with_classes_options = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options);
var with_classes_style = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style);
if((((with_classes_options == null)) || (((cljs.core.vector_QMARK_.call(null,with_classes_options)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,with_classes_options)))))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument inside options map must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,with_classes_options))].join('')),"\n","(or (nil? with-classes-options) (and (vector? with-classes-options) (every? string? with-classes-options)))"].join('')));
}

if((((with_classes_style == null)) || (((cljs.core.vector_QMARK_.call(null,with_classes_style)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,with_classes_style)))))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument inside style map must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,with_classes_style))].join('')),"\n","(or (nil? with-classes-style) (and (vector? with-classes-style) (every? string? with-classes-style)))"].join('')));
}

stylefy.impl.dom.check_stylefy_initialisation.call(null);

var style_with_global_vendors = ((cljs.core.empty_QMARK_.call(null,style))?null:stylefy.impl.styles.add_global_vendors.call(null,style));
var style_hash = stylefy.impl.hashing.hash_style.call(null,style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash.call(null,style_hash);
if((((!(cljs.core.empty_QMARK_.call(null,style_with_global_vendors)))) && ((!((style_hash == null)))) && (cljs.core.not.call(null,already_created)))){
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style_with_global_vendors,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null));
} else {
}

return stylefy.impl.styles.style_return_value.call(null,style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options){
var resolved_sub_style = cljs.core.get.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_.call(null,resolved_sub_style,options);
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,sub_style))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33547 = arguments.length;
var i__4642__auto___33548 = (0);
while(true){
if((i__4642__auto___33548 < len__4641__auto___33547)){
args__4647__auto__.push((arguments[i__4642__auto___33548]));

var G__33549 = (i__4642__auto___33548 + (1));
i__4642__auto___33548 = G__33549;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.call(null,(function (p1__33543_SHARP_,p2__33544_SHARP_){
return cljs.core.get_in.call(null,p1__33543_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__33544_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,sub_styles))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join(''));
}
});

stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq33545){
var G__33546 = cljs.core.first.call(null,seq33545);
var seq33545__$1 = cljs.core.next.call(null,seq33545);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33546,seq33545__$1);
});

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(var_args){
var G__33551 = arguments.length;
switch (G__33551) {
case 1:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.styles.prepare_styles.call(null,styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),true], null));
});

stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,p__33552){
var map__33553 = p__33552;
var map__33553__$1 = (((((!((map__33553 == null))))?(((((map__33553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33553):map__33553);
var options = map__33553__$1;
var request_dom_update_after_done_QMARK_ = cljs.core.get.call(null,map__33553__$1,new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510));
var styles_33560__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,styles);
var seq__33555_33561 = cljs.core.seq.call(null,styles_33560__$1);
var chunk__33556_33562 = null;
var count__33557_33563 = (0);
var i__33558_33564 = (0);
while(true){
if((i__33558_33564 < count__33557_33563)){
var style_33565 = cljs.core._nth.call(null,chunk__33556_33562,i__33558_33564);
stylefy.impl.styles.use_style_BANG_.call(null,style_33565,cljs.core.PersistentArrayMap.EMPTY);

var temp__5735__auto___33566 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_33565));
if(cljs.core.truth_(temp__5735__auto___33566)){
var sub_styles_33567 = temp__5735__auto___33566;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_33567,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__33568 = seq__33555_33561;
var G__33569 = chunk__33556_33562;
var G__33570 = count__33557_33563;
var G__33571 = (i__33558_33564 + (1));
seq__33555_33561 = G__33568;
chunk__33556_33562 = G__33569;
count__33557_33563 = G__33570;
i__33558_33564 = G__33571;
continue;
} else {
var temp__5735__auto___33572 = cljs.core.seq.call(null,seq__33555_33561);
if(temp__5735__auto___33572){
var seq__33555_33573__$1 = temp__5735__auto___33572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33555_33573__$1)){
var c__4461__auto___33574 = cljs.core.chunk_first.call(null,seq__33555_33573__$1);
var G__33575 = cljs.core.chunk_rest.call(null,seq__33555_33573__$1);
var G__33576 = c__4461__auto___33574;
var G__33577 = cljs.core.count.call(null,c__4461__auto___33574);
var G__33578 = (0);
seq__33555_33561 = G__33575;
chunk__33556_33562 = G__33576;
count__33557_33563 = G__33577;
i__33558_33564 = G__33578;
continue;
} else {
var style_33579 = cljs.core.first.call(null,seq__33555_33573__$1);
stylefy.impl.styles.use_style_BANG_.call(null,style_33579,cljs.core.PersistentArrayMap.EMPTY);

var temp__5735__auto___33580__$1 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_33579));
if(cljs.core.truth_(temp__5735__auto___33580__$1)){
var sub_styles_33581 = temp__5735__auto___33580__$1;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_33581,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__33582 = cljs.core.next.call(null,seq__33555_33573__$1);
var G__33583 = null;
var G__33584 = (0);
var G__33585 = (0);
seq__33555_33561 = G__33582;
chunk__33556_33562 = G__33583;
count__33557_33563 = G__33584;
i__33558_33564 = G__33585;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(request_dom_update_after_done_QMARK_)){
return stylefy.impl.dom.update_dom_if_requested.call(null);
} else {
return null;
}
});

stylefy.impl.styles.prepare_styles.cljs$lang$maxFixedArity = 2;

stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_.call(null,stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});

//# sourceMappingURL=styles.js.map?rel=1590531132232
