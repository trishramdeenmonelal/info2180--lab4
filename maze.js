window.onload= function(){
	var x= document.getElementById("boundary1");
	x.onmouseover = changeColour;
	var b=document.querySelectorAll('.boundary');
	var i;
	b.onmouseover= changeAllColours;
	
	
	function changeColour(){
		x.classList.add("youlose");
		alert("you lose");	
	}
	
	function changeAllColours(){
		for(i=0; i < b.length; i++){
			b[i].classList.add("youlose");
			alert("you lose")
		}
	}
}


