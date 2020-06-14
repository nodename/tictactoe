// Compiled by ClojureScript 1.10.439 {}
goog.provide('stylefy.impl.utils');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('garden.core');
goog.require('garden.color');
goog.require('garden.types');
goog.require('garden.stylesheet');
goog.require('clojure.string');
/**
 * Removes stylefy's namespaced keywords from the given map.
 */
stylefy.impl.utils.filter_css_props = (function stylefy$impl$utils$filter_css_props(props){
return cljs.core.apply.call(null,cljs.core.dissoc,props,cljs.core.filter.call(null,(function (p1__32100_SHARP_){
var and__4036__auto__ = cljs.core.namespace.call(null,p1__32100_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return clojure.string.starts_with_QMARK_.call(null,cljs.core.namespace.call(null,p1__32100_SHARP_),"stylefy");
} else {
return and__4036__auto__;
}
}),cljs.core.keys.call(null,props)));
});
stylefy.impl.utils.is_garden_value_QMARK_ = (function stylefy$impl$utils$is_garden_value_QMARK_(value){
return (((value instanceof garden.types.CSSUnit)) || ((value instanceof garden.color.CSSColor)) || ((value instanceof garden.types.CSSFunction)));
});

//# sourceMappingURL=utils.js.map?rel=1590531131527
