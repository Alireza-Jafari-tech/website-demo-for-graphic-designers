document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".X-btn");
  const topSection = document.getElementById("header-top-section");

  closeBtn.addEventListener("click", function () {
    topSection.style.display = "none";
  });
});