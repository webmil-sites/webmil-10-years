var canvas,
  ctx,
  width,
  height,
  xCenter,
  yCenter,
  size,
  lines,
  tick,
  fps,
  background;

function Line(offset) {
  this.p1 = {
    x: 0,
    y: yCenter
  };
  this.p2 = {
    x: size * 0.333,
    y: yCenter
  };
  this.p3 = {
    x: size * 0.666,
    y: yCenter
  };
  this.offset = offset;
}

Line.prototype.animationStep = function() {
  var base = (this.offset + tick) / 60;

  this.p1.x += Math.cos(base) * (size / 1000);
  this.p2.x += Math.sin(base) * (size / 1000);
  this.p2.y = yCenter + Math.cos(base) * size / 1;
  this.p3.x += Math.cos(base) * (size / 1000);
  this.p3.y = yCenter + Math.sin(base) * size / 1;
};

Line.prototype.drawAnimationStep = function() {
  ctx.beginPath();
  ctx.moveTo(this.p1.x, this.p1.y);
  ctx.bezierCurveTo(
    this.p2.x,
    this.p2.y,
    this.p3.x,
    this.p3.y,
    -width/2,
    height
  );

  var alpha = (0.55 + (Math.sin((this.offset + tick) / 20) * 0.45));
  ctx.strokeStyle = 'rgba(131, 139, 198, ' + alpha + ')';
  ctx.stroke();
}

function init() {
	container = document.querySelector(".js-hackenproof-top-section");
  canvas = document.querySelector('.js-polylines-canvas');
  ctx = canvas.getContext('2d');
	ctx.lineWidth = 1;
  lines = [];
  fps = 30;
  background = new Image();
  background.src = canvas.dataset.bg;

  background.onload = function() {
    ctx.drawImage(background, 0, 0);
  }
  rebuildCanvas();
  drawCanvas();
}

function clearCanvas() {
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(background, 0, 0);
}

function transformCanvas() {
  ctx.translate(0, 0);
  ctx.translate(0, -yCenter);
  ctx.translate((width - size) / 2, 0);
}

function rebuildCanvas() {
  width = window.innerWidth;
  height = container.clientHeight;
  xCenter = width / 2;
  yCenter = height / 2;
  size = Math.min(width, height) * 0.5;
  lines.length = 0;
  tick = 0;
  canvas.width = width;
  canvas.height = height;

	for (var i = 0; i < 20; i++) {
    lines.push(new Line(i * 8));
  }
}

function drawCanvas() {
  setTimeout(function() {
		var i = lines.length;
    ctx.save();
		clearCanvas();
    transformCanvas();
    while (i--) {
      lines[i].animationStep();
      lines[i].drawAnimationStep();
    }
    requestAnimationFrame(drawCanvas);
    ctx.restore();
    tick++;
  }, 1000 / fps);
}

window.addEventListener('resize', rebuildCanvas);

init();
(function() {
  $.fn.scrollMagicHackAnim = function() {
    var $controller, anim_1, anim_2, anim_2_first, anim_3, anim_3_first, t1, t2, t2_first, t3, t3_first;
    $controller = new ScrollMagic.Controller();
    t1 = new TimelineMax().fromTo(".js-hackenproof-main-content", 0.5, {
      opacity: '0',
      transform: 'translate(0, 50px)'
    }, {
      opacity: '1',
      transform: 'translate(0, 0)',
      delay: 0.1
    }).fromTo(".js-hackenproof-top-img", 0.5, {
      opacity: '0',
      transform: 'translate(0, 100px)'
    }, {
      opacity: '1',
      transform: 'translate(0, 0)'
    });
    anim_1 = new ScrollMagic.Scene({
      triggerElement: '.hackenproof',
      triggerHook: 0,
      reverse: false
    }).setTween(t1).addTo($controller);
    t2_first = new TimelineMax().fromTo(".polyline-02", 0.5, {
      opacity: 0
    }, {
      opacity: 1
    });
    anim_2_first = new ScrollMagic.Scene({
      triggerElement: '.js-bg-animation1',
      triggerHook: 0.7,
      reverse: false
    }).setTween(t2_first).addTo($controller);
    t2 = new TimelineMax().fromTo(".polyline-02", 0.5, {
      top: '-1%',
      right: 0
    }, {
      top: '-25%',
      right: '-5%'
    });
    anim_2 = new ScrollMagic.Scene({
      triggerElement: '.js-bg-animation1',
      triggerHook: 0.7,
      duration: $('.js-bg-animation1').height() * 1.25
    }).setTween(t2).addTo($controller);
    t3 = new TimelineMax().fromTo(".polyline-03", 0.5, {
      bottom: '-20%'
    }, {
      bottom: '-2%'
    });
    anim_3 = new ScrollMagic.Scene({
      triggerElement: '.js-bg-animation2',
      triggerHook: 0.1,
      duration: $('.js-bg-animation2').height() * 2
    }).setTween(t3).addTo($controller);
    t3_first = new TimelineMax().fromTo('.js-img-list-image-last', 0.5, {
      opacity: 0
    }, {
      opacity: 1
    });
    anim_3_first = new ScrollMagic.Scene({
      triggerElement: '.js-bg-animation2',
      triggerHook: 0.85,
      reverse: false
    }).setTween(t3_first).addTo($controller);
    $('.js-animated-section').each(function(index, el) {
      var animProcessTween, anim_process, className;
      className = '.js-animated-' + index;
      animProcessTween = new TimelineMax().fromTo(className + ' .section-heading', 0.5, {
        opacity: 0,
        transform: 'translate(-50px, 0)'
      }, {
        opacity: 1,
        transform: 'translate(0, 0)'
      }).fromTo(className + ' .js-animated-image', 0.5, {
        opacity: 0
      }, {
        opacity: 1
      });
      return anim_process = new ScrollMagic.Scene({
        triggerElement: '.js-animated-' + index,
        triggerHook: 0.70,
        reverse: false
      }).setTween(animProcessTween).addTo($controller);
    });
    return $('.js-animated-image-row').each(function(index, el) {
      var className, imageListAnimFromLeft, imageListAnimFromRight, imageListTweenFromLeft, imageListTweenFromRight;
      className = '.js-animated-image-row-' + index;
      imageListTweenFromLeft = new TimelineMax().fromTo(className + ' .js-from-left', 0.5, {
        opacity: 0,
        transform: 'translate(-50px, 0)'
      }, {
        opacity: 1,
        transform: 'translate(0, 0)'
      });
      imageListTweenFromRight = new TimelineMax().fromTo(className + ' .js-from-right', 0.75, {
        opacity: 0,
        transform: 'translate(50px, 0)'
      }, {
        opacity: 1,
        transform: 'translate(0, 0)'
      });
      imageListAnimFromLeft = new ScrollMagic.Scene({
        triggerElement: className,
        triggerHook: 0.85,
        reverse: false
      }).setTween(imageListTweenFromLeft).addTo($controller);
      return imageListAnimFromRight = new ScrollMagic.Scene({
        triggerElement: className,
        triggerHook: 0.85,
        reverse: false
      }).setTween(imageListTweenFromRight).addTo($controller);
    });
  };

  $(document).ready(function() {
    if (windowWidth > 960) {
      return $.fn.scrollMagicHackAnim();
    }
  });

}).call(this);
