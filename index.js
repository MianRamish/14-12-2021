var userValue;
function submit() {
    userValue = document.getElementById("userInput").value;
if (userValue <! 10){
    document.getElementById("demo2").innerHTML = "Your entered value is less than 10";
} else if (userValue >! 10){
    document.getElementById("demo2").innerHTML = "Your entered value is greater than 10";
}
else {
    document.getElementById("demo2").innerHTML = "please enter numeric values.";
}
}

//&& and//
// || or // 
//! not // 

var a = 21;
var b = 10;
if (a< 20  || b < 20) {
    document.getElementById("demo3").innerHTML = "Your entered values is less than 20";
} else{
    document.getElementById("demo3").innerHTML = "Your entered values is not less than 20";
}


// arthemetic operations



var x = 5;
 x--;
  console.log(x);


  