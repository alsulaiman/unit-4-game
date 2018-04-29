$(document).ready(function(){
  //TODO:Create a random number Math.random
  
  

  //NEXT: Do a plan to use the crystal jquery objects and assign values to them


  funRandomNumber();
  function funRandomNumber() {
    //TODO::Get the random number element using jquery $('#put the id here')
    $('#randomNumber').text(Math.floor((Math.random()*100)+1));
    //TODO::Put the random number from step 1 in the .text function of the jquery object from step 2
  }
})



