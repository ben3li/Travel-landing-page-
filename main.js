const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", ()=> {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealoption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  };
  ScrollReveal().reveal(".header__image img", {
  ...scrollRevealoption,
  origin: "right",
  });

  ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealoption,
  delay:500,
  });

  ScrollReveal().reveal(".header__content p", {
  ...scrollRevealoption,
  delay:1000,
  });

  ScrollReveal().reveal(".header__content form", {
  ...scrollRevealoption,
  delay:1500,
  });

    ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealoption,
  delay:2000,
  });

      ScrollReveal().reveal(".header__image__card", {
  duration:1000,
  interval:500,
  delay:2500,
  });