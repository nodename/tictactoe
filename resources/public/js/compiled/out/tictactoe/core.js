// Compiled by ClojureScript 1.10.439 {}
goog.provide('tictactoe.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('stylefy.core');
goog.require('tictactoe.config');
goog.require('tictactoe.routes');
goog.require('tictactoe.events');
goog.require('tictactoe.app');
tictactoe.core.dev_setup = (function tictactoe$core$dev_setup(){
if(tictactoe.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
tictactoe.core.mount_root = (function tictactoe$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.app.app], null),document.getElementById("app"));
});
tictactoe.core.init = (function tictactoe$core$init(){
tictactoe.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tictactoe.events","load-app","tictactoe.events/load-app",-1703857282)], null));

stylefy.core.init.call(null);

tictactoe.core.dev_setup.call(null);

return tictactoe.core.mount_root.call(null);
});
goog.exportSymbol('tictactoe.core.init', tictactoe.core.init);

//# sourceMappingURL=core.js.map?rel=1590815479446
