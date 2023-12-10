function changeCurrentLabels(response) {
  let label = document.querySelector("#current-city");
  label.innerHTML = `${response.data.city}`;

  let temperature = document.querySelector("#temperature-value");
  temperature.innerHTML = Math.round(`${response.data.temperature.current}`);
}

function search(event) {
  event.preventDefault();

  let userInput = document.querySelector("#search-input");
  let apiKey = "e2c0b68bt1bfbc04o7da0f6ea7720334";
  let url = `https://api.shecodes.io/weather/v1/current?query=${userInput.value}&key=${apiKey}&units=metric`;

  axios.get(url).then(changeCurrentLabels);
}

function formatDate(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    minutes = `0${hours}`;
  }

  return `${weekDays[day]} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
