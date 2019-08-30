function search(){
			var intake=document.getElementById("input").value;
			var text=intake.toUpperCase();
			var k=text.length;

			for(var i=0;i<k;i++){
				if(text[i]>'Z'||text[i]<'A'){
					swal("Please enter letters between A and Z only. No spaces allowed.");
					var flag=1;
					break;
				}
			}


				if (k==2){
					if(flag==1){
						return;
					}
					for (var i in twos){
					var m=twos[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}
				if (k==3){
					if(flag==1){
						return;
					}
					for (var i in threes){
					var m=threes[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}

				if (k==4){
					if(flag==1){
						return;
					}
					for (var i in fours){
					var m=fours[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}
				if (k==5){
					if(flag==1){
						return;
					}
						for (var i in fives){
						var m=fives[i];
						if(m==text){
							document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
							setTimeout(conf(),500);
							return;
						}
					}
					document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
				}
				if (k==6){
					if(flag==1){
						return;
					}
					for (var i in sixes){
					var m=sixes[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}
				if (k==7){
					if(flag==1){
						return;
					}
					for (var i in sevens){
					var m=sevens[i];
					if(m==text){
					document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
					setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}
				if (k==8){
					if(flag==1){
						return;
					}
					for (var i in eights){
					var m=eights[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}
				if (k==9){
					if(flag==1){
						return;
					}
					for (var i in nines){
					var m=nines[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}
				if (k==10){
					if(flag==1){
						return;
					}
					for (var i in tens){
					var m=tens[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}

				if (k==11){
					if(flag==1){
						return;
					}
					for (var i in elevens){
					var m=elevens[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}

				if (k==12){
					if(flag==1){
						return;
					}
					for (var i in twelves){
					var m=twelves[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}
				if (k==13){
					if(flag==1){
						return;
					}
					for (var i in thirteens){
					var m=thirteens[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}
				if (k==14){
					if(flag==1){
						return;
					}
					for (var i in fourteens){
					var m=fourteens[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}

				if (k==15){
					if(flag==1){
						return;
					}
					for (var i in fifteens){
					var m=fifteens[i];
					if(m==text){
						document.getElementById("lol").innerHTML="<font color='#32b72f'><strong>"+text+"</strong></font> is a valid play."; 
						setTimeout(conf(),500);
						return;
					}
				}
				document.getElementById("lol").innerHTML="<font color='#d61919'><strong>"+text+"</strong></font> is an invalid play.";
			}

			else if(k<2||k>15){
				swal("Please enter a word of length between 2 and 15.");
			}

	}

var x=0;

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

