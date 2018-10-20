window.onload= function(){
	var border1= document.getElementById("boundary1");
	border1.onmouseover = changeColour;
	let allBorders=document.querySelectorAll(".boundary");
	
	changeAllColours();
	let endOfMaze = document.getElementById("end");

	endOfMaze.onmouseover= youWin;

	var win = false;
	var outOfBounds = false;

	let startOfMaze = document.getElementById("start");
	startOfMaze.onclick = restartGame;

	var statusOfGame= document.getElementById("status");




	
	//Exercise 1
	function changeColour(){
		border1.classList.add("youlose");
		statusOfGame.innerText='Uh oh... You lose';	
	}
	
	//Exercise 2
	function changeAllColours(){
		allBorders.forEach(myFunc)	

		}

	function myFunc(item, index){
		item.onmouseover= function(){
			item.classList.add("youlose");
			statusOfGame.innerText='Uh oh... You lose';
		}
	}


	//ex3

	function youWin(){
		statusOfGame.innerText='Congratulations You Win';
		
	}


	//ex4
	function restartGame(){
		statusOfGame.innerText='Please click on "S" to restart the game';		
	}


	//ex5


}









