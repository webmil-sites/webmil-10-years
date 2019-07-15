(function() {
  $.fn.scrollMagicOeAnim = function() {
    var $controller, anim_1, anim_2, anim_3, anim_4, tween_1, tween_2, tween_3, tween_4;
    $controller = new ScrollMagic.Controller();
    tween_1 = new TimelineMax().fromTo(".macbook-oe__screen", 0.5, {
      top: '0'
    }, {
      top: '-350px'
    });
    anim_1 = new ScrollMagic.Scene({
      triggerElement: '.macbook-oe__container',
      triggerHook: 0.5,
      duration: $(window).height()
    }).setTween(tween_1).addTo($controller);
    tween_2 = new TimelineMax().fromTo(".one", 1, {
      bottom: '-100%'
    }, {
      bottom: 0
    }).fromTo(".two", 1, {
      bottom: '-100%'
    }, {
      bottom: 0
    }).fromTo(".three", 1, {
      bottom: '-100%'
    }, {
      bottom: 0
    }).fromTo(".four", 1, {
      bottom: '-100%'
    }, {
      bottom: 0
    });
    anim_2 = new ScrollMagic.Scene({
      triggerElement: '.mobile',
      triggerHook: 0.5,
      reverse: false,
      duration: $(window).height() / 3
    }).setTween(tween_2).addTo($controller);
    tween_3 = new TimelineMax().fromTo(".oe-logo", 1, {
      'margin-top': "-32px",
      backgroundSize: '100% 100%'
    }, {
      'margin-top': "-64px",
      backgroundSize: '80% 80%',
      ease: Linear.easeNone
    });
    anim_3 = new ScrollMagic.Scene({
      triggerElement: 'body',
      triggerHook: 0,
      duration: $(window).height()
    }).setTween(tween_3).addTo($controller);
    tween_4 = new TimelineMax().fromTo(".top-bg", 1, {
      backgroundPosition: "center 0px"
    }, {
      backgroundPosition: "center -300px",
      ease: Linear.easeNone
    });
    anim_4 = new ScrollMagic.Scene({
      triggerElement: 'body',
      triggerHook: 0,
      duration: $(window).height() * 1.5
    }).setTween(tween_4).addTo($controller);
    $('.js-heading-type').each(function(index, el) {
      var animProcessTween, anim_process, className;
      className = '.js-heading-type-' + index;
      animProcessTween = new TimelineMax().fromTo(className, 0.5, {
        opacity: 0,
        transform: 'translate(-50px, 0)'
      }, {
        opacity: 1,
        transform: 'translate(0, 0)'
      });
      return anim_process = new ScrollMagic.Scene({
        triggerElement: '.js-heading-type-' + index,
        triggerHook: 0.70,
        reverse: false
      }).setTween(animProcessTween).addTo($controller);
    });
    return $('.js-animated-image').each(function(index, el) {
      var animProcessTween, anim_process, className;
      className = '.js-animated-image-' + index;
      animProcessTween = new TimelineMax().fromTo(className, 0.5, {
        opacity: 0
      }, {
        opacity: 1
      });
      return anim_process = new ScrollMagic.Scene({
        triggerElement: '.js-animated-image-' + index,
        triggerHook: 0.70,
        reverse: false
      }).setTween(animProcessTween).addTo($controller);
    });
  };

  $(function() {
    if (windowWidth > 960 && $('body').hasClass('oe')) {
      return $.fn.scrollMagicOeAnim();
    }
  });

}).call(this);
