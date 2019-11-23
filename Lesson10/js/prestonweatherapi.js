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

    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
        for (let i = 0; i < jsObject.list.length; i++){
          if (jsObject.list[i].dt_txt.includes('18:00:00')) {
            console.log(jsObject.list[i].main.temp.toFixed(0));
          }
        }
      });

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

    runWindChill();
  });
  function runWindChill(){
    var temp = parseFloat(document.getElementById('current-temp').textContent);
    var speed = parseFloat(document.getElementById('speed').textContent);
  if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('calc').innerHTML = Math.round(calc);
}
  else {
    document.getElementById('calc').innerHTML = 'N/A';
}
}
/*function calc(temp, speed) {
  var result = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        return result;
}
  /*var temp = parseFloat(document.getElementById('temp').textContent);
var speed = parseFloat(document.getElementById('speed').textContent);
if (temp <= 50 && speed >= 3) {
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('calc').innerHTML = Math.round(calc);
}
else {
    document.write = 'N/A';
}
*/