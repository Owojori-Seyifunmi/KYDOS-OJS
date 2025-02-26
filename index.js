window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');
  const logo = document.querySelector('.logo-container img');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    logo.src = 'logo/Kydos Logo red.png';
  } 
  else {
    navbar.classList.remove('scrolled');
    logo.src = 'logo/Kydos Logo white.png';
  }
});



document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial-slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  

  document.querySelector('.prev').addEventListener('click', function() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    showSlide(currentSlide);
  });

  document.querySelector('.next').addEventListener('click', function() {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
  });

  // Show the first slide initially
  showSlide(currentSlide);
});




document.addEventListener('DOMContentLoaded', function() {
  const accordionToggle = document.querySelector('.accordion-toggle');
  const accordionContent = document.querySelector('.accordion-content');

  accordionToggle.addEventListener('click', function() {
    accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
    if (!accordionToggle.contains(event.target) && !accordionContent.contains(event.target)) {
      accordionContent.style.display = 'none';
    }
  });
});


// RESPONSIVE NAVBAR
document.addEventListener('DOMContentLoaded', function() {
  const openMenuBtn = document.getElementById('open-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  openMenuBtn.addEventListener('click', function() {
    navMenu.classList.add('show');
  });

  closeMenuBtn.addEventListener('click', function() {
    navMenu.classList.remove('show');
  });
});