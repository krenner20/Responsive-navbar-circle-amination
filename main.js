const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.link');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  burger.classList.toggle('collapse');
  links.forEach(link => link.classList.toggle('fade'));
});