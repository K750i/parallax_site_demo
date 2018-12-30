var birdBox = document.querySelector('.bird-box');
var logo = document.querySelector('.logo');
var backBird = document.querySelector('.back-bird');
var foreBird = document.querySelector('.fore-bird');
var container = document.querySelector('.clothes-pics');
var figure = document.querySelectorAll('.clothes-pics figure');
var periscope = document.querySelector('.large-window .img');
var windowTint = document.querySelector('.window-tint');
var blogPost = document.querySelector('.blog-posts');
var post2 = document.querySelector('.post-1');
var post1 = document.querySelector('.post-2');
var post3 = document.querySelector('.post-3');

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkScroll() {
  var vScroll = window.pageYOffset;

  logo.style.transform = `translateY(${vScroll / 2}%)`;
  backBird.style.transform = `translate(-50%, ${vScroll / 4}%)`;
  foreBird.style.transform = `translate(-50%, -${vScroll / 40}%)`;
  birdBox.style.backgroundPosition = `center -${(vScroll / 6)}px`;

  if (vScroll > container.offsetTop - (window.innerHeight / 2)) {
    figure.forEach(function(item, index) {
      setTimeout(() => item.classList.add('is-showing'), 100 * index);
    });
  }

  var periscopebreakpoint = periscope.parentElement.offsetTop - window.innerHeight;
  var blogPostbreakpoint = blogPost.offsetTop - window.innerHeight;
  var opacity = parseFloat((vScroll - periscopebreakpoint) / (vScroll / 3)).toFixed(2);

  if (vScroll > periscopebreakpoint) {
    periscope.style.backgroundPosition = `center ${Math.round((vScroll / 1.5) - periscopebreakpoint)}px`;
    windowTint.style.opacity = `${opacity}`;
  }

  if (vScroll > blogPostbreakpoint) {
    let offset = Math.min(0, vScroll - blogPost.offsetTop + window.innerHeight - 350);
    console.log(offset);
    
    post2.style.transform = `translate(${offset}px, ${Math.abs(offset * .2)}px)`;
    post3.style.transform = `translate(${Math.abs(offset)}px, ${Math.abs(offset * .2)}px)`;
  }
}

window.addEventListener('scroll', debounce(checkScroll, 15));