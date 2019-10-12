const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-GB', options);
  