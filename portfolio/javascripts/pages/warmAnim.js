(function() {
  $.fn.scrollMagicWarmAnim = function() {
    var $controller, corporateIdSceneAnim, corporateIdTween, landingPagesSceneAnim1, landingPagesSceneAnim2, landingPagesTween1, landingPagesTween2, screenFirstSceneAnim, screenFirstTween;
    $controller = new ScrollMagic.Controller();
    screenFirstTween = new TimelineMax().fromTo(".warm-el-first .line-anim", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    }).fromTo(".warm-el-first .element-image", 0.5, {
      width: 0,
      height: 0,
      opacity: 0
    }, {
      width: '100%',
      height: '100%',
      opacity: 1,
      ease: Back.easeOut.config(1.7)
    }).fromTo(".warm-el-second .line-anim", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    }).fromTo(".warm-el-second .element-image", 0.5, {
      width: 0,
      height: 0,
      opacity: 0
    }, {
      width: '100%',
      height: '100%',
      opacity: 1,
      ease: Back.easeOut.config(1.7)
    }).fromTo(".warm-el-third .line-anim", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    }).fromTo(".warm-el-third .element-image", 0.5, {
      width: 0,
      height: 0,
      opacity: 0
    }, {
      width: '100%',
      height: '100%',
      opacity: 1,
      ease: Back.easeOut.config(1.7)
    }).fromTo(".warm-el-fourth .line-anim", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone,
      delay: 0.2
    }).fromTo(".warm-el-fourth .element-image", 0.5, {
      width: 0,
      height: 0,
      opacity: 0
    }, {
      width: '100%',
      height: '100%',
      opacity: 1,
      ease: Back.easeOut.config(1.7)
    }).fromTo(".warm-el-fifth .line-anim", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    }).fromTo(".warm-el-fifth .element-image", 0.5, {
      width: 0,
      height: 0,
      opacity: 0
    }, {
      width: '100%',
      height: '100%',
      opacity: 1,
      ease: Back.easeOut.config(1.7)
    }).fromTo(".warm-el-sixth .line-anim", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    }).fromTo(".warm-el-sixth .element-image", 0.5, {
      width: 0,
      height: 0,
      opacity: 0
    }, {
      width: '100%',
      height: '100%',
      opacity: 1,
      ease: Back.easeOut.config(1.7)
    }).fromTo(".warm-el-seventh .line-anim", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    }).fromTo(".warm-el-seventh .element-image", 0.5, {
      width: 0,
      height: 0,
      opacity: 0
    }, {
      width: '100%',
      height: '100%',
      opacity: 1,
      ease: Back.easeOut.config(1.7)
    });
    screenFirstSceneAnim = new ScrollMagic.Scene({
      triggerElement: '.warm-home-page-container'
    }).setTween(screenFirstTween).addTo($controller);
    corporateIdTween = new TimelineMax().fromTo(".corporate-id-anim-container .ring-1", 0.3, {
      transform: 'scale(0)',
      opacity: 0
    }, {
      transform: 'scale(1)',
      opacity: 1,
      ease: Linear.easeNone
    }).fromTo(".corporate-id-anim-container .ring-1 .line-inverted", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    }).fromTo(".corporate-id-anim-container .ring-2", 0.3, {
      transform: 'scale(0)',
      opacity: 0
    }, {
      transform: 'scale(1)',
      opacity: 1,
      ease: Linear.easeNone
    }).fromTo(".corporate-id-anim-container .ring-2 .line-inverted", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    }).fromTo(".corporate-id-anim-container .ring-3", 0.3, {
      transform: 'scale(0)',
      opacity: 0
    }, {
      transform: 'scale(1)',
      opacity: 1,
      ease: Linear.easeNone
    }).fromTo(".corporate-id-anim-container .ring-3 .line-inverted", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    }).fromTo(".corporate-id-anim-container .ring-4", 0.3, {
      transform: 'scale(0)',
      opacity: 0
    }, {
      transform: 'scale(1)',
      opacity: 1,
      ease: Linear.easeNone
    }).fromTo(".corporate-id-anim-container .ring-4 .line-inverted", 0.3, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    });
    corporateIdSceneAnim = new ScrollMagic.Scene({
      triggerElement: '.warm-corporate-id-container'
    }).setTween(corporateIdTween).addTo($controller);
    landingPagesTween1 = new TimelineMax().fromTo(".landing.screenshot1", 0.5, {
      left: '-46%',
      opacity: 0
    }, {
      left: '7.4%',
      opacity: 1,
      ease: Linear.easeNone
    }).fromTo(".landing.screenshot3", 0.5, {
      left: '-46%',
      opacity: 0
    }, {
      left: '17.76%',
      opacity: 1,
      ease: Linear.easeNone
    });
    landingPagesSceneAnim1 = new ScrollMagic.Scene({
      triggerElement: '.warm-landing-page-container'
    }).setTween(landingPagesTween1).addTo($controller);
    landingPagesTween2 = new TimelineMax().fromTo(".landing.screenshot2", 0.5, {
      right: '-46%',
      opacity: 0
    }, {
      right: '10.7%',
      opacity: 1,
      ease: Linear.easeNone
    }).fromTo(".landing.screenshot4", 0.5, {
      right: '-46%',
      opacity: 0
    }, {
      right: '22.66%',
      opacity: 1,
      ease: Linear.easeNone
    });
    return landingPagesSceneAnim2 = new ScrollMagic.Scene({
      triggerElement: '.warm-landing-page-container'
    }).setTween(landingPagesTween2).addTo($controller);
  };

  $(function() {
    if (windowWidth > 960 && $('body').hasClass('warm_city')) {
      return $.fn.scrollMagicWarmAnim();
    }
  });

}).call(this);
