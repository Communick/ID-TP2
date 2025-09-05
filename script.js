document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with attribute tag="navlink"
  var box = document.querySelectorAll('[tag="box"]');
  box.addEventListener('click', function() {
      box.color = (Math.random() * 0xfffff * 1000000).toString(16);
    });
  });