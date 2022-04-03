
function Song(){

lyrics="";
for (let i=99;i>=0;i--){
			if(i>2){
				lyrics=lyrics+(i+" bottles of beer on the wall,\n");
				lyrics=lyrics+(i+" bottles of beer!\n");
				lyrics=lyrics+("Take one down,\n");
				lyrics=lyrics+("Pass it around,\n");
				lyrics=lyrics+((i-1)+" bottles of beer on the wall!\n");

			}
			else if(i==2){
				lyrics=lyrics+(i+" bottles of beer on the wall,\n");
				lyrics=lyrics+(i+" bottles of beer!\n");
				lyrics=lyrics+("Take one down,\n");
				lyrics=lyrics+("Pass it around,\n");
				lyrics=lyrics+((i-1)+" bottle of beer on the wall!\n");

			}
			else if(i==1){
				lyrics=lyrics+(i+" bottle of beer on the wall,\n");
				lyrics=lyrics+(i+" bottle of beer!\n");
				lyrics=lyrics+("Take one down,\n");
				lyrics=lyrics+("Pass it around,\n");
				lyrics=lyrics+((i-1)+" bottles of beer on the wall!\n");

			}
			lyrics=lyrics+("<br />"+"-------------------------------------\n"+"<br />");
		}
		lyrics=lyrics+("No more bottles of beer on the wall, no more bottles of beer."+"\n"+"Go to the store and buy some more, 99 bottles of beer on the wall.\n");
	document.getElementById("main").innerHTML="<br />"+lyrics+",";
	}
	
	
function Grades(){


let subjects=prompt("Please enter number of subjects you have");
let results=[subjects];

		for(i=0;i<subjects;i++){
			results[i]=prompt("Please enter number results for subject "+(i+1));
		}

let grades=[subjects];

		for(i =0;i<results.length;i++){
			if(results[i]>=70 && results[i]<=100){
				grades[i]=" A";
			}
			else if(results[i]>=60 && results[i]<70){
				grades[i]= " B";
			}
			else if(results[i]>=50 && results[i]<60){
				grades[i]=" C";
			}
			else if(results[i]>=40 && results[i]<50){
				grades[i]=" D";
			}
			else if(results[i]>=0.01 && results[i]<40){
				grades[i]=" F";
			}
			else{
				grades[i]=" Invalid result";
			}
			document.getElementById("secondTask").innerHTML="You have select "+subjects+" subjects"+"<br />"+"your results are: "+results+"<br />"+ "therefore, your grades are: " +grades+",";
		}
	
	
}
	


