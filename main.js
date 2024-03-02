document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.parallax-image');
  const hr = document.querySelector('#parallax-name hr');

  document.addEventListener('scroll', function() {
    const scroll = window.scrollY;
    const header = document.querySelector('header');
    const windowHeight = window.innerHeight;
    if (scroll > windowHeight / 2) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    images.forEach(image => {
      const speed = image.dataset.speed || 1;
      image.style.transform = `translateY(${scroll * (speed)}px)`;
    });
    console.log(scroll)
    let percentage = 30 + (scroll / windowHeight) * 20;
    hr.style.setProperty('width', `${percentage}%`, 'important');
  });

  document.addEventListener('mousemove', function(e) {
    let x = Math.abs(e.clientX - window.innerWidth / 2);
    if(x < window.innerWidth / 6) {
      x = window.innerWidth / 6;
    } 
  });
});