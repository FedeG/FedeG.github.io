/*! FedeG.github.io v1.0.0 - 2015-10-03 */
function hideLanguages(){for(var a in languages)$("."+languages[a]).each(function(){$(this).hide()})}function showLanguage(a){hideLanguages(languages),$("."+a).each(function(){$(this).toggle()})}jQuery(document).ready(function(a){setTimeout(function(){a("h1.responsive-headline").fitText(1,{minFontSize:"40px",maxFontSize:"90px"})},100),a(".smoothscroll").on("click",function(b){b.preventDefault();var c=this.hash,d=a(c);a("html, body").stop().animate({scrollTop:d.offset().top},800,"swing",function(){window.location.hash=c})});var b=a("section"),c=a("#nav-wrap a");b.waypoint({handler:function(b,d){var e;e=a(this),"up"===d&&(e=e.prev());var f=a('#nav-wrap a[href="#'+e.attr("id")+'"]');c.parent().removeClass("current"),f.parent().addClass("current")},offset:"35%"}),a("header").css({height:a(window).height()}),a(window).on("resize",function(){a("header").css({height:a(window).height()}),a("body").css({width:a(window).width()})}),a(window).on("scroll",function(){var b=a("header").height(),c=a(window).scrollTop(),d=a("#nav-wrap");c>.2*b&&b>c&&a(window).outerWidth()>768?d.fadeOut("fast"):.2*b>c?d.removeClass("opaque").fadeIn("fast"):d.addClass("opaque").fadeIn("fast")}),a(".item-wrap a").magnificPopup({type:"inline",fixedContentPos:!1,removalDelay:200,showCloseBtn:!1,mainClass:"mfp-fade"}),a(document).on("click",".popup-modal-dismiss",function(b){b.preventDefault(),a.magnificPopup.close()}),a(".flexslider").flexslider({namespace:"flex-",controlsContainer:".flex-container",animation:"slide",controlNav:!0,directionNav:!1,smoothHeight:!0,slideshowSpeed:7e3,animationSpeed:600,randomize:!1}),a("form#contactForm button.submit").click(function(){a("#image-loader").fadeIn();var b=a("#contactForm #contactName").val(),c=a("#contactForm #contactEmail").val(),d=a("#contactForm #contactSubject").val(),e=a("#contactForm #contactMessage").val(),f="contactName="+b+"&contactEmail="+c+"&contactSubject="+d+"&contactMessage="+e;return a.ajax({type:"POST",url:"inc/sendEmail.php",data:f,success:function(b){"OK"==b?(a("#image-loader").fadeOut(),a("#message-warning").hide(),a("#contactForm").fadeOut(),a("#message-success").fadeIn()):(a("#image-loader").fadeOut(),a("#message-warning").html(b),a("#message-warning").fadeIn())}}),!1})}),function(a){a.fn.fitText=function(b,c){var d=b||1,e=a.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},c);return this.each(function(){var b=a(this),c=function(){b.css("font-size",Math.max(Math.min(b.width()/(10*d),parseFloat(e.maxFontSize)),parseFloat(e.minFontSize)))};c(),a(window).on("resize.fittext orientationchange.fittext",c)})}}(jQuery);var languages=["english","spanish"];