// footer accordion
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

let isDown = false;
let startX;
let scrollLeft;

// menu trigger

const menuTrigger=document.querySelector(".menu-trigger")
const menuButtons=document.querySelector(".menu-buttons")
const threePoint=document.querySelector(".threePoint")
const x=document.querySelector(".x")


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
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

// about header button clicking and automatically closing div

document.addEventListener('DOMContentLoaded', () => {
    const headerBtn = document.querySelector('.headerBtn');
    const headerBtnClick = document.querySelector('.headerBtn-click');
    const close = document.querySelector('.close');
    
    headerBtn.addEventListener('click', () => {
        if (headerBtnClick.style.display === 'none' || headerBtnClick.style.display === '') {
            headerBtnClick.style.display = 'flex';
            headerBtn.style.display = 'none';  
            close.style.display = 'block';
        } else {
            headerBtnClick.style.display = 'none';
            close.style.display = 'none';
            headerBtn.style.display = 'flex'; 
        }
    });

    close.addEventListener('click', () => {
        headerBtnClick.style.display = 'none';
        close.style.display = 'none';
        headerBtn.style.display = 'flex'; 
    });

    const handleResize = () => {
        if (window.innerWidth >= 992) {
            headerBtnClick.style.display = 'none';
            close.style.display = 'none';
            headerBtn.style.display = 'flex';
        }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();
});


// Here i worked about the translator

// document.getElementById('toggleLanguage').addEventListener('click', function() {
//     const elements = document.querySelectorAll('[data-georgian][data-english]');
//     elements.forEach(el => {
//         const georgianText = el.getAttribute('data-georgian');
//         const englishText = el.getAttribute('data-english');
//         if (el.innerText === georgianText) {
//             el.innerText = englishText;
//         } else {
//             el.innerText = georgianText;
//         }
//     });
// });


// Feat header's dropdown menu

document.querySelector('.hdr-prod').addEventListener('click', function() {
  toggleDisplay('header-product');
});

document.querySelector('.hdr-offer').addEventListener('click', function() {
  toggleDisplay('header-offer');
});

document.querySelector('.hdr-concept').addEventListener('click', function() {
  toggleDisplay('header-concept');
});

function toggleDisplay(className) {
  const dropDown = document.querySelector('.header-dropDown');
  const targetElement = document.querySelector('.lists .' + className);
  
  if (targetElement.classList.contains('active')) {
    targetElement.classList.remove('active');
    dropDown.classList.remove('active');
  } else {
    document.querySelectorAll('.lists .lst').forEach(function(el) {
      el.classList.remove('active');
    });
    targetElement.classList.add('active');
    dropDown.classList.add('active');
  }
  
  if (document.querySelectorAll('.lists .lst.active').length === 0) {
    dropDown.classList.remove('active');
  } else {
    dropDown.classList.add('active');
  }
}

