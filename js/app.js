// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

function init() {
  var h = $(window).height() - 250;
  var w = $(window).width() - 500;
  $('div').each(function(i, el) {
    $(el).css('top',Math.random()*h+100);
    $(el).css('left',Math.random()*w+100);
  });

  (function animloop(){
    requestAnimFrame(animloop);
    render();
  })();
}

init();

function render() {
  $('div').each(function(i, el) {
    var $this = $(this);
    $(el).css('top',parseFloat($this.css('top'))+Math.random()*4-2);
    $(el).css('left',parseFloat($this.css('left'))+Math.random()*4-2);
    $(el).css('font-size',(parseFloat($this.css('font-size'))+Math.random()*4-2)+'px');

  });
}


// place the rAF *before* the render() to assure as close to
// 60fps with the setTimeout fallback.
