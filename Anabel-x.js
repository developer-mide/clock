// JavaScript Document
    function decimalToBinary(decNumber,base) {
    var result = [];
      for( remNumber = decNumber; Math.floor(remNumber) > 0;
 remNumber = Math.floor(remNumber / base))
 {
 rem = (Math.floor(remNumber % base).toString());
     result.unshift(rem);
    
   }
   for(y = 0; y < result.length; y++){
 document.decimalToBinaryConverter.converterInput2.style.fontSize="40px"; 	 document.decimalToBinaryConverter.converterInput2.value += result[y];
 }
}


/*

function binaryToDecimal(binumber){
 var biString = binumber.toString();
 var baseNumber = 1;
 var numberArray = [];
 for(y = 0 ; y < biString.length ; y++ ){	
 numberArray.push(Number(biString[y] * baseNumber));
 
 baseNumber = baseNumber * 2;
  }
  document.write(numberArray);
}

//Clock code

function startTime(){
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  hour = convertTo12Hour(hour);
  hour = padTime(hour);
  minute = padTime(minute);
  second = padTime(second); document.getElementById("p").innerHTML = hour + "<sup style='color:blue;font-size:0.3em;vertical-align:1.5em'>" + second + "</sup>";
  document.getElementById("p2").innerHTML = minute;
  var t = setTimeout(startTime,500);
  }
  
  
  function padTime(i){
  	if(i < 10){
  		i = "0" + i;
  	}
  	return i;
 }
 
  function convertTo12Hour(i){
  	if(i == 0){
  		i = i + 12;
  	}
  	else if(i > 12){
  		i = i - 12;
  	}
  	return i;
}
  //animation
  
  function animate(){
  	var objectMoved = document.getElementById("object");
  	var from = objectMoved.style.marginLeft = "0px";
  var 	setInterval(moved,5);
  	function moved(){
  		var to = objectMoved.style.marginLeft = "70px";
  		clear
  	}
  }
  
  //quiz program
  
function quiz(){
	document.write("<div style='text-align:center;font-family:sans-serif'><h1>Javascript Quiz</h1></div>")
	var questions = [
	"What is the function of the splice method",
	"What property is used to get the length of a string",
	"A string == boolean will return",
	"A case in a switch must end in ?",
	"What is the function of a substr method",
	"The indexOf the first array element will return ?"
	];
	var answers = [
	[
	"For slicing","Returning some part of the array","removing the last element","removing the first element"
   ],
	["indexOf","length","typeof","None of the above"],
["true","null","NaN","false"],
["break","continue","stop","pause"],
["returns a cut part of the array","slices the array into two","returns a substring","produces an error"],
["1","0",true,"undefined"]
	];
for(i = 0; i < questions.length; i++){
	document.write("<br/>" + "<div class='card'style='background-color:lightgreen;border:1px solid green;border-radius:2px;padding:10px;font-family:sans-serif;'>" + questions[i] + "</div>" + "<br/>");
	
	for(x = 0 ; x < answers.length ; x++){
		if(answers[i][x] === undefined){
			document.write("");
		}else{
		document.write("<button style='padding:10px;background:transparent;color:black;border:none;width:100%;text-align:left;'>" + answers[i][x] + "</button>" + "<hr/>");
		
	  	  } 		
		  }
   }	
 }*/