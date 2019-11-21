//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = i + " " + j + " ";//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
    if (isNaN(intCount) || intCount<2 || intCount>100)//validates the intCount 
    {
        alert("Please enter a number between 1-100.");//if it meets either if requirement then it shows this alert 
        $("total_fib").value = "";
    }
    else//if inCount is valid
    {
        while (intCount>2)
        {
            k = i + j;//k is sum of number and previous number
            i = j;//i becomes next number
            j = k;//j becomes the calculated number
            stringOutput = stringOutput + " " + k + " ";// output is i and j and k 
            intCount--;
        }
    }
    $("output").value = stringOutput;//put stringOutput back to DOM
	// number of fibonacci numbers and then post it to the html DOM 

}; 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};  