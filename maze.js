window.onload= function(){
	var border1= document.getElementById("boundary1");
	border1.onmouseover = changeColour;
	let allBorders=document.querySelectorAll(".boundary");
	
	changeAllColours();
	
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











}


