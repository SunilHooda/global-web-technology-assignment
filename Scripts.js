const showSidebar = () => {
  const sideBar = document.querySelector(".sideBar");
  sideBar.style.display = "flex";
};

const hideSidebar = () => {
  const sideBar = document.querySelector(".sideBar");
  sideBar.style.display = "none";
};

//Banner Slider
let images = document.querySelectorAll(".BannerSlider > img");
let currentImage = 0;

function slideImage() {
  images[currentImage].classList.remove("active");
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add("active");
}

//---Set the first image as active initially
images[currentImage].classList.add("active");

//9 pic slider
// const slideContainers = [...document.querySelectorAll(".slideContainer")];
// const nxtBtn = [...document.querySelectorAll(".slider > .nxt-btn")];
// const preBtn = [...document.querySelectorAll(".slider > .pre-btn")];

// slideContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtn[i].addEventListener("click", () => {
//     item.scrollLeft += containerWidth;
//   });

//   preBtn[i].addEventListener("click", () => {
//     item.scrollLeft -= containerWidth;
//   });
// });

//Change Face Hair Body Tags
const faceTag = document.querySelector(".FaceTag");
const hairTag = document.querySelector(".HairTag");
const bodyTag = document.querySelector(".BodyTag");

const faceItems = document.querySelector(".faceProductItems");
const hairItems = document.querySelector(".hairProductItems");
const bodyItems = document.querySelector(".bodyProductItems");

faceTag.addEventListener("click", () => {
  hairTag.classList.remove("active");
  bodyTag.classList.remove("active");
  faceTag.classList.add("active");

  hairItems.style.display = "none";
  hairItems.classList.remove(".productItems");

  bodyItems.style.display = "none";
  bodyItems.classList.remove(".productItems");

  faceItems.style.display = "flex";
  faceItems.classList.add(".productItems");
});

hairTag.addEventListener("click", () => {
  faceTag.classList.remove("active");
  bodyTag.classList.remove("active");
  hairTag.classList.add("active");

  faceItems.style.display = "none";
  faceItems.classList.remove(".productItems");

  bodyItems.style.display = "none";
  bodyItems.classList.remove(".productItems");

  hairItems.style.display = "flex";
  hairItems.classList.add(".productItems");
});

bodyTag.addEventListener("click", () => {
  faceTag.classList.remove("active");
  hairTag.classList.remove("active");
  bodyTag.classList.add("active");

  faceItems.style.display = "none";
  faceItems.classList.remove(".productItems");

  hairItems.style.display = "none";
  hairItems.classList.remove(".productItems");

  bodyItems.style.display = "flex";
  bodyItems.classList.add(".productItems");
});
