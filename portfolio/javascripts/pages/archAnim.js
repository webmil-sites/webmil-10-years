(function() {
  $.fn.scrollMagicArchAnim = function() {
    var $controller, iphoneLineTween, iphoneTween, topLineTween, topLogoTween, topSceneAnim, topSceneLineAnim, topSceneLogoAnim, topTween;
    $controller = new ScrollMagic.Controller();
    topTween = new TimelineMax().fromTo(".top-backgroud-container", 1, {
      backgroundPosition: "center 0px"
    }, {
      backgroundPosition: "center -300px",
      ease: Linear.easeNone
    });
    topSceneAnim = new ScrollMagic.Scene({
      triggerElement: '.top-backgroud-container',
      triggerHook: 0,
      duration: $(window).height()
    }).setTween(topTween).addTo($controller);
    topLogoTween = new TimelineMax().fromTo(".arch-main-logo", 1, {
      'margin-top': "-32px",
      backgroundSize: '100% 100%'
    }, {
      'margin-top': "-64px",
      backgroundSize: '80% 80%',
      ease: Linear.easeNone
    });
    topSceneLogoAnim = new ScrollMagic.Scene({
      triggerElement: 'body',
      triggerHook: 0,
      duration: $(window).height()
    }).setTween(topLogoTween).addTo($controller);
    topLineTween = new TimelineMax().fromTo(".a-line span", 1, {
      height: 0
    }, {
      height: '100%',
      ease: Linear.easeNone
    });
    topSceneLineAnim = new ScrollMagic.Scene({
      triggerElement: '.arch-macbook',
      reverse: false
    }).setTween(topLineTween).addTo($controller);
    iphoneTween = new TimelineMax().fromTo(".arch-iphone-screen-1", 0.15, {
      top: '41px'
    }, {
      top: '-46px',
      ease: Linear.easeNone
    }).fromTo(".arch-iphone-screen-2", 0.15, {
      top: 0
    }, {
      top: '-88px',
      ease: Linear.easeNone
    });
    topSceneLineAnim = new ScrollMagic.Scene({
      triggerElement: '.arch-mobile-back'
    }).setTween(iphoneTween).addTo($controller);
    iphoneLineTween = new TimelineMax().fromTo(".arch-iphone-base span", 0.3, {
      height: 0
    }, {
      height: '175px',
      ease: Linear.easeNone
    });
    return topSceneLineAnim = new ScrollMagic.Scene({
      triggerElement: '.arch-mobile-back'
    }).setTween(iphoneLineTween).addTo($controller);
  };

  $(function() {
    if (windowWidth > 960 && $('body').hasClass('archimatika')) {
      return $.fn.scrollMagicArchAnim();
    }
  });

}).call(this);
