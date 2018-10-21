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
		//outOfBounds= true;
		}

	function myFunc(item, index){
		item.onmouseover= function(){
			item.classList.add("youlose");
			statusOfGame.innerText='Uh oh... You lose';
		}
	}


	//Exercise 3
	let xtra = changeAllColours();

	function youWin(){
		if(!xtra){
			statusOfGame.innerText='Congratulations You Win. Please press "S" to restart';
		}else{
			statusOfGame.innerText='Uh oh... You lose';
		}
		
	}


	//Exercise 4
	function restartGame(){
		for(var x = 0; x < allBorders.length; x++ )	{
			allBorders[i].className= "boundary" ;
		}
	}


}	//ex5