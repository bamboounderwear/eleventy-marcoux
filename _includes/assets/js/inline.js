// Add your inline JS here

document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger-btn');
    var menu = document.getElementById('menu-container');
    
    // Adding an event listener to the hamburger button
    hamburger.addEventListener('click', function() {
      // Toggle menu visibility
      menu.style.right = menu.style.right === '0px' ? '-100%' : '0px';
    }, false);
  });
