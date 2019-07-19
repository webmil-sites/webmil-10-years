(function() {
  $.fn.scrollMagicManhAnim = function() {
    var $controller, aboutTextSceneAnim, aboutTextTween, aboutTitleSceneAnim, aboutTitleTween, bottomLineLength, bottomLineSceneAnim, bottomLineTween, logoSceneAnim, logoTween, macPreloaderSceneAnim, macPreloaderTween, planIconsSceneAnim, planIconsTween, planLine1Length, planLine1SceneAnim, planLine1Tween, planLine2Length, planLine2SceneAnim, planLine2Tween, planLine3Length, planLine3SceneAnim, planLine3Tween, planLine4Length, planLine4SceneAnim, planLine4Tween, planLine5Length, planLine5SceneAnim, planLine5Tween, planLine6Length, planLine6SceneAnim, planLine6Tween, planLine7Length, planLine7SceneAnim, planLine7Tween, play, topLineLength, topLineSceneAnim, topLineTween, video;
    $controller = new ScrollMagic.Controller();
    if ($(".manhattan").width() >= 1350) {
      topLineLength = $(".top-line path")[0].getTotalLength();
      $(".top-line path").css("stroke-dasharray", topLineLength);
      $(".top-line path").css("stroke-dashoffset", topLineLength);
      topLineTween = new TimelineMax().add(TweenMax.to(".top-line path", 0.3, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }));
      topLineSceneAnim = new ScrollMagic.Scene({
        triggerElement: '#studio',
        duration: 500,
        tweenChanges: true
      }).setTween(topLineTween).addTo($controller).triggerHook(0);
      logoTween = new TimelineMax().add(TweenMax.to(".logo img", 0.5, {
        opacity: 1,
        ease: Linear.easeNone
      }));
      logoSceneAnim = new ScrollMagic.Scene({
        triggerElement: '#studio',
        offset: 500,
        tweenChanges: true
      }).setTween(logoTween).addTo($controller).triggerHook(0);
      bottomLineLength = $(".bottom-line path")[0].getTotalLength();
      $(".bottom-line path").css("stroke-dasharray", bottomLineLength);
      $(".bottom-line path").css("stroke-dashoffset", bottomLineLength);
      bottomLineTween = new TimelineMax().add(TweenMax.to(".bottom-line path", 0.3, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }));
      bottomLineSceneAnim = new ScrollMagic.Scene({
        triggerElement: '#studio',
        duration: 400,
        offset: 650,
        tweenChanges: true
      }).setTween(bottomLineTween).addTo($controller).triggerHook(0);
      aboutTitleTween = new TimelineMax().add(TweenMax.to(".about span", 0.3, {
        right: 90,
        ease: Linear.easeNone
      }));
      aboutTitleSceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-about',
        tweenChanges: true
      }).setTween(aboutTitleTween).addTo($controller).triggerHook(0);
      aboutTextTween = new TimelineMax().add(TweenMax.to(".about p", 0.3, {
        left: 90,
        ease: Linear.easeNone
      }));
      aboutTextSceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-about',
        tweenChanges: true
      }).setTween(aboutTextTween).addTo($controller).triggerHook(0);
      video = document.getElementById('preloader-video');
      play = function() {
        video.play();
      };
      macPreloaderTween = new TimelineMax().addCallback(play, 0).add(TweenMax.to(".mac .video", 2.5, {
        opacity: 1
      })).add(TweenMax.to(".mac .mac-screen", 0.1, {
        opacity: 1
      })).add(TweenMax.to(".mac .preloader", 0.3, {
        opacity: 0,
        ease: Linear.easeNone
      }));
      macPreloaderSceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-about',
        offset: 200,
        tweenChanges: true
      }).setTween(macPreloaderTween).addTo($controller).triggerHook(0);
      planLine1Length = $(".plan .brown-lines .cls-1")[0].getTotalLength();
      $(".plan .brown-lines .cls-1").css("stroke-dasharray", planLine1Length);
      $(".plan .brown-lines .cls-1").css("stroke-dashoffset", planLine1Length);
      planLine1Tween = new TimelineMax().add(TweenMax.to(".plan .brown-lines .cls-1", 0.1, {
        display: "inline-block",
        ease: Linear.easeNone
      })).add(TweenMax.to(".plan .brown-lines .cls-1", 0.8, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }));
      planLine1SceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-plan',
        tweenChanges: true
      }).setTween(planLine1Tween).addTo($controller).triggerHook(0);
      planLine2Length = $(".plan .brown-lines .cls-2")[0].getTotalLength();
      $(".plan .brown-lines .cls-2").css("stroke-dasharray", planLine2Length);
      $(".plan .brown-lines .cls-2").css("stroke-dashoffset", planLine2Length);
      planLine2Tween = new TimelineMax().add(TweenMax.to(".plan .brown-lines .cls-2", 0.1, {
        display: "inline-block",
        ease: Linear.easeNone
      })).add(TweenMax.to(".plan .brown-lines .cls-2", 0.8, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }));
      planLine2SceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-plan',
        tweenChanges: true
      }).setTween(planLine2Tween).addTo($controller).triggerHook(0);
      planLine3Length = $(".plan .brown-lines .cls-3")[0].getTotalLength();
      $(".plan .brown-lines .cls-3").css("stroke-dasharray", planLine3Length);
      $(".plan .brown-lines .cls-3").css("stroke-dashoffset", planLine3Length);
      planLine3Tween = new TimelineMax().add(TweenMax.to(".plan .brown-lines .cls-3", 0.1, {
        display: "inline-block",
        ease: Linear.easeNone
      })).add(TweenMax.to(".plan .brown-lines .cls-3", 0.8, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }));
      planLine3SceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-plan',
        tweenChanges: true
      }).setTween(planLine3Tween).addTo($controller).triggerHook(0);
      planLine4Length = $(".plan .grey-lines .cls-1")[0].getTotalLength();
      $(".plan .grey-lines .cls-1").css("stroke-dasharray", planLine4Length);
      $(".plan .grey-lines .cls-1").css("stroke-dashoffset", planLine4Length);
      planLine4Tween = new TimelineMax().add(TweenMax.to(".plan .grey-lines .cls-1", 0.8, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }));
      planLine4SceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-plan',
        tweenChanges: true
      }).setTween(planLine4Tween).addTo($controller).triggerHook(0);
      planLine5Length = $(".plan .grey-lines .cls-2")[0].getTotalLength();
      $(".plan .grey-lines .cls-2").css("stroke-dasharray", planLine5Length);
      $(".plan .grey-lines .cls-2").css("stroke-dashoffset", planLine5Length);
      planLine5Tween = new TimelineMax().add(TweenMax.to(".plan .grey-lines .cls-2", 0.8, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }));
      planLine5SceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-plan',
        tweenChanges: true
      }).setTween(planLine5Tween).addTo($controller).triggerHook(0);
      planLine6Length = $(".plan .grey-lines .cls-3")[0].getTotalLength();
      $(".plan .grey-lines .cls-3").css("stroke-dasharray", planLine6Length);
      $(".plan .grey-lines .cls-3").css("stroke-dashoffset", planLine6Length);
      planLine6Tween = new TimelineMax().add(TweenMax.to(".plan .grey-lines .cls-3", 0.8, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }));
      planLine6SceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-plan',
        tweenChanges: true
      }).setTween(planLine6Tween).addTo($controller).triggerHook(0);
      planLine7Length = $(".plan .grey-lines .cls-4")[0].getTotalLength();
      $(".plan .grey-lines .cls-4").css("stroke-dasharray", planLine7Length);
      $(".plan .grey-lines .cls-4").css("stroke-dashoffset", planLine7Length);
      planLine7Tween = new TimelineMax().add(TweenMax.to(".plan .grey-lines .cls-4", 0.8, {
        strokeDashoffset: 0,
        ease: Linear.easeNone
      }));
      planLine7SceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-plan',
        tweenChanges: true
      }).setTween(planLine7Tween).addTo($controller).triggerHook(0);
      planIconsTween = new TimelineMax().add(TweenMax.to(".plan .plan-icons", 0.8, {
        opacity: 1,
        ease: Linear.easeNone
      }));
      return planIconsSceneAnim = new ScrollMagic.Scene({
        triggerElement: '#trigger-plan',
        tweenChanges: true
      }).setTween(planIconsTween).addTo($controller).triggerHook(0);
    }
  };

  $(document).ready(function() {
    if (windowWidth > 960 && $('body').hasClass('manhattan')) {
      return $.fn.scrollMagicManhAnim();
    }
  });

}).call(this);
