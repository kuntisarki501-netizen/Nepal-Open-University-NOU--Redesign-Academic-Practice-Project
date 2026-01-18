// script.js
function toggleMenu() {
  const navbar = document.querySelector('.navbar ul');
  navbar.classList.toggle('active');
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(element => {
    element.textContent = element.getAttribute(`data-${lang}`);
  });

  function toggleMenu() {
    const navbar = document.querySelector('.navbar ul');
    navbar.classList.toggle('active');
  }
  
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
}
