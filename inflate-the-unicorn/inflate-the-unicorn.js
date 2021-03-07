  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
function inflateUnicorn(clicked_id){  
  if(clicked_id){
  currentAzir = document.getElementById(clicked_id);
  console.log(currentAzir.src);

  var digit = currentAzir.src.slice(-6);
  

  if (digit === "r.webp"){
    currentAzir.src = "./images/azir0.webp"
  }
  else if (digit === "0.webp"){
    currentAzir.src = "./images/azir1.webp"
  }
  else if (digit === "1.webp"){
    currentAzir.src = "./images/azir2.webp"
  }
  else {    
    var audio =  new Audio('./audio/azir1.ogg');
    audio.play();
  }
  }
}