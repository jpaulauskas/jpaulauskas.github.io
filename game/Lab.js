document.getElementById('rock').onclick = user;
document.getElementById('paper').onclick = user;
document.getElementById('scissors').onclick = user;


function user(){
    var userChoice = this.id;
    alert("You have selected: " + userChoice)

    var computerChoice = Math.random();
         if (computerChoice < 0.34) {
             computerChoice = "rock";
          }else if(computerChoice <= 0.67) {
             computerChoice = "paper";
          }else{
             computerChoice = "scissors";
          }; 

    alert ("Computer's choice was: " + computerChoice);

    console.log (compare(userChoice, computerChoice)); 

    function compare(choice1, choice2) {
    
		    if (choice1 === choice2) {
            alert ("The result is a tie!");
        }
 
        else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                alert ("rock wins");
            }
			else{
                alert ("paper wins");
            }
				}
 
        else if (choice1 === "paper") {
             if (choice2 === "rock") {
                 alert ("paper wins");
              } 
			  else {
                  alert ("scissors wins");
              }
		     }
		
		else if (choice1 === "scissors") {
             if (choice2 === "rock") {
                 alert ("rock wins");
             } 
			 else {
                 alert ("scissors wins");
            }
        }
		alert("thank you for playing");
    }

}

function Play(){
	
document.getElementById("Play").innerHTML=alert("To play again, simply select on one of blue squares with your preferred 'weapon'! Good luck!");
hide()
}

function hide(){
	
document.getElementById("Play").style.visibility='hidden';

}