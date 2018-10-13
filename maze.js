function changeColour(){
	var x = document.getElementById("boundary1");
		x.mouseover = function(){
			div.youlose;
			alert("you lose");
	}
	
}

window.onload= function(){
changeColour();
}