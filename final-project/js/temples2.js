const requestURL = 'https://api.myjson.com/bins/kqyrw';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        //console.table(jsonObject); //temporary testing
        for (let i = 0; i < temples.length; i++) { 
            let templecard = document.createElement('section');
            
            let closure = document.createElement('p');
            
            closure.textContent = 'Closure schedule: ' + temples[i].closure;
           
            templecard.appendChild(closure);
            document.querySelector('div.closurecards').appendChild(templecard);
        }
    });