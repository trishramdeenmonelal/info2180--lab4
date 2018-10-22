lost = false;

window.onload = function() {
	
	var allBorders = document.querySelectorAll("#maze div.boundary");
    for (var x = 0; x < allBorders.length; x++) {
        allBorders[x].onmouseover = youLose;
	}

	let statusOfGame = document.getElementById("status");






}

function youLose(){
	lost = true;
	var allBorders = document.querySelectorAll("#maze div.boundary");
	for (var x = 0; x < allBorders.length; x++) {
		allBorders[x].classList.add("youlose");

	}
	statusOfGame.innerHTML = "You Lose. Better Luck Next Time..";
	
}