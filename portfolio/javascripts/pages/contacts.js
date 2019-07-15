(function() {
  var resizeVideoContainer;

  resizeVideoContainer = function() {
    var footerHeight, headerHeight, slideHeight, windowHeight;
    windowHeight = $(window).height();
    headerHeight = $(".js-header").height();
    footerHeight = $(".js-footer").height();
    slideHeight = windowHeight - headerHeight - footerHeight;
    $(".js-contacts-container").height(slideHeight);
    if (slideHeight < 430) {
      return $("body.contacts").css({
        overflow: "auto"
      });
    }
  };

  $(document).ready(function() {
    var videobackground;
    resizeVideoContainer();
    return videobackground = new $.backgroundVideo($('#back-video'), {
      'align': 'centerXY',
      'width': 1280,
      'height': 720,
      'path': '/media/',
      'filename': 'zeppelin',
      'types': ['mp4', 'webm']
    });
  });

  $(window).on("resize", resizeVideoContainer);

}).call(this);
