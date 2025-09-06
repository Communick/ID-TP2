// Function that randomly changes the color of objects which contains its name as attributes
/*AFRAME.registerComponent('change-color', {
  init: function(){
    const el = this.el;
    el.addEventListener('click', function(){
      el.setAttribute('color', "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0,6));
      el.setAttribute('scale', {x:2, y:2, z:2});
      el.setAttribute('animation', '"property: rotation; to: 360 360 360; easing:linear; loop: true; dur=50');
      setTimeout(() => {
        el.setAttribute('scale', {x:1, y:1, z:1});
      el.setAttribute('animation', '"property: rotation; to: 360 360 360; easing:linear; loop: true; dur=2000');
        }, 500);
    })
  }                
});*/


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('menu-button');
  const menu = document.getElementsByClassName('dropdown')[0];

  if (button && menu) {
    button.addEventListener('click', function() {
  if (menu.style.display === '' || menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
})}});

const overlay = document.getElementById('menu-button');

// stop events from bubbling to the scene/canvas
['touchstart','touchmove','touchend','click','pointerdown'].forEach(name=>{
  overlay.addEventListener(name, e => {
    e.stopPropagation();
    // if you need to prevent scrolling/zoom gestures:
    if (e.cancelable) e.preventDefault();
  }, { passive: false });
});

AFRAME.registerComponent('color-n-scale', {
  init: function(){
    const el = this.el;
    var slider = document.querySelector(".slider");
    slider.oninput = function() {
      el.setAttribute('scale', {x:slider.value/33.3333, y:slider.value/33.3333, z:slider.value/33.3333});
    }

      var colorPalette = document.querySelectorAll(".color-btn");
      colorPalette.forEach(function(button) {
        button.addEventListener('click', function() {
          el.setAttribute('color', button.getAttribute('color'));
        });
    });
  }
});