Mmenu.wrappers.turbolinks=function(){var t,n;Mmenu.$(document).on("turbolinks:before-visit",function(){n=document.documentElement,t=n.getAttribute("class"),t=Mmenu.$.grep(t.split(/\s+/),function(t){return!/mm-/.test(t)}).join(" ")}).on("turbolinks:load",function(){void 0!==n&&n.setAttribute("class",t)})};