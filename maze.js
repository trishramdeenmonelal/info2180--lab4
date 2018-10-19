window.onload= function(){
	var border1= document.getElementById("boundary1");
	border1.onmouseover = changeColour;
	let allBorders=document.querySelectorAll(".boundary");
	
	changeAllColours();
	let endOfMaze = document.getElementById("end");

	endOfMaze.onmouseover= youWin;

	var win = true;
	var outOfBounds = true;



	
	//changes border 1
	function changeColour(){
		border1.classList.add("youlose");
		alert("you lose");	
	}
	
	//changesallborders upon contact
	function changeAllColours(){
		allBorders.forEach(myFunc)	

		}

	function myFunc(item, index){
		item.onmouseover= function(){
			item.classList.add("youlose");
			alert("you lose");
		}
	}


	//ex3

	function youWin(){
		alert("you Win")
	}


	function overBounds(){ 
	if (win){ 
		if(outOfBounds) 
		{
			outOfBounds = false;
			alert('You Lose! Click the "S" to reset and play again.');
			for (var i = 0; i < allBorders.length - 1; i++) {
			allBorders[i].className += " youlose";
			}
		}
	}
























	
}













}


