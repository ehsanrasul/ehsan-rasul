document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".mobile-menu-button");
    const navMenu = document.querySelector(".nav-items");
  
    menuButton.addEventListener("click", function () {
      navMenu.classList.toggle("show");
  
      if (navMenu.classList.contains("show")) {
        menuButton.textContent = "✕";
      } else {
        menuButton.textContent = "☰";
      }
    });
  });
  