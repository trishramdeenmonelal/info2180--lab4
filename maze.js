win = false;

window.onload = function() {
	
	let allBorders = document.querySelectorAll("#maze div.boundary");
    for (let x = 0; x < allBorders.length; x++) {
        allBorders[x].onmouseover = youLose;
	}

	let statusOfGame = document.getElementById("status");

	let mazeEnd = document.getElementById("end");
	mazeEnd.addEventListener('mouseover', youWin);


	var startMaze = document.getElementById("start");
	startMaze.addEventListener('click', restartMaze);

	//Ex6
	let leaveMaze = document.getElementById("maze");
	leaveMaze.addEventListener('mouseleave', youLose);





}
//end of window.onload

//Exercise 1 and 2
function youLose(){
	win = true;
	var allBorders = document.querySelectorAll("#maze div.boundary");
	for (var x = 0; x < allBorders.length; x++) {
		allBorders[x].classList.add("youlose");

	}
	document.getElementById("status").innerHTML = "Uh ohh :/ you lose!! Please Click on 'S' to restart the maze";
	
}


//Exercise 3
function youWin(){
	if (!win){
		document.getElementById("status").innerHTML = "Congratulations!! You Win!! :D " ;
	}	
	
}

//Exercise 4

function restartMaze(){
	win = false;
	document.getElementById("status").innerHTML = "Please guide the cursor along the white path to 'E'.. WITHOUT touching the boundaries";
	var allBorders = document.querySelectorAll("#maze div.boundary");
	for (var x = 0; x < allBorders.length; x++) {
		allBorders[x].classList.remove("youlose");
	}

	
}
