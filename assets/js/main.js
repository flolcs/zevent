// ScrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
  //reset: true
});

sr.reveal("#p1", { delay: 0, origin: "left" });
sr.reveal("#p2", { delay: 300, origin: "left" });
sr.reveal("#p3", { delay: 600, origin: "left" });
sr.reveal(".h2016", { origin: "left" });
sr.reveal(".h2017", { origin: "top" });
sr.reveal(".h2018", { origin: "left" });
sr.reveal(".h2019", { origin: "top" });
sr.reveal(".h2020", { origin: "left" });
sr.reveal(".h2021", { origin: "top" });
sr.reveal(".h2022", { origin: "bottom" });

// VANTA
VANTA.TOPOLOGY({
  el: ".top-header",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  color: "#57af37",
  backgroundColor: "#202020",
  minHeight: 70.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  waveHeight: 10,
  shininess: 0,
  waveSpeed: 5,
  zoom: 1,
});

// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    425: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 5.2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 6.2,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 7.2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 8.2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 9.2,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 10.2,
      spaceBetween: 50,
    },
  },
});

// JS
const swiperOpen = document.getElementById("swiperOpen");
const swiperClose = document.getElementById("swiperClose");
const swiperJs = document.querySelector(".swiperjs");

swiperOpen.addEventListener("click", () => {
  swiperJs.style.display = "flex";
  swiperOpen.style.display = "none";
  swiperClose.style.display = "flex";
});

swiperClose.addEventListener("click", () => {
  swiperJs.style.display = "none";
  swiperOpen.style.display = "flex";
  swiperClose.style.display = "none";
});
