// Compiled by ClojureScript 1.10.439 {}
goog.provide('day8.re_frame.trace.subvis');
goog.require('cljs.core');
goog.require('cljsjs.d3');
goog.require('day8.re_frame.trace.d3');
goog.require('day8.re_frame.trace.graph');
goog.require('reagent.core');
goog.require('re_frame.interop');
goog.require('re_frame.db');
goog.require('goog.object');
goog.require('clojure.set');
day8.re_frame.trace.subvis.width = (400);
day8.re_frame.trace.subvis.height = (400);
day8.re_frame.trace.subvis.prev_graph = cljs.core.atom.call(null,null);
day8.re_frame.trace.subvis.mygraph = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"group","group",582596132),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"group","group",582596132),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"group","group",582596132),(2)], null)], null),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(1),new cljs.core.Keyword(null,"target","target",253001721),(2),new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null)], null));
day8.re_frame.trace.subvis.app_db_node = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.interop.reagent_id.call(null,re_frame.db.app_db),new cljs.core.Keyword(null,"title","title",636505583),"app-db",new cljs.core.Keyword(null,"group","group",582596132),(1),new cljs.core.Keyword(null,"r","r",-471384190),(20),new cljs.core.Keyword(null,"fx","fx",-1237829572),(15),new cljs.core.Keyword(null,"fy","fy",550788984),(day8.re_frame.trace.subvis.height / (2))], null);
day8.re_frame.trace.subvis.render_node_QMARK_ = (function day8$re_frame$trace$subvis$render_node_QMARK_(d){
return cljs.core._EQ_.call(null,"render",goog.object.getValueByKeys(d,"data","type"));
});
/**
 * Returns x if it is within min-val and max-val
 *   otherwise returns min-val if x is less than min-val
 *   and max-val if x is greater than max-val.
 * 
 *   Essentially this provides a bounding box/clamp around x.
 */
day8.re_frame.trace.subvis.min_max = (function day8$re_frame$trace$subvis$min_max(min_val,x,max_val){
if((min_val <= max_val)){
} else {
throw (new Error("Assert failed: (<= min-val max-val)"));
}

var x__4135__auto__ = min_val;
var y__4136__auto__ = (function (){var x__4138__auto__ = x;
var y__4139__auto__ = max_val;
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})();
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
});
day8.re_frame.trace.subvis.render_subvis = (function day8$re_frame$trace$subvis$render_subvis(traces_ratom){
var color_a = cljs.core.atom.call(null,null);
var svg_a = cljs.core.atom.call(null,null);
var simulation_a = cljs.core.atom.call(null,null);
return ((function (color_a,svg_a,simulation_a){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.d3.create_d3,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-component","render-component",21088873),((function (color_a,svg_a,simulation_a){
return (function (ratom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#d3cmp","svg#d3cmp",-746101375),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame.trace.subvis.width,new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame.trace.subvis.height], null)], null);
});})(color_a,svg_a,simulation_a))
,new cljs.core.Keyword(null,"d3-once","d3-once",663121478),((function (color_a,svg_a,simulation_a){
return (function (ratom){
var svg = cljs.core.reset_BANG_.call(null,svg_a,d3.select("#d3cmp"));
cljs.core.reset_BANG_.call(null,color_a,d3.scaleOrdinal(d3.schemeCategory20));

cljs.core.reset_BANG_.call(null,simulation_a,d3.forceSimulation().force("link",d3.forceLink().id(((function (svg,color_a,svg_a,simulation_a){
return (function (p1__33800_SHARP_){
return p1__33800_SHARP_.id;
});})(svg,color_a,svg_a,simulation_a))
).distance(cljs.core.constantly.call(null,(100)))).force("charge",d3.forceManyBody().strength(cljs.core.constantly.call(null,(-100)))).force("center",d3.forceCenter((day8.re_frame.trace.subvis.width / (2)),(day8.re_frame.trace.subvis.height / (2)))));

svg.append("g").attr("class","links");

return svg.append("g").attr("class","nodes");
});})(color_a,svg_a,simulation_a))
,new cljs.core.Keyword(null,"d3-update","d3-update",-641405552),((function (color_a,svg_a,simulation_a){
return (function (ratom){
var old_g = cljs.core.deref.call(null,day8.re_frame.trace.subvis.prev_graph);
var graph = cljs.core.reset_BANG_.call(null,day8.re_frame.trace.subvis.prev_graph,day8.re_frame.trace.graph.trace__GT_sub_graph.call(null,cljs.core.deref.call(null,ratom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.subvis.app_db_node], null)));
if(cljs.core.not_EQ_.call(null,old_g,graph)){
var simulation = cljs.core.deref.call(null,simulation_a);
var color = cljs.core.deref.call(null,color_a);
var svg = cljs.core.deref.call(null,svg_a);
var graph__$1 = day8.re_frame.trace.graph.trace__GT_sub_graph.call(null,cljs.core.deref.call(null,ratom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.subvis.app_db_node], null));
var nodes = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph__$1));
var links = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph__$1));
var drag_started = ((function (simulation,color,svg,graph__$1,nodes,links,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
if((d3.event.active === (0))){
return simulation.alphaTarget(0.3).restart();
} else {
return null;
}
});})(simulation,color,svg,graph__$1,nodes,links,old_g,graph,color_a,svg_a,simulation_a))
;
var dragged = ((function (simulation,color,svg,graph__$1,nodes,links,drag_started,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
d.fx = d3.event.x;

return d.fy = d3.event.y;
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,old_g,graph,color_a,svg_a,simulation_a))
;
var drag_ended = ((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
if((d3.event.active === (0))){
simulation.alphaTarget(0.0);
} else {
}

d.fx = null;

return d.fy = null;
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,old_g,graph,color_a,svg_a,simulation_a))
;
var link = svg.select("g.links").selectAll("line").data(links,((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,old_g,graph,color_a,svg_a,simulation_a){
return (function (p1__33801_SHARP_){
return p1__33801_SHARP_.id;
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,old_g,graph,color_a,svg_a,simulation_a))
);
var enter_link = link.enter().append("line").attr("stroke-width",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
return Math.sqrt(d.value);
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,old_g,graph,color_a,svg_a,simulation_a))
);
var merged_link = enter_link.merge(link);
var _ = link.exit().remove("line");
var node = svg.select("g.nodes").selectAll(".node").data(nodes,((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,old_g,graph,color_a,svg_a,simulation_a){
return (function (p1__33802_SHARP_){
return p1__33802_SHARP_.id;
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,old_g,graph,color_a,svg_a,simulation_a))
);
var enter_node = node.enter().append("g").attr("class","node").call(d3.drag().on("start",drag_started).on("drag",dragged).on("end",drag_ended));
var circle = enter_node.append("circle").attr("r",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
return d.r;
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,old_g,graph,color_a,svg_a,simulation_a))
).attr("fill",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
return color.call(null,d.group);
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,old_g,graph,color_a,svg_a,simulation_a))
);
var text = enter_node.append("text").attr("dx",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
if(day8.re_frame.trace.subvis.render_node_QMARK_.call(null,d)){
return (-12);
} else {
return (12);
}
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,old_g,graph,color_a,svg_a,simulation_a))
).attr("dy","0.35em").attr("text-anchor",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
if(day8.re_frame.trace.subvis.render_node_QMARK_.call(null,d)){
return "end";
} else {
return "start";
}
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,old_g,graph,color_a,svg_a,simulation_a))
).attr("opacity",(1)).text(((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
return d.title;
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,old_g,graph,color_a,svg_a,simulation_a))
);
var merged_node = enter_node.merge(node);
var ticked = ((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a){
return (function (){
merged_node.attr("transform",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
var r = d.r;
var x = day8.re_frame.trace.subvis.min_max.call(null,r,d.x,(day8.re_frame.trace.subvis.width - r));
var y = day8.re_frame.trace.subvis.min_max.call(null,r,d.y,(day8.re_frame.trace.subvis.height - r));
d.x = x;

d.y = y;

return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('');
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a))
);

return merged_link.attr("x1",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
return d.source.x;
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a))
).attr("y1",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
return d.source.y;
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a))
).attr("x2",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
return d.target.x;
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a))
).attr("y2",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a){
return (function (d){
return d.target.y;
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a))
);
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,old_g,graph,color_a,svg_a,simulation_a))
;
var node_exit_t = node.exit().transition().delay(((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,ticked,old_g,graph,color_a,svg_a,simulation_a){
return (function (d,i){
return (i * (30));
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,ticked,old_g,graph,color_a,svg_a,simulation_a))
).duration((500));
var ___$1 = node_exit_t.select("circle").attr("transform","scale(0,0)").attr("fill","#000000");
var ___$2 = node_exit_t.select("text").attr("opacity",(0));
var ___$3 = node_exit_t.on("end",((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,ticked,node_exit_t,___$1,___$2,old_g,graph,color_a,svg_a,simulation_a){
return (function (){
var this$ = this;
return d3.select(this$).remove();
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,ticked,node_exit_t,___$1,___$2,old_g,graph,color_a,svg_a,simulation_a))
);
var ___$4 = node_exit_t.transition().call(((function (simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,ticked,node_exit_t,___$1,___$2,___$3,old_g,graph,color_a,svg_a,simulation_a){
return (function (){
simulation.nodes(nodes).on("tick",ticked);

simulation.force("link").links(links);

return simulation.restart().alpha(0.3);
});})(simulation,color,svg,graph__$1,nodes,links,drag_started,dragged,drag_ended,link,enter_link,merged_link,_,node,enter_node,circle,text,merged_node,ticked,node_exit_t,___$1,___$2,___$3,old_g,graph,color_a,svg_a,simulation_a))
);
return null;
} else {
return null;
}
});})(color_a,svg_a,simulation_a))
], null),traces_ratom], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null);
});
;})(color_a,svg_a,simulation_a))
});

//# sourceMappingURL=subvis.js.map?rel=1590529170517
