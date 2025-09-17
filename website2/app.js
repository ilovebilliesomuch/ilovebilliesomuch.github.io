const menu = document.querySelector('.navbar_menu');
const toggle = document.querySelector('#mobile-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
