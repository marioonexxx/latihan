function fusionInitStickyContainers(){"function"==typeof jQuery.fn.stick_in_parent&&jQuery(".fusion-sticky-container").each(function(){fusionInitSticky(jQuery(this))})}function fusionInitSticky(e){var t=void 0===e.attr("data-transition-offset")?0:parseFloat(e.attr("data-transition-offset")),i=void 0===e.attr("data-sticky-offset")?0:e.attr("data-sticky-offset"),n=void 0!==e.attr("data-scroll-offset")&&parseFloat(e.attr("data-scroll-offset")),o={sticky_class:"fusion-container-stuck",bottoming:!0,offset_top:i,transition_offset:t,clone:!1},s="data-sticky-medium-visibility";jQuery("body").hasClass("fusion-disable-sticky")?e.data("sticky_kit")&&e.trigger("sticky_kit:detach"):"object"!=typeof fusion||"function"!=typeof fusion.isLarge||(fusion.isLarge()?s="data-sticky-large-visibility":fusion.isSmall()&&(s="data-sticky-small-visibility"),void 0!==e.attr(s)&&e.attr(s))?e.data("sticky_kit")||(n&&(o.scroll_transition=n),e.closest(".fusion-tb-header").length||e.closest(".fusion-tb-page-title-bar").length?(o.parent="#wrapper",o.bottoming=!1):e.closest(".fusion-content-tb").length?o.parent=".fusion-content-tb":e.closest(".fusion-builder-live-editor").length?o.parent="#fusion_builder_container":e.parent().parent(".post-content").length?o.parent=".post-content":e.hasClass("awb-sticky-content")&&(o.parent="#wrapper"),"string"==typeof e.attr("data-sticky-parent")&&(o.parent=e.attr("data-sticky-parent")),"string"==typeof e.attr("data-sticky-bottoming")&&(o.bottoming=e.attr("data-sticky-bottoming")),jQuery("body").hasClass("fusion-builder-live")||void 0===e.attr("data-sticky-height-transition")||(o.clone=!0),e.stick_in_parent(o)):e.data("sticky_kit")&&e.trigger("sticky_kit:detach")}function fusionGetStickyOffset(){var e=0,t=jQuery(".fusion-container-stuck:not( .side-header-wrapper )");return t.length?(t.each(function(){var t=jQuery(this),i=t.position().top+t.outerHeight(!0);t.closest("#side-header").length||t.closest(".off-canvas-content").length||i>e&&(e=i)}),e):e}function initSwiperScrollingSection(e){if(!e.length)return;const t={direction:"vertical",speed:e.data("speed"),effect:"creative",observer:!0,observeParents:!0,mousewheel:{releaseOnEdges:!0},allowTouchMove:!1,creativeEffect:{slide:{prev:{translate:[0,"-100%",0],opacity:0},next:{translate:[0,"100%",0],opacity:0}},stack:{prev:{translate:[0,"60px","-30px"],scale:.7,opacity:0},next:{translate:[0,"100%",0]}},zoom:{prev:{scale:1.3,opacity:0},next:{scale:.7,opacity:0}},"slide-zoom-out":{prev:{translate:[0,"-100%",0],scale:1.5,opacity:0},next:{translate:[0,"100%",0],scale:1.5,opacity:0}},"slide-zoom-in":{prev:{translate:[0,"-100%",0],scale:.8,opacity:0},next:{translate:[0,"100%",0],scale:.8,opacity:0}}}[e.data("animation")],on:{afterInit:function(t){if(e.find(".fusion-scroll-section-nav ul li:first-child a").addClass("active"),e.addClass("swiper-ready"),window.location.hash.length&&e.find(window.location.hash).length){const i=e.find(window.location.hash+".swiper-slide").length?e.find(window.location.hash+".swiper-slide"):e.find(window.location.hash).closest(".swiper-slide");i.length&&setTimeout(()=>{t.slideTo(i.index(),0),e[0].scrollIntoView()},100)}},activeIndexChange:function(t){e.find(".fusion-scroll-section-nav ul li a").removeClass("active"),e.find(".fusion-scroll-section-nav ul li").eq(t.activeIndex).find("a").addClass("active"),setTimeout(()=>{n()},100)},slideChange:function(t){e[0].scrollIntoView({behavior:"smooth"}),setTimeout(function(){t.params.mousewheel.releaseOnEdges=!1},500)},reachEnd:function(e){setTimeout(function(){e.params.mousewheel.releaseOnEdges=!0},750)},reachBeginning:function(e){setTimeout(function(){e.params.mousewheel.releaseOnEdges=!0},750)}}};/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(t.allowTouchMove=!0);const i=new window.Swiper(e[0],t);function n(t){if(!t){const i=e.find(".swiper-slide-active"),n=i.find(".fusion-container-anchor").length?i.find(".fusion-container-anchor").attr("id"):i.attr("id");t=jQuery(`a[href="#${n}"]`)}if(t.length&&t.hasClass("awb-menu__main-a")){t.parents(".awb-menu__main-ul").find("li.menu-item.current-menu-item").removeClass("current-menu-item"),t.closest(".menu-item").addClass("current-menu-item")}else t.addClass("awb-active")}e.find(".fusion-scroll-section-nav ul li a").on("click",function(e){e.preventDefault();const t=jQuery(this).parent().index();i.slideTo(t)}),0==fusionContainerVars.container_hundred_percent_height_mobile&&Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")&&(e.removeClass("awb-swiper").addClass("fusion-full-scroll-disabled"),i.destroy()),jQuery('a[href^="#"]').on("click",function(t){const o=jQuery(this),s=o.attr("href"),r="#"!==s?e.find(s):"";if(r.length){t.preventDefault();let e=r.index();r.hasClass("fusion-container-anchor")&&(e=r.parent().index()),n(o),i.slideTo(e)}})}function initScrollingSections(e){var t,i,n=jQuery("#content").find(".fusion-scroll-section"),o=(Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0))+fusion.getAdminbarHeight();e&&(n=jQuery(".post-preview.post-content").find(".fusion-scroll-section")),n.hasClass("awb-swiper-full-sections")?initSwiperScrollingSection(n):(window.lastYPosition=0,window.scrollDisabled=!1,n.length&&(jQuery("#content").find(".non-hundred-percent-height-scrolling").length||1!==n.length||jQuery.trim(jQuery("#sliders-container").html())||(n.addClass("active"),n.find(".fusion-scroll-section-nav li:first a").addClass("active"),t=!0),n.each(function(){1<jQuery(this).children("div").length&&(i=o?"calc("+(100*jQuery(this).children("div").length+50)+"vh - "+o+"px)":100*jQuery(this).children("div").length+50+"vh",jQuery(this).css("height",i),o&&(jQuery(this).find(".hundred-percent-height-scrolling").css("height","calc(100vh - "+o+"px)"),jQuery(this).find(".fusion-scroll-section-nav").css("top","calc(50% + "+o/2+"px)")))}),window.lastYPosition=jQuery(window).scrollTop(),jQuery(window).on("scroll",function(){var e=jQuery(window).scrollTop(),i=window.lastYPosition;window.scrollDisabled||jQuery(".fusion-scroll-section").each(function(){1<jQuery(this).children("div").length&&!jQuery(this).hasClass("fusion-scroll-section-mobile-disabled")&&jQuery(this).fusionPositionScrollSectionElements(e,t,i)})}),jQuery(".fusion-scroll-section-link").on("click",function(e){var t=jQuery(this).parents(".fusion-scroll-section"),i=getScrollSectionPositionValues(t),n=t.find(".fusion-scroll-section-element"),o=n.length,s=jQuery(this).parents(".fusion-scroll-section-nav").find(".fusion-scroll-section-link.active"),r=s.length?parseInt(s.data("element"),10):0,c=parseInt(jQuery(this).data("element"),10),l=Math.abs(c-r);e.preventDefault(),0<l&&(t.data("clicked",c),"fixed"!==n.last().css("position")&&n.css({position:"fixed",top:i.sectionTopOffset,left:i.sectionLeftOffset,padding:"0",width:i.sectionWidth}),1===c?jQuery(window).scrollTop(i.sectionTop+1):o===c?jQuery(window).scrollTop(i.sectionBottom-i.viewportHeight-1):c>r?jQuery(window).scrollTop(i.sectionTop+i.viewportHeight*c-1):jQuery(window).scrollTop(i.sectionTop+i.viewportHeight*(c-1)+1))})),jQuery(".hundred-percent-height").length&&(setCorrectResizeValuesForScrollSections(),jQuery(window).on("resize",function(){setCorrectResizeValuesForScrollSections()})))}function setCorrectResizeValuesForScrollSections(){var e=jQuery("#content").find(".fusion-scroll-section"),t=0,i=0,n=fusion.getAdminbarHeight();e.length&&(jQuery(".fusion-scroll-section.active").find(".fusion-scroll-section-element").css({left:jQuery("#content").offset().left}),jQuery(".fusion-scroll-section").find(".fusion-scroll-section-element").css({width:jQuery("#content").width()}),0==fusionContainerVars.container_hundred_percent_height_mobile&&(Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(jQuery(".fusion-scroll-section").removeClass("active").addClass("fusion-scroll-section-mobile-disabled"),jQuery(".fusion-scroll-section").attr("style",""),jQuery(".fusion-scroll-section").find(".fusion-scroll-section-element").attr("style",""),jQuery(".fusion-scroll-section").find(".hundred-percent-height-scrolling").css("height","auto"),jQuery(".fusion-scroll-section").find(".fusion-fullwidth-center-content").css("height","auto")):jQuery(".fusion-scroll-section").hasClass("fusion-scroll-section-mobile-disabled")&&(jQuery(".fusion-scroll-section").find(".fusion-fullwidth-center-content").css("height",""),Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight||(t=getStickyHeaderHeight(!0)),i=t+n,e.each(function(){1<jQuery(this).children("div").length&&(jQuery(this).css("height",100*jQuery(this).children("div").length+50+"vh"),jQuery(this).find(".hundred-percent-height-scrolling").css("height","calc(100vh - "+i+"px)"))}),scrollToCurrentScrollSection()))),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").length&&(Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight||(t=getStickyHeaderHeight(!0)),i=t+n,0==fusionContainerVars.container_hundred_percent_height_mobile&&(Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").css("height","auto"),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").find(".fusion-fullwidth-center-content").css("height","auto")):(jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").css("height","calc(100vh - "+i+"px)"),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").find(".fusion-fullwidth-center-content").css("height",""))))}function scrollToCurrentScrollSection(){var e=Math.ceil(jQuery(window).scrollTop()),t=jQuery(window).height(),i=Math.floor(e+t),n=Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),o=fusion.getAdminbarHeight();e+=n+o,jQuery(".fusion-page-load-link").hasClass("fusion-page.load-scroll-section-link")||jQuery(".fusion-scroll-section").each(function(){var t=jQuery(this),n=Math.ceil(t.offset().top),o=Math.ceil(t.outerHeight()),s=Math.floor(n+o),r=jQuery("html").hasClass("ua-edge")?"body":"html";n<=e&&s>=i?(t.addClass("active"),jQuery(r).animate({scrollTop:n-50},{duration:50,easing:"easeInExpo",complete:function(){jQuery(r).animate({scrollTop:n},{duration:50,easing:"easeOutExpo",complete:function(){Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")||jQuery(".fusion-scroll-section").removeClass("fusion-scroll-section-mobile-disabled")}})}})):Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")||jQuery(".fusion-scroll-section").removeClass("fusion-scroll-section-mobile-disabled")})}function getScrollSectionPositionValues(e){var t={};return t.sectionTop=Math.ceil(e.offset().top),t.sectionHeight=Math.ceil(e.outerHeight()),t.sectionBottom=Math.floor(t.sectionTop+t.sectionHeight),t.viewportTop=Math.ceil(jQuery(window).scrollTop()),t.viewportHeight=jQuery(window).height(),t.viewportBottom=Math.floor(t.viewportTop+t.viewportHeight),t.sectionWidth=jQuery("#content").width(),t.sectionTopOffset=fusion.getAdminbarHeight(),t.sectionLeftOffset=jQuery("#content").offset().left,t.sectionTopOffset+=Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),t.viewportTop+=t.sectionTopOffset,t}jQuery(window).on("load fusion-element-render-fusion_builder_container resize",function(e,t){var i=void 0!==t?jQuery('div[data-cid="'+t+'"]').find(".fullwidth-faded"):jQuery(".fullwidth-faded"),n=void 0!==t?jQuery('div[data-cid="'+t+'"]').find(".hundred-percent-height"):jQuery(".hundred-percent-height"),o=Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),s=fusion.getAdminbarHeight(),r=jQuery("body").hasClass("fusion-builder-live")&&!jQuery("body").hasClass("fusion-builder-preview-mode"),c=o+s;i.fusionScroller({type:"fading_blur"}),n.css("min-height","").css("height",""),n.find(".fusion-fullwidth-center-content").css("min-height",""),0==fusionContainerVars.container_hundred_percent_height_mobile&&Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(n.css("height","auto"),r&&(n.css("min-height","0"),n.find(".fusion-fullwidth-center-content").css("min-height","0"))):(n.css("height","calc(100vh - "+c+"px)"),r&&(n.css("min-height","calc(100vh - "+c+"px)"),n.find(".fusion-fullwidth-center-content").css("min-height","calc(100vh - "+c+"px)")))}),jQuery(document).ready(function(){var e;initScrollingSections(),fusionInitStickyContainers(),!jQuery("body").hasClass("fusion-builder-live")&&"object"==typeof cssua&&"string"==typeof cssua.ua.safari&&16>parseInt(cssua.ua.safari)&&(e=jQuery(".awb-sticky, .mobile-sticky-tabs, .sticky-tabs")).length&&(jQuery("#boxed-wrapper").addClass("safari-overflow"),e.each(function(){jQuery(this).parents(".fusion-fullwidth").addClass("has-sticky")})),Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")&&jQuery(".fullwidth-faded").each(function(){var e=jQuery(this).css("background-image"),t=jQuery(this).css("background-color");jQuery(this).parent().css("background-image",e),jQuery(this).parent().css("background-color",t),jQuery(this).remove()})}),jQuery(window).on("load",function(){jQuery("#content").find(".fusion-scroll-section").length&&"#"===jQuery(".fusion-page-load-link").attr("href")&&setTimeout(function(){jQuery("#content").find(".fusion-scroll-section").hasClass("awb-swiper-full-sections")||scrollToCurrentScrollSection()},400)}),jQuery(window).on("fusion-reinit-sticky",function(e,t){var i=void 0!==t&&jQuery('div[data-cid="'+t+'"] .fusion-fullwidth');i&&i.length&&(i.trigger("sticky_kit:detach"),fusionInitSticky(i))}),jQuery(window).on("fusion-sticky-header-reinit fusion-resize-horizontal",function(){fusionInitStickyContainers()}),jQuery("body").on("avada-studio-preview-done",function(){initScrollingSections(!0)}),function(e){"use strict";var t="down";function i(){var e=window.pageYOffset||document.documentElement.scrollTop,t=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(t,e)},window.scrollDisabled=!0}function n(){window.onscroll=function(){},window.scrollDisabled=!1}e.fn.fusionPositionScrollSectionElements=function(o,s,r){var c=e(this),l=c.find(".fusion-scroll-section-element").length,a=0,d=getScrollSectionPositionValues(c);(s=s||!1)||(d.sectionTop<=d.viewportTop&&d.sectionBottom>=d.viewportBottom?c.addClass("active"):c.removeClass("active")),r<o?(c.data("clicked")?(a=c.data("clicked"),c.removeData("clicked"),c.removeAttr("data-clicked")):a=(a=c.find(".fusion-scroll-section-element.active")).length?(a=a.data("element")+1)>l?l:a:1,d.sectionTop<=d.viewportTop&&d.sectionTop+d.viewportHeight>d.viewportTop?(c.find(".fusion-scroll-section-element").removeClass("active"),c.children(":nth-child(1)").addClass("active"),c.find(".fusion-scroll-section-nav a").removeClass("active"),c.find('.fusion-scroll-section-nav a[data-element="'+c.children(":nth-child(1)").data("element")+'"] ').addClass("active"),c.find(".fusion-scroll-section-element").css({position:"fixed",top:d.sectionTopOffset,left:d.sectionLeftOffset,padding:"0",width:d.sectionWidth}),c.children(":nth-child(1)").css("display","block"),window.scrollDisabled=!0,e(window).scrollTop(d.sectionTop+d.viewportHeight-1),i(),setTimeout(function(){n()},fusionContainerVars.hundred_percent_scroll_sensitivity)):d.sectionBottom<=d.viewportBottom&&"absolute"!==c.find(".fusion-scroll-section-element").last().css("position")?(c.find(".fusion-scroll-section-element").removeClass("active"),c.find(".fusion-scroll-section-element").last().addClass("active"),c.find(".fusion-scroll-section-element").css("position","absolute"),c.find(".fusion-scroll-section-element").last().css({top:"auto",left:"0",bottom:"0",padding:""}),c.find(".fusion-scroll-section-nav a").removeClass("active"),c.find(".fusion-scroll-section-nav a").last().addClass("active")):1<a&&"fixed"===c.find(".fusion-scroll-section-element").last().css("position")&&(!c.children(":nth-child("+a+")").hasClass("active")||"up"===t)&&(c.find(".fusion-scroll-section-element").removeClass("active"),c.children(":nth-child("+a+")").addClass("active"),c.find(".fusion-scroll-section-nav a").removeClass("active"),c.find('.fusion-scroll-section-nav a[data-element="'+c.children(":nth-child("+a+")").data("element")+'"] ').addClass("active"),window.scrollDisabled=!0,a<l?e(window).scrollTop(d.sectionTop+d.viewportHeight*a-1):e(window).scrollTop(d.sectionBottom-d.viewportHeight),i(),setTimeout(function(){n()},fusionContainerVars.hundred_percent_scroll_sensitivity)),t="down"):r>o&&(c.data("clicked")?(a=c.data("clicked"),c.removeData("clicked"),c.removeAttr("data-clicked")):a=(a=c.find(".fusion-scroll-section-element.active")).length?1>(a=a.data("element")-1)?1:a:0,d.sectionBottom>=d.viewportBottom&&"absolute"===c.find(".fusion-scroll-section-element").last().css("position")?(c.find(".fusion-scroll-section-element").removeClass("active"),c.find(".fusion-scroll-section-element").last().addClass("active"),c.find(".fusion-scroll-section-nav a").removeClass("active"),c.find('.fusion-scroll-section-nav a[data-element="'+c.find(".fusion-scroll-section-element").last().data("element")+'"] ').addClass("active"),c.find(".fusion-scroll-section-element").css({position:"fixed",top:d.sectionTopOffset,left:d.sectionLeftOffset,padding:"0",width:d.sectionWidth}),c.find(".fusion-scroll-section-element").last().css("display","block"),window.scrollDisabled=!0,e(window).scrollTop(d.sectionTop+d.viewportHeight*(l-1)),i(),setTimeout(function(){n()},fusionContainerVars.hundred_percent_scroll_sensitivity)):(d.sectionTop>=d.viewportTop||0===e(window).scrollTop()&&c.find(".fusion-scroll-section-element").first().hasClass("active"))&&""!==c.find(".fusion-scroll-section-element").first().css("position")?(c.find(".fusion-scroll-section-element").removeClass("active"),c.find(".fusion-scroll-section-element").first().addClass("active"),c.find(".fusion-scroll-section-element").css("position",""),c.find(".fusion-scroll-section-element").first().css("padding",""),c.find(".fusion-scroll-section-nav a").removeClass("active"),c.find(".fusion-scroll-section-nav a").first().addClass("active")):0<a&&"fixed"===c.find(".fusion-scroll-section-element").last().css("position")&&(!c.children(":nth-child("+a+")").hasClass("active")||"down"===t)&&(c.find(".fusion-scroll-section-element").removeClass("active"),c.children(":nth-child("+a+")").addClass("active"),c.find(".fusion-scroll-section-nav a").removeClass("active"),c.find('.fusion-scroll-section-nav a[data-element="'+c.children(":nth-child("+a+")").data("element")+'"] ').addClass("active"),window.scrollDisabled=!0,e(window).scrollTop(d.sectionTop+d.viewportHeight*(a-1)),i(),setTimeout(function(){n()},fusionContainerVars.hundred_percent_scroll_sensitivity)),t="up"),window.lastYPosition=e(window).scrollTop()}}(jQuery);