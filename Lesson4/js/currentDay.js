const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentDay').textContent = new Date().toLocaleDateString('en-GB', options);
  