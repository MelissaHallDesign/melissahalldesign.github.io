const options = {time: 'numeric'};
document.getElementById('currenttime').textContent = new Time().toLocaleTimeString('en-US', options);