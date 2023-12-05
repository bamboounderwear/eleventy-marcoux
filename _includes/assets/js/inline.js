  // Get elements
  const hamburger = document.getElementById('hamburger');
  const menuWrapper = document.getElementById('menuWrapper');

  // Toggle menu
  hamburger.addEventListener('click', function() {
    menuWrapper.classList.toggle('open');
  });