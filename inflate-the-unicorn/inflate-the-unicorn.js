  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
function inflateUnicorn(clicked_id){  
  if(clicked_id){
  currentUnicorn = document.getElementById(clicked_id);
  console.log(currentUnicorn.src);

  var digit = currentUnicorn.src.slice(-5);
  
  if (digit === "0.png"){
    currentUnicorn.src = "./images/unicorn-1.png"
  }
  else if (digit === "1.png"){
    currentUnicorn.src = "./images/unicorn-2.png"
  }
  else if (digit === "2.png"){
    currentUnicorn.src = "./images/unicorn-3.png"
  }
  else {
    var unicornNum = currentUnicorn.id.slice(-1);
    alert("Unicorn " + unicornNum + " thanks you!");
  }
  }
}