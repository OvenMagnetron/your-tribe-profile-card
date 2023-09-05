function myFlipFunction() {
  var myElement = document.getElementById("thecard");
  if (myElement.classList.contains("flipper")) {
    myElement.classList.remove("flipper");
  } else {
    myElement.classList.remove("floating");
    myElement.classList.add("flipper");
  }
}
