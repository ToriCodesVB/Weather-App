let currentDate = document.querySelector("#date");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hours = now.getHours();
let minutes = now.getMinutes();
let day = days[now.getDay()];
let todayDate = `${day}, ${hours}:${minutes}`;
currentDate.innerHTML = `${todayDate}`;

function search(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  currentCity.innerHTML = cityInput.value;

  console.log(cityInput.value);
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);