const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', time: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
new Date(new Date().setDate(new Date().getDate() + 1))
  