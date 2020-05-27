function show() {
  var x = document.getElementById("info");
  if (x.className === "info-feld") {
    x.className += " show";
    } else {
    x.className = "info-feld";
    }
   }