// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

// Smooth scroll function
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}

navlinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target.getAttribute("href");
    smoothScroll(target);
    // Close the navbar after clicking a link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navlinks.forEach((link) => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
    }
  });

  // sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
// Smooth scrolling to section when a link is clicked
function smoothScroll(target) {
  const targetSection = document.querySelector(target);
  const targetOffset = targetSection.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetOffset - startPosition;
  const duration = 1000; // Adjust as needed
  let startTime = null;

  function scrollAnimation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollAmount = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollAmount);
    if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
  }

  // Easing function for smooth scroll animation
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(scrollAnimation);
}

// Add click event listeners to navigation links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    smoothScroll(target);
  });
});
