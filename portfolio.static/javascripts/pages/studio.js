(function() {
  $(document).ready(function() {
    var $scene, resize;
    $scene = $("#scene");
    $scene.parallax();
    resize = function() {
      var $canvas;
      $scene[0].style.width = window.innerWidth + 'px';
      $scene[0].style.height = window.innerHeight + 'px';
      $canvas = $("#anim-canvas");
      $canvas.height($canvas.width() * 1297 / 4260);
      return $('.circles').height($canvas.width() * 1297 / 4260);
    };
    resize();
    return window.onresize = resize;
  });

}).call(this);
