document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.getElementById('hamburger-btn');
  var menu = document.getElementById('menu-container');

  // Adding an event listener to the hamburger button
  hamburger.addEventListener('click', function() {
      // Toggle menu visibility
      menu.style.right = menu.style.right === '0px' ? '-100%' : '0px';

      // Toggle the icon and color
      if (menu.style.right === '0px') {
          hamburger.innerHTML = '&#x2716;'; // Close icon
          hamburger.style.color = 'black'; // Set color to black
      } else {
          hamburger.innerHTML = '&#9776;'; // Hamburger icon
          hamburger.style.color = 'white';
      }
  }, false);
});
