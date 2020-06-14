// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39289_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39289_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39290 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39291 = null;
var count__39292 = (0);
var i__39293 = (0);
while(true){
if((i__39293 < count__39292)){
var n = cljs.core._nth.call(null,chunk__39291,i__39293);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__39294 = seq__39290;
var G__39295 = chunk__39291;
var G__39296 = count__39292;
var G__39297 = (i__39293 + (1));
seq__39290 = G__39294;
chunk__39291 = G__39295;
count__39292 = G__39296;
i__39293 = G__39297;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39290);
if(temp__5735__auto__){
var seq__39290__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39290__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39290__$1);
var G__39298 = cljs.core.chunk_rest.call(null,seq__39290__$1);
var G__39299 = c__4461__auto__;
var G__39300 = cljs.core.count.call(null,c__4461__auto__);
var G__39301 = (0);
seq__39290 = G__39298;
chunk__39291 = G__39299;
count__39292 = G__39300;
i__39293 = G__39301;
continue;
} else {
var n = cljs.core.first.call(null,seq__39290__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__39302 = cljs.core.next.call(null,seq__39290__$1);
var G__39303 = null;
var G__39304 = (0);
var G__39305 = (0);
seq__39290 = G__39302;
chunk__39291 = G__39303;
count__39292 = G__39304;
i__39293 = G__39305;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__39306){
var vec__39307 = p__39306;
var _ = cljs.core.nth.call(null,vec__39307,(0),null);
var v = cljs.core.nth.call(null,vec__39307,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__39310){
var vec__39311 = p__39310;
var k = cljs.core.nth.call(null,vec__39311,(0),null);
var v = cljs.core.nth.call(null,vec__39311,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39323_39331 = cljs.core.seq.call(null,deps);
var chunk__39324_39332 = null;
var count__39325_39333 = (0);
var i__39326_39334 = (0);
while(true){
if((i__39326_39334 < count__39325_39333)){
var dep_39335 = cljs.core._nth.call(null,chunk__39324_39332,i__39326_39334);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_39335;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39335));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39335,(depth + (1)),state);
} else {
}


var G__39336 = seq__39323_39331;
var G__39337 = chunk__39324_39332;
var G__39338 = count__39325_39333;
var G__39339 = (i__39326_39334 + (1));
seq__39323_39331 = G__39336;
chunk__39324_39332 = G__39337;
count__39325_39333 = G__39338;
i__39326_39334 = G__39339;
continue;
} else {
var temp__5735__auto___39340 = cljs.core.seq.call(null,seq__39323_39331);
if(temp__5735__auto___39340){
var seq__39323_39341__$1 = temp__5735__auto___39340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39323_39341__$1)){
var c__4461__auto___39342 = cljs.core.chunk_first.call(null,seq__39323_39341__$1);
var G__39343 = cljs.core.chunk_rest.call(null,seq__39323_39341__$1);
var G__39344 = c__4461__auto___39342;
var G__39345 = cljs.core.count.call(null,c__4461__auto___39342);
var G__39346 = (0);
seq__39323_39331 = G__39343;
chunk__39324_39332 = G__39344;
count__39325_39333 = G__39345;
i__39326_39334 = G__39346;
continue;
} else {
var dep_39347 = cljs.core.first.call(null,seq__39323_39341__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_39347;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39347));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39347,(depth + (1)),state);
} else {
}


var G__39348 = cljs.core.next.call(null,seq__39323_39341__$1);
var G__39349 = null;
var G__39350 = (0);
var G__39351 = (0);
seq__39323_39331 = G__39348;
chunk__39324_39332 = G__39349;
count__39325_39333 = G__39350;
i__39326_39334 = G__39351;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39327){
var vec__39328 = p__39327;
var seq__39329 = cljs.core.seq.call(null,vec__39328);
var first__39330 = cljs.core.first.call(null,seq__39329);
var seq__39329__$1 = cljs.core.next.call(null,seq__39329);
var x = first__39330;
var xs = seq__39329__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39328,seq__39329,first__39330,seq__39329__$1,x,xs,get_deps__$1){
return (function (p1__39314_SHARP_){
return clojure.set.difference.call(null,p1__39314_SHARP_,x);
});})(vec__39328,seq__39329,first__39330,seq__39329__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39352 = cljs.core.seq.call(null,provides);
var chunk__39353 = null;
var count__39354 = (0);
var i__39355 = (0);
while(true){
if((i__39355 < count__39354)){
var prov = cljs.core._nth.call(null,chunk__39353,i__39355);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39356_39364 = cljs.core.seq.call(null,requires);
var chunk__39357_39365 = null;
var count__39358_39366 = (0);
var i__39359_39367 = (0);
while(true){
if((i__39359_39367 < count__39358_39366)){
var req_39368 = cljs.core._nth.call(null,chunk__39357_39365,i__39359_39367);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39368,prov);


var G__39369 = seq__39356_39364;
var G__39370 = chunk__39357_39365;
var G__39371 = count__39358_39366;
var G__39372 = (i__39359_39367 + (1));
seq__39356_39364 = G__39369;
chunk__39357_39365 = G__39370;
count__39358_39366 = G__39371;
i__39359_39367 = G__39372;
continue;
} else {
var temp__5735__auto___39373 = cljs.core.seq.call(null,seq__39356_39364);
if(temp__5735__auto___39373){
var seq__39356_39374__$1 = temp__5735__auto___39373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39356_39374__$1)){
var c__4461__auto___39375 = cljs.core.chunk_first.call(null,seq__39356_39374__$1);
var G__39376 = cljs.core.chunk_rest.call(null,seq__39356_39374__$1);
var G__39377 = c__4461__auto___39375;
var G__39378 = cljs.core.count.call(null,c__4461__auto___39375);
var G__39379 = (0);
seq__39356_39364 = G__39376;
chunk__39357_39365 = G__39377;
count__39358_39366 = G__39378;
i__39359_39367 = G__39379;
continue;
} else {
var req_39380 = cljs.core.first.call(null,seq__39356_39374__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39380,prov);


var G__39381 = cljs.core.next.call(null,seq__39356_39374__$1);
var G__39382 = null;
var G__39383 = (0);
var G__39384 = (0);
seq__39356_39364 = G__39381;
chunk__39357_39365 = G__39382;
count__39358_39366 = G__39383;
i__39359_39367 = G__39384;
continue;
}
} else {
}
}
break;
}


var G__39385 = seq__39352;
var G__39386 = chunk__39353;
var G__39387 = count__39354;
var G__39388 = (i__39355 + (1));
seq__39352 = G__39385;
chunk__39353 = G__39386;
count__39354 = G__39387;
i__39355 = G__39388;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39352);
if(temp__5735__auto__){
var seq__39352__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39352__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39352__$1);
var G__39389 = cljs.core.chunk_rest.call(null,seq__39352__$1);
var G__39390 = c__4461__auto__;
var G__39391 = cljs.core.count.call(null,c__4461__auto__);
var G__39392 = (0);
seq__39352 = G__39389;
chunk__39353 = G__39390;
count__39354 = G__39391;
i__39355 = G__39392;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39352__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39360_39393 = cljs.core.seq.call(null,requires);
var chunk__39361_39394 = null;
var count__39362_39395 = (0);
var i__39363_39396 = (0);
while(true){
if((i__39363_39396 < count__39362_39395)){
var req_39397 = cljs.core._nth.call(null,chunk__39361_39394,i__39363_39396);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39397,prov);


var G__39398 = seq__39360_39393;
var G__39399 = chunk__39361_39394;
var G__39400 = count__39362_39395;
var G__39401 = (i__39363_39396 + (1));
seq__39360_39393 = G__39398;
chunk__39361_39394 = G__39399;
count__39362_39395 = G__39400;
i__39363_39396 = G__39401;
continue;
} else {
var temp__5735__auto___39402__$1 = cljs.core.seq.call(null,seq__39360_39393);
if(temp__5735__auto___39402__$1){
var seq__39360_39403__$1 = temp__5735__auto___39402__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39360_39403__$1)){
var c__4461__auto___39404 = cljs.core.chunk_first.call(null,seq__39360_39403__$1);
var G__39405 = cljs.core.chunk_rest.call(null,seq__39360_39403__$1);
var G__39406 = c__4461__auto___39404;
var G__39407 = cljs.core.count.call(null,c__4461__auto___39404);
var G__39408 = (0);
seq__39360_39393 = G__39405;
chunk__39361_39394 = G__39406;
count__39362_39395 = G__39407;
i__39363_39396 = G__39408;
continue;
} else {
var req_39409 = cljs.core.first.call(null,seq__39360_39403__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39409,prov);


var G__39410 = cljs.core.next.call(null,seq__39360_39403__$1);
var G__39411 = null;
var G__39412 = (0);
var G__39413 = (0);
seq__39360_39393 = G__39410;
chunk__39361_39394 = G__39411;
count__39362_39395 = G__39412;
i__39363_39396 = G__39413;
continue;
}
} else {
}
}
break;
}


var G__39414 = cljs.core.next.call(null,seq__39352__$1);
var G__39415 = null;
var G__39416 = (0);
var G__39417 = (0);
seq__39352 = G__39414;
chunk__39353 = G__39415;
count__39354 = G__39416;
i__39355 = G__39417;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39418_39422 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39419_39423 = null;
var count__39420_39424 = (0);
var i__39421_39425 = (0);
while(true){
if((i__39421_39425 < count__39420_39424)){
var ns_39426 = cljs.core._nth.call(null,chunk__39419_39423,i__39421_39425);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39426);


var G__39427 = seq__39418_39422;
var G__39428 = chunk__39419_39423;
var G__39429 = count__39420_39424;
var G__39430 = (i__39421_39425 + (1));
seq__39418_39422 = G__39427;
chunk__39419_39423 = G__39428;
count__39420_39424 = G__39429;
i__39421_39425 = G__39430;
continue;
} else {
var temp__5735__auto___39431 = cljs.core.seq.call(null,seq__39418_39422);
if(temp__5735__auto___39431){
var seq__39418_39432__$1 = temp__5735__auto___39431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39418_39432__$1)){
var c__4461__auto___39433 = cljs.core.chunk_first.call(null,seq__39418_39432__$1);
var G__39434 = cljs.core.chunk_rest.call(null,seq__39418_39432__$1);
var G__39435 = c__4461__auto___39433;
var G__39436 = cljs.core.count.call(null,c__4461__auto___39433);
var G__39437 = (0);
seq__39418_39422 = G__39434;
chunk__39419_39423 = G__39435;
count__39420_39424 = G__39436;
i__39421_39425 = G__39437;
continue;
} else {
var ns_39438 = cljs.core.first.call(null,seq__39418_39432__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39438);


var G__39439 = cljs.core.next.call(null,seq__39418_39432__$1);
var G__39440 = null;
var G__39441 = (0);
var G__39442 = (0);
seq__39418_39422 = G__39439;
chunk__39419_39423 = G__39440;
count__39420_39424 = G__39441;
i__39421_39425 = G__39442;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39443__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39444__i = 0, G__39444__a = new Array(arguments.length -  0);
while (G__39444__i < G__39444__a.length) {G__39444__a[G__39444__i] = arguments[G__39444__i + 0]; ++G__39444__i;}
  args = new cljs.core.IndexedSeq(G__39444__a,0,null);
} 
return G__39443__delegate.call(this,args);};
G__39443.cljs$lang$maxFixedArity = 0;
G__39443.cljs$lang$applyTo = (function (arglist__39445){
var args = cljs.core.seq(arglist__39445);
return G__39443__delegate(args);
});
G__39443.cljs$core$IFn$_invoke$arity$variadic = G__39443__delegate;
return G__39443;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__39446_SHARP_,p2__39447_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39446_SHARP_)),p2__39447_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__39448_SHARP_,p2__39449_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39448_SHARP_),p2__39449_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__39450 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39450.addCallback(((function (G__39450){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__39450))
);

G__39450.addErrback(((function (G__39450){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__39450))
);

return G__39450;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39451){if((e39451 instanceof Error)){
var e = e39451;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39451;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39452){if((e39452 instanceof Error)){
var e = e39452;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39452;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39453 = cljs.core._EQ_;
var expr__39454 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39453.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39454))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__39453.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39454))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__39453.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39454))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__39453,expr__39454){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39453,expr__39454))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39456,callback){
var map__39457 = p__39456;
var map__39457__$1 = (((((!((map__39457 == null))))?(((((map__39457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39457):map__39457);
var file_msg = map__39457__$1;
var request_url = cljs.core.get.call(null,map__39457__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__39457,map__39457__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39457,map__39457__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__){
return (function (state_39495){
var state_val_39496 = (state_39495[(1)]);
if((state_val_39496 === (7))){
var inst_39491 = (state_39495[(2)]);
var state_39495__$1 = state_39495;
var statearr_39497_39523 = state_39495__$1;
(statearr_39497_39523[(2)] = inst_39491);

(statearr_39497_39523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (1))){
var state_39495__$1 = state_39495;
var statearr_39498_39524 = state_39495__$1;
(statearr_39498_39524[(2)] = null);

(statearr_39498_39524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (4))){
var inst_39461 = (state_39495[(7)]);
var inst_39461__$1 = (state_39495[(2)]);
var state_39495__$1 = (function (){var statearr_39499 = state_39495;
(statearr_39499[(7)] = inst_39461__$1);

return statearr_39499;
})();
if(cljs.core.truth_(inst_39461__$1)){
var statearr_39500_39525 = state_39495__$1;
(statearr_39500_39525[(1)] = (5));

} else {
var statearr_39501_39526 = state_39495__$1;
(statearr_39501_39526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (15))){
var inst_39474 = (state_39495[(8)]);
var inst_39476 = (state_39495[(9)]);
var inst_39478 = inst_39476.call(null,inst_39474);
var state_39495__$1 = state_39495;
var statearr_39502_39527 = state_39495__$1;
(statearr_39502_39527[(2)] = inst_39478);

(statearr_39502_39527[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (13))){
var inst_39485 = (state_39495[(2)]);
var state_39495__$1 = state_39495;
var statearr_39503_39528 = state_39495__$1;
(statearr_39503_39528[(2)] = inst_39485);

(statearr_39503_39528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (6))){
var state_39495__$1 = state_39495;
var statearr_39504_39529 = state_39495__$1;
(statearr_39504_39529[(2)] = null);

(statearr_39504_39529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (17))){
var inst_39482 = (state_39495[(2)]);
var state_39495__$1 = state_39495;
var statearr_39505_39530 = state_39495__$1;
(statearr_39505_39530[(2)] = inst_39482);

(statearr_39505_39530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (3))){
var inst_39493 = (state_39495[(2)]);
var state_39495__$1 = state_39495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39495__$1,inst_39493);
} else {
if((state_val_39496 === (12))){
var state_39495__$1 = state_39495;
var statearr_39506_39531 = state_39495__$1;
(statearr_39506_39531[(2)] = null);

(statearr_39506_39531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (2))){
var state_39495__$1 = state_39495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39495__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39496 === (11))){
var inst_39466 = (state_39495[(10)]);
var inst_39472 = figwheel.client.file_reloading.blocking_load.call(null,inst_39466);
var state_39495__$1 = state_39495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39495__$1,(14),inst_39472);
} else {
if((state_val_39496 === (9))){
var inst_39466 = (state_39495[(10)]);
var state_39495__$1 = state_39495;
if(cljs.core.truth_(inst_39466)){
var statearr_39507_39532 = state_39495__$1;
(statearr_39507_39532[(1)] = (11));

} else {
var statearr_39508_39533 = state_39495__$1;
(statearr_39508_39533[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (5))){
var inst_39461 = (state_39495[(7)]);
var inst_39467 = (state_39495[(11)]);
var inst_39466 = cljs.core.nth.call(null,inst_39461,(0),null);
var inst_39467__$1 = cljs.core.nth.call(null,inst_39461,(1),null);
var state_39495__$1 = (function (){var statearr_39509 = state_39495;
(statearr_39509[(11)] = inst_39467__$1);

(statearr_39509[(10)] = inst_39466);

return statearr_39509;
})();
if(cljs.core.truth_(inst_39467__$1)){
var statearr_39510_39534 = state_39495__$1;
(statearr_39510_39534[(1)] = (8));

} else {
var statearr_39511_39535 = state_39495__$1;
(statearr_39511_39535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (14))){
var inst_39476 = (state_39495[(9)]);
var inst_39466 = (state_39495[(10)]);
var inst_39474 = (state_39495[(2)]);
var inst_39475 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39476__$1 = cljs.core.get.call(null,inst_39475,inst_39466);
var state_39495__$1 = (function (){var statearr_39512 = state_39495;
(statearr_39512[(8)] = inst_39474);

(statearr_39512[(9)] = inst_39476__$1);

return statearr_39512;
})();
if(cljs.core.truth_(inst_39476__$1)){
var statearr_39513_39536 = state_39495__$1;
(statearr_39513_39536[(1)] = (15));

} else {
var statearr_39514_39537 = state_39495__$1;
(statearr_39514_39537[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (16))){
var inst_39474 = (state_39495[(8)]);
var inst_39480 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39474);
var state_39495__$1 = state_39495;
var statearr_39515_39538 = state_39495__$1;
(statearr_39515_39538[(2)] = inst_39480);

(statearr_39515_39538[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (10))){
var inst_39487 = (state_39495[(2)]);
var state_39495__$1 = (function (){var statearr_39516 = state_39495;
(statearr_39516[(12)] = inst_39487);

return statearr_39516;
})();
var statearr_39517_39539 = state_39495__$1;
(statearr_39517_39539[(2)] = null);

(statearr_39517_39539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (8))){
var inst_39467 = (state_39495[(11)]);
var inst_39469 = eval(inst_39467);
var state_39495__$1 = state_39495;
var statearr_39518_39540 = state_39495__$1;
(statearr_39518_39540[(2)] = inst_39469);

(statearr_39518_39540[(1)] = (10));


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
});})(c__35904__auto__))
;
return ((function (switch__35809__auto__,c__35904__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35810__auto__ = null;
var figwheel$client$file_reloading$state_machine__35810__auto____0 = (function (){
var statearr_39519 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39519[(0)] = figwheel$client$file_reloading$state_machine__35810__auto__);

(statearr_39519[(1)] = (1));

return statearr_39519;
});
var figwheel$client$file_reloading$state_machine__35810__auto____1 = (function (state_39495){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_39495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e39520){if((e39520 instanceof Object)){
var ex__35813__auto__ = e39520;
var statearr_39521_39541 = state_39495;
(statearr_39521_39541[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39542 = state_39495;
state_39495 = G__39542;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35810__auto__ = function(state_39495){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35810__auto____1.call(this,state_39495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35810__auto____0;
figwheel$client$file_reloading$state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35810__auto____1;
return figwheel$client$file_reloading$state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__))
})();
var state__35906__auto__ = (function (){var statearr_39522 = f__35905__auto__.call(null);
(statearr_39522[(6)] = c__35904__auto__);

return statearr_39522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__))
);

return c__35904__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__39544 = arguments.length;
switch (G__39544) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39546,callback){
var map__39547 = p__39546;
var map__39547__$1 = (((((!((map__39547 == null))))?(((((map__39547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39547):map__39547);
var file_msg = map__39547__$1;
var namespace = cljs.core.get.call(null,map__39547__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39547,map__39547__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39547,map__39547__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39549){
var map__39550 = p__39549;
var map__39550__$1 = (((((!((map__39550 == null))))?(((((map__39550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39550):map__39550);
var file_msg = map__39550__$1;
var namespace = cljs.core.get.call(null,map__39550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39552){
var map__39553 = p__39552;
var map__39553__$1 = (((((!((map__39553 == null))))?(((((map__39553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39553):map__39553);
var file_msg = map__39553__$1;
var namespace = cljs.core.get.call(null,map__39553__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39555,callback){
var map__39556 = p__39555;
var map__39556__$1 = (((((!((map__39556 == null))))?(((((map__39556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39556):map__39556);
var file_msg = map__39556__$1;
var request_url = cljs.core.get.call(null,map__39556__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35904__auto___39606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto___39606,out){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto___39606,out){
return (function (state_39591){
var state_val_39592 = (state_39591[(1)]);
if((state_val_39592 === (1))){
var inst_39565 = cljs.core.seq.call(null,files);
var inst_39566 = cljs.core.first.call(null,inst_39565);
var inst_39567 = cljs.core.next.call(null,inst_39565);
var inst_39568 = files;
var state_39591__$1 = (function (){var statearr_39593 = state_39591;
(statearr_39593[(7)] = inst_39567);

(statearr_39593[(8)] = inst_39566);

(statearr_39593[(9)] = inst_39568);

return statearr_39593;
})();
var statearr_39594_39607 = state_39591__$1;
(statearr_39594_39607[(2)] = null);

(statearr_39594_39607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39592 === (2))){
var inst_39574 = (state_39591[(10)]);
var inst_39568 = (state_39591[(9)]);
var inst_39573 = cljs.core.seq.call(null,inst_39568);
var inst_39574__$1 = cljs.core.first.call(null,inst_39573);
var inst_39575 = cljs.core.next.call(null,inst_39573);
var inst_39576 = (inst_39574__$1 == null);
var inst_39577 = cljs.core.not.call(null,inst_39576);
var state_39591__$1 = (function (){var statearr_39595 = state_39591;
(statearr_39595[(11)] = inst_39575);

(statearr_39595[(10)] = inst_39574__$1);

return statearr_39595;
})();
if(inst_39577){
var statearr_39596_39608 = state_39591__$1;
(statearr_39596_39608[(1)] = (4));

} else {
var statearr_39597_39609 = state_39591__$1;
(statearr_39597_39609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39592 === (3))){
var inst_39589 = (state_39591[(2)]);
var state_39591__$1 = state_39591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39591__$1,inst_39589);
} else {
if((state_val_39592 === (4))){
var inst_39574 = (state_39591[(10)]);
var inst_39579 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39574);
var state_39591__$1 = state_39591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39591__$1,(7),inst_39579);
} else {
if((state_val_39592 === (5))){
var inst_39585 = cljs.core.async.close_BANG_.call(null,out);
var state_39591__$1 = state_39591;
var statearr_39598_39610 = state_39591__$1;
(statearr_39598_39610[(2)] = inst_39585);

(statearr_39598_39610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39592 === (6))){
var inst_39587 = (state_39591[(2)]);
var state_39591__$1 = state_39591;
var statearr_39599_39611 = state_39591__$1;
(statearr_39599_39611[(2)] = inst_39587);

(statearr_39599_39611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39592 === (7))){
var inst_39575 = (state_39591[(11)]);
var inst_39581 = (state_39591[(2)]);
var inst_39582 = cljs.core.async.put_BANG_.call(null,out,inst_39581);
var inst_39568 = inst_39575;
var state_39591__$1 = (function (){var statearr_39600 = state_39591;
(statearr_39600[(9)] = inst_39568);

(statearr_39600[(12)] = inst_39582);

return statearr_39600;
})();
var statearr_39601_39612 = state_39591__$1;
(statearr_39601_39612[(2)] = null);

(statearr_39601_39612[(1)] = (2));


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
});})(c__35904__auto___39606,out))
;
return ((function (switch__35809__auto__,c__35904__auto___39606,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto____0 = (function (){
var statearr_39602 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39602[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto__);

(statearr_39602[(1)] = (1));

return statearr_39602;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto____1 = (function (state_39591){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_39591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e39603){if((e39603 instanceof Object)){
var ex__35813__auto__ = e39603;
var statearr_39604_39613 = state_39591;
(statearr_39604_39613[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39614 = state_39591;
state_39591 = G__39614;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto__ = function(state_39591){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto____1.call(this,state_39591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto___39606,out))
})();
var state__35906__auto__ = (function (){var statearr_39605 = f__35905__auto__.call(null);
(statearr_39605[(6)] = c__35904__auto___39606);

return statearr_39605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto___39606,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39615,opts){
var map__39616 = p__39615;
var map__39616__$1 = (((((!((map__39616 == null))))?(((((map__39616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39616):map__39616);
var eval_body = cljs.core.get.call(null,map__39616__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39616__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39618){var e = e39618;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39619_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39619_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39620){
var vec__39621 = p__39620;
var k = cljs.core.nth.call(null,vec__39621,(0),null);
var v = cljs.core.nth.call(null,vec__39621,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39624){
var vec__39625 = p__39624;
var k = cljs.core.nth.call(null,vec__39625,(0),null);
var v = cljs.core.nth.call(null,vec__39625,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39631,p__39632){
var map__39633 = p__39631;
var map__39633__$1 = (((((!((map__39633 == null))))?(((((map__39633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39633):map__39633);
var opts = map__39633__$1;
var before_jsload = cljs.core.get.call(null,map__39633__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39633__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39633__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39634 = p__39632;
var map__39634__$1 = (((((!((map__39634 == null))))?(((((map__39634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39634):map__39634);
var msg = map__39634__$1;
var files = cljs.core.get.call(null,map__39634__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39634__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39634__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35905__auto__ = (function (){var switch__35809__auto__ = ((function (c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39788){
var state_val_39789 = (state_39788[(1)]);
if((state_val_39789 === (7))){
var inst_39650 = (state_39788[(7)]);
var inst_39651 = (state_39788[(8)]);
var inst_39648 = (state_39788[(9)]);
var inst_39649 = (state_39788[(10)]);
var inst_39656 = cljs.core._nth.call(null,inst_39649,inst_39651);
var inst_39657 = figwheel.client.file_reloading.eval_body.call(null,inst_39656,opts);
var inst_39658 = (inst_39651 + (1));
var tmp39790 = inst_39650;
var tmp39791 = inst_39648;
var tmp39792 = inst_39649;
var inst_39648__$1 = tmp39791;
var inst_39649__$1 = tmp39792;
var inst_39650__$1 = tmp39790;
var inst_39651__$1 = inst_39658;
var state_39788__$1 = (function (){var statearr_39793 = state_39788;
(statearr_39793[(11)] = inst_39657);

(statearr_39793[(7)] = inst_39650__$1);

(statearr_39793[(8)] = inst_39651__$1);

(statearr_39793[(9)] = inst_39648__$1);

(statearr_39793[(10)] = inst_39649__$1);

return statearr_39793;
})();
var statearr_39794_39877 = state_39788__$1;
(statearr_39794_39877[(2)] = null);

(statearr_39794_39877[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (20))){
var inst_39691 = (state_39788[(12)]);
var inst_39699 = figwheel.client.file_reloading.sort_files.call(null,inst_39691);
var state_39788__$1 = state_39788;
var statearr_39795_39878 = state_39788__$1;
(statearr_39795_39878[(2)] = inst_39699);

(statearr_39795_39878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (27))){
var state_39788__$1 = state_39788;
var statearr_39796_39879 = state_39788__$1;
(statearr_39796_39879[(2)] = null);

(statearr_39796_39879[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (1))){
var inst_39640 = (state_39788[(13)]);
var inst_39637 = before_jsload.call(null,files);
var inst_39638 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39639 = (function (){return ((function (inst_39640,inst_39637,inst_39638,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39628_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39628_SHARP_);
});
;})(inst_39640,inst_39637,inst_39638,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39640__$1 = cljs.core.filter.call(null,inst_39639,files);
var inst_39641 = cljs.core.not_empty.call(null,inst_39640__$1);
var state_39788__$1 = (function (){var statearr_39797 = state_39788;
(statearr_39797[(14)] = inst_39637);

(statearr_39797[(15)] = inst_39638);

(statearr_39797[(13)] = inst_39640__$1);

return statearr_39797;
})();
if(cljs.core.truth_(inst_39641)){
var statearr_39798_39880 = state_39788__$1;
(statearr_39798_39880[(1)] = (2));

} else {
var statearr_39799_39881 = state_39788__$1;
(statearr_39799_39881[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (24))){
var state_39788__$1 = state_39788;
var statearr_39800_39882 = state_39788__$1;
(statearr_39800_39882[(2)] = null);

(statearr_39800_39882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (39))){
var inst_39741 = (state_39788[(16)]);
var state_39788__$1 = state_39788;
var statearr_39801_39883 = state_39788__$1;
(statearr_39801_39883[(2)] = inst_39741);

(statearr_39801_39883[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (46))){
var inst_39783 = (state_39788[(2)]);
var state_39788__$1 = state_39788;
var statearr_39802_39884 = state_39788__$1;
(statearr_39802_39884[(2)] = inst_39783);

(statearr_39802_39884[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (4))){
var inst_39685 = (state_39788[(2)]);
var inst_39686 = cljs.core.List.EMPTY;
var inst_39687 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39686);
var inst_39688 = (function (){return ((function (inst_39685,inst_39686,inst_39687,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39629_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39629_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39629_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39629_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_39685,inst_39686,inst_39687,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39689 = cljs.core.filter.call(null,inst_39688,files);
var inst_39690 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39691 = cljs.core.concat.call(null,inst_39689,inst_39690);
var state_39788__$1 = (function (){var statearr_39803 = state_39788;
(statearr_39803[(12)] = inst_39691);

(statearr_39803[(17)] = inst_39685);

(statearr_39803[(18)] = inst_39687);

return statearr_39803;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39804_39885 = state_39788__$1;
(statearr_39804_39885[(1)] = (16));

} else {
var statearr_39805_39886 = state_39788__$1;
(statearr_39805_39886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (15))){
var inst_39675 = (state_39788[(2)]);
var state_39788__$1 = state_39788;
var statearr_39806_39887 = state_39788__$1;
(statearr_39806_39887[(2)] = inst_39675);

(statearr_39806_39887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (21))){
var inst_39701 = (state_39788[(19)]);
var inst_39701__$1 = (state_39788[(2)]);
var inst_39702 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39701__$1);
var state_39788__$1 = (function (){var statearr_39807 = state_39788;
(statearr_39807[(19)] = inst_39701__$1);

return statearr_39807;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39788__$1,(22),inst_39702);
} else {
if((state_val_39789 === (31))){
var inst_39786 = (state_39788[(2)]);
var state_39788__$1 = state_39788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39788__$1,inst_39786);
} else {
if((state_val_39789 === (32))){
var inst_39741 = (state_39788[(16)]);
var inst_39746 = inst_39741.cljs$lang$protocol_mask$partition0$;
var inst_39747 = (inst_39746 & (64));
var inst_39748 = inst_39741.cljs$core$ISeq$;
var inst_39749 = (cljs.core.PROTOCOL_SENTINEL === inst_39748);
var inst_39750 = ((inst_39747) || (inst_39749));
var state_39788__$1 = state_39788;
if(cljs.core.truth_(inst_39750)){
var statearr_39808_39888 = state_39788__$1;
(statearr_39808_39888[(1)] = (35));

} else {
var statearr_39809_39889 = state_39788__$1;
(statearr_39809_39889[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (40))){
var inst_39763 = (state_39788[(20)]);
var inst_39762 = (state_39788[(2)]);
var inst_39763__$1 = cljs.core.get.call(null,inst_39762,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39764 = cljs.core.get.call(null,inst_39762,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39765 = cljs.core.not_empty.call(null,inst_39763__$1);
var state_39788__$1 = (function (){var statearr_39810 = state_39788;
(statearr_39810[(20)] = inst_39763__$1);

(statearr_39810[(21)] = inst_39764);

return statearr_39810;
})();
if(cljs.core.truth_(inst_39765)){
var statearr_39811_39890 = state_39788__$1;
(statearr_39811_39890[(1)] = (41));

} else {
var statearr_39812_39891 = state_39788__$1;
(statearr_39812_39891[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (33))){
var state_39788__$1 = state_39788;
var statearr_39813_39892 = state_39788__$1;
(statearr_39813_39892[(2)] = false);

(statearr_39813_39892[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (13))){
var inst_39661 = (state_39788[(22)]);
var inst_39665 = cljs.core.chunk_first.call(null,inst_39661);
var inst_39666 = cljs.core.chunk_rest.call(null,inst_39661);
var inst_39667 = cljs.core.count.call(null,inst_39665);
var inst_39648 = inst_39666;
var inst_39649 = inst_39665;
var inst_39650 = inst_39667;
var inst_39651 = (0);
var state_39788__$1 = (function (){var statearr_39814 = state_39788;
(statearr_39814[(7)] = inst_39650);

(statearr_39814[(8)] = inst_39651);

(statearr_39814[(9)] = inst_39648);

(statearr_39814[(10)] = inst_39649);

return statearr_39814;
})();
var statearr_39815_39893 = state_39788__$1;
(statearr_39815_39893[(2)] = null);

(statearr_39815_39893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (22))){
var inst_39704 = (state_39788[(23)]);
var inst_39709 = (state_39788[(24)]);
var inst_39701 = (state_39788[(19)]);
var inst_39705 = (state_39788[(25)]);
var inst_39704__$1 = (state_39788[(2)]);
var inst_39705__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39704__$1);
var inst_39706 = (function (){var all_files = inst_39701;
var res_SINGLEQUOTE_ = inst_39704__$1;
var res = inst_39705__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39704,inst_39709,inst_39701,inst_39705,inst_39704__$1,inst_39705__$1,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39630_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39630_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39704,inst_39709,inst_39701,inst_39705,inst_39704__$1,inst_39705__$1,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39707 = cljs.core.filter.call(null,inst_39706,inst_39704__$1);
var inst_39708 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39709__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39708);
var inst_39710 = cljs.core.not_empty.call(null,inst_39709__$1);
var state_39788__$1 = (function (){var statearr_39816 = state_39788;
(statearr_39816[(23)] = inst_39704__$1);

(statearr_39816[(24)] = inst_39709__$1);

(statearr_39816[(26)] = inst_39707);

(statearr_39816[(25)] = inst_39705__$1);

return statearr_39816;
})();
if(cljs.core.truth_(inst_39710)){
var statearr_39817_39894 = state_39788__$1;
(statearr_39817_39894[(1)] = (23));

} else {
var statearr_39818_39895 = state_39788__$1;
(statearr_39818_39895[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (36))){
var state_39788__$1 = state_39788;
var statearr_39819_39896 = state_39788__$1;
(statearr_39819_39896[(2)] = false);

(statearr_39819_39896[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (41))){
var inst_39763 = (state_39788[(20)]);
var inst_39767 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39768 = cljs.core.map.call(null,inst_39767,inst_39763);
var inst_39769 = cljs.core.pr_str.call(null,inst_39768);
var inst_39770 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39769)].join('');
var inst_39771 = figwheel.client.utils.log.call(null,inst_39770);
var state_39788__$1 = state_39788;
var statearr_39820_39897 = state_39788__$1;
(statearr_39820_39897[(2)] = inst_39771);

(statearr_39820_39897[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (43))){
var inst_39764 = (state_39788[(21)]);
var inst_39774 = (state_39788[(2)]);
var inst_39775 = cljs.core.not_empty.call(null,inst_39764);
var state_39788__$1 = (function (){var statearr_39821 = state_39788;
(statearr_39821[(27)] = inst_39774);

return statearr_39821;
})();
if(cljs.core.truth_(inst_39775)){
var statearr_39822_39898 = state_39788__$1;
(statearr_39822_39898[(1)] = (44));

} else {
var statearr_39823_39899 = state_39788__$1;
(statearr_39823_39899[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (29))){
var inst_39704 = (state_39788[(23)]);
var inst_39741 = (state_39788[(16)]);
var inst_39709 = (state_39788[(24)]);
var inst_39701 = (state_39788[(19)]);
var inst_39707 = (state_39788[(26)]);
var inst_39705 = (state_39788[(25)]);
var inst_39737 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39740 = (function (){var all_files = inst_39701;
var res_SINGLEQUOTE_ = inst_39704;
var res = inst_39705;
var files_not_loaded = inst_39707;
var dependencies_that_loaded = inst_39709;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39704,inst_39741,inst_39709,inst_39701,inst_39707,inst_39705,inst_39737,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39739){
var map__39824 = p__39739;
var map__39824__$1 = (((((!((map__39824 == null))))?(((((map__39824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39824):map__39824);
var namespace = cljs.core.get.call(null,map__39824__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39704,inst_39741,inst_39709,inst_39701,inst_39707,inst_39705,inst_39737,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39741__$1 = cljs.core.group_by.call(null,inst_39740,inst_39707);
var inst_39743 = (inst_39741__$1 == null);
var inst_39744 = cljs.core.not.call(null,inst_39743);
var state_39788__$1 = (function (){var statearr_39826 = state_39788;
(statearr_39826[(16)] = inst_39741__$1);

(statearr_39826[(28)] = inst_39737);

return statearr_39826;
})();
if(inst_39744){
var statearr_39827_39900 = state_39788__$1;
(statearr_39827_39900[(1)] = (32));

} else {
var statearr_39828_39901 = state_39788__$1;
(statearr_39828_39901[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (44))){
var inst_39764 = (state_39788[(21)]);
var inst_39777 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39764);
var inst_39778 = cljs.core.pr_str.call(null,inst_39777);
var inst_39779 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39778)].join('');
var inst_39780 = figwheel.client.utils.log.call(null,inst_39779);
var state_39788__$1 = state_39788;
var statearr_39829_39902 = state_39788__$1;
(statearr_39829_39902[(2)] = inst_39780);

(statearr_39829_39902[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (6))){
var inst_39682 = (state_39788[(2)]);
var state_39788__$1 = state_39788;
var statearr_39830_39903 = state_39788__$1;
(statearr_39830_39903[(2)] = inst_39682);

(statearr_39830_39903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (28))){
var inst_39707 = (state_39788[(26)]);
var inst_39734 = (state_39788[(2)]);
var inst_39735 = cljs.core.not_empty.call(null,inst_39707);
var state_39788__$1 = (function (){var statearr_39831 = state_39788;
(statearr_39831[(29)] = inst_39734);

return statearr_39831;
})();
if(cljs.core.truth_(inst_39735)){
var statearr_39832_39904 = state_39788__$1;
(statearr_39832_39904[(1)] = (29));

} else {
var statearr_39833_39905 = state_39788__$1;
(statearr_39833_39905[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (25))){
var inst_39705 = (state_39788[(25)]);
var inst_39721 = (state_39788[(2)]);
var inst_39722 = cljs.core.not_empty.call(null,inst_39705);
var state_39788__$1 = (function (){var statearr_39834 = state_39788;
(statearr_39834[(30)] = inst_39721);

return statearr_39834;
})();
if(cljs.core.truth_(inst_39722)){
var statearr_39835_39906 = state_39788__$1;
(statearr_39835_39906[(1)] = (26));

} else {
var statearr_39836_39907 = state_39788__$1;
(statearr_39836_39907[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (34))){
var inst_39757 = (state_39788[(2)]);
var state_39788__$1 = state_39788;
if(cljs.core.truth_(inst_39757)){
var statearr_39837_39908 = state_39788__$1;
(statearr_39837_39908[(1)] = (38));

} else {
var statearr_39838_39909 = state_39788__$1;
(statearr_39838_39909[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (17))){
var state_39788__$1 = state_39788;
var statearr_39839_39910 = state_39788__$1;
(statearr_39839_39910[(2)] = recompile_dependents);

(statearr_39839_39910[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (3))){
var state_39788__$1 = state_39788;
var statearr_39840_39911 = state_39788__$1;
(statearr_39840_39911[(2)] = null);

(statearr_39840_39911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (12))){
var inst_39678 = (state_39788[(2)]);
var state_39788__$1 = state_39788;
var statearr_39841_39912 = state_39788__$1;
(statearr_39841_39912[(2)] = inst_39678);

(statearr_39841_39912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (2))){
var inst_39640 = (state_39788[(13)]);
var inst_39647 = cljs.core.seq.call(null,inst_39640);
var inst_39648 = inst_39647;
var inst_39649 = null;
var inst_39650 = (0);
var inst_39651 = (0);
var state_39788__$1 = (function (){var statearr_39842 = state_39788;
(statearr_39842[(7)] = inst_39650);

(statearr_39842[(8)] = inst_39651);

(statearr_39842[(9)] = inst_39648);

(statearr_39842[(10)] = inst_39649);

return statearr_39842;
})();
var statearr_39843_39913 = state_39788__$1;
(statearr_39843_39913[(2)] = null);

(statearr_39843_39913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (23))){
var inst_39704 = (state_39788[(23)]);
var inst_39709 = (state_39788[(24)]);
var inst_39701 = (state_39788[(19)]);
var inst_39707 = (state_39788[(26)]);
var inst_39705 = (state_39788[(25)]);
var inst_39712 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39714 = (function (){var all_files = inst_39701;
var res_SINGLEQUOTE_ = inst_39704;
var res = inst_39705;
var files_not_loaded = inst_39707;
var dependencies_that_loaded = inst_39709;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39704,inst_39709,inst_39701,inst_39707,inst_39705,inst_39712,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39713){
var map__39844 = p__39713;
var map__39844__$1 = (((((!((map__39844 == null))))?(((((map__39844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39844):map__39844);
var request_url = cljs.core.get.call(null,map__39844__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39704,inst_39709,inst_39701,inst_39707,inst_39705,inst_39712,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39715 = cljs.core.reverse.call(null,inst_39709);
var inst_39716 = cljs.core.map.call(null,inst_39714,inst_39715);
var inst_39717 = cljs.core.pr_str.call(null,inst_39716);
var inst_39718 = figwheel.client.utils.log.call(null,inst_39717);
var state_39788__$1 = (function (){var statearr_39846 = state_39788;
(statearr_39846[(31)] = inst_39712);

return statearr_39846;
})();
var statearr_39847_39914 = state_39788__$1;
(statearr_39847_39914[(2)] = inst_39718);

(statearr_39847_39914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (35))){
var state_39788__$1 = state_39788;
var statearr_39848_39915 = state_39788__$1;
(statearr_39848_39915[(2)] = true);

(statearr_39848_39915[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (19))){
var inst_39691 = (state_39788[(12)]);
var inst_39697 = figwheel.client.file_reloading.expand_files.call(null,inst_39691);
var state_39788__$1 = state_39788;
var statearr_39849_39916 = state_39788__$1;
(statearr_39849_39916[(2)] = inst_39697);

(statearr_39849_39916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (11))){
var state_39788__$1 = state_39788;
var statearr_39850_39917 = state_39788__$1;
(statearr_39850_39917[(2)] = null);

(statearr_39850_39917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (9))){
var inst_39680 = (state_39788[(2)]);
var state_39788__$1 = state_39788;
var statearr_39851_39918 = state_39788__$1;
(statearr_39851_39918[(2)] = inst_39680);

(statearr_39851_39918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (5))){
var inst_39650 = (state_39788[(7)]);
var inst_39651 = (state_39788[(8)]);
var inst_39653 = (inst_39651 < inst_39650);
var inst_39654 = inst_39653;
var state_39788__$1 = state_39788;
if(cljs.core.truth_(inst_39654)){
var statearr_39852_39919 = state_39788__$1;
(statearr_39852_39919[(1)] = (7));

} else {
var statearr_39853_39920 = state_39788__$1;
(statearr_39853_39920[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (14))){
var inst_39661 = (state_39788[(22)]);
var inst_39670 = cljs.core.first.call(null,inst_39661);
var inst_39671 = figwheel.client.file_reloading.eval_body.call(null,inst_39670,opts);
var inst_39672 = cljs.core.next.call(null,inst_39661);
var inst_39648 = inst_39672;
var inst_39649 = null;
var inst_39650 = (0);
var inst_39651 = (0);
var state_39788__$1 = (function (){var statearr_39854 = state_39788;
(statearr_39854[(7)] = inst_39650);

(statearr_39854[(32)] = inst_39671);

(statearr_39854[(8)] = inst_39651);

(statearr_39854[(9)] = inst_39648);

(statearr_39854[(10)] = inst_39649);

return statearr_39854;
})();
var statearr_39855_39921 = state_39788__$1;
(statearr_39855_39921[(2)] = null);

(statearr_39855_39921[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (45))){
var state_39788__$1 = state_39788;
var statearr_39856_39922 = state_39788__$1;
(statearr_39856_39922[(2)] = null);

(statearr_39856_39922[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (26))){
var inst_39704 = (state_39788[(23)]);
var inst_39709 = (state_39788[(24)]);
var inst_39701 = (state_39788[(19)]);
var inst_39707 = (state_39788[(26)]);
var inst_39705 = (state_39788[(25)]);
var inst_39724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39726 = (function (){var all_files = inst_39701;
var res_SINGLEQUOTE_ = inst_39704;
var res = inst_39705;
var files_not_loaded = inst_39707;
var dependencies_that_loaded = inst_39709;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39704,inst_39709,inst_39701,inst_39707,inst_39705,inst_39724,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39725){
var map__39857 = p__39725;
var map__39857__$1 = (((((!((map__39857 == null))))?(((((map__39857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39857):map__39857);
var namespace = cljs.core.get.call(null,map__39857__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39704,inst_39709,inst_39701,inst_39707,inst_39705,inst_39724,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39727 = cljs.core.map.call(null,inst_39726,inst_39705);
var inst_39728 = cljs.core.pr_str.call(null,inst_39727);
var inst_39729 = figwheel.client.utils.log.call(null,inst_39728);
var inst_39730 = (function (){var all_files = inst_39701;
var res_SINGLEQUOTE_ = inst_39704;
var res = inst_39705;
var files_not_loaded = inst_39707;
var dependencies_that_loaded = inst_39709;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39704,inst_39709,inst_39701,inst_39707,inst_39705,inst_39724,inst_39726,inst_39727,inst_39728,inst_39729,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39704,inst_39709,inst_39701,inst_39707,inst_39705,inst_39724,inst_39726,inst_39727,inst_39728,inst_39729,state_val_39789,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39731 = setTimeout(inst_39730,(10));
var state_39788__$1 = (function (){var statearr_39859 = state_39788;
(statearr_39859[(33)] = inst_39724);

(statearr_39859[(34)] = inst_39729);

return statearr_39859;
})();
var statearr_39860_39923 = state_39788__$1;
(statearr_39860_39923[(2)] = inst_39731);

(statearr_39860_39923[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (16))){
var state_39788__$1 = state_39788;
var statearr_39861_39924 = state_39788__$1;
(statearr_39861_39924[(2)] = reload_dependents);

(statearr_39861_39924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (38))){
var inst_39741 = (state_39788[(16)]);
var inst_39759 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39741);
var state_39788__$1 = state_39788;
var statearr_39862_39925 = state_39788__$1;
(statearr_39862_39925[(2)] = inst_39759);

(statearr_39862_39925[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (30))){
var state_39788__$1 = state_39788;
var statearr_39863_39926 = state_39788__$1;
(statearr_39863_39926[(2)] = null);

(statearr_39863_39926[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (10))){
var inst_39661 = (state_39788[(22)]);
var inst_39663 = cljs.core.chunked_seq_QMARK_.call(null,inst_39661);
var state_39788__$1 = state_39788;
if(inst_39663){
var statearr_39864_39927 = state_39788__$1;
(statearr_39864_39927[(1)] = (13));

} else {
var statearr_39865_39928 = state_39788__$1;
(statearr_39865_39928[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (18))){
var inst_39695 = (state_39788[(2)]);
var state_39788__$1 = state_39788;
if(cljs.core.truth_(inst_39695)){
var statearr_39866_39929 = state_39788__$1;
(statearr_39866_39929[(1)] = (19));

} else {
var statearr_39867_39930 = state_39788__$1;
(statearr_39867_39930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (42))){
var state_39788__$1 = state_39788;
var statearr_39868_39931 = state_39788__$1;
(statearr_39868_39931[(2)] = null);

(statearr_39868_39931[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (37))){
var inst_39754 = (state_39788[(2)]);
var state_39788__$1 = state_39788;
var statearr_39869_39932 = state_39788__$1;
(statearr_39869_39932[(2)] = inst_39754);

(statearr_39869_39932[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39789 === (8))){
var inst_39661 = (state_39788[(22)]);
var inst_39648 = (state_39788[(9)]);
var inst_39661__$1 = cljs.core.seq.call(null,inst_39648);
var state_39788__$1 = (function (){var statearr_39870 = state_39788;
(statearr_39870[(22)] = inst_39661__$1);

return statearr_39870;
})();
if(inst_39661__$1){
var statearr_39871_39933 = state_39788__$1;
(statearr_39871_39933[(1)] = (10));

} else {
var statearr_39872_39934 = state_39788__$1;
(statearr_39872_39934[(1)] = (11));

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
});})(c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35809__auto__,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto____0 = (function (){
var statearr_39873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39873[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto__);

(statearr_39873[(1)] = (1));

return statearr_39873;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto____1 = (function (state_39788){
while(true){
var ret_value__35811__auto__ = (function (){try{while(true){
var result__35812__auto__ = switch__35809__auto__.call(null,state_39788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35812__auto__;
}
break;
}
}catch (e39874){if((e39874 instanceof Object)){
var ex__35813__auto__ = e39874;
var statearr_39875_39935 = state_39788;
(statearr_39875_39935[(5)] = ex__35813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39936 = state_39788;
state_39788 = G__39936;
continue;
} else {
return ret_value__35811__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto__ = function(state_39788){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto____1.call(this,state_39788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35810__auto__;
})()
;})(switch__35809__auto__,c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35906__auto__ = (function (){var statearr_39876 = f__35905__auto__.call(null);
(statearr_39876[(6)] = c__35904__auto__);

return statearr_39876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35906__auto__);
});})(c__35904__auto__,map__39633,map__39633__$1,opts,before_jsload,on_jsload,reload_dependents,map__39634,map__39634__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35904__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39939,link){
var map__39940 = p__39939;
var map__39940__$1 = (((((!((map__39940 == null))))?(((((map__39940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39940):map__39940);
var file = cljs.core.get.call(null,map__39940__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__39940,map__39940__$1,file){
return (function (p1__39937_SHARP_,p2__39938_SHARP_){
if(cljs.core._EQ_.call(null,p1__39937_SHARP_,p2__39938_SHARP_)){
return p1__39937_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__39940,map__39940__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39943){
var map__39944 = p__39943;
var map__39944__$1 = (((((!((map__39944 == null))))?(((((map__39944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39944):map__39944);
var match_length = cljs.core.get.call(null,map__39944__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39944__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39942_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39942_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39946_SHARP_,p2__39947_SHARP_){
return cljs.core.assoc.call(null,p1__39946_SHARP_,cljs.core.get.call(null,p2__39947_SHARP_,key),p2__39947_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_39948 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_39948);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_39948);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39949,p__39950){
var map__39951 = p__39949;
var map__39951__$1 = (((((!((map__39951 == null))))?(((((map__39951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39951):map__39951);
var on_cssload = cljs.core.get.call(null,map__39951__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__39952 = p__39950;
var map__39952__$1 = (((((!((map__39952 == null))))?(((((map__39952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39952):map__39952);
var files_msg = map__39952__$1;
var files = cljs.core.get.call(null,map__39952__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1590529176744
