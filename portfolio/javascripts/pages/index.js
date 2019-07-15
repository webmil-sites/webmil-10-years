(function() {
  $.fn.logoAnim = function() {
    var $controller, flyingLogoScene, flyingLogoTween, logoSlide;
    $controller = new ScrollMagic.Controller();
    logoSlide = function() {
      $('#logo-slide').addClass('active');
      return $('.flying-logo').fadeOut('fast');
    };
    flyingLogoTween = new TimelineMax().fromTo(".flying-logo", 1, {
      opacity: 0
    }, {
      opacity: 1,
      ease: Linear.easeNone,
      delay: 0.3
    }).fromTo(".flying-logo", 1, {
      transform: 'rotate3d(0,1,0, 90deg)'
    }, {
      transform: 'rotate3d(0,0,0, 0deg)',
      ease: Circ.easeOut,
      onComplete: logoSlide
    });
    return flyingLogoScene = new ScrollMagic.Scene({
      triggerElement: '.index',
      reverse: false
    }).setTween(flyingLogoTween).addTo($controller);
  };

  $(document).ready(function() {
    return $(".projects-link").on('click', function() {
      var offset;
      offset = $(this).parents().find("#projects").offset().top;
      setTimeout((function() {
        $("html,body").animate({
          scrollTop: offset
        }, 1000);
      }), 500);
      return false;
    });
  });

  $(window).on('load', function() {
    if (windowWidth > 1023 && $('body').hasClass('index')) {
      return $.fn.logoAnim();
    }
  });

}).call(this);
