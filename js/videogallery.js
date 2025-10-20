const openVideo = document.getElementById("openVideo");
const modal = document.getElementById("videoModal");
const closeBtn2 = modal.querySelector(".close");
const iframe = document.getElementById("videoFrame");

// URL de tu video (puedes reemplazarla)
const videoURL = "https://www.youtube.com/embed/XqA6SJpqiOk?si=IFD7Mz_UE-GjPRs3";

openVideo.onclick = () => {
  modal.style.display = "flex";
  iframe.src = videoURL;
  console.log("dasd")
};

closeBtn2.onclick = () => {
  modal.style.display = "none";
  iframe.src = ""; // detiene el video
};

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
};
