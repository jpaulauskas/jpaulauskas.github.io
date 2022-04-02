 numbersList=[1, 6, 3, 11, 20, 7, 14, 8, 66, 10];
function listNumbers(){
	document.getElementById("main").innerHTML=numbersList;
}

function largestNumber(){
 largest=numbersList[0];

for (i=0; i<=largest;i++){
    if (numbersList[i]>largest) {
        largest=numbersList[i];
    }
}
document.getElementById("theLargest").innerHTML=" Largest number is: "+largest+"!";
}
