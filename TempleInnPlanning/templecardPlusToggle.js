const requestURL = 'https://api.myjson.com/bins/kqyrw';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        //console.table(jsonObject); //temporary testing
        for (let i = 0; i < temples.length; i++) { 
            let templecard = document.createElement('p');
            let closure = document.createElement('p');

            closure.textContent = 'Closure schedule: ' + temples[0].closure;
            templecard.appendChild(closure);
            document.querySelector('div.closurecard').appendChild(templecard);
        }
        const requestURL = 'https://api.myjson.com/bins/kqyrw';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
        .then(function (jsonObject) {
            const temples = jsonObject['temples'];
            //console.table(jsonObject); //temporary testing
            for (let i = 0; i < temples.length; i++) { 
                let templecard1 = document.createElement('p');
                let closure = document.createElement('p');
    
                closure.textContent = 'Closure schedule: ' + temples[1].closure;
                templecard.appendChild(closure);
                document.querySelector('div.closurecardM').appendChild(templecard1);
            }
    });


    var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
    })