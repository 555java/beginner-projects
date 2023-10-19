const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

//initialize word
let randomWord;
//init score
let score = 0;

//init time
let time = 10;

let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

//focus on text on start
text.focus();

//start counting down
const timeInterval = setInterval(updateTime, 1000);

async function getRandomWord() {
  let url = "https://random-word-api.herokuapp.com/word?number=1";
  let response = await fetch(url);
  let data = await response.json(); // читаем ответ в формате JSON
  return data[0];
}

async function addWordToDOM() {
  randomWord = await getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  //   scoreEl.innerHTML = +scoreEl.innerHTML + 1;
  score++;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>`;
  endgameEl.style.display = "flex";
}

addWordToDOM();

//event lissteners
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    e.target.value = "";

    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 5;
    }
    updateTime();
  }
});

settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("hide");
});

settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
