var x=0;
var i=0;
var t=0;

var footersentences=["Scrabble players make mountains out of antimuons","Made with love in India",""];

function Open() {
	x+=1;

	if(x%2==1){
		document.getElementById("sidebar").style.width = "300px";
		document.getElementById("hamburgermenu").style.color = "white";
	}

	else if(x%2==0){
		document.getElementById("sidebar").style.width = "0px";
		document.getElementById("hamburgermenu").style.color = "black";
	}
}

