const loader = document.querySelector(".loader");

// Désactive le scroll en ajoutant la classe no-scroll au body
document.body.classList.add("no-scroll");

window.addEventListener("load", () => {
  // Ajoute la classe pour l'animation de fondu-out (si nécessaire)
  loader.classList.add("fondu-out");

  // Une fois l'animation terminée (par exemple 0.5s), on supprime le loader et on réactive le scroll
  setTimeout(() => {
    loader.remove();
    
    // Réactive le scroll en retirant la classe no-scroll du body
    document.body.classList.remove("no-scroll");
  }, 500); // Ajuste ce délai en fonction de la durée de ton animation de fondu-out
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
