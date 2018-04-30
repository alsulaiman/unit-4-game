	// TODO::Create a random number Math.random
	// TODO::Get the random number element using jquery $('#put the id here')
	// TODO::Put the random number from step 1 in the .text function of the jquery object from step 2

	// NEXT: Do a plan to use the crystal jquery objects and assign values to them
// ==============================================

$(document).ready(function(){
	var targetNumber = Math.floor((Math.random()*100)+1);
	$("#randomNumber").text(targetNumber);

	// ==============================================
// =========================================== //
// 		General variable 
// =========================================== //
	var crystals = $("#crystals");
	var counter = 0;
	var counterWin = 0;
	var counterLose = 0;
	var imagValue = [10, 5, 3, 7];
	var numberImg = ["./assets/images/img1.png", 
	"./assets/images/img2.png", 
	"./assets/images/img3.png", 
	"./assets/images/img4.png"];
	
// =========================================== //
// 		Cristals
// =========================================== //

	for (var i = 0; i < imagValue.length; i++) {
		var imageCrystal = $("<img>");
		imageCrystal.addClass("crystalImage");
		imageCrystal.attr("src", numberImg[i]);
		imageCrystal.attr("data-crystalvalue", imagValue[i]);
		crystals.append(imageCrystal);
	}

	// ==============================================
	crystals.on("click", ".crystalImage", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);
		counter += crystalValue;
		$('#yourResult').text(counter);
		if (counter === targetNumber){
			alert("You win!!");
			counterWin += 1;
			$('#winsScore').text("total wins: "+counterWin);
			counter = 0;
			$('#yourResult').text(counter);
		} else if (counter >= targetNumber) {
			alert("You lose!!");
			counterLose += 1;
			$('#lossesScore').text("total losses: "+counterLose);
			counter = 0;
			$('#yourResult').text(counter);
		}
	});
})






// ==============================================

// ==============================================

// 	funRandomNumber();
// 	funUserNumber();

// 	// function funRandomNumber() {
// 	// $('#randomNumber').text(Math.floor((Math.random()*100)+1));
// 	// }

// 	function funUserNumber() {
// 		var counter = 0;
// 		$("#crystals").on("click", ".crystalImage", function() {
// 			counter += 10;
// 			$('#yourResult').text(counter);
// 		})
// 	}

// })

// // ==============================================

