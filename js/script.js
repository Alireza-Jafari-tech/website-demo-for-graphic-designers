document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".X-btn");
  const topSection = document.getElementById("header-top-section");

  closeBtn.addEventListener("click", function () {
    topSection.style.display = "none";
  });
});

function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// hamburgur menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector("#header-nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle('show');
  menuToggle.classList.toggle('active');
});
