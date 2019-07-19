(function() {

	'use strict';

	window.requestAnimFrame = function(){
		return (
			window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback){
				window.setTimeout(callback, 1000 / 60);
			}
		);
	}();

	window.cancelAnimFrame = function(){
		return (
			window.cancelAnimationFrame       ||
			window.webkitCancelAnimationFrame ||
			window.mozCancelAnimationFrame    ||
			window.oCancelAnimationFrame      ||
			window.msCancelAnimationFrame     ||
			function(id){
				window.clearTimeout(id);
			}
		);
	}();

	var svgs = Array.prototype.slice.call( document.querySelectorAll( '.js-mk-logo' ) ),
		current_frame = 0,
		total_frames = 80,
		path = new Array(),
		length = new Array(),
		handle = 0;

	function init() {
		[].slice.call( document.querySelectorAll( '.js-mk-logo path' ) ).forEach( function( el, i ) {
			path[i] = el;
			var l = path[i].getTotalLength();
			length[i] = l;
			path[i].style.strokeDasharray = l + ' ' + l;
			path[i].style.strokeDashoffset = l;
		} );

	}

	function draw() {
		var progress = current_frame/total_frames;
		if (progress > 1) {
			window.cancelAnimFrame(handle);
			fill();
		} else {
			current_frame++;
			for(var j=0; j<path.length;j++){
				path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
			}
			handle = window.requestAnimFrame(draw);
		}
	}

	function fill() {
		[].slice.call( document.querySelectorAll( '.js-mk-logo path' ) ).forEach( function( el, i ) {
			path[i] = el;
			path[i].style.fill = '#ffffff';
			path[i].style.fillOpacity = 1;
			path[i].style.strokeWidth = 0;
		} );
	}

	if ($('body').hasClass('kreslyariv')) {
		init();
		setTimeout(draw, 1500);
	}

})();
(function() {
  $.fn.scrollMagicMkAnim = function() {
    var $controller, animDuration, anim_1, anim_2, iphoneBgHeight, triggerEl, tween_2;
    iphoneBgHeight = "-" + ($('.mk-iphone__bg').height() - $('.mk-iphone').height() * 0.9);
    $controller = new ScrollMagic.Controller();
    animDuration = $('.mk-web__browser').height() - $('.mk-iphone').height();
    triggerEl = '.mk-web__container';
    anim_1 = new ScrollMagic.Scene({
      triggerElement: triggerEl,
      triggerHook: 0,
      duration: animDuration
    }).setPin('.mk-iphone__container').addTo($controller);
    tween_2 = new TimelineMax().fromTo(".mk-iphone__bg", 0.5, {
      top: '15%'
    }, {
      top: iphoneBgHeight
    });
    return anim_2 = new ScrollMagic.Scene({
      triggerElement: triggerEl,
      triggerHook: 0,
      duration: animDuration
    }).setTween(tween_2).addTo($controller);
  };

  $(window).on('load', function() {
    if (windowWidth > 960 && $('body').hasClass('kreslyariv')) {
      return $.fn.scrollMagicMkAnim();
    }
  });

}).call(this);
