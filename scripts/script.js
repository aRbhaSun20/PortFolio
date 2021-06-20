// gsap start

// cursor gsap
const cursor = gsap.to(".cursor", {
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1,
});

// profession gsap
const professions = [
  "Game Engine Developer",
  "Designer",
  "Computer Science Engineer",
];

const wordsTl = gsap
  .timeline({
    repeat: -1,
    delay: 1,
  })
  .pause();

professions.forEach((profession) => {
  let professionTL = gsap.timeline({
    repeat: 1,
    yoyo: true,
    repeatDelay: 1,
  });
  professionTL.to(".main .contents .profession span.inner-text", {
    duration: 2,
    text: profession,
  });
  wordsTl.add(professionTL);
});

//introductory
const introductionSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "-1% top",
    toggleActions: "play none resume none",
  },
});

introductionSection
  .from(
    ".main .intro",
    {
      duration: 1.5,
      x: -500,
      ease: "elastic.out(1,1)",
    },
    "-=.5"
  )
  .from(
    ".main .thought",
    {
      duration: 1.5,
      x: -900,
      ease: "elastic.out(1,1.7)",
    },
    "-=1.1"
  )
  .from(
    ".main .animate-lines",
    {
      duration: 0.5,
      scale: 0,
      ease: "power2.out",
    },
    "-=1.4"
  )
  .from(
    ".main .profession",
    {
      duration: 1,
      x: -800,
      ease: "elastic.out(1,1)",
      onComplete: () => wordsTl.play(),
    },
    "-=1.7"
  )
  .from(
    ".main .buttons",
    {
      duration: 1,
      opacity: 0,
      ease: "power2.in",
    },
    "-=1.8"
  )
  .fromTo(
    ".main .illustrations img",
    {
      clipPath: `circle(${0}% at ${50}% ${50}%)`,
    },
    {
      duration: 1.5,
      clipPath: `circle(${80}% at ${50}% ${50}%)`,
      ease: "power2.in",
    },
    "-=2.3"
  )
  .from(
    ".main .scroll",
    {
      duration: 1,
      opacity: 0,
    },
    "-=1.2"
  );

// project
const projectSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".project",
    toggleActions: "play none resume none",
    start: "top center",
  },
});

projectSection
  .from(
    ".project .thought",
    {
      duration: 1.5,
      x: -900,
      ease: "elastic.out(1,1.7)",
    },
    "-=1.1"
  )
  .from(
    ".project .animate-lines",
    {
      duration: 0.5,
      scale: 0,
      ease: "power2.out",
    },
    "-=1.4"
  )
  .from(
    ".project .profession",
    {
      duration: 1,
      x: -800,
      ease: "elastic.out(1,1)",
    },
    "-=1.7"
  )
  .from(
    ".project .buttons-pro",
    {
      duration: 1,
      opacity: 0,
      ease: "power2.in",
    },
    "-=1.8"
  )
  .fromTo(
    ".project .illustrations img",
    {
      clipPath: `circle(${0}% at ${50}% ${50}%)`,
    },
    {
      duration: 1.5,
      clipPath: `circle(${80}% at ${50}% ${50}%)`,
      ease: "power2.in",
    },
    "-=2.3"
  );

// about
const aboutSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    toggleActions: "play none resume none",
    start: "top center",
  },
});

aboutSection
  .from(
    ".about .thought",
    {
      duration: 1.5,
      x: -900,
      ease: "elastic.out(1,1.7)",
    },
    "-=1.5"
  )
  .from(
    ".about .animate-lines",
    {
      duration: 0.5,
      scale: 0,
      ease: "power2.out",
    },
    "-=1.4"
  )
  .from(
    ".about .profession",
    {
      duration: 1,
      x: -800,
      ease: "elastic.out(1,1)",
    },
    "-=1.7"
  )
  .from(
    ".about .buttons-pro",
    {
      duration: 1,
      opacity: 0,
      ease: "power2.in",
    },
    "-=1.8"
  )
  .from(
    ".about .about-me",
    {
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    },
    "-=2"
  )
  .from(
    ".about .about-me img",
    {
      x: 300,
      duration: 1,
      ease: "power2.in",
    },
    "-=1.39"
  );

// contact
const contactSection = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    toggleActions: "play none resume none",
    start: "top bottom",
  },
});

contactSection
  .from(
    ".contact .thought",
    {
      duration: 1.5,
      x: -900,
      ease: "elastic.out(1,1.7)",
    },
    "-=1"
  )
  .from(
    ".contact .animate-lines",
    {
      duration: 0.5,
      scale: 0,
      ease: "power2.out",
    },
    "-=1.4"
  )
  .from(
    ".contact .contact-info .mail",
    {
      duration: 1,
      x: -800,
      ease: "power2.out",
    },
    "-=1.5"
  )
  .from(
    ".contact .contact-info .phno",
    {
      duration: 1,
      x: -800,
      ease: "power2.out",
    },
    "-=1.2"
  )
  .from(
    ".contact .contact-info .icon-link a",
    {
      duration: 0.5,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.25,
    },
    "-=1.1"
  )
  .from(
    ".contact .get-alter",
    {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    },
    "-=.5"
  )
  .from(
    ".contact .contact-form",
    {
      duration: 2,
      opacity: 0,
    },
    "-=.8"
  )
  .from(
    ".contact .contact-form .contact-title",
    {
      duration: 1,
      y: -100,
    },
    "-=2.2"
  )
  .from(
    ".contact .contact-form .contact-but button",
    {
      duration: 0.6,
      scale: 0,
      opacity: 0,
    },
    "-=1.95"
  );




