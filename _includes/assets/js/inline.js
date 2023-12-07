// Add your inline JS here

document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger-btn');
    var menu = document.getElementById('menu-container');
    var closeBtn = document.getElementById('close-btn');
    
    // Open the menu
    hamburger.addEventListener('click', function() {
      menu.style.right = '0';
    }, false);

    // Close the menu
    closeBtn.addEventListener('click', function() {
      menu.style.right = '-100%';
    }, false);
  });