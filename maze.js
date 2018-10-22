lost = false;

window.onload = function() {
	
	var allBorders = document.querySelectorAll("#maze div.boundary");
    for (var x = 0; x < allBorders.length; x++) {
        allBorders[x].onmouseover = youLose;
	}

	//let statusOfGame = document.getElementById("status");

	var mazeEnd = document.getElementById("end");
	mazeEnd.addEventListener('mouseover', youWin);


	var startMaze = document.getElementById("start");
	startMaze.addEventListener('onclick', restartMaze);





}
//end of window.onload

//Exercise 1 and 2
function youLose(){
	lost = true;
	var allBorders = document.querySelectorAll("#maze div.boundary");
	for (var x = 0; x < allBorders.length; x++) {
		allBorders[x].classList.add("youlose");

	}
	document.getElementById("status").innerHTML = "You Lose. Better Luck Next Time..";
	
}


//Exercise 3
function youWin(){
	if (!lost){
		
	}	
	document.getElementById("status").innerHTML = "You Win!!";
}

//Exercise 4

function restartMaze(){
	lost = false;
	//document.getElementById("status").innerHTML = "Find Your Way To The End!!";
	var allBorders = document.querySelectorAll("#maze div.boundary");
	for (var x = 0; x < allBorders.length; x++) {
		allBorders[x].classList.remove("youlose");
	}
}
