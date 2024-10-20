document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#specific-button button");
  const mainImage = document.getElementById("main-image");

  // Array of image sources
  const images = [
    "images/behind-waterfall.jpg",
    "images/forest.jpg",
    "images/tiny-lake.jpg",
    "images/water.jpg",
  ];

  // Track current image index
  let currentIndex = 0;

  //Update main image when spesific buttons are clicked
  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      currentIndex = index;
      mainImage.src = images[currentIndex];
    });
  });

  // Previous button click
  document.getElementById("next-button").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    // Move to next image and wrap around
    mainImage.src = images[currentIndex];
  });

  // Previous button click
  document
    .getElementById("previous-button")
    .addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      // Move to next image and wrap around
      mainImage.src = images[currentIndex];
    });
});
