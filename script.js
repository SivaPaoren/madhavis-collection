//hamburger slider part
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;
let intervalId;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

function startAutoSlide() {
  intervalId = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

document.addEventListener('DOMContentLoaded', () => {
  showSlide(index);
  startAutoSlide();
});

// Highlight active nav link
const links = document.querySelectorAll('.nav-links a');
const currentPath = window.location.pathname;

links.forEach(link => {
  const linkPath = new URL(link.href).pathname;

  if (currentPath.endsWith(linkPath)) {
    link.classList.add('active');
  }
});
