window.onload= function(){
	var x= document.getElementById("boundary1");
	x.onmouseover = changeColour;




	function changeColour(){
		x.classList.add("youlose");
	alert("you lose");
	}

}




