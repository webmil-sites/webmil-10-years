(function() {
  $.fn.scrollMagicKarpatyAnim = function() {
    var $controller, app_tween, desctop_tween, first_tween, scene_1, scene_2, scene_3, scene_4, scene_5, stickers_tween;
    $controller = new ScrollMagic.Controller();
    (new ScrollMagic.Scene({
      triggerElement: '.karpaty_ua .top-backgroud-container',
      triggerHook: 0,
      duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.fromTo(".karpaty_ua .top-backgroud-container", 1, {
      backgroundPosition: "center 0px"
    }, {
      backgroundPosition: "center -100px",
      ease: Linear.easeNone
    }));
    (new ScrollMagic.Scene({
      triggerElement: '.fadeMainPicture',
      triggerHook: 0,
      duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.fromTo(".fadeMainPicture", 1, {
      opacity: 0.1
    }, {
      opacity: 0.4
    }));
    (new ScrollMagic.Scene({
      triggerElement: '.karpaty_ua .wrap',
      triggerHook: 0,
      duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.fromTo(".karpaty_ua .karpaty-main__back", 4, {
      backgroundPosition: "center 0px"
    }, {
      backgroundPosition: "center -50px",
      ease: Linear.easeNone
    }));
    first_tween = new TimelineMax().fromTo(".karpaty-main h2", 0.1, {
      opacity: 0
    }, {
      opacity: 1,
      delay: 0.2
    }).fromTo(".karpaty-main .text1", 0.2, {
      width: 0
    }, {
      width: '100%'
    }).fromTo(".karpaty-main .text2", 0.2, {
      width: 0
    }, {
      width: '100%'
    }).fromTo(".karpaty-main .text3", 0.2, {
      width: 0
    }, {
      width: '100%'
    }).fromTo(".karpaty-imac-img", 1, {
      height: 0
    }, {
      height: '63%',
      delay: 0.5
    });
    scene_1 = new ScrollMagic.Scene({
      triggerElement: '#trigger1',
      reverse: false
    }).setTween(first_tween).addTo($controller);
    (new ScrollMagic.Scene({
      triggerElement: '#trigger2',
      reverse: false
    })).addTo($controller).setTween(TweenMax.fromTo(".karpaty-logos__first", 0.5, {
      left: '-50%'
    }, {
      left: 0
    }));
    (new ScrollMagic.Scene({
      triggerElement: '#trigger2',
      reverse: false
    })).addTo($controller).setTween(TweenMax.fromTo(".karpaty-logos__first span", 1, {
      left: -183
    }, {
      left: '41%'
    }));
    stickers_tween = new TimelineMax().fromTo(".karpaty-sticker__big", 0.5, {
      right: '-100%'
    }, {
      right: 0
    }).fromTo(".karpaty-sticker__big", 0.5, {
      top: "50%"
    }, {
      top: "35%"
    });
    scene_2 = new ScrollMagic.Scene({
      triggerElement: '#trigger3',
      triggerHook: 1,
      duration: $('.karpaty-stickers').height()
    }).addTo($controller).setTween(stickers_tween);
    desctop_tween = new TimelineMax().add(TweenMax.fromTo(".lg span", 0.1, {
      scale: 0
    }, {
      scale: 1
    })).add(TweenMax.fromTo(".lg", 0.2, {
      height: 0
    }, {
      height: 300
    })).add(TweenMax.fromTo(".ls span", 0.1, {
      scale: 0
    }, {
      scale: 1
    })).add(TweenMax.fromTo(".ls", 0.2, {
      height: 0
    }, {
      height: 394
    })).add(TweenMax.fromTo(".lg p", 0.2, {
      width: 0
    }, {
      width: 410
    })).add(TweenMax.fromTo(".ls p", 0.2, {
      width: 0
    }, {
      width: 250
    })).add(TweenMax.fromTo(".la span", 0.1, {
      scale: 0
    }, {
      scale: 1
    })).add(TweenMax.fromTo(".la", 0.2, {
      height: 0
    }, {
      height: 230
    })).add(TweenMax.fromTo(".lf span", 0.1, {
      scale: 0
    }, {
      scale: 1
    })).add(TweenMax.fromTo(".lf", 0.2, {
      height: 0
    }, {
      height: 275
    })).add(TweenMax.fromTo(".le span", 0.1, {
      scale: 0
    }, {
      scale: 1
    })).add(TweenMax.fromTo(".le", 0.2, {
      height: 0
    }, {
      height: 370
    })).add(TweenMax.fromTo(".la p", 0.2, {
      width: 0
    }, {
      width: 260
    })).add(TweenMax.fromTo(".lf p", 0.2, {
      width: 0
    }, {
      width: 400
    })).add(TweenMax.fromTo(".le p", 0.2, {
      width: 0
    }, {
      width: 220
    }));
    scene_3 = new ScrollMagic.Scene({
      triggerElement: '#trigger4',
      reverse: false
    }).addTo($controller).setTween(desctop_tween);
    scene_4 = new ScrollMagic.Scene({
      triggerElement: '#trigger5',
      duration: $(window).height() * 3
    }).addTo($controller).setTween(TweenMax.to(".karpaty-screenshots__container .big", 0.5, {
      'margin-top': "-150px"
    }));
    app_tween = new TimelineMax().fromTo(".karpaty-app__container .first", 1, {
      top: '100%'
    }, {
      top: 0
    }).fromTo(".karpaty-app__container .second", 1, {
      top: '100%'
    }, {
      top: 0
    }).fromTo(".karpaty-app__container .third", 1, {
      top: '100%'
    }, {
      top: 0
    }).fromTo(".karpaty-app__container .fourth", 1, {
      top: '100%'
    }, {
      top: 0
    });
    return scene_5 = new ScrollMagic.Scene({
      triggerElement: '#trigger6',
      reverse: false,
      duration: $(window).height() / 3
    }).addTo($controller).setTween(app_tween);
  };

  $(function() {
    if (windowWidth > 960 && $('body').hasClass('karpaty_ua')) {
      return $.fn.scrollMagicKarpatyAnim();
    }
  });

}).call(this);
