!function(d){var h,t,e="mmenu",o="sectionIndexer";d[e].addons[o]={setup:function(){var s=this,i=this.opts[o];this.conf[o];d[e].glbl,"boolean"==typeof i&&(i={add:i}),"object"!=typeof i&&(i={}),i=this.opts[o]=d.extend(!0,{},d[e].defaults[o],i);var r=null;this.bind("initPanels:after",function(e){if(i.add){var a;switch(i.addTo){case"panels":a=e;break;default:a=(a=d(i.addTo,this.$menu)).filter("."+h.panel)}a.find("."+h.listitem+"_divider").closest("."+h.panel).addClass(h.panel+"_has-sectionindexer"),r||(r=d('<div class="'+h.sectionindexer+'" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>')).on(t.mouseover+"-"+o+" "+t.touchstart+"-"+o,"a",function(e){var a=d(e.target).attr("href").slice(1),n=s.$pnls.children("."+h.panel+"_opened"),i=n.find("."+h.listview),r=-1,t=n.scrollTop();n.scrollTop(0),i.children("."+h.listitem+"_divider").not("."+h.hidden).each(function(){r<0&&a==d(this).text().slice(0,1).toLowerCase()&&(r=d(this).position().top)}),n.scrollTop(-1<r?r:t)});var n=function(e){e=e||this.$pnls.children("."+h.panel+"_opened"),this.$menu[(e.hasClass(h.panel+"_has-sectionindexer")?"add":"remove")+"Class"](h.menu+"_has-sectionindexer")};this.bind("openPanel:start",n),this.bind("initPanels:after",n)}})},add:function(){h=d[e]._c,d[e]._d,t=d[e]._e,h.add("sectionindexer"),t.add("mouseover")},clickAnchor:function(e,a){if(e.parent().is("."+h.indexer))return!0}},d[e].defaults[o]={add:!1,addTo:"panels"}}(jQuery);