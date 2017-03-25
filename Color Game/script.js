var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");



function reset(){
	resetButton.innerHTML = "New Colors";
	colors = randomColors(numSquares);
	//pick a new winning color
	pickedColor = pickColor();
	//change the color display to picked color
	colorDisplay.innerHTML = pickedColor;
	//start new game
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = 'none';
		}
	}
	//switch h1 background color steel blue
	messageDisplay.innerHTML = "";
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

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

function setModeBtns(){
	//mode buttons
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy"){
				numSquares = 3;
			}else{
				numSquares = 6;
			}
			reset();
		});	
	}	
}

function setup(){
	for (var i = 0; i < squares.length; i++){
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
}

function init(){
	setModeBtns();
	setup();
	reset();
}

init();