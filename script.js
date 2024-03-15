let currentTime = document.querySelector("#current-time");

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
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();

currentTime.innerHTML = `${day} ${hours}:${minutes}`;

function updateCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#new-city");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = newCity.value;
}

let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", updateCity);
searchCity.addEventListener("submit", updateTemperature);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = "51";
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = "11";
}

let toFahrenheit = document.querySelector("#to-fahrenheit");
toFahrenheit.addEventListener("click", convertToFahrenheit);

let toCelsius = document.querySelector("#to-celsius");
toCelsius.addEventListener("click", convertToCelsius);

function updateTemperature(event) {
  event.preventDefault();
  let city = document.querySelector("#new-city");
  console.log(city.value);
  let apiKey = "64469ac67e6dc941feb5b50915a18dc7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(function (response) {
    console.log(response);
    let newTemperature = Math.round(response.data.main.temp);
    let temperature = document.querySelector("#temp");
    temperature.innerHTML = newTemperature;
  });
}

function newPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
  let apiPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiPoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(function (response) {
    console.log(response);
  });
}
navigator.geolocation.getCurrentPosition(newPosition);
