const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});

const btn = document.querySelector(".btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
