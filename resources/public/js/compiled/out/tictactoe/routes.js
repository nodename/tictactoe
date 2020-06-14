// Compiled by ClojureScript 1.10.439 {}
goog.provide('tictactoe.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('tictactoe.events');
tictactoe.routes.hook_browser_navigation_BANG_ = (function tictactoe$routes$hook_browser_navigation_BANG_(){
var G__33753 = (new goog.History());
goog.events.listen(G__33753,goog.history.EventType.NAVIGATE,((function (G__33753){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__33753))
);

G__33753.setEnabled(true);

return G__33753;
});
tictactoe.routes.app_routes = (function tictactoe$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__33626__auto___33804 = (function (params__33627__auto__){
if(cljs.core.map_QMARK_.call(null,params__33627__auto__)){
var map__33754 = params__33627__auto__;
var map__33754__$1 = (((((!((map__33754 == null))))?(((((map__33754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33754):map__33754);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33627__auto__)){
var vec__33756 = params__33627__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__33626__auto___33804);


var action__33626__auto___33805 = (function (params__33627__auto__){
if(cljs.core.map_QMARK_.call(null,params__33627__auto__)){
var map__33759 = params__33627__auto__;
var map__33759__$1 = (((((!((map__33759 == null))))?(((((map__33759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33759):map__33759);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33627__auto__)){
var vec__33761 = params__33627__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__33626__auto___33805);


var action__33626__auto___33806 = (function (params__33627__auto__){
if(cljs.core.map_QMARK_.call(null,params__33627__auto__)){
var map__33764 = params__33627__auto__;
var map__33764__$1 = (((((!((map__33764 == null))))?(((((map__33764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33764):map__33764);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"components-panel","components-panel",-1101576737)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33627__auto__)){
var vec__33766 = params__33627__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"components-panel","components-panel",-1101576737)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/components",action__33626__auto___33806);


var action__33626__auto___33807 = (function (params__33627__auto__){
if(cljs.core.map_QMARK_.call(null,params__33627__auto__)){
var map__33769 = params__33627__auto__;
var map__33769__$1 = (((((!((map__33769 == null))))?(((((map__33769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33769):map__33769);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"hiccup-panel","hiccup-panel",-424850102)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33627__auto__)){
var vec__33771 = params__33627__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"hiccup-panel","hiccup-panel",-424850102)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/hiccup",action__33626__auto___33807);


var action__33626__auto___33808 = (function (params__33627__auto__){
if(cljs.core.map_QMARK_.call(null,params__33627__auto__)){
var map__33774 = params__33627__auto__;
var map__33774__$1 = (((((!((map__33774 == null))))?(((((map__33774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33774):map__33774);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"forms-panel","forms-panel",955997340)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33627__auto__)){
var vec__33776 = params__33627__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"forms-panel","forms-panel",955997340)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/forms",action__33626__auto___33808);


var action__33626__auto___33809 = (function (params__33627__auto__){
if(cljs.core.map_QMARK_.call(null,params__33627__auto__)){
var map__33779 = params__33627__auto__;
var map__33779__$1 = (((((!((map__33779 == null))))?(((((map__33779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33779):map__33779);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"atoms-panel","atoms-panel",-2128931108)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33627__auto__)){
var vec__33781 = params__33627__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"atoms-panel","atoms-panel",-2128931108)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/atoms",action__33626__auto___33809);


var action__33626__auto___33810 = (function (params__33627__auto__){
if(cljs.core.map_QMARK_.call(null,params__33627__auto__)){
var map__33784 = params__33627__auto__;
var map__33784__$1 = (((((!((map__33784 == null))))?(((((map__33784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33784):map__33784);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"events-panel","events-panel",574782089)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33627__auto__)){
var vec__33786 = params__33627__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"events-panel","events-panel",574782089)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/events",action__33626__auto___33810);


var action__33626__auto___33811 = (function (params__33627__auto__){
if(cljs.core.map_QMARK_.call(null,params__33627__auto__)){
var map__33789 = params__33627__auto__;
var map__33789__$1 = (((((!((map__33789 == null))))?(((((map__33789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33789):map__33789);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"subscriptions-panel","subscriptions-panel",-1155991946)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33627__auto__)){
var vec__33791 = params__33627__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"subscriptions-panel","subscriptions-panel",-1155991946)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/subscriptions",action__33626__auto___33811);


var action__33626__auto___33812 = (function (params__33627__auto__){
if(cljs.core.map_QMARK_.call(null,params__33627__auto__)){
var map__33794 = params__33627__auto__;
var map__33794__$1 = (((((!((map__33794 == null))))?(((((map__33794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33794):map__33794);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"interceptors-panel","interceptors-panel",320111217)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33627__auto__)){
var vec__33796 = params__33627__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"interceptors-panel","interceptors-panel",320111217)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/interceptors",action__33626__auto___33812);


var action__33626__auto___33813 = (function (params__33627__auto__){
if(cljs.core.map_QMARK_.call(null,params__33627__auto__)){
var map__33799 = params__33627__auto__;
var map__33799__$1 = (((((!((map__33799 == null))))?(((((map__33799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33799):map__33799);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"shopping-cart-panel","shopping-cart-panel",-1506024125)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__33627__auto__)){
var vec__33801 = params__33627__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),new cljs.core.Keyword(null,"shopping-cart-panel","shopping-cart-panel",-1506024125)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/shopping-cart",action__33626__auto___33813);


return tictactoe.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1590531405644
