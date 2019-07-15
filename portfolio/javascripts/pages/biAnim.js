(function() {
  $.fn.scrollMagicBIAnim = function() {
    var $controller, giftsScene, giftsTween1, giftsTween2, rocketSceneCircle, rocketSceneSize, rocketTweenCircle, rocketTweenSize, screenshotGraph1, screenshotGraphScene1, screenshotScene1, screenshotScene2, screenshotTween1, screenshotTween2, textSlidesScene, textSlidesTween;
    $controller = new ScrollMagic.Controller();
    rocketTweenCircle = new TimelineMax().fromTo(".flying-rocket", 1, {
      transform: 'translate(95px, -100px) rotate(0deg)'
    }, {
      transform: 'translate(95px, -100px) rotate(149deg)'
    });
    rocketTweenSize = new TimelineMax().fromTo(".flying-rocket span", 1, {
      transform: 'scale(0.5) rotate(-115deg)'
    }, {
      transform: 'scale(1) rotate(-115deg)'
    });
    rocketSceneCircle = new ScrollMagic.Scene({
      triggerElement: '.bi-illustrated-macbook'
    }).setTween(rocketTweenCircle).addTo($controller);
    rocketSceneSize = new ScrollMagic.Scene({
      triggerElement: '.bi-illustrated-macbook'
    }).setTween(rocketTweenSize).addTo($controller);
    textSlidesTween = new TimelineMax().fromTo(".bi-text-profile", 0.5, {
      left: '-100px',
      top: '225px'
    }, {
      left: '355px',
      top: 0
    }).fromTo(".bi-text-project", 0.5, {
      left: '-103px',
      top: '706px'
    }, {
      left: '836px',
      top: '236px'
    }).fromTo(".bi-text-project-page", 0.5, {
      left: '-174px',
      top: '1188px'
    }, {
      left: '1241px',
      top: '481px'
    });
    textSlidesScene = new ScrollMagic.Scene({
      triggerElement: '.bi-home-page-slides'
    }).setTween(textSlidesTween).addTo($controller);
    giftsTween1 = new TimelineMax().fromTo(".illustrated-gift-bg1", 1, {
      backgroundPosition: "center 50%"
    }, {
      backgroundPosition: "center -20%",
      ease: Linear.easeNone
    });
    giftsScene = new ScrollMagic.Scene({
      triggerElement: '.bigidea-gifts-illustrations',
      duration: $(window).height()
    }).setTween(giftsTween1).addTo($controller);
    giftsTween2 = new TimelineMax().fromTo(".illustrated-gift-bg2", 1, {
      backgroundPosition: "center 50%"
    }, {
      backgroundPosition: "center -5%",
      ease: Linear.easeNone
    });
    giftsScene = new ScrollMagic.Scene({
      triggerElement: '.bigidea-gifts-illustrations',
      duration: $(window).height()
    }).setTween(giftsTween2).addTo($controller);
    screenshotTween1 = new TimelineMax().fromTo(".bi-screenshot-el", 1, {
      transform: 'scale(1)',
      left: '165px',
      top: '693px'
    }, {
      transform: 'scale(2.19)',
      left: '-6px',
      top: '448px'
    });
    screenshotScene1 = new ScrollMagic.Scene({
      triggerElement: '.bi-home-page-screenshot',
      tweenChanges: true,
      reverse: false
    }).setTween(screenshotTween1).addTo($controller);
    screenshotTween2 = new TimelineMax().fromTo(".bi-screenshot-el-shadow", 1, {
      width: '176px',
      height: '190px',
      top: '693px',
      left: '165px'
    }, {
      width: '453px',
      height: '549px',
      top: '335px',
      left: '-112px'
    });
    screenshotScene2 = new ScrollMagic.Scene({
      triggerElement: '.bi-home-page-screenshot',
      reverse: false
    }).setTween(screenshotTween2).addTo($controller);
    screenshotGraph1 = new TimelineMax().to(".circle-money .fill-path", 0.9, {
      strokeDashoffset: 20,
      easy: Linear.easeNone,
      delay: 1
    });
    screenshotGraphScene1 = new ScrollMagic.Scene({
      triggerElement: '.bi-home-page-screenshot'
    }).setTween(screenshotGraph1).addTo($controller);
    screenshotGraph1 = new TimelineMax().fromTo(".circle-time .fill-path", 0.9, {
      strokeDashoffset: 0
    }, {
      strokeDashoffset: 90,
      easy: Linear.easeNone,
      delay: 1
    });
    return screenshotGraphScene1 = new ScrollMagic.Scene({
      triggerElement: '.bi-home-page-screenshot'
    }).setTween(screenshotGraph1).addTo($controller);
  };

  $(function() {
    if (windowWidth > 960 && $('body').hasClass('big_idea')) {
      return $.fn.scrollMagicBIAnim();
    }
  });

}).call(this);
