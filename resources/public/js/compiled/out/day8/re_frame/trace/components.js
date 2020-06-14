// Compiled by ClojureScript 1.10.439 {}
goog.provide('day8.re_frame.trace.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.fx.dom');
day8.re_frame.trace.components.icon_add = (function day8$re_frame$trace$components$icon_add(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.icon.icon-add","svg.icon.icon-add",1816695827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 32 32"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"add"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"], null)], null)], null);
});
day8.re_frame.trace.components.icon_remove = (function day8$re_frame$trace$components$icon_remove(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.icon.icon-remove","svg.icon.icon-remove",-1821219921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 32 32"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"remove"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"], null)], null)], null);
});
day8.re_frame.trace.components.scroll_BANG_ = (function day8$re_frame$trace$components$scroll_BANG_(el,start,end,time){
return (new goog.fx.dom.Scroll(el,cljs.core.clj__GT_js.call(null,start),cljs.core.clj__GT_js.call(null,end),time)).play();
});
day8.re_frame.trace.components.scrolled_to_end_QMARK_ = (function day8$re_frame$trace$components$scrolled_to_end_QMARK_(el,tolerance){
return (tolerance > ((el.scrollHeight - el.scrollTop) - el.clientHeight));
});
day8.re_frame.trace.components.autoscroll_list = (function day8$re_frame$trace$components$autoscroll_list(p__33292,child){
var map__33293 = p__33292;
var map__33293__$1 = (((((!((map__33293 == null))))?(((((map__33293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33293):map__33293);
var class$ = cljs.core.get.call(null,map__33293__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var scroll_QMARK_ = cljs.core.get.call(null,map__33293__$1,new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951));

var node = reagent.core.atom.call(null,null);
var should_scroll = reagent.core.atom.call(null,true);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"autoscroll-list",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (node,should_scroll,map__33293,map__33293__$1,class$,scroll_QMARK_){
return (function (_){
return day8.re_frame.trace.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(0));
});})(node,should_scroll,map__33293,map__33293__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (node,should_scroll,map__33293,map__33293__$1,class$,scroll_QMARK_){
return (function (_){
return cljs.core.reset_BANG_.call(null,should_scroll,day8.re_frame.trace.components.scrolled_to_end_QMARK_.call(null,cljs.core.deref.call(null,node),(100)));
});})(node,should_scroll,map__33293,map__33293__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (node,should_scroll,map__33293,map__33293__$1,class$,scroll_QMARK_){
return (function (_){
if(cljs.core.truth_((function (){var and__4036__auto__ = scroll_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,should_scroll);
} else {
return and__4036__auto__;
}
})())){
return day8.re_frame.trace.components.scroll_BANG_.call(null,cljs.core.deref.call(null,node),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollTop], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.deref.call(null,node).scrollHeight], null),(1600));
} else {
return null;
}
});})(node,should_scroll,map__33293,map__33293__$1,class$,scroll_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (node,should_scroll,map__33293,map__33293__$1,class$,scroll_QMARK_){
return (function (p__33295,child__$1){
var map__33296 = p__33295;
var map__33296__$1 = (((((!((map__33296 == null))))?(((((map__33296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33296):map__33296);
var class$__$1 = cljs.core.get.call(null,map__33296__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (map__33296,map__33296__$1,class$__$1,node,should_scroll,map__33293,map__33293__$1,class$,scroll_QMARK_){
return (function (dom_node){
return cljs.core.reset_BANG_.call(null,node,dom_node);
});})(map__33296,map__33296__$1,class$__$1,node,should_scroll,map__33293,map__33293__$1,class$,scroll_QMARK_))
], null),child__$1], null);
});})(node,should_scroll,map__33293,map__33293__$1,class$,scroll_QMARK_))
], null));
});

//# sourceMappingURL=components.js.map?rel=1590529169577
