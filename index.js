//adding event listener  on click


// -----------------adding CLICK event listener all the drum on screen START -----------------
var numberOfDrum = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleOnClick)

}

function handleOnClick() {
  // to detect the identity of the pressed button so we can swith the senario(sound in our case)based on that
  var pressedButtonInnerHTML = this.innerHTML;

  // Switch Statements
  switch (pressedButtonInnerHTML) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3")
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-2.mp3")
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-3.mp3")
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-4.mp3")
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/snare.mp3")
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/crash.mp3")
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/kick-bass.mp3")
      sound.play();
      break;

    default:
      console.log(this.innerHTML);

  }
}
// -----------------adding CLICK event listener all the drum on screen END -----------------


// -----------------adding KEYPRESS event listener all the drum on screen START -----------------

document.addEventListener("keypress", handleKeypress)


function handleKeypress(event){
  // detecting the key pressed on the keyboard
  var pressedElementKeyboard = event.key;

  // after detecting the key use the switch statement to make corresonded sound with the key pressed
  switch (pressedElementKeyboard) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3")
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-2.mp3")
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-3.mp3")
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-4.mp3")
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/snare.mp3")
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/crash.mp3")
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/kick-bass.mp3")
      sound.play();
      break;

    default:
      // if a key that is not in the switck pressed console the pressed key
      console.log(event.key);

  }

}










// -----------------adding KEYPRESS event listener all the drum on screen END -----------------
