let landing = document.querySelector(".landing");
let tochangeImg = document.querySelectorAll(".carousel-arrow");
let cuurrentImgIndex = 0;

let landingImg = [
  "photo/book-8643904_1920.jpg",
  "photo/books-5615562_1920.jpg",
  "photo/magazine-806073_1920.jpg",
];
tochangeImg.forEach((e) => {
  e.addEventListener("click", function (e) {
    landing.style.backgroundImage = `url(${landingImg[cuurrentImgIndex]})`;
    cuurrentImgIndex++;
    if (cuurrentImgIndex > landingImg.length - 1) {
      cuurrentImgIndex = 0;
    }
  });
});
