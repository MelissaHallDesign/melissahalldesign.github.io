const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.table(jsonObject); //temporary testing
        for (let i = 0; i < towns.length; i++) { 
            if (towns[i] ==="Fish Haven" || towns[i] ==="Soda Springs" || towns[i] ==="Preston"){
            let card = document.createElement('section');
            let span = document.createElement('span');
            let h2 = document.createElement('h2');
            let motto = document.createElement('i');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let image = document.createElement('img');
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent =  'Year Founded: ' + towns[i].yearFounded;
            currentPopulation.textContent =  'Population: ' + towns[i].currentPopulation;
            averageRainfall.textContent =  'Annual Rain Fall: ' + towns[i].averageRainfall;
            card.appendChild(span);
            span.appendChild(h2);
            span.appendChild(motto);
            span.appendChild(yearFounded);
            span.appendChild(currentPopulation);
            span.appendChild(averageRainfall);
            card.appendChild(image);
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            
            document.getElementsByClassName('towncards').appendChild(card);
        }
        }
    });