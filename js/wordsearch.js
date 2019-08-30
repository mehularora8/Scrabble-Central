var x=0;

	function Open() {
	x+=1;
	x%=2;

	if(x==1){
		document.getElementById("sidebar").style.width = "300px";
		document.getElementById("hamburgermenu").style.color = "white";
	}

	else if(x==0){
		document.getElementById("sidebar").style.width = "0px";
		document.getElementById("hamburgermenu").style.color = "black";
	}
}

//End of first function
		


	function sort(word){
			var p;
			p=word.split('');
			p=p.sort();
			p=p.join('');
			return p;
		}

	function search(){ //function to search anagrams
			document.getElementById('lol').innerHTML='';
			var intake=document.getElementById("input").value;
			var text=intake.toUpperCase();
			var length=text.length;
			var qm=0;
			var g=sort(text);

			for(var l=0;l<length;l++){
				if(text[l]=='?')
					qm++;	
			}
			var without_blanks=g.substr(qm);
			var letters=length-qm;

			if(qm>2){
				console.log('Please enter upto 2 blanks only.');
				return;
			}

			else{
				//If one blank
				if(qm==1){
					for(var q=0; q<26; q++){
						var blank=String.fromCharCode(65+q);
						var to_anagram=without_blanks+blank;	

						//Begin search in wordlist

					if (length==1) {
						console.log("Please enter atleast two letters");
				}
					if (length==2){
						for (var i in twos){
						var m=twos[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==3){
						for (var i in threes){
						var m=threes[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}

					if (length==4){
						for (var i in fours){
						var m=fours[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==5){
							for (var i in fives){
							var m=fives[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
					if (length==6){
						for (var i in sixes){
						var m=sixes[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==7){
						for (var i in sevens){
						var m=sevens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==8){
						for (var i in eights){
						var m=eights[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==9){
						for (var i in nines){
						var m=nines[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==10){
						for (var i in tens){
						var m=tens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==11){
						for (var i in elevens){
						var m=elevens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==12){
						for (var i in twelves){
						var m=twelves[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==13){
						for (var i in thirteens){
						var m=thirteens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==14){
						for (var i in fourteens){
						var m=fourteens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}

					if (length==15){
						for (var i in fifteens){
						var m=fifteens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}				
			}
		}
		//End if qm=1

		//Begin if qm=2

				if(qm==2){
					for(var r=0;r<26;r++){
						for(var q=r; q<26; q++){
							var blank=String.fromCharCode(65+q)+String.fromCharCode(65+r);
							var to_anagram=without_blanks+blank;	

							//Begin search in wordlist

						if (length==1) {
							console.log("Please enter atleast two letters");
					}
						if (length==2){
							for (var i in twos){
							var m=twos[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
						if (length==3){
							for (var i in threes){
							var m=threes[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}

						if (length==4){
							for (var i in fours){
							var m=fours[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
						if (length==5){
								for (var i in fives){
								var m=fives[i];
								if(sort(m)==sort(to_anagram)){
									document.getElementById('lol').innerHTML+=m+'<br>';
								}
							}
						}
						if (length==6){
							for (var i in sixes){
							var m=sixes[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
						if (length==7){
							for (var i in sevens){
							var m=sevens[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
						if (length==8){
							for (var i in eights){
							var m=eights[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
						if (length==9){
							for (var i in nines){
							var m=nines[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
						if (length==10){
							for (var i in tens){
							var m=tens[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
						if (length==11){
							for (var i in elevens){
							var m=elevens[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
						if (length==12){
							for (var i in twelves){
							var m=twelves[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
						if (length==13){
							for (var i in thirteens){
							var m=thirteens[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
						if (length==14){
							for (var i in fourteens){
							var m=fourteens[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}

						if (length==15){
							for (var i in fifteens){
							var m=fifteens[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
				}
			}
		 }
		 //End if qm=2

		 //start qm=0, if no blanks

		 	 if(qm==0){

		 	 	var to_anagram=g;

		 	 	if (length==1) {
						console.log("Please enter atleast two letters");
				}
					if (length==2){
						for (var i in twos){
						var m=twos[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==3){
						for (var i in threes){
						var m=threes[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}

					if (length==4){
						for (var i in fours){
						var m=fours[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==5){
							for (var i in fives){
							var m=fives[i];
							if(sort(m)==sort(to_anagram)){
								document.getElementById('lol').innerHTML+=m+'<br>';
							}
						}
					}
					if (length==6){
						for (var i in sixes){
						var m=sixes[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==7){
						for (var i in sevens){
						var m=sevens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==8){
						for (var i in eights){
						var m=eights[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==9){
						for (var i in nines){
						var m=nines[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==10){
						for (var i in tens){
						var m=tens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==11){
						for (var i in elevens){
						var m=elevens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==12){
						for (var i in twelves){
						var m=twelves[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==13){
						for (var i in thirteens){
						var m=thirteens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
					if (length==14){
						for (var i in fourteens){
						var m=fourteens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}

					if (length==15){
						for (var i in fifteens){
						var m=fifteens[i];
						if(sort(m)==sort(to_anagram)){
							document.getElementById('lol').innerHTML+=m+'<br>';
						}
					}
				}
		 	 }
	}
}