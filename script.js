const btn = document.getElementById("surpriseBtn");
const heartContainer = document.getElementById("heartContainer");
const modal = document.getElementById("letterModal");

btn.onclick = () => {
  let img = document.createElement("img");
  img.src = "heart.png";
  img.className = "heart-img";

  img.onclick = () => {
    modal.style.display = "flex";
  };

  heartContainer.appendChild(img);
};

function closeLetter() {
  modal.style.display = "none";
}
