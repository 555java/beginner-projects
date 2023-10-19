const projectContainer = document.getElementById("projectContainer");

const projects = [
  [
    "1.opening cards",
    "1.png",
    "Nice effect for a photo gallery, clicking on the image triggers its expansion.",
  ],
  [
    "2.progress",
    "2.png",
    "Styled from scratch, the progress element consists of a few steps. It's always fascinating how modern libraries can make your life easy, so you don't need to style everything from scratch.",
  ],
  [
    "3.rotate menu",
    "3.png",
    "An extraordinary decision for a landing page. The rotating menu is fun and catchy.",
  ],
  [
    "4.search icon",
    "4.png",
    "Even the smallest elements on your website can make a difference. The search icon is one of them; the feeling of smart and useful design always cheers me up!",
  ],
  [
    "5.bluring image loading",
    "5.png",
    "The progress you make while learning HTML and CSS comes with discovering how many effects you can achieve with just such simple tools, even blurring the image in the background dynamically. So impressive for a beginner!",
  ],
  [
    "6.Scroll to see the animation",
    "6.png",
    "Using instruments to communicate with the user's window is crucial. It was interesting to learn about window coordinates and how you can know the exact position of an element.",
  ],
  [
    "7.array methods",
    "7.png",
    "This project had the idea to make you familiar with some array methods such as sort, map, filter, reduce with a very visually understandable outcome. Although, the first use of some API looked like a miracle!",
  ],
  [
    "8.audio player",
    "8.png",
    "This is my FAVORITE project! I was obsessed with the idea of creating the background which changes color randomly while music is playing. The solution was so long and complicated, but I managed it and was very proud of myself. The features of the audio progress bar as well as time and rotating cover were challenging too.",
  ],
  [
    "9.breakout game",
    "9.png",
    "Having fun while learning new technologies is helpful, so even the canvas can be attractive, and navigating through all those coordinates becomes less boring.",
  ],
  [
    "10.exchange",
    "10.png",
    "This project is a user-friendly and practical currency converter. Users select two currencies, input an amount, and instantly see the converted equivalent, all powered by real-time exchange rate data.",
  ],
  [
    "11.expense tracker with local storage",
    "11.png",
    "This project is a finance tracker application. The application displays these transactions, categorizes them as income or expenses, and updates the balance in real-time. Transactions are stored in local storage for persistence.",
  ],
  [
    "12.form validation",
    "12.png",
    "This JavaScript code is designed for form validation. This JavaScript code forms a crucial part of form validation for user registration. It ensures that users provide accurate and complete information while filling out the form.",
  ],
  [
    "13.hangman",
    "13.png",
    "Another game with an outer API. Hangman-style game is a classic and can be realized in many different ways, so it's another chance to use it for learning JS and styling web pages.",
  ],
  [
    "14.meal finder",
    "14.png",
    "It is the case where you can realize a really useful learning project for yourself. The meal-finder is an app that allows you to find a dish to cook with your search word or even just get a random meal.",
  ],
  [
    "15.movie booking",
    "15.png",
    "The movie ticket booking app is one more project working with local storage, real-time updating count and chosen seats. It looks nice because of styling, and everything is just simple geometry. It was fun to know how the rotate property works so smart.",
  ],
  [
    "16.relaxer",
    "16.png",
    "Relaxer app which can help you stay calm and concentrated on your breath. Proper usage of CSS allows you to create simple animations and interesting color effects.",
  ],
  [
    "17.snake",
    "17.png",
    "Snake game. Once you become familiar with something, it's important to strengthen it. So it's my project of a snake game developed with canvas. It was amusing to invent some JS logic, especially when you start to learn JS and know exactly how the game should be.",
  ],
  [
    "18.speed typing",
    "18.png",
    "Speed typing game. A fun way to use the random word API and some logic to make gambling and a very useful app.",
  ],
];

let container = document.createElement("div");

projects.forEach((projectName) => {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="col">
          <div class="card h-100">
            <a href="/${projectName[0]}/index.html">
              <img
                src="/previews/${projectName[1]}"
                class="card-img-top"
                alt="..."
            /></a>
            <div class="card-body">
              <p class="card-text">
                ${projectName[2]}
              </p>
            </div>
          </div></div>
        `
  );
});

projectContainer.innerHTML = container.innerHTML;
