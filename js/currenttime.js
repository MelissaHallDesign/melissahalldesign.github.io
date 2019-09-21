function currenttime() {
    var x = new Date(document.lastModified);
    document.getElementById("currenttime").innerHTML = x;
  }