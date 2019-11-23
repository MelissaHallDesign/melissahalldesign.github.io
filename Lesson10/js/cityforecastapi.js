const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473,5607916,5585010&units=imperial&APPID=8edd374362f96360d97da10d2909e8b7";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp')
    .textContent = jsObject.main.temp;
    document.getElementById('current-temp')
    .textContent = jsObject.main.temp;
    document.getElementById('current-temp')
    .textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

  });