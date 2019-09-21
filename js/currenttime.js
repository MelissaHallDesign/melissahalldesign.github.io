const options = {time: 'numeric'};
document.getElementById('currenttime').textContent = new Time().toLocaleDateString('en-US', options);
  