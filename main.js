function scrollToSection(section) {
  const el = document.querySelector(section);
  const top = el.offsetTop;
  window.scrollTo({
    top: top + window.innerHeight,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.parallax-image');
  const hr = document.querySelector('#parallax-name hr');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('nav ul li');
  const hamburger = document.querySelector('button.hamburger-menu');
  const smallScreensLinks = document.querySelectorAll('nav.nav-small-screens ul li');
  const smallScreensNav = document.querySelector('nav.nav-small-screens');

  document.addEventListener('scroll', function() {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scroll > windowHeight / 1.3) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // parallax effect
    images.forEach(image => {
      const speed = image.dataset.speed || 1;
      image.style.transform = `translateY(${scroll * (speed)}px)`;
    });

    // animate the separator
    let percentage = 30 + (scroll / windowHeight) * 20;
    hr.style.setProperty('width', `${percentage}%`, 'important');

    // animate the section when it's in view
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scroll - window.innerHeight / 2 > top) {
        section.classList.add('in-view');
      } else {
        section.classList.remove('in-view');
      }
    });
  });

  document.addEventListener('mousemove', function(e) {
    let x = Math.abs(e.clientX - window.innerWidth / 2);
    if(x < window.innerWidth / 6) {
      x = window.innerWidth / 6;
    } 
  });

  // smooth scroll on nav link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = link.dataset.href;
      scrollToSection(section);
    });
  });

  hamburger.addEventListener('click', function() {
    smallScreensNav.classList.toggle('show');
    smallScreensNav.classList.toggle('hide');
    hamburger.classList.toggle('close');
  });
  smallScreensLinks.forEach(link => {
    link.addEventListener('click', function() {
      smallScreensNav.classList.toggle('show');
      smallScreensNav.classList.toggle('hide');
      hamburger.classList.toggle('close');
    });
  });
});