const container = document.getElementById("container");
const text = document.getElementById("text");
const startBtn = document.getElementById("start");
const finishBtn = document.getElementById("finish");
const pointerContainer = document.getElementById("pointer-container");

const totalTime = 10000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breatheAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "Hold";
    setTimeout(() => {
      text.innerText = "Breathe out";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

startBtn.addEventListener("click", () => {
  pointerContainer.classList.add("rotate");
  breatheAnimation();
  const interval = setInterval(breatheAnimation, totalTime);
  startBtn.disabled = true;
  startBtn.innerText = "";
});

finishBtn.addEventListener("click", () => {
  location.reload();
});
