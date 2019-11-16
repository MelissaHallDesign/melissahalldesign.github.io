const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary testing
        const towns = jsonObject['towns'];
        const idahoTowns = ["Fish Haven", "Soda Springs", "Preston"];
        for (let i = 0; i < towns.length; i++) { 
            if (idahoTowns.includes(towns[i].name)) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let image = document.createElement('img');
            card.className = 'towncards';
            motto.className = 'motto';
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent =  'Year Founded: ' + towns[i].yearFounded;
            currentPopulation.textContent =  'Population: ' + towns[i].currentPopulation;
            averageRainfall.textContent =  'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(yearFounded);
            card.appendChild(currentPopulation);
            card.appendChild(averageRainfall);
            card.appendChild(image);
            document.querySelector('div.towncards').appendChild(card);
        }
        }
    });