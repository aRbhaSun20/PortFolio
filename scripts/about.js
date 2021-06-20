
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
      ".about .back",
      {
        duration: 1,
        opacity: 0,
      },
      "-=1.5"
    )
    .from(
      ".about .thought",
      {
        duration: 1.5,
        x: -900,
        opacity: 0,
        ease: "elastic.out(1,1.7)",
      },
      "-=1.5"
    )
    .from(
      ".about .animate-lines",
      {
        duration: 0.5,
        scale: 0,opacity: 0,
        ease: "power2.out",
      },
      "-=1.4"
    )
    .from(
      ".about .profession",
      {
        duration: 1,
        x: -800,opacity: 0,
        ease: "elastic.out(1,1)",
      },
      "-=1.7"
    )
    .from(
      ".about .scroll",
      {
        duration: 1,
        x: -800,opacity: 0,
        ease: "elastic.out(1,1)",
      },
      "-=1"
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
        x: 300,opacity: 0,
        duration: 1,
        ease: "power2.in",
      },
      "-=1.39"
    );
  

// about-info
// intro
const aboutInfo_Intro_Section = gsap.timeline({
    scrollTrigger: {
      toggleActions: "play none resume none",
      start: "0 center",
      trigger: ".about-info .intro-myself",
    },
    ease: "power4.out",
  });
  
  aboutInfo_Intro_Section
    .from(
      ".about-info .intro-myself .title",
      {
        duration: 1,
        x: -100,
        opacity: 0,
      },
      "-=1"
    )
    .from(
      ".about-info .intro-myself .sub-title",
      {
        duration: 1,
        x: -100,
        opacity: 0,
      },
      "-=.5"
    )
    .from(
      ".about-info .intro-myself .desc",
      {
        duration: 1,
        x: -100,
        opacity: 0,
      },
      "-=.5"
    )
    .from(
      ".about-info .intro-myself .resume-down a",
      {
        duration: 3,
        opacity: 0,
      },
      "-=.8"
    )
    .from(
      ".about-info .intro-myself .resume-down",
      {
        duration: 2,
        opacity: 0,
      },
      "-=3.8"
    )
    .fromTo(
      ".about-info .intro-myself .illus img",
      {
        clipPath: `circle(${0}% at ${100}% ${100}%)`,
        filter: "grayscale(100%)",
      },
      {
        duration: 2.5,
        clipPath: `circle(${150}% at ${100}% ${100}%)`,
        ease: "power4.in",
      },
      "-=5"
    )
    .to(
      ".about-info .intro-myself .illus img",
      { filter: "grayscale(0%)", duration: 2, ease: "power4.in" },
      "-=3"
    );
  
  // about-info
  // passion
  const aboutInfo_Passion_Section = gsap.timeline({
    scrollTrigger: {
      toggleActions: "play none resume none",
      start: "0 center",
      trigger: ".about-info .passions",
    },
  });
  
  aboutInfo_Passion_Section
    .from(
      ".about-info .passions .title",
      {
        duration: 1,
        x: -100,
        opacity: 0,
      },
      "-=1"
    )
    .from(
      ".about-info .passions .passion-list .passion div",
      {
        duration: 1,
        x: -50,
        opacity: 0,
  
        stagger: 0.1,
      },
      "-=.5"
    );
  
  // about-info
  // skills
  const aboutInfo_Skills_Section = gsap.timeline({
    scrollTrigger: {
      toggleActions: "play none resume none",
      start: "0 center",
      trigger: ".about-info .skills",
    },
    ease: "power2.inOut",
  });
  
  aboutInfo_Skills_Section
    .from(
      ".about-info .skills .content .title",
      {
        duration: 1,
        x: -100,
        opacity: 0,
      },
      "-=1"
    )
    .from(
      ".about-info .skills .tech-stack .title",
      {
        duration: 1,
        x: 100,
        opacity: 0,
      },
      "-=1"
    )
    .from(
      ".about-info .skills .tech-stack .sub-title",
      {
        duration: 1,
        x: 100,
        opacity: 0,
      },
      "-=1"
    )
    .from(
      ".about-info .skills .content .desc",
      {
        duration: 1,
        x: -100,
        opacity: 0,
      },
      "-=.5"
    )
  
    .from(
      ".about-info .skills .tech-stack .icons .indi-icons",
      {
        duration: 2,
        x: 100,
        opacity: 0,
        stagger: 0.2,
      },
      "-=1.5"
    )
    .from(
      ".about-info .skills .content .explore-projects a",
      {
        duration: 2,
        opacity: 0,
      },
      "-=1"
    );