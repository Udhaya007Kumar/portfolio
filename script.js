var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');


function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);


// Banner

// const sliderelement = document.getElementById('slider');
// const totalSlides = sliderelement.childElementCount;  // Get the total number of slides
// let currentSliderID = 1;  // Set initial slide to the first one

// function next() {
//    if (currentSliderID < totalSlides) {
//       currentSliderID++;
//       show();
//    }
// }

// function prev() {
//    if (currentSliderID > 1) {
//       currentSliderID--;
//       show();
//    }
// }

// function show() {
//    const slides = document.getElementById('slider').getElementsByTagName('li');
//    for (let index = 0; index < totalSlides; index++) {
//       const element = slides[index];
//       if (currentSliderID === index + 1) {
//          element.classList.remove('hidden');  // Show the current slide
//       } else {
//          element.classList.add('hidden');  // Hide all other slides
//       }
//    }
// }

// // Initialize by showing the first slide
// show();

