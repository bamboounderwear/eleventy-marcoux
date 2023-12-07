// Add your inline JS here

document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.getElementById('menu-container');

    menuToggle.addEventListener('click', function() {
      menuContainer.classList.toggle('menu-visible');
      menuContainer.classList.toggle('menu-hidden');
      this.classList.toggle('open');
    });
  });
