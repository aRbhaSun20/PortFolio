// project
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

// project tab start
tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(tab.dataset.tabTarget);

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    tab.classList.add("active");
    target.classList.add("active");

    switch (index) {
      // js
      case 0:
        projectInfo_project1.restart();
        projectInfo_project2.restart();
        break;
      // cpp
      case 1:
        projectInfo_project_cpp1.restart();
        break;
      // python
      case 2:
        projectInfo_project_python1.restart();
        break;
      default:
        break;
    }
  });
});

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
    ".project .back",
    {
      duration: 1,
      opacity: 0,
    },
    "-=1.5"
  )
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
    ".project .scroll",
    {
      duration: 1,
      x: -800,
      ease: "power2.out",
    },
    "-=2"
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

// recent tab
const projectInfo_recent = gsap.timeline({
  scrollTrigger: {
    toggleActions: "play none resume none",
    start: "top top",
    trigger: ".project-info",
  },
});

projectInfo_recent
  .from(".recent-collection-tab .title", {
    opacity: 0,
    duration: 1,
    y: -100,
  })
  .from(
    ".recent-collection-tab .tabs li",
    {
      opacity: 0,
      duration: 1,
      y: 50,
      stagger: 0.3,
    },
    "-=.5"
  );

// project
// project js tab

let projectInfo_project1 = gsap.timeline({
  scrollTrigger: {
    toggleActions: "play none none none",
    start: "start 50%",
    trigger: ".JavaScript .pro1",
  },
});

projectInfo_project1
  .from(
    ".projects .JavaScript .pro1 .top-heading div",
    {
      opacity: 0,
      duration: 1,
      x: -50,
      stagger: 0.2,
    },
    "-=1"
  )
  .from(
    ".projects .JavaScript .pro1 .desc",
    {
      opacity: 0,
      duration: 2,
      ease: "power2.in",
    },
    "-=2.5"
  )

  .from(
    ".projects .JavaScript .pro1 .package-incl .main-title",
    {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    },
    "-=2"
  )
  .from(
    ".projects .JavaScript .pro1 .package-incl .icons .title",
    {
      x: -50,
      opacity: 0,
      duration: 2,
      ease: "power2.in",
      stagger: 0.3,
    },
    "-=2.5"
  )
  .from(
    ".projects .JavaScript .pro1 .package-incl .icons .icon-list img",
    {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power2.in",
      stagger: 0.2,
    },
    "-=2.2"
  )
  .fromTo(
    ".projects .JavaScript .pro1 .illus img",
    {
      clipPath: `circle(${0}% at ${100}% ${100}%)`,
    },
    {
      duration: 5,
      clipPath: `circle(${150}% at ${100}% ${100}%)`,
    },
    "-=3.7"
  )
  .from(
    ".projects .JavaScript .pro1 .illus .git-link",
    {
      duration: 1,
      opacity: 0,
    },
    "-=2.5"
  );

let projectInfo_project2 = gsap.timeline({
  scrollTrigger: {
    toggleActions: "play none none none",
    start: "start 50%",
    trigger: ".JavaScript .pro2",
  },
});

projectInfo_project2
  .from(
    ".projects .JavaScript .pro2 .top-heading div",
    {
      opacity: 0,
      duration: 1,
      x: -50,
      stagger: 0.2,
    },
    "-=1"
  )
  .from(
    ".projects .JavaScript .pro2 .desc",
    {
      opacity: 0,
      duration: 2,
      ease: "power2.in",
    },
    "-=.5"
  )
  .from(
    ".projects .JavaScript .pro2 .package-incl",
    {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    },
    "-=1"
  )
  .from(
    ".projects .JavaScript .pro2 .package-incl .main-title",
    {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    },
    "-=2"
  )
  .from(
    ".projects .JavaScript .pro2 .package-incl .icons .title",
    {
      x: -50,
      opacity: 0,
      duration: 2,
      ease: "power2.in",
      stagger: 0.3,
    },
    "-=2.5"
  )
  .from(
    ".projects .JavaScript .pro2 .package-incl .icons .icon-list img",
    {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power2.in",
      stagger: 0.2,
    },
    "-=2.2"
  )
  .fromTo(
    ".projects .JavaScript .pro2 .illus img",
    {
      clipPath: `circle(${0}% at ${100}% ${100}%)`,
    },
    {
      duration: 6,
      clipPath: `circle(${150}% at ${100}% ${100}%)`,
    },
    "-=3"
  )
  .from(
    ".projects .JavaScript .pro2 .illus .git-link",
    {
      duration: 1,
      opacity: 0,
    },
    "-=3"
  )
  .from(
    ".projects .JavaScript .wait",
    {
      duration: 1,
      y: 50,
      opacity: 0,
    },
    "-=3"
  );

// project
// project cpp tab
let projectInfo_project_cpp1 = gsap.timeline({
  scrollTrigger: {
    toggleActions: "play none none none",
    start: "start 50%",
    trigger: ".Cpp .pro1",
  },
});

projectInfo_project_cpp1
  .from(
    ".projects .Cpp .pro1 .top-heading div",
    {
      opacity: 0,
      duration: 1,
      x: -50,
      stagger: 0.2,
    },
    "-=1"
  )
  .from(
    ".projects .Cpp .pro1 .desc",
    {
      opacity: 0,
      duration: 2,
      ease: "power2.in",
    },
    "-=2.5"
  )

  .from(
    ".projects .Cpp .pro1 .package-incl .main-title",
    {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    },
    "-=2"
  )
  .from(
    ".projects .Cpp .pro1 .package-incl .icons .title",
    {
      x: -50,
      opacity: 0,
      duration: 2,
      ease: "power2.in",
      stagger: 0.3,
    },
    "-=2.5"
  )
  .from(
    ".projects .Cpp .pro1 .package-incl .icons .icon-list img",
    {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power2.in",
      stagger: 0.2,
    },
    "-=2.2"
  )
  .fromTo(
    ".projects .Cpp .pro1 .illus img",
    {
      clipPath: `circle(${0}% at ${100}% ${100}%)`,
    },
    {
      duration: 5,
      clipPath: `circle(${150}% at ${100}% ${100}%)`,
    },
    "-=3.7"
  )
  .from(
    ".projects .Cpp .pro1 .illus .git-link",
    {
      duration: 1,
      opacity: 0,
    },
    "-=2.5"
  )
  .from(
    ".projects .Cpp .wait",
    {
      duration: 1,
      y: 50,
      opacity: 0,
    },
    "-=3"
  );

// project
// project cpp tab
let projectInfo_project_python1 = gsap.timeline({
  scrollTrigger: {
    toggleActions: "play none none none",
    start: "start 50%",
    trigger: ".Python .pro1",
  },
});

projectInfo_project_python1
  .from(
    ".projects .Python .pro1 .top-heading div",
    {
      opacity: 0,
      duration: 1,
      x: -50,
      stagger: 0.2,
    },
    "-=1"
  )
  .from(
    ".projects .Python .pro1 .desc",
    {
      opacity: 0,
      duration: 2,
      ease: "power2.in",
    },
    "-=2.5"
  )

  .from(
    ".projects .Python .pro1 .package-incl .main-title",
    {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    },
    "-=2"
  )
  .from(
    ".projects .Python .pro1 .package-incl .icons .title",
    {
      x: -50,
      opacity: 0,
      duration: 2,
      ease: "power2.in",
      stagger: 0.3,
    },
    "-=2.5"
  )
  .from(
    ".projects .Python .pro1 .package-incl .icons .icon-list img",
    {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power2.in",
      stagger: 0.2,
    },
    "-=2.2"
  )
  .fromTo(
    ".projects .Python .pro1 .illus img",
    {
      clipPath: `circle(${0}% at ${100}% ${100}%)`,
    },
    {
      duration: 5,
      clipPath: `circle(${150}% at ${100}% ${100}%)`,
    },
    "-=3.7"
  )
  .from(
    ".projects .Python .pro1 .illus .git-link",
    {
      duration: 1,
      opacity: 0,
    },
    "-=2.5"
  )
  .from(
    ".projects .Python .wait",
    {
      duration: 1,
      y: -50,
      opacity: 0,
    },
    "-=3"
  )
  .from(
    ".projects .Python .progress",
    {
      duration: 1,
      x: -50,
      opacity: 0,
    },
    "-=2"
  );
