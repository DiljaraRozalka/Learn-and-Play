var numberOfAnimalButtons = document.querySelectorAll(".farm").length;

for (var i = 0; i < numberOfAnimalButtons; i++) {

  document.querySelectorAll(".farm")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
var numberOfMusicButtons = document.querySelectorAll(".music").length;

for (var i = 0; i < numberOfMusicButtons; i++) {

  document.querySelectorAll(".music")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
var numberOfLetterButtons = document.querySelectorAll(".alphabet").length;

for (var i = 0; i < numberOfLetterButtons; i++) {

  document.querySelectorAll(".alphabet")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "cow":
      var tom1 = new Audio("sounds/Cow-moo-sound.mp3");
      tom1.play();
      break;

    case "chicken":
      var tom2 = new Audio("sounds/chicken.mp3");
      tom2.play();
      break;

    case "horse":
      var tom3 = new Audio('sounds/horse.mp3');
      tom3.play();
      break;

    case "pig":
      var tom4 = new Audio('sounds/pigfarm.mp3');
      tom4.play();
      break;

    case "cat":
      var snare = new Audio('sounds/cat.mp3');
      snare.play();
      break;

    case "sheep":
      var crash = new Audio('sounds/sheep.mp3');
      crash.play();
      break;

    case "dog":
      var kick = new Audio('sounds/dog.mp3');
      kick.play();
      break;

    case "goat":
      var kick = new Audio('sounds/goat.mp3');
      kick.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/a.mp3");
      tom1.play();
      break;

    case "b":
      var tom2 = new Audio("sounds/b.mp3");
      tom2.play();
      break;

    case "c":
      var tom3 = new Audio('sounds/c.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/d.mp3');
      tom4.play();
      break;

    case "e":
      var snare = new Audio('sounds/e.mp3');
      snare.play();
      break;
    case "f":
      var snare = new Audio('sounds/f.mp3');
      snare.play();
      break;
    case "g":
      var snare = new Audio('sounds/g.mp3');
      snare.play();
      break;
    case "h":
      var snare = new Audio('sounds/h.mp3');
      snare.play();
      break;
    case "i":
      var snare = new Audio('sounds/i.mp3');
      snare.play();
      break;
    case "j":
      var snare = new Audio('sounds/j.mp3');
      snare.play();
      break;
    case "k":
      var snare = new Audio('sounds/k.mp3');
      snare.play();
      break;
    case "l":
      var snare = new Audio('sounds/l.mp3');
      snare.play();
      break;
    case "m":
      var snare = new Audio('sounds/m.mp3');
      snare.play();
      break;
    case "n":
      var snare = new Audio('sounds/n.mp3');
      snare.play();
      break;
    case "o":
      var snare = new Audio('sounds/o.mp3');
      snare.play();
      break;
    case "p":
      var snare = new Audio('sounds/p.mp3');
      snare.play();
      break;
    case "q":
      var snare = new Audio('sounds/q.mp3');
      snare.play();
      break;
    case "r":
      var snare = new Audio('sounds/r.mp3');
      snare.play();
      break;
    case "s":
      var snare = new Audio('sounds/s.mp3');
      snare.play();
      break;
    case "t":
      var snare = new Audio('sounds/t.mp3');
      snare.play();
      break;
    case "u":
      var snare = new Audio('sounds/u.mp3');
      snare.play();
      break;
    case "v":
      var snare = new Audio('sounds/v.mp3');
      snare.play();
      break;
    case "w":
      var snare = new Audio('sounds/w.mp3');
      snare.play();
      break;
    case "x":
      var snare = new Audio('sounds/x.mp3');
      snare.play();
      break;
    case "y":
      var snare = new Audio('sounds/y.mp3');
      snare.play();
      break;
    case "z":
      var snare = new Audio('sounds/z.mp3');
      snare.play();
      break;

    case "trumpet":
      var tom1 = new Audio("sounds/trumpet.mp3");
      tom1.play();
      break;

    case "violin":
      var tom2 = new Audio("sounds/violin.mp3");
      tom2.play();
      break;

    case "piano":
      var tom3 = new Audio('sounds/piano.mp3');
      tom3.play();
      break;

    case "guitar":
      var tom4 = new Audio('sounds/guitar.mp3');
      tom4.play();
      break;

    case "drums":
      var snare = new Audio('sounds/drum.mp3');
      snare.play();
      break;



    default:
      console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
