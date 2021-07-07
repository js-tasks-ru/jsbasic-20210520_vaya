function initCarousel() {
  // ваш код...
  let right = document.querySelector(".carousel__arrow_right");
  let left = document.querySelector(".carousel__arrow_left");
  let inner = document.querySelector(".carousel__inner");
  let lengthSlide = (inner.children.length - 1) * inner.offsetWidth;
  let width = 0;
  left.style.display = "none";
  right.addEventListener("click", () => {
    width += inner.offsetWidth;
    inner.style.transform = `translateX(-${width}px)`;
    if (lengthSlide > width > 0) {
      left.style.display = "";
    } else if (width == lengthSlide) {
      right.style.display = "none";
    }
  });
  left.addEventListener("click", () => {
    width -= inner.offsetWidth;
    inner.style.transform = `translateX(-${width}px)`;
    if (width == 0) {
      left.style.display = "none";
    } else if (lengthSlide > width) {
      right.style.display = "";
    }
  });
}
