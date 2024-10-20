document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#spesific-button button");
  const mainImage = this.document.getElementById("main-image");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const newImageSrc = button.getAttribute("data-image");
      mainImage.src = newImageSrc;
    });
  });
});
