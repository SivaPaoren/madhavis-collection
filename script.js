// ✅ Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});


// ✅ Main image slider
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots");

let index = 0;
let intervalId;

if (slides.length > 0 && slider && dotsContainer) {
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("active");
      dots[idx].classList.remove("active");
    });
    slides[i].classList.add("active");
    dots[i].classList.add("active");
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

  function resetInterval() {
    stopAutoSlide();
    startAutoSlide();
  }

  nextBtn?.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);

  document.addEventListener("DOMContentLoaded", () => {
    showSlide(index);
    startAutoSlide();
  });

  // ✅ Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const threshold = 50;

    if (swipeDistance > threshold) {
      prevSlide();
      resetInterval();
    } else if (swipeDistance < -threshold) {
      nextSlide();
      resetInterval();
    }
  }
}


// ✅ Small product slider (renamed variables to avoid conflict)
const smallSliderContainer = document.getElementById("productContainer");
const smallSliderLeft = document.getElementById("scrollLeft");
const smallSliderRight = document.getElementById("scrollRight");

smallSliderLeft?.addEventListener("click", () => {
  smallSliderContainer?.scrollBy({
    left: -250,
    behavior: "smooth"
  });
});

smallSliderRight?.addEventListener("click", () => {
  smallSliderContainer?.scrollBy({
    left: 250,
    behavior: "smooth"
  });
});


// ✅ Video card slider
const videoSlider = document.getElementById('videoSlider');
const scrollVideoLeft = document.getElementById('scrollVideoLeft');
const scrollVideoRight = document.getElementById('scrollVideoRight');

scrollVideoLeft?.addEventListener('click', () => {
  videoSlider?.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

scrollVideoRight?.addEventListener('click', () => {
  videoSlider?.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});


// ✅ Contact form validation (using jQuery)
$(document).ready(function () {
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields!');
      return;
    }

    $('#formMessage').fadeIn();
    $(this)[0].reset();
  });

  // ✅ Set current year in footer
  $('#year').text(new Date().getFullYear());
});


// ✅ Fallback for year if jQuery fails
const yearElem = document.getElementById("year");
if (yearElem) {
  yearElem.textContent = new Date().getFullYear();
}

