const requestURL = 'https://melissahalldesign.github.io/final-project/json/temple.json';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        //console.table(jsonObject); //temporary testing
        for (let i = 0; i < temples.length; i++) { 
            let templecard = document.createElement('section');
            let h2 = document.createElement('h2');
            let templename = document.createElement('p');
            let templeaddress = document.createElement('p');
            let phone = document.createElement('p');
            let image = document.createElement('img');
            h2.textContent = temples[i].templename + ' ' + temples[i].templename;
            templeaddress.textContent = 'Date of Birth: ' + temples[i].templeaddress;
            phone.textContent =  'Place of Birth: ' + temples[i].phone;
            image.textContent = temples[i].templename + ' ' + temples[i].imageurl;
            image.setAttribute('src', temples[i].imageurl);
            image.setAttribute('alt', temples[i].templename + ' ' + temples[i].templename + ' - ' + temples[i].order);
            templecard.appendChild(h2);
            templecard.appendChild(templename);
            templecard.appendChild(templeaddress);
            templecard.appendChild(phone);
            templecard.appendChild(image);
            document.querySelector('div.templecards').appendChild(templecard);
        }
    });