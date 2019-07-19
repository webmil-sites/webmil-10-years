(function() {
  $.fn.scrollMagicVerticalAnim = function() {
    var $controller, animDuration, anim_1, anim_2, bottomEnd, bottomStart, tween_1, tween_2;
    $controller = new ScrollMagic.Controller();
    animDuration = $(window).height();
    if (windowWidth > 1366) {
      bottomStart = '-225px';
      bottomEnd = '-50px';
    } else {
      bottomStart = '0px';
      bottomEnd = '175px';
    }
    tween_1 = new TimelineMax().fromTo(".newspaper", 1, {
      left: '100%'
    }, {
      left: '8.5%'
    });
    anim_1 = new ScrollMagic.Scene({
      triggerElement: '.top-backgroud-container',
      triggerHook: 0,
      duration: animDuration
    }).setTween(tween_1).addTo($controller);
    tween_2 = new TimelineMax().fromTo(".newspaper", 1, {
      bottom: bottomStart
    }, {
      bottom: bottomEnd
    });
    return anim_2 = new ScrollMagic.Scene({
      triggerElement: '.design',
      triggerHook: 0.5,
      duration: animDuration
    }).setTween(tween_2).addTo($controller);
  };

  $(document).ready(function() {
    if (windowWidth > 960) {
      return $.fn.scrollMagicVerticalAnim();
    }
  });

}).call(this);
