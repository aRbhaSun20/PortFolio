
const pageIndications = document.querySelectorAll(".page-indi a");

const sectionContainers = document.querySelectorAll("section");

// page Indication
pageIndications.forEach((pageIndicator) => {
	pageIndicator.addEventListener("click", () => {
		pageIndications.forEach((pageIndi) => {
			pageIndi.classList.remove("active");
		});
		pageIndicator.classList.add("active");
	});
});

const scrollIndi = [0, 640, 1350, 2150];
// scroll
window.addEventListener("scroll", (evnt) => {
	evnt.preventDefault();
	scrollIndi.forEach((indi, index) => {
		if (Math.floor(this.scrollY) > indi) {
			pageIndications.forEach((scrollIndi) => {
				scrollIndi.classList.remove("active");
			});

			pageIndications[index].classList.add("active");
		}
	});
});


