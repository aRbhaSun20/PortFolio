// hamburger menu start
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lines = document.querySelectorAll(".line");
const clouds = document.querySelectorAll(".clouds");


hamburger.addEventListener("click", () => {
  fade();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (navlinks.classList.contains("open")) {
      fade();
    }
  });
});

function fade() {
  navlinks.classList.toggle("open");
  lines.forEach((line) => {
    line.classList.toggle("open");
  });

  links.forEach((link) => {
    link.classList.toggle("fade");
  });
}

// nav-bar
const navBar = gsap.timeline();

navBar
  .from(".logo", {
    duration: 1,
    x: -350,
    ease: "power2.in",
  })
  .from(
    ".nav-links li",
    {
      duration: 1,
      y: -100,
      stagger: 0.1,
      ease: "slow",
    },
    "-=.8"
  )
  .from(
    ".hamburger",
    {
      duration: 2,
      y: -100,
      ease: "power2.in",
    },
    "-=2"
  );

