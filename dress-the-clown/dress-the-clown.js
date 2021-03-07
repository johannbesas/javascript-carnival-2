// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      changeClothing('left');
      break;
    case 38:
      changeClothingIndex('up');
      break;
    case 39:
      changeClothing('right');
      break;
    case 40:
      changeClothingIndex('down');
      break;
  }
});

var headIndex = 0;
var bodyIndex = 0;
var shoesIndex = 0;
var partIndex = 0;

var clothingIndex = 0;

function changeClothingIndex(key) {
  if (key == 'up') {
    if (clothingIndex == 2) {
      clothingIndex = 0;
    }
    else {
      clothingIndex++;
    }
  }
  else {
    if (clothingIndex == 0) {
      clothingIndex = 2;
    }

    else {
      clothingIndex--;
    }
  }
}

function changeClothing(key) {
  if (clothingIndex == 0) {
    changeBodyPart("head", headIndex, key);
  }
  else if (clothingIndex == 1) {
    changeBodyPart("body", bodyIndex, key);
  }
  else if (clothingIndex == 2) {
    changeBodyPart("shoes", shoesIndex, key);
  }
}

function changeBodyPart(part, partIndex, key) {
  var bodyPart = document.getElementById(part);

  var src = "./images/" + part + partIndex
  fullSrc = src.concat(".png");

  if (key == 'left') {
    if (partIndex == 0) {
      partIndex = 5;
      src = "./images/" + part + partIndex
      fullSrc = src.concat(".png");
      bodyPart.src = fullSrc;
      console.log("left reset to 5" + partIndex)
    }
    else {
      partIndex = partIndex - 1;
      bodyPart.src = fullSrc;
      console.log("left only" + partIndex);
    }
  }
  else {
    if (partIndex == 5) {
      partIndex = 0;
      src = "./images/" + part + partIndex
      fullSrc = src.concat(".png");
      bodyPart.src = fullSrc;
      console.log("right reset to 0" + partIndex)
    }
    else {
      partIndex = partIndex + 1;
      bodyPart.src = fullSrc;
      console.log("right only" + partIndex);
    }
  }
}