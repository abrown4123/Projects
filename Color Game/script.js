
var colors = randomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
colorDisplay.innerHTML = pickedColor;

resetButton.addEventListener("click", function(){
	//reset the button text
	resetButton.innerHTML = "New Colors";
	//generate new colors
	colors = randomColors(6);
	//pick a new winning color
	pickedColor = pickColor();
	//change the color display to picked color
	colorDisplay.innerHTML = pickedColor;
	//start new game
	for (var i = 0; i < squares.length; i++){
		//add colors to squares
		squares[i].style.background = colors[i];
	}
	//switch h1 background color back
	h1.style.backgroundColor = "transparent";
});


	for (var i = 0; i < squares.length; i++){
		//add colors to squares
		squares[i].style.background = colors[i];
		//add click listeners
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			// determine if it is the correct answer
			if (clickedColor === pickedColor){
				console.log("correct");
				messageDisplay.innerHTML = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.innerHTML = "Play Again?";
			} else {
				this.style.background = "#232323";
				messageDisplay.innerHTML = "Try Again";
			}
		});		
	}


function changeColors(color){
	//loop through the square divs
	for(var i = 0; i < squares.length; i++){
		//change each color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function randomColors(num){
	//make an array
	var arr = [];
	for (var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(generateRandomColor());
		
	}
	return arr;
}

function generateRandomColor(){
	var red = Math.floor(Math.random()* 256);
	var green = Math.floor(Math.random()* 256);
	var blue = Math.floor(Math.random()* 256);
	
	return "rgb("+ red + ", " + green + ", " + blue + ")";
}
