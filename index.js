function generateRandomNumber(image) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
  
    if (randomNumber === 1) {
      image.setAttribute("src", "images/dice1.png");
    } else if (randomNumber === 2) {
      image.setAttribute("src", "images/dice2.png");
    } else if (randomNumber === 3) {
      image.setAttribute("src", "images/dice3.png");
    } else if (randomNumber === 4) {
      image.setAttribute("src", "images/dice4.png");
    } else if (randomNumber === 5) {
      image.setAttribute("src", "images/dice5.png");
    } else {
      image.setAttribute("src", "images/dice6.png");
    }
  
    return randomNumber;
  }
  
  function printTittle() {
    var h1 = document.querySelector("h1");
  
    var image = document.getElementsByClassName("img1")[0];
    var randomNumber1 = generateRandomNumber(image);
  
    var image1 = document.getElementsByClassName("img2")[0];
    var randomNumber2 = generateRandomNumber(image1);
  
    if (randomNumber1 === randomNumber2) {
      h1.textContent = "Koi ni jeeta !";
    } else if (randomNumber1 > randomNumber2) {
      h1.textContent = "Dekh beta baap hota hai🚩";
    } else {
      h1.textContent = "hum first hum first🚩";
    }
  }
  
  printTittle();
