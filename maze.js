window.onload= function(){
	var x= document.getElementById("boundary1");
	x.onmouseover = changeColour;




	function changeColour(){
		x.classList.toggle("youlose");
		alert("you lose");
	}

}




