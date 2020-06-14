// Compiled by ClojureScript 1.10.439 {}
goog.provide('tictactoe.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('tictactoe.db');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("tictactoe.events","load-app","tictactoe.events/load-app",-1703857282),(function (p__29583,_){
var map__29584 = p__29583;
var map__29584__$1 = (((((!((map__29584 == null))))?(((((map__29584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29584):map__29584);
var db = cljs.core.get.call(null,map__29584__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,db,tictactoe.db.default_db),new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("tictactoe.events","set-active-panel","tictactoe.events/set-active-panel",-1617786259),(function (db,p__29586){
var vec__29587 = p__29586;
var _ = cljs.core.nth.call(null,vec__29587,(0),null);
var active_panel = cljs.core.nth.call(null,vec__29587,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=events.js.map?rel=1590530984706
