const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Open modal on image click
document.querySelectorAll(".mockup img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

// Close modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
