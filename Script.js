//accordion
const container = document.querySelector("footer");
let active = null;

container.addEventListener("click", (event) => {
    const questionDiv = event.target.closest(".question-div");

    if (questionDiv) {
        questionDiv.classList.toggle("active");

        if (active && active !== questionDiv) {
            active.classList.remove("active");
        }

        if (questionDiv.classList.contains("active")) {
            active = questionDiv;
        } else {
            active = null;
        }
    }
});

//slider

const slider = document.querySelector(".slider");
const indicator = document.querySelector(".indicator");
const slideWidth =
  document.querySelector(".slide").offsetWidth +
  parseFloat(getComputedStyle(slider).gap);

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  if (isDown) {
    slideToNearestSlide();
  }
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  if (isDown) {
    slideToNearestSlide();
  }
  isDown = false;
  console.log(isDown);
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();

  let currentX = e.pageX - slider.offsetLeft;
  let walk = currentX - startX;

  slider.scrollLeft = scrollLeft - walk;
  updateIndicator();
});

function updateIndicator() {
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
  const percentageScrolled = (slider.scrollLeft / maxScrollLeft) * 100;
  const indicatorWidth = (indicator.clientWidth / slider.clientWidth) * 100;
  const leftPosition = (percentageScrolled * (100 - indicatorWidth)) / 100;

  indicator.style.left = `${leftPosition}%`;
}

function slideToNearestSlide() {
  const currentScroll = slider.scrollLeft;

  const exactScrollPosition = currentScroll / slideWidth;
  const currentSlideIndex = Math.round(exactScrollPosition);

  const newScrollLeft = currentSlideIndex * slideWidth;

  slider.scrollTo({
    left: newScrollLeft,
    behavior: "smooth",
  });
}
// menu trigger

const menuTrigger=document.querySelector(".menu-trigger")
const menuButtons=document.querySelector(".menu-buttons")
const threePoint=document.querySelector(".threePoint")
const x=document.querySelector(".x")


menuTrigger.addEventListener('click', () => {
    if (menuButtons.style.display === 'flex') {
        menuButtons.style.display = 'none';
    } else {
        menuButtons.style.display = 'flex';
    }

if (menuButtons.style.display === 'flex'){
    threePoint.style.display="none"
   x.style.display="flex"
}else if (menuButtons.style.display === 'none'){
  threePoint.style.display="flex"
   x.style.display="none"

}
});