const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word"
);
let arr_en = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let arr_ru = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ь",
  "ы",
  "ъ",
  "э",
  "ю",
  "я",
];

const figureParts = document.querySelectorAll(".figure-part");

async function getRandomWord() {
  let url = "https://random-word-api.herokuapp.com/word?number=1";
  let response = await fetch(url);

  let data = await response.json(); // читаем ответ в формате JSON
  console.log(data);
  return data[0];
}

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordEl.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) =>
        `<span class="letter">${
          correctLetters.includes(letter) ? letter : ""
        }</span>`
    )
    .join("")}`;
  const innerWord = wordEl.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations!you won!";
    popup.style.display = "flex";
  }
}
//update show notification

function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? `<p>Wrong</p>` : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}`;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerHTML = `Unfortunately youre lost.</br> The word was ${selectedWord}`;
    popup.style.display = "flex";
  }
}

function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}
//keydown letter press
window.addEventListener("keydown", (e) => {
  const letter = e.key;
  if (arr_en.includes(letter)) {
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  } else {
    alert("Смените раскладку или отключите Caps Lock");
  }
});

playAgainBtn.addEventListener("click", () => {
  correctLetters.splice(0);
  wrongLetters.splice(0);

  //вставить нвоое слово

  initApp();

  updateWrongLettersEl();
  popup.style.display = "none";
});

let selectedWord = "";
async function initApp() {
  selectedWord = await getRandomWord();
  console.log(selectedWord);
  displayWord();
}
initApp();
