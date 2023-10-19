const main = document.getElementById("main");
const addUserBtn = document.getElementById("add_user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show_millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate_wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//fetch random user add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}

function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

function sortByMoney() {
  data = data.sort((a, b) => {
    return +b.money - +a.money;
  });
  updateDOM();
}

function filterMillionaires() {
  data = data.filter((user) => {
    return user.money > 1000000;
  });
  updateDOM();
}

function calculateWealth() {
  const wealth = data.reduce((acc, user) => acc + user.money, 0);
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total wealth:<strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}

//Add new obj to data arr
function addData(obj) {
  data.push(obj);
  updateDOM();
}

function updateDOM(providedData = data) {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

//Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByMoney);
showMillionairesBtn.addEventListener("click", filterMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);
