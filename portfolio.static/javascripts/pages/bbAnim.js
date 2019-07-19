(function() {
  $.fn.scrollMagicBigboardAnim = function() {
    var $controller, anim_1, anim_2, anim_3, anim_4, anim_5, anim_6, tween_1, tween_2, tween_3, tween_4, tween_5, tween_6;
    $controller = new ScrollMagic.Controller();
    tween_1 = new TimelineMax().fromTo(".bb-statue", 0.5, {
      top: "100px",
      opacity: 0
    }, {
      top: "50px",
      opacity: 1,
      ease: Linear.easeNone
    });
    anim_1 = new ScrollMagic.Scene({
      triggerElement: '.main-content',
      triggerHook: 0.7
    }).setTween(tween_1).addTo($controller);
    tween_2 = new TimelineMax().fromTo(" .start-dot__container .dot", 0.5, {
      scale: 0,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1
    }).fromTo(" .start-dot__container .logo", 0.5, {
      opacity: 0
    }, {
      opacity: 1
    }).fromTo(".tl-line", 1, {
      height: 0
    }, {
      height: '100%'
    });
    anim_2 = new ScrollMagic.Scene({
      triggerElement: '.bb-header',
      triggerHook: 0.3,
      reverse: false
    }).setTween(tween_2).addTo($controller);
    tween_3 = new TimelineMax().fromTo(".bb-timeline__socials .text-container", 0.5, {
      top: '20%',
      opacity: 0
    }, {
      top: '15%',
      opacity: 1
    });
    anim_3 = new ScrollMagic.Scene({
      triggerElement: '.bb-timeline__socials',
      triggerHook: 0.5,
      reverse: false
    }).setTween(tween_3).addTo($controller);
    tween_4 = new TimelineMax().fromTo(".bb-timeline__desktop .screen", 1, {
      paddingTop: '0'
    }, {
      paddingTop: '51.65%'
    });
    anim_4 = new ScrollMagic.Scene({
      triggerElement: '.bb-timeline__desktop',
      triggerHook: 0.1,
      reverse: false
    }).setTween(tween_4).addTo($controller);
    tween_5 = new TimelineMax().fromTo(".bb-timeline__mobile .ipad-container .screen", 2, {
      left: '4.29%',
      top: '3.9%'
    }, {
      left: '-35.45%',
      top: '-34.7%'
    });
    anim_5 = new ScrollMagic.Scene({
      triggerElement: '.bb-timeline__mobile',
      triggerHook: 0.3,
      duration: $(window).height() * 3
    }).setTween(tween_5).addTo($controller);
    tween_6 = new TimelineMax().fromTo(".bb-timeline__mobile .iphone-container .screen", 2, {
      left: '9.2%',
      top: '5.9%'
    }, {
      left: '-220.2%',
      top: '-218.9%'
    });
    return anim_6 = new ScrollMagic.Scene({
      triggerElement: '.bb-timeline__mobile',
      triggerHook: 0.4,
      duration: $(window).height() * 5
    }).setTween(tween_6).addTo($controller);
  };

  $(document).ready(function() {
    var $scene;
    if (windowWidth > 960 && $('body').hasClass('bigboard')) {
      $.fn.scrollMagicBigboardAnim();
      $scene = $("#scene");
      return $scene.parallax({
        scalarY: 0,
        frictionY: 0,
        originY: 0
      });
    }
  });

}).call(this);
