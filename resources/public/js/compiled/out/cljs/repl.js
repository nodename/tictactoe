// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40752){
var map__40753 = p__40752;
var map__40753__$1 = (((((!((map__40753 == null))))?(((((map__40753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40753):map__40753);
var m = map__40753__$1;
var n = cljs.core.get.call(null,map__40753__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40753__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40755_40777 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40756_40778 = null;
var count__40757_40779 = (0);
var i__40758_40780 = (0);
while(true){
if((i__40758_40780 < count__40757_40779)){
var f_40781 = cljs.core._nth.call(null,chunk__40756_40778,i__40758_40780);
cljs.core.println.call(null,"  ",f_40781);


var G__40782 = seq__40755_40777;
var G__40783 = chunk__40756_40778;
var G__40784 = count__40757_40779;
var G__40785 = (i__40758_40780 + (1));
seq__40755_40777 = G__40782;
chunk__40756_40778 = G__40783;
count__40757_40779 = G__40784;
i__40758_40780 = G__40785;
continue;
} else {
var temp__5735__auto___40786 = cljs.core.seq.call(null,seq__40755_40777);
if(temp__5735__auto___40786){
var seq__40755_40787__$1 = temp__5735__auto___40786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40755_40787__$1)){
var c__4461__auto___40788 = cljs.core.chunk_first.call(null,seq__40755_40787__$1);
var G__40789 = cljs.core.chunk_rest.call(null,seq__40755_40787__$1);
var G__40790 = c__4461__auto___40788;
var G__40791 = cljs.core.count.call(null,c__4461__auto___40788);
var G__40792 = (0);
seq__40755_40777 = G__40789;
chunk__40756_40778 = G__40790;
count__40757_40779 = G__40791;
i__40758_40780 = G__40792;
continue;
} else {
var f_40793 = cljs.core.first.call(null,seq__40755_40787__$1);
cljs.core.println.call(null,"  ",f_40793);


var G__40794 = cljs.core.next.call(null,seq__40755_40787__$1);
var G__40795 = null;
var G__40796 = (0);
var G__40797 = (0);
seq__40755_40777 = G__40794;
chunk__40756_40778 = G__40795;
count__40757_40779 = G__40796;
i__40758_40780 = G__40797;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40798 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40798);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40798)))?cljs.core.second.call(null,arglists_40798):arglists_40798));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40759_40799 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40760_40800 = null;
var count__40761_40801 = (0);
var i__40762_40802 = (0);
while(true){
if((i__40762_40802 < count__40761_40801)){
var vec__40763_40803 = cljs.core._nth.call(null,chunk__40760_40800,i__40762_40802);
var name_40804 = cljs.core.nth.call(null,vec__40763_40803,(0),null);
var map__40766_40805 = cljs.core.nth.call(null,vec__40763_40803,(1),null);
var map__40766_40806__$1 = (((((!((map__40766_40805 == null))))?(((((map__40766_40805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40766_40805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40766_40805):map__40766_40805);
var doc_40807 = cljs.core.get.call(null,map__40766_40806__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40808 = cljs.core.get.call(null,map__40766_40806__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40804);

cljs.core.println.call(null," ",arglists_40808);

if(cljs.core.truth_(doc_40807)){
cljs.core.println.call(null," ",doc_40807);
} else {
}


var G__40809 = seq__40759_40799;
var G__40810 = chunk__40760_40800;
var G__40811 = count__40761_40801;
var G__40812 = (i__40762_40802 + (1));
seq__40759_40799 = G__40809;
chunk__40760_40800 = G__40810;
count__40761_40801 = G__40811;
i__40762_40802 = G__40812;
continue;
} else {
var temp__5735__auto___40813 = cljs.core.seq.call(null,seq__40759_40799);
if(temp__5735__auto___40813){
var seq__40759_40814__$1 = temp__5735__auto___40813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40759_40814__$1)){
var c__4461__auto___40815 = cljs.core.chunk_first.call(null,seq__40759_40814__$1);
var G__40816 = cljs.core.chunk_rest.call(null,seq__40759_40814__$1);
var G__40817 = c__4461__auto___40815;
var G__40818 = cljs.core.count.call(null,c__4461__auto___40815);
var G__40819 = (0);
seq__40759_40799 = G__40816;
chunk__40760_40800 = G__40817;
count__40761_40801 = G__40818;
i__40762_40802 = G__40819;
continue;
} else {
var vec__40768_40820 = cljs.core.first.call(null,seq__40759_40814__$1);
var name_40821 = cljs.core.nth.call(null,vec__40768_40820,(0),null);
var map__40771_40822 = cljs.core.nth.call(null,vec__40768_40820,(1),null);
var map__40771_40823__$1 = (((((!((map__40771_40822 == null))))?(((((map__40771_40822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40771_40822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40771_40822):map__40771_40822);
var doc_40824 = cljs.core.get.call(null,map__40771_40823__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40825 = cljs.core.get.call(null,map__40771_40823__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40821);

cljs.core.println.call(null," ",arglists_40825);

if(cljs.core.truth_(doc_40824)){
cljs.core.println.call(null," ",doc_40824);
} else {
}


var G__40826 = cljs.core.next.call(null,seq__40759_40814__$1);
var G__40827 = null;
var G__40828 = (0);
var G__40829 = (0);
seq__40759_40799 = G__40826;
chunk__40760_40800 = G__40827;
count__40761_40801 = G__40828;
i__40762_40802 = G__40829;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__40773 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40774 = null;
var count__40775 = (0);
var i__40776 = (0);
while(true){
if((i__40776 < count__40775)){
var role = cljs.core._nth.call(null,chunk__40774,i__40776);
var temp__5735__auto___40830__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40830__$1)){
var spec_40831 = temp__5735__auto___40830__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40831));
} else {
}


var G__40832 = seq__40773;
var G__40833 = chunk__40774;
var G__40834 = count__40775;
var G__40835 = (i__40776 + (1));
seq__40773 = G__40832;
chunk__40774 = G__40833;
count__40775 = G__40834;
i__40776 = G__40835;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__40773);
if(temp__5735__auto____$1){
var seq__40773__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40773__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__40773__$1);
var G__40836 = cljs.core.chunk_rest.call(null,seq__40773__$1);
var G__40837 = c__4461__auto__;
var G__40838 = cljs.core.count.call(null,c__4461__auto__);
var G__40839 = (0);
seq__40773 = G__40836;
chunk__40774 = G__40837;
count__40775 = G__40838;
i__40776 = G__40839;
continue;
} else {
var role = cljs.core.first.call(null,seq__40773__$1);
var temp__5735__auto___40840__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40840__$2)){
var spec_40841 = temp__5735__auto___40840__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40841));
} else {
}


var G__40842 = cljs.core.next.call(null,seq__40773__$1);
var G__40843 = null;
var G__40844 = (0);
var G__40845 = (0);
seq__40773 = G__40842;
chunk__40774 = G__40843;
count__40775 = G__40844;
i__40776 = G__40845;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1590529178087
