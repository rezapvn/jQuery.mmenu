Mmenu.addons.dropdown=function(){var o=this;if(this.opts.offCanvas){var b=this.opts.dropdown,x=this.conf.dropdown;if("boolean"==typeof b&&b&&(b={drop:b}),"object"!=typeof b&&(b={}),"string"==typeof b.position&&(b.position={of:b.position}),this.opts.dropdown=Mmenu.extend(b,Mmenu.options.dropdown),b.drop){var g;this.bind("initMenu:after",function(){if(o.node.menu.classList.add("mm-menu_dropdown"),"string"!=typeof b.position.of){var t=o.vars.orgMenuId;t&&t.length&&(b.position.of='[href="#'+t+'"]')}if("string"==typeof b.position.of){g=Mmenu.DOM.find(document.body,b.position.of)[0];var e=b.event.split(" ");1==e.length&&(e[1]=e[0]),"hover"==e[0]&&g.addEventListener("mouseenter",function(t){o.open()},{passive:!0}),"hover"==e[1]&&o.node.menu.addEventListener("mouseleave",function(t){o.close()},{passive:!0})}}),this.bind("open:start",function(){o.node.menu.mmStyle=o.node.menu.getAttribute("style"),document.documentElement.classList.add("mm-wrapper_dropdown")}),this.bind("close:finish",function(){o.node.menu.setAttribute("style",o.node.menu.mmStyle),document.documentElement.classList.remove("mm-wrapper_dropdown")});var n=function(t,e){var o,n,i=e[0],s=e[1],m="x"==t?"scrollLeft":"scrollTop",d="x"==t?"outerWidth":"outerHeight",p="x"==t?"left":"top",r="x"==t?"right":"bottom",u="x"==t?"width":"height",a="x"==t?"maxWidth":"maxHeight",f=null,l=Mmenu.$(window)[m](),c=Mmenu.$(g).offset()[p]-=l,h=c+Mmenu.$(g)[d](),v=Mmenu.$(window)[u](),w=x.offset.button[t]+x.offset.viewport[t];if(b.position[t])switch(b.position[t]){case"left":case"bottom":f="after";break;case"right":case"top":f="before"}return null===f&&(f=c+(h-c)/2<v/2?"after":"before"),"after"==f?(n=v-((o="x"==t?c:h)+w),i[p]=o+x.offset.button[t],i[r]="auto",b.tip&&s.push("mm-menu_tip-"+("x"==t?"left":"top"))):(n=(o="x"==t?h:c)-w,i[r]="calc( 100% - "+(o-x.offset.button[t])+"px )",i[p]="auto",b.tip&&s.push("mm-menu_tip-"+("x"==t?"right":"bottom"))),b.fitViewport&&(i[a]=Math.min(x[u].max,n)),[i,s]};this.bind("open:start",e),window.addEventListener("resize",function(t){e.call(o)},{passive:!0}),this.opts.offCanvas.blockUI||window.addEventListener("scroll",function(t){e.call(o)},{passive:!0})}}function e(){var t;if(this.vars.opened){this.node.menu.setAttribute("style",this.node.menu.mmStyle);var e=[{},[]];e=n.call(this,"y",e),e=n.call(this,"x",e),Mmenu.$(this.node.menu).css(e[0]),b.tip&&(this.node.menu.classList.remove("mm-menu_tip-left","mm-menu_tip-right","mm-menu_tip-top","mm-menu_tip-bottom"),(t=this.node.menu.classList).add.apply(t,e[1]))}}},Mmenu.options.dropdown={drop:!1,fitViewport:!0,event:"click",position:{},tip:!0},Mmenu.configs.dropdown={offset:{button:{x:-5,y:5},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};