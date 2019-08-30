var ansarray=[];
var answers=[];

function jumble(word){
	var text= word.split('');
	for(var i= text.length-1; i>0;i--){
		var j = Math.floor(Math.random() * (i + 1));
        var temp = text[i];
        text[i] = text[j];
        text[j] = temp;
	}

	text=text.join('');
	return text;
}

function append_jumbled(){
	var x= Math.floor(tens.length*Math.random());
	var unjumbled=tens[x];
	search(unjumbled);
	var word=jumble(unjumbled);

	document.getElementById("jumbledword").innerHTML=word;
	document.getElementById("counter").innerHTML=ansarray.length+" anagram(s)";

}

function sort (word){
	var p;
	p=word.split('');
	p=p.sort();
	p=p.join('');
	return p;
}

function search(word){ //function to search anagrams
	var text=word.toUpperCase();
	var k=text.length;
		if (k==10){
			for (var i in tens){
				var m=tens[i];
				if(sort(m)==sort(text)){
					ansarray.push(m);
				}
			}
		}

	console.log(ansarray);
}

function submit(){
	var text=document.getElementById("answer").value;
	var answer=text.toUpperCase();
	var i=0;

	for(var j=0;j<answers.length;j++){
		if(answers.includes(answer)){
			console.log("existing");
			return;
		}
	}
	while(ansarray[i]){

		if(ansarray[i]==answer){
			document.getElementById("solution").style.visibility="visible";
			document.getElementById("solution").innerHTML="Correct!";
			answers.push(answer);
			ansarray.splice(i,1);
		}


		else if(ansarray[i]!=answer){
			document.getElementById("solution").style.visibility="visible";
			document.getElementById("solution").innerHTML="<font color='#d61919'><strong>Incorrect</strong></font> ";
		}
		i++;

		document.getElementById("answer").value='';
	}	

	counter();

	if(ansarray.length==0){
		document.getElementById("nextq").style.visibility="visible";
		document.getElementById("reveal").style.visibility="hidden";
		document.getElementById("solution").style.visibility="visible";
		document.getElementById("solution").innerHTML="Good Job! All answered.";
	}

}

function reveal(){
	document.getElementById("solution").style.visibility="visible";
	document.getElementById("solution").innerHTML=ansarray.join(', ');
	document.getElementById("nextq").style.visibility="visible";
	document.getElementById("reveal").style.visibility="hidden";
}

function next(){
	document.getElementById("reveal").style.visibility="visible";
	document.getElementById("solution").style.visibility="hidden";
	ansarray=[];
	answers=[];
	append_jumbled();
	document.getElementById("nextq").style.visibility="hidden";
	document.getElementById("reveal").innerHTML="Reveal";

}

function counter(){
	document.getElementById("counter").innerHTML="You have answered "+answers.length+", "+ansarray.length+" left";
}

var x=0;
var i=0;
var t=0;


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

window.addEventListener('keypress', function(e){
	if(e.key==='Enter')
		submit();
});