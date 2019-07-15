(function() {
  $.fn.handAnim = function() {
    var $controller, handTween, handTween2, handTweenScene, handTweenScene2;
    $controller = new ScrollMagic.Controller();
    handTween = new TimelineMax().fromTo(".full-animated-hand", 0.4, {
      display: 'block'
    }, {
      display: 'none',
      ease: Linear.easeNone
    }).fromTo(".small-animated-hand", 0.4, {
      display: 'none',
      transform: 'scale(1)'
    }, {
      display: 'block',
      transform: 'scale(1.1)',
      ease: Linear.easeNone
    }).to(".small-animated-hand", 0.4, {
      display: 'none',
      ease: Linear.easeNone
    }).to(".full-animated-hand", 0.4, {
      display: 'block',
      ease: Linear.easeNone
    }).fromTo(".clicking-hand-container .arrow.left", 0.2, {
      transform: 'scale(1)'
    }, {
      transform: 'scale(1.1)',
      ease: Linear.easeNone
    }).to(".clicking-hand-container .arrow.left", 0.2, {
      transform: 'scale(1)'
    }).fromTo(".clicking-hand-container .arrow.right", 0.2, {
      transform: 'scale(1)'
    }, {
      transform: 'scale(1.1)',
      ease: Linear.easeNone
    }).to(".clicking-hand-container .arrow.right", 0.2, {
      transform: 'scale(1)',
      ease: Linear.easeNone
    }).fromTo(".clicking-hand-container", 1, {
      opacity: 1
    }, {
      opacity: 0,
      display: 'none',
      ease: Linear.easeNone
    });
    handTweenScene = new ScrollMagic.Scene({
      triggerElement: '.tabletki-sliding-illustration',
      reverse: false
    }).setTween(handTween).addTo($controller);
    handTween2 = new TimelineMax().fromTo(".full-animated-hand2", 0.4, {
      display: 'block'
    }, {
      display: 'none',
      ease: Linear.easeNone
    }).fromTo(".small-animated-hand2", 0.4, {
      display: 'none',
      transform: 'scale(1)'
    }, {
      display: 'block',
      transform: 'scale(1.1)',
      ease: Linear.easeNone
    }).to(".small-animated-hand2", 0.4, {
      display: 'none',
      ease: Linear.easeNone
    }).to(".full-animated-hand2", 0.4, {
      display: 'block',
      ease: Linear.easeNone
    }).fromTo(".clicking-hand-container2 .arrow.left2", 0.2, {
      transform: 'scale(1)'
    }, {
      transform: 'scale(1.2)',
      ease: Linear.easeNone
    }).to(".clicking-hand-container2 .arrow.left2", 0.2, {
      transform: 'scale(1)',
      ease: Linear.easeNone
    }).fromTo(".clicking-hand-container2 .arrow.top2", 0.2, {
      transform: 'rotate(90deg) scale(1)'
    }, {
      transform: 'rotate(90deg) scale(1.2)',
      ease: Linear.easeNone
    }).to(".clicking-hand-container2 .arrow.top2", 0.2, {
      transform: 'translateX(-50%) rotate(90deg) scale(1)',
      ease: Linear.easeNone
    }).fromTo(".clicking-hand-container2 .arrow.right2", 0.2, {
      transform: 'scale(1)'
    }, {
      transform: 'scale(1.2)',
      ease: Linear.easeNone
    }).to(".clicking-hand-container2 .arrow.right2", 0.2, {
      transform: 'scale(1)',
      ease: Linear.easeNone
    }).fromTo(".clicking-hand-container2 .arrow.bottom2", 0.2, {
      transform: 'rotate(-90deg) scale(1)'
    }, {
      transform: 'rotate(-90deg) scale(1.2)',
      ease: Linear.easeNone
    }).to(".clicking-hand-container2 .arrow.bottom2", 0.2, {
      transform: 'rotate(-90deg) scale(1)',
      ease: Linear.easeNone
    }).fromTo(".clicking-hand-container2", 1, {
      opacity: 1
    }, {
      opacity: 0,
      display: 'none',
      ease: Linear.easeNone
    });
    return handTweenScene2 = new ScrollMagic.Scene({
      triggerElement: '.bastion-illustration-slide',
      reverse: false
    }).setTween(handTween2).addTo($controller);
  };

  $.fn.scrollMagicIlAnim = function() {
    var $controller, newYearScene, newYearTween, shirtElemScene, shirtElemTween, shirtIncreaseScene, shirtTween, tracksScene, tracksTween;
    $controller = new ScrollMagic.Controller();
    shirtTween = new TimelineMax().fromTo(".increased-elem-container .increase-circle", 0.5, {
      width: 0,
      height: 0,
      opacity: 0
    }, {
      width: '100%',
      height: '100%',
      opacity: 1,
      ease: Linear.easeNone
    }).fromTo(".increased-elem-container .draw-line-invert", 0.25, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    }).fromTo(".increased-elem-container .increased-elem", 0.5, {
      backgroundSize: '0 0',
      opacity: 0
    }, {
      backgroundSize: '90% 90%',
      opacity: 1,
      ease: Back.easeOut.config(1.7)
    });
    shirtIncreaseScene = new ScrollMagic.Scene({
      triggerElement: '.webmil-tshirts-text',
      triggerHook: 0,
      reverse: false
    }).setTween(shirtTween).addTo($controller);
    shirtElemTween = new TimelineMax().fromTo(".tshirts-big-elem", 1, {
      top: '57%'
    }, {
      top: '27%',
      ease: Linear.easeNone
    });
    shirtElemScene = new ScrollMagic.Scene({
      triggerElement: '.webmil-tshirts-slide',
      triggerHook: 0,
      duration: $('.tshirt-karpaty-conatiner').height()
    }).setTween(shirtElemTween).addTo($controller);
    newYearTween = new TimelineMax().fromTo(".new-year-slide", 1, {
      backgroundPosition: '0 0'
    }, {
      backgroundPosition: '0 -400px',
      ease: Linear.easeNone
    });
    newYearScene = new ScrollMagic.Scene({
      triggerElement: '.karpaty-stickers-slide',
      duration: $(window).height() * 3
    }).setTween(newYearTween).addTo($controller);
    tracksTween = new TimelineMax().fromTo(".final-illust-back .tracks-anim", 2, {
      width: 0
    }, {
      width: '100%',
      delay: 0.5,
      ease: Linear.easeNone
    });
    return tracksScene = new ScrollMagic.Scene({
      triggerElement: '.illust-final-slide',
      reverse: false
    }).setTween(tracksTween).addTo($controller);
  };

  $.fn.backgroundSliding = function($item, $container) {
    var $slidingContainer, $slidingItem, constrainArray;
    $slidingItem = $($item);
    $slidingContainer = $($container);
    constrainArray = function() {
      var hDiff, wDiff;
      wDiff = $slidingItem.width() - $slidingContainer.width();
      hDiff = $slidingItem.height() - $slidingContainer.height();
      return [-hDiff, 0, 0, -wDiff];
    };
    return $slidingItem.pep({
      constrainTo: constrainArray(),
      useCSSTranslation: false
    });
  };

  $(document).ready(function() {
    if (windowWidth > 960 && $('body').hasClass('illustrations')) {
      $.fn.scrollMagicIlAnim();
      $.fn.handAnim();
      $.fn.backgroundSliding('.sliding-illustration', '.tabletki-sliding-illustration');
      return $.fn.backgroundSliding('.bastion-illustration', '.bastion-illustration-inner');
    }
  });

}).call(this);
