(function() {
  $.fn.scrollMagicUisAnim = function() {
    var $controller, anim_1, anim_2, colorsBgScrollSceneAnim, colorsBgScrollTween, iPhoneHeight, iPhoneScreenHeight, iPhoneScroll, iPhoneScrollSceneAnim, mobileBgScrollSceneAnim, mobileBgScrollTween, respContHeight, screenBgScrollSceneAnim, screenBgScrollTween, t1, t2, topBgScrollSceneAnim, topBgScrollTween, websiteScrollTween, windowHeight;
    $controller = new ScrollMagic.Controller();
    windowHeight = $(window).height();
    respContHeight = $('.responsiveness-container').outerHeight();
    iPhoneHeight = $('.js-iphone').height();
    iPhoneScreenHeight = parseInt($('.js-iphone-screen').css('padding-top'));
    iPhoneScroll = '-' + ($('.website-desktop').height() - iPhoneScreenHeight);
    $('.js-animated-text').each(function(index, el) {
      var animProcessTween, anim_process, className;
      className = '.js-animated-text-' + index;
      animProcessTween = new TimelineMax().fromTo(className, 0.5, {
        opacity: 0,
        transform: 'translate(-50px, 0)'
      }, {
        opacity: 1,
        transform: 'translate(0, 0)'
      });
      return anim_process = new ScrollMagic.Scene({
        triggerElement: className,
        triggerHook: 0.70,
        reverse: false
      }).setTween(animProcessTween).addTo($controller);
    });
    $('.js-animated-block').each(function(index, el) {
      var animProcessTween, anim_process, className;
      className = '.js-animated-block-' + index;
      animProcessTween = new TimelineMax().fromTo(className, 0.5, {
        opacity: 0
      }, {
        opacity: 1
      });
      return anim_process = new ScrollMagic.Scene({
        triggerElement: className,
        triggerHook: 0.70,
        reverse: false
      }).setTween(animProcessTween).addTo($controller);
    });
    t1 = new TimelineMax().fromTo(".js-top-bg", 0.5, {
      opacity: '0'
    }, {
      opacity: '1',
      delay: 0.5
    }).fromTo(".js-animated-heading", 0.5, {
      opacity: '0',
      transform: 'translate(0, 50px)'
    }, {
      opacity: '1',
      transform: 'translate(0, 0)'
    });
    anim_1 = new ScrollMagic.Scene({
      triggerElement: '.trigger-top-bg',
      reverse: false
    }).setTween(t1).addTo($controller);
    topBgScrollTween = new TimelineMax().add(TweenMax.to('.uis .wrap', 0.3, {
      backgroundPositionY: 0,
      ease: Linear.easeNone
    }));
    topBgScrollSceneAnim = new ScrollMagic.Scene({
      triggerElement: '.uis .wrap',
      triggerHook: 0,
      duration: windowHeight * 2,
      tweenChanges: true
    }).setTween(topBgScrollTween).addTo($controller);
    t2 = new TimelineMax().fromTo(".js-animated-width", 0.5, {
      width: '100%'
    }, {
      width: '0'
    });
    anim_2 = new ScrollMagic.Scene({
      triggerElement: '.typography',
      triggerHook: 0.25,
      duration: 500
    }).setTween(t2).addTo($controller);
    colorsBgScrollTween = new TimelineMax().add(TweenMax.to('.colors-bg', 0.3, {
      top: '-200px',
      ease: Linear.easeNone
    }));
    colorsBgScrollSceneAnim = new ScrollMagic.Scene({
      triggerElement: '.colors',
      triggerHook: 1,
      duration: windowHeight * 1.5,
      tweenChanges: true
    }).setTween(colorsBgScrollTween).addTo($controller);
    screenBgScrollTween = new TimelineMax().add(TweenMax.to('.responsiveness-bg', 0.3, {
      top: -respContHeight / 3,
      ease: Linear.easeNone
    }));
    screenBgScrollSceneAnim = new ScrollMagic.Scene({
      triggerElement: '.responsiveness-container',
      duration: respContHeight + $(window).height(),
      triggerHook: 1,
      tweenChanges: true
    }).setTween(screenBgScrollTween).addTo($controller);
    websiteScrollTween = new TimelineMax().add(TweenMax.to('.js-iphone-bg', 0.3, {
      top: iPhoneScroll,
      ease: Linear.easeNone
    }));
    iPhoneScrollSceneAnim = new ScrollMagic.Scene({
      triggerElement: '.table .desktop',
      duration: $('.table .desktop').height() - iPhoneHeight,
      triggerHook: 0.05
    }).setPin('.js-iphone-container').setTween(websiteScrollTween).addTo($controller);
    mobileBgScrollTween = new TimelineMax().add(TweenMax.to('.js-mobile-bg', 0.3, {
      top: -$('.mobile-views').height() / 3,
      ease: Linear.easeNone
    }));
    return mobileBgScrollSceneAnim = new ScrollMagic.Scene({
      triggerElement: '.mobile-views',
      triggerHook: 1,
      duration: $('.mobile-views').height()
    }).setTween(mobileBgScrollTween).addTo($controller);
  };

  $(window).on('load', function() {
    if (windowWidth > 960 && $('body').hasClass('uis')) {
      return $.fn.scrollMagicUisAnim();
    }
  });

}).call(this);
