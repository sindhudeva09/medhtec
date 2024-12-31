const track = document.querySelector(".carousel-track");
const groups = Array.from(track.children);
const dotsContainer = document.querySelector(".dots-container");
const dots = Array.from(dotsContainer.children);
let currentIndex = 0;

const updateSlide = (index) => {
  const groupWidth = groups[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * groupWidth}px)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlide(currentIndex);
  });
});

const carouselContent = document.querySelector(".carousel-content");
const carouselRows = Array.from(carouselContent.children);
const navigationDots = document.querySelector(".navigation-dots");
const navDots = Array.from(navigationDots.children);
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
let activeRowIndex = 0;

// Update Carousel Slide Function
const updateCarousel = (index) => {
  const rowWidth = carouselRows[0].getBoundingClientRect().width;
  carouselContent.style.transform = `translateX(-${index * rowWidth}px)`;
  navDots.forEach((dot) => dot.classList.remove("active"));
  navDots[index].classList.add("active");
};

// Dot Navigation
navDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activeRowIndex = index;
    updateCarousel(activeRowIndex);
  });
});

// Scroll-to-Top Button Visibility
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll-to-Top Action
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Auto-slide every 5 seconds
const autoSlide = () => {
  activeRowIndex = (activeRowIndex + 1) % carouselRows.length;
  updateCarousel(activeRowIndex);
};

setInterval(autoSlide, 5000);
