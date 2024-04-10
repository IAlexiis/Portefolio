const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  loader.remove();
});

const txtAnim = document.querySelector(".titre-box1 h2");

new Typewriter(txtAnim, {
  deleteSpeed: 50,
  loop: true,
})
  .changeDelay(100)
  .typeString("Développement Web")
  .pauseFor(400)
  .deleteChars(17)
  .pauseFor(400)
  .typeString("Web Design")
  .pauseFor(400)
  .deleteChars(9)
  .start();

const txtAnim2 = document.querySelector(".titre-box2 h2");

new Typewriter(txtAnim2, {
  deleteSpeed: 50,
  loop: true,
})
  .changeDelay(100)
  .typeString("Graphisme")
  .pauseFor(400)
  .deleteChars(9)
  .pauseFor(400)
  .typeString("Photoshop | Illustrator | InDesign")
  .pauseFor(400)
  .deleteChars(35)
  .start();

const txtAnim3 = document.querySelector(".titre-box3 h2");

new Typewriter(txtAnim3, {
  deleteSpeed: 50,
  loop: true,
})
  .changeDelay(100)
  .typeString("Communication Digitale")
  .pauseFor(400)
  .deleteChars(22)
  .pauseFor(400)
  .typeString("Marketing Digital")
  .pauseFor(400)
  .deleteChars(20)
  .start();

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
