Mmenu.addons.offCanvas=function(){var r=this;if(this.opts.offCanvas){var e=this.opts.offCanvas,o=this.conf.offCanvas;this._api.push("open","close","setPage"),"object"!=typeof e&&(e={}),this.opts.offCanvas=Mmenu.extend(e,Mmenu.options.offCanvas),this.conf.offCanvas=Mmenu.extend(o,Mmenu.configs.offCanvas),this.vars.opened=!1,this.bind("initMenu:after",function(){r._initBlocker(),r.setPage(Mmenu.node.page),r._initWindow_offCanvas(),r.node.menu.classList.add("mm-menu_offcanvas"),r.node.menu.parentElement.classList.remove("mm-wrapper"),document.querySelector(o.menu.insertSelector)[o.menu.insertMethod](r.node.menu);var e=window.location.hash;if(e){var n=r.vars.orgMenuId;n&&n==e.slice(1)&&setTimeout(function(){r.open()},1e3)}}),this.bind("setPage:after",function(n){Mmenu.node.blck&&Mmenu.DOM.children(Mmenu.node.blck,"a").forEach(function(e){e.setAttribute("href","#"+n.id)})}),this.bind("open:start:sr-aria",function(){Mmenu.sr_aria(r.node.menu,"hidden",!1)}),this.bind("close:finish:sr-aria",function(){Mmenu.sr_aria(r.node.menu,"hidden",!0)}),this.bind("initMenu:after:sr-aria",function(){Mmenu.sr_aria(r.node.menu,"hidden",!0)}),this.bind("initBlocker:after:sr-text",function(){Mmenu.DOM.children(Mmenu.node.blck,"a").forEach(function(e){e.innerHTML=Mmenu.sr_text(r.i18n(r.conf.screenReader.text.closeMenu))})}),this.clck.push(function(e,n){var o=r.vars.orgMenuId;if(o&&e.matches('[href="#'+o+'"]')){if(n.inMenu)return r.open(),!0;var t=e.closest(".mm-menu");if(t){var i=t.mmenu;if(i&&i.close)return i.close(),Mmenu.transitionend(Mmenu.$(t),function(){r.open()},r.conf.transitionDuration),!0}return r.open(),!0}if((o=Mmenu.node.page.id)&&e.matches('[href="#'+o+'"]'))return r.close(),!0})}},Mmenu.options.offCanvas={blockUI:!0,moveBackground:!0},Mmenu.configs.offCanvas={menu:{insertMethod:"prepend",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[]}},Mmenu.prototype.open=function(){var e=this;this.trigger("open:before"),this.vars.opened||(this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open:after"))},Mmenu.prototype._openSetup=function(){var e,n=this,o=this.opts.offCanvas;this.closeAllOthers(),Mmenu.node.page.mmStyle=Mmenu.node.page.getAttribute("style")||"",Mmenu.$(window).trigger("resize.mm-offCanvas",[!0]);var t=["mm-wrapper_opened"];o.blockUI&&t.push("mm-wrapper_blocking"),"modal"==o.blockUI&&t.push("mm-wrapper_modal"),o.moveBackground&&t.push("mm-wrapper_background"),(e=document.querySelector("html").classList).add.apply(e,t),setTimeout(function(){n.vars.opened=!0},this.conf.openingInterval),this.node.menu.classList.add("mm-menu_opened")},Mmenu.prototype._openFinish=function(){var e=this;Mmenu.transitionend(Mmenu.$(Mmenu.node.page),function(){e.trigger("open:finish")},this.conf.transitionDuration),this.trigger("open:start"),document.querySelector("html").classList.add("mm-wrapper_opening")},Mmenu.prototype.close=function(){var n=this;this.trigger("close:before"),this.vars.opened&&(Mmenu.transitionend(Mmenu.$(Mmenu.node.page),function(){var e;n.node.menu.classList.remove("mm-menu_opened");(e=document.querySelector("html").classList).remove.apply(e,["mm-wrapper_opened","mm-wrapper_blocking","mm-wrapper_modal","mm-wrapper_background"]),Mmenu.node.page.setAttribute("style",Mmenu.node.page.mmStyle),n.vars.opened=!1,n.trigger("close:finish")},this.conf.transitionDuration),this.trigger("close:start"),document.querySelector("html").classList.remove("mm-wrapper_opening"),this.trigger("close:after"))},Mmenu.prototype.closeAllOthers=function(){Mmenu.$("body").find(".mm-menu_offcanvas").not(this.node.menu).each(function(e,n){var o=n.mmenu;o&&o.close&&o.close()})},Mmenu.prototype.setPage=function(e){this.trigger("setPage:before",[e]);var n=this.conf.offCanvas;if(!e){var o="string"==typeof n.page.selector?Mmenu.DOM.find(document.body,n.page.selector):Mmenu.DOM.children(document.body,n.page.nodetype);o=o.filter(function(e){return!e.matches(".mm-menu, .mm-wrapper__blocker")}),n.page.noSelector.length&&(o=o.filter(function(e){return!e.matches(n.page.noSelector.join(", "))})),1<o.length&&(o=[Mmenu.$(o).wrapAll("<"+n.page.nodetype+" />").parent()[0]]),e=o[0]}e.classList.add("mm-page","mm-slideout"),e.id=e.id||Mmenu.getUniqueId(),Mmenu.node.page=e,this.trigger("setPage:after",[e])},Mmenu.prototype._initWindow_offCanvas=function(){var o,t;Mmenu.$(window).off("keydown.mm-offCanvas").on("keydown.mm--offCanvas",function(e){if(Mmenu.$("html").hasClass("mm-wrapper_opened")&&9==e.keyCode)return e.preventDefault(),!1}),Mmenu.$(window).off("resize.mm-offCanvas").on("resize.mm-offCanvas",function(e,n){(n||Mmenu.$("html").hasClass("mm-wrapper_opened"))&&(t=Mmenu.$(window).height(),(n||t!=o)&&(o=t,Mmenu.$(Mmenu.node.page).css("minHeight",t)))})},Mmenu.prototype._initBlocker=function(){var n=this,e=this.opts.offCanvas,o=this.conf.offCanvas;if(this.trigger("initBlocker:before"),e.blockUI){if(!Mmenu.node.blck){var t=Mmenu.DOM.create("div.mm-wrapper__blocker.mm-slideout");t.innerHTML="<a></a>",Mmenu.node.blck=t}Mmenu.$(Mmenu.node.blck).appendTo(o.menu.insertSelector).off("touchstart.mm-offCanvas touchmove.mm-offCanvas").on("touchstart.mm-offCanvas touchmove.mm-offCanvas",function(e){e.preventDefault(),e.stopPropagation(),Mmenu.$(Mmenu.node.blck).trigger("mousedown.mm-offCanvas")}).off("mousedown.mm-offCanvas").on("mousedown.mm-offCanvas",function(e){e.preventDefault(),document.querySelector("html").matches(".mm-wrapper_modal")||(n.closeAllOthers(),n.close())}),this.trigger("initBlocker:after")}};