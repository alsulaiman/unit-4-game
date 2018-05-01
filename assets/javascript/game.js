$(document).ready(function(){
	var counter=0;
	var couWin=0;
	var couLos=0;
	var ranNum = Math.floor((Math.random()*100)+1);
	$("#randomNumber").text(ranNum);
	var crystals = $(".crystals");
	var imgValue = [3, 5, 7, 10];
	var imgNum = ["./assets/images/img1.png", 
	"./assets/images/img2.png", 
	"./assets/images/img3.png", 
	"./assets/images/img4.png"];
	for (var i = 0; i < imgValue.length; i++) {
		var imageCrystal = $("<img>");
		imageCrystal.addClass("crystalImage");
		imageCrystal.attr("src", imgNum[i]);
		imageCrystal.attr("data-crystalvalue", imgValue[i]);
		crystals.append(imageCrystal);
	}
crystals.on("click", ".crystalImage", function(){
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	counter += crystalValue;
	$('#yourResult').text(counter);
	if (counter === ranNum){
		couWin += 1;
		$('#winsScore').text("total Wins: "+couWin);
		window.setTimeout(function(){
			alert("You win!");
				counter = 0;
				ranNum = Math.floor((Math.random()*100)+1);
				$("#randomNumber").text(ranNum);
			$('#yourResult').text(counter);
		},100);
	} else if(counter>ranNum){
		window.setTimeout(function(){
			alert("You lose!!");
			couLos += 1;
			$('#lossesScore').text("total losses: "+couLos);
			counter = 0;
			ranNum = Math.floor((Math.random()*100)+1);
			$("#randomNumber").text(ranNum);
			$('#yourResult').text(counter);
		},100);
	};
});	
});