var logo = document.querySelector('.logo');
var backBird = document.querySelector('.back-bird');
var foreBird = document.querySelector('.fore-bird');
var container = document.querySelector('.clothes-pics');
var figure = document.querySelectorAll('.clothes-pics figure');

window.addEventListener('scroll', () => {
  var vScroll = window.pageYOffset;

  logo.style.transform = `translateY(${vScroll / 2}%)`;
  backBird.style.transform = `translate(-50%, ${vScroll / 4}%)`;
  foreBird.style.transform = `translate(-50%, -${vScroll / 40}%)`;

  if (vScroll > container.offsetTop - (window.innerHeight / 2)) {
    figure.forEach(function(item, index) {
      setTimeout(() => item.classList.add('is-showing'), 100 * index);
    });
  }
});