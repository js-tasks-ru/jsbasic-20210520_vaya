function toggleText() {
  // ваш код...
  let button1 = document.querySelector(".toggle-text-button");
  let div1 = document.querySelector("#text");
  button1.addEventListener("click", ()=> {
    div1.toggleAttribute("hidden");
  });
}
