const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp')
    .textContent = jsObject.main.temp;
    document.getElementById('temp')
    .textContent = jsObject.main.temp_max;
    document.getElementById('humidity')
    .textContent = jsObject.main.humidity;
    document.getElementById('speed')
    .textContent = jsObject.wind.speed;
  });