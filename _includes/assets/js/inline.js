// Add your inline JS here

document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger-icon');
    var closeIcon = document.getElementById('close-icon');
    var menuContainer = document.getElementById('menu-container');
  
    hamburger.addEventListener('click', function() {
      menuContainer.classList.add('show-menu');
    });
  
    closeIcon.addEventListener('click', function() {
      menuContainer.classList.remove('show-menu');
    });
  });
  