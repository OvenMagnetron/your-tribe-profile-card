function myFlipFunction() {
  var myElement = document.getElementById("thecard");
  myElement.classList.toggle("flipper");

  var buttonElement = document.querySelector('.button');

  if (buttonElement) {
    var currentColor = buttonElement.style.color;
    console.log(currentColor)

    if (currentColor === 'rgb(229, 225, 225)' || currentColor === '') {
      buttonElement.style.color = '#252525';
    } else {
      buttonElement.style.color = '#E5E1E1';
    }
  }

}
