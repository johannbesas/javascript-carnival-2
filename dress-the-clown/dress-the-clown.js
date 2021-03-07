// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
document.addEventListener('keyup', function (e) {
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

var indexes = {
  headIndex: 0,
  bodyIndex: 0,
  shoesIndex: 0,
  clothingIndex: 0
}

var clothing = [
  'head', 'body', 'shoes'
]

function changeClothingIndex(key) {
  if (key == 'up') {
    if (indexes.clothingIndex >= 2) {
      indexes.clothingIndex = 0;
    }
    else {
      indexes.clothingIndex++;
    }
  }
  else {
    if (indexes.clothingIndex <= 0) {
      indexes.clothingIndex = 2;
    }
    else {
      indexes.clothingIndex--;
    }
  }
  
  let el = document.getElementById('clothingIndex');
  el.innerHTML = clothing[indexes.clothingIndex];

  
}

function changeClothing(key) {
  if (indexes.clothingIndex == 0) {
    changeBodyPart("head", 'headIndex', key);
  }
  else if (indexes.clothingIndex == 1) {
    changeBodyPart("body", 'bodyIndex', key);
  }
  else if (indexes.clothingIndex == 2) {
    changeBodyPart("shoes", 'shoesIndex', key);
  }
}

function changeBodyPart(part, partIndex, key) {
  var bodyPart = document.getElementById(part);
 
  if (key == 'left') {
    if (indexes[partIndex] <= 0) {
      indexes[partIndex] = 5;
    }
    else {
      indexes[partIndex] = indexes[partIndex] - 1;
      bodyPart.src = fullSrc;
    }
  }
  else {
    if (indexes[partIndex] >= 5) {
      indexes[partIndex] = 0;
    }
    else {
      indexes[partIndex] = indexes[partIndex] + 1;
    }
  }
  
  fullSrc = `./images/${part}${indexes[partIndex]}.png`;
  bodyPart.src = fullSrc;

  let el = document.getElementById(partIndex);
  el.innerHTML = indexes[partIndex];


}