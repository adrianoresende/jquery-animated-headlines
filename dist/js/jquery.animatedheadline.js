!function(a){a.fn.animatedHeadline=function(e){var n=a.extend({animationType:"rotate-1",animationDelay:2500,barAnimationDelay:3800,barWaiting:800,lettersDelay:50,typeLettersDelay:150,selectionDuration:500,typeAnimationDelay:1300,revealDuration:600,revealAnimationDelay:1500},e),s=n.animationDelay;function t(a){var i=d(a);if(a.parents(".ah-headline").hasClass("type")){var e=a.parent(".ah-words-wrapper");e.addClass("selected").removeClass("waiting"),setTimeout((function(){e.removeClass("selected"),a.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")}),n.selectionDuration),setTimeout((function(){l(i,n.typeLettersDelay)}),n.typeAnimationDelay)}else if(a.parents(".ah-headline").hasClass("letters")){var s=a.children("i").length>=i.children("i").length;o(a.find("i").eq(0),a,s,n.lettersDelay),r(i.find("i").eq(0),i,s,n.lettersDelay)}else a.parents(".ah-headline").hasClass("clip")?a.parents(".ah-words-wrapper").animate({width:"2px"},n.revealDuration,(function(){h(a,i),l(i)})):a.parents(".ah-headline").hasClass("loading-bar")?(a.parents(".ah-words-wrapper").removeClass("is-loading"),h(a,i),setTimeout((function(){t(i)}),n.barAnimationDelay),setTimeout((function(){a.parents(".ah-words-wrapper").addClass("is-loading")}),n.barWaiting)):(h(a,i),setTimeout((function(){t(i)}),n.animationDelay))}function l(a,i){a.parents(".ah-headline").hasClass("type")?(r(a.find("i").eq(0),a,!1,i),a.addClass("is-visible").removeClass("is-hidden")):a.parents(".ah-headline").hasClass("clip")&&a.parents(".ah-words-wrapper").animate({width:a.width()+10},n.revealDuration,(function(){setTimeout((function(){t(a)}),n.revealAnimationDelay)}))}function o(i,e,s,l){if(i.removeClass("in").addClass("out"),i.is(":last-child")?s&&setTimeout((function(){t(d(e))}),n.animationDelay):setTimeout((function(){o(i.next(),e,s,l)}),l),i.is(":last-child")&&a("html").hasClass("no-csstransitions")){var r=d(e);h(e,r)}}function r(a,i,e,s){a.addClass("in").removeClass("out"),a.is(":last-child")?(i.parents(".ah-headline").hasClass("type")&&setTimeout((function(){i.parents(".ah-words-wrapper").addClass("waiting")}),200),e||setTimeout((function(){t(i)}),n.animationDelay)):setTimeout((function(){r(a.next(),i,e,s)}),s)}function d(a){return a.is(":last-child")?a.parent().children().eq(0):a.next()}function h(a,i){a.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}this.each((function(){var e=a(this);if(n.animationType&&("type"==n.animationType||"rotate-2"==n.animationType||"rotate-3"==n.animationType||"scale"==n.animationType?e.find(".ah-headline").addClass("letters "+n.animationType):"clip"==n.animationType?e.find(".ah-headline").addClass(n.animationType+" is-full-width"):e.find(".ah-headline").addClass(n.animationType)),function(e){e.each((function(){var e=a(this),n=e.text().split(""),s=e.hasClass("is-visible");for(i in n)e.parents(".rotate-2").length>0&&(n[i]="<em>"+n[i]+"</em>"),n[i]=s?'<i class="in">'+n[i]+"</i>":"<i>"+n[i]+"</i>";var t=n.join("");e.html(t).css("opacity",1)}))}(a(".ah-headline.letters").find("strong")),e.hasClass("loading-bar"))s=n.barAnimationDelay,setTimeout((function(){e.find(".ah-words-wrapper").addClass("is-loading")}),n.barWaiting);else if(e.hasClass("clip")){var l=e.find(".ah-words-wrapper"),o=l.width()+10;l.css("width",o)}else if(!e.find(".ah-headline").hasClass("type")){var r=e.find(".ah-words-wrapper strong"),d=0;r.each((function(){var i=a(this).width();i>d&&(d=i)})),e.find(".ah-words-wrapper").css("width",d)}setTimeout((function(){t(e.find(".is-visible").eq(0))}),s)}))}}(jQuery);
