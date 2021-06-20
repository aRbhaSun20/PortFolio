// end
const endSection = gsap.timeline({
    scrollTrigger: {
      toggleActions: "play none resume none",
      start: "top 80%",
      trigger: ".end",
    },
  });
  
  endSection.from(
    ".end .contact-info .mail ",
    {
      duration: 1,
      y: 50,
      opacity: 0,
    },
    "-=.5"
  );
  endSection.from(
    ".end .contact-info .icon-link a ",
    {
      duration: 1,
      y: -50,
      opacity: 0,
      stagger: 0.2,
    },
    "-=1"
  );
  endSection.from(
    ".end .contact-info .phno ",
    {
      duration: 1,
      y: 50,
      opacity: 0,
    },
    "-=1.5"
  );
  