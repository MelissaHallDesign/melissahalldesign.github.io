//f = 35.74 + 0.6215t - 35.75s(0.16) + 0.4275ts(0.16)
//chill = 35.74 + 0.6215(temp) - (35.75(speed)0.16) + (0.4275) * temp * speed * 0.16
function windChill(){
var temp = parseFloat(document.getElementById('temp').textContent);
var speed = parseFloat(document.getElementById('speed').textContent);
if (temp <= 50 && speed >= 3) {
    var chillCalc = windChill(temp, speed);
    document.getElementById('chillCalc').innerHTML = Math.round(chillCalc);
}
else {
    document.write = 'N/A'
}
var calc = windChill(temp, speed);
function chillCalc(){
    var calc = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    return calc;
}
document.getElementById('chill').innerHTML = calc;
}



/* 
function doInputOutput(){
	var temp = parseFloat(document.getElementById('Temperature').value);
	var windspeed = parseFloat(document.getElementById('WindSpeed').value);
	var windChillVar = windChill(temp, windspeed);
    document.getElementById('outputDiv').innerHTML = windChillVar;
   }    

   function windChill(temp, windspeed) {
    var windChillFormula = 35.74 + temp * 0.6215 - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, 0.16);    
	return windChillFormula;
}

*/