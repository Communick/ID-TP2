AFRAME.registerComponent('change-color', {
  init: function(){
    const el = this.el;
    el.addEventListener('click', function(){
      el.setAttribute('color', "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0,6));
      el.setAttribute('scale', {x:2, y:2, z:2});
      el.setAttribute('animation', '"property: rotation; to: 360 360 360; easing:linear; loop: true; dur=50');
      setTimeout(() => {
        el.setAttribute('scale', {x:1, y:1, z:1});
      el.setAttribute('animation', '"property: rotation; to: 360 360 360; easing:linear; loop: true; dur=2000');
        }, 2000);
      
    })
  }                
});