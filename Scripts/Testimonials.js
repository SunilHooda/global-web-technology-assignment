var currentIndex = 0;
leftSlide();
function leftSlide() {
  var testimonialCard = document.querySelectorAll(".testimonialCard");

  for (let i = 0; i < testimonialCard.length; i++) {
    testimonialCard[i].style.display = "none";
  }

  for (let i = currentIndex; i < currentIndex + 4; i++) {
    testimonialCard[i].style.display = "flex";
  }

  currentIndex += 4;
  if (currentIndex >= testimonialCard.length || currentIndex <= 0) {
    currentIndex = 0;
  }
}

function rightSlide() {
  var testimonialCard = document.querySelectorAll(".testimonialCard");

  for (let i = 0; i < testimonialCard.length; i++) {
    testimonialCard[i].style.display = "none";
  }

  for (let i = currentIndex; i < currentIndex + 4; i++) {
    testimonialCard[i].style.display = "flex";
  }

  currentIndex = currentIndex - 4;
  if (currentIndex <= 0 || currentIndex >= testimonialCard.length) {
    currentIndex = 0;
  }
}
