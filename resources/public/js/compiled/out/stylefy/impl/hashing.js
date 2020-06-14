// Compiled by ClojureScript 1.10.439 {}
goog.provide('stylefy.impl.hashing');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('stylefy.impl.utils');
goog.require('garden.compiler');
stylefy.impl.hashing.default_class_prefix = "_stylefy";
stylefy.impl.hashing.use_custom_class_prefix_QMARK_ = cljs.core.atom.call(null,false);
/**
 * Checks that the value is valid and returns as properly formatted prefix.
 */
stylefy.impl.hashing.check_custom_class_prefix = (function stylefy$impl$hashing$check_custom_class_prefix(custom_class_prefix){
if((((custom_class_prefix == null)) || (typeof custom_class_prefix === 'string') || ((custom_class_prefix instanceof cljs.core.Keyword)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Custom class prefix should be either string, keyword or nil, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,custom_class_prefix))].join('')),"\n","(or (nil? custom-class-prefix) (string? custom-class-prefix) (keyword? custom-class-prefix))"].join('')));
}

if((custom_class_prefix == null)){
return stylefy.impl.hashing.default_class_prefix;
} else {
if(typeof custom_class_prefix === 'string'){
return custom_class_prefix;
} else {
if((custom_class_prefix instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,custom_class_prefix);
} else {
return null;
}
}
}
});
stylefy.impl.hashing.hash_style = (function stylefy$impl$hashing$hash_style(style){
if((!(cljs.core.empty_QMARK_.call(null,style)))){
var hashable_garden_units = cljs.core.reduce.call(null,(function (result,prop_key){
var prop_value = prop_key.call(null,style);
if(stylefy.impl.utils.is_garden_value_QMARK_.call(null,prop_value)){
return cljs.core.assoc.call(null,result,prop_key,garden.compiler.render_css.call(null,prop_value));
} else {
return result;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,stylefy.impl.utils.filter_css_props.call(null,style)));
var hashable_style = cljs.core.merge.call(null,style,hashable_garden_units);
var hashable_style__$1 = cljs.core.dissoc.call(null,hashable_style,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword("stylefy.core","class-prefix","stylefy.core/class-prefix",1388140586));
var class_prefix = (cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.hashing.use_custom_class_prefix_QMARK_))?stylefy.impl.hashing.check_custom_class_prefix.call(null,new cljs.core.Keyword("stylefy.core","class-prefix","stylefy.core/class-prefix",1388140586).cljs$core$IFn$_invoke$arity$1(style)):stylefy.impl.hashing.default_class_prefix);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_prefix),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,hashable_style__$1))].join('');
} else {
return null;
}
});
stylefy.impl.hashing.init_custom_class_prefix = (function stylefy$impl$hashing$init_custom_class_prefix(options){
return cljs.core.reset_BANG_.call(null,stylefy.impl.hashing.use_custom_class_prefix_QMARK_,cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"use-custom-class-prefix?","use-custom-class-prefix?",-1156349118).cljs$core$IFn$_invoke$arity$1(options)));
});

//# sourceMappingURL=hashing.js.map?rel=1590531132181
