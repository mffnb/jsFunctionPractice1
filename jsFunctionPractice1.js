https://www.smartrecruiters.com/EventManagementSystemsbyDeanEvansandAssociates/83227182-front-end-developer


// Requirements
// Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
// tripleFive() 
// Five!
// Five!
// Five!
// Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
// lastLetter('hello') should return 'o'
// lastLetter('island') should return 'd'
// Write a function called 'square' which takes a single argument which is a number, and returns number * number.
// square(3) should return 9
// square(5) should return 25
// Write a function called 'negate' which takes a single number argument and returns the negative of that number.
// negate(5) should return -5
// negate(-8) should return 8
// Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
// toArray(1, 4, 5) should return [1, 4, 5]
// toArray(8, 9, 10) should return [8, 9, 10]
// Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
// startsWithA('aardvark') should return true
// startsWithA('bear') should return false
// Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
// excite('yes') should return 'yes!!!'
// excite('go') should return 'go!!!'
// Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
// sun('sundries') should return true
// sun('asunder') should return true
// sun('catapult') should return false
// Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
// tiny(0.3) should return true
// tiny(14) should return false
// tiny(-5) should return false
// Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.
// getSeconds('01:30') should return 90
// getSeconds('10:25') should return 625


// for (var i = 0; i < 3; i++) {
// 		console.log('Five!');
// 		console.log(i);
// 	}


// var calculateArea = function(height, width){
// 	return height * width; // return statement defines what the outputs of the function are.
// }
// console.log(calculateArea(4, 3)); // passing 4 and 3 into the function

// ************************
// Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
// tripleFive() 
// Five!
// Five!
// Five!


// var tripleFive = function(){
// 	for (var i = 0; i < 3; i++) {
// 		console.log('Five!');
// //		console.log(i);
// 	};
// }
// tripleFive();

// ************************
// Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
// lastLetter('hello') should return 'o'
// lastLetter('island') should return 'd'
// output - 
// ************************
// var stringArray = function(){

// };

// SOLUTION:
// var lastLetter = function(inputString){
// 	return inputString.charAt( inputString.length - 1 );
// };
// console.log('last letter result : ', lastLetter('island'));

// lastLetter('hello') should return 'o'
// lastLetter('island') should return 'd'
// split
// charAt

// *************************
// Write a function called 'square' which takes a single argument which is a number, and returns number * number.
// square(3) should return 9
// square(5) should return 25

// psuedocode:
// declare variable as function passing in number as parameter
// within function "square" calculate the parameter times itself as a return
// console.log("the square of " + number " is " + result)

// SOLUTION:
// var square = function(num){
// 	return Math.pow(num, 2);
// }
// var num = prompt("Please enter a number to square:");
// console.log("the square of " + num + " is " + square(num));

// *************************

// Write a function called 'negate' which takes a single number argument and returns the negative of that number.
// negate(5) should return -5
// negate(-8) should return 8

// psuedocode:
// declare variable as function passing in prompted variable as parameter
// within function calculate "negate" the number by multiplying it by -1
// return the value calculated in the function and present via console.log

// SOLUTION:
// var negate = function(num){
// 	return ( num * -1 );
// }
// var num = prompt("Enter a value to negate:");
// console.log("the value negated is:" + negate(num));

// *************************

// Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
// toArray(1, 4, 5) should return [1, 4, 5]
// toArray(8, 9, 10) should return [8, 9, 10]

// psuedocode:
// declare a variable as a function called "toArray" passing in three arguments
// within the function create an array object and use the push method to populate the elements of an array to contain the arguments
// 
// var num1 = 8;
// var num2 = 9;
// var num3 = 10;
// var toArray = [];
// toArray.push(num1, num2, num3);
// console.log("the numbers added to the array are: " + toArray);

// *************************

// Write a function called 'startsWithA' which takes a single string argument 
// and returns true if the given string's first letter is 'A' and false otherwise.
// startsWithA('aardvark') should return true
// startsWithA('bear') should return false

// example code:
// function definition
// var capitalize = function(string) {
//     console.log(string)
//     var result = string.toUpperCase()
//     return result;
// }
// var input = 'hello...'
// console.log(input)
// var result = capitalize(input);
// console.log(result)


// var wordPrompt = ('aardvark');
// var startsWithA = function(word)
// 	return = word.split("");
// console.log(startsWithA('aardvark'));


// psuedocode:
// declare variable as function passing in string variable (word) as parameter
// within function parse each character of the string into an array using for loop with length property as condition
// create variable in return statement as boolean of whether letter determined in the function was 'A' 
// and present via console.log

// indexing into a string using bracket notation works as with an into array index...


// SOLUTION:
// var theWord = 'aardvark';
// var theWord = 'bear';
// var startsWithA = function(word){
// 		//console.log('function called!');
// 		if ((word[0] === 'a' ) || (word[0] === 'A' ))
// 			return true;
// 		else return false;
// 		}
// console.log(startsWithA(theWord));
// ************************


// Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
// excite('yes') should return 'yes!!!'
// excite('go') should return 'go!!!'

// SOLUTION:
// var theWord = 'go';
// var excite = function(word){
// 	return word + '!!!';	
// }
// console.log(excite(theWord));
// ************************

// Write a function called 'sun' which takes a single string argument and returns true if the string contains 
// the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
// sun('sundries') should return true
// sun('asunder') should return true
// sun('catapult') should return false
// var theWord = 'asunder';


// SOLUTION:
// var theWord = 'catapult';
// var theWord = 'sundries';
// var sun = function(word){
// 	if (word.indexOf('sun') !== -1)
// 		return true;
// 	else return false;
// 	};
// console.log(sun(theWord));
// ************************


// ************************
// Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
// tiny(0.3) should return true
// tiny(14) should return false
// tiny(-5) should return false

// SOLUTION:
// var num = .3;
// // var num = 14;
// // var num = -5;
// var tiny = function(theNum){
// 	if ((theNum < 1) && (theNum > 0))
// 		return true;
// 	else return false;
// }
// console.log(tiny(num));
// ************************


// ************************
// Write a function called 'getSeconds' which takes a single string argument in the 
// format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.
// getSeconds('01:30') should return 90
// getSeconds('10:25') should return 625

// SOLUTION:

var mins = '01:30';
// var mins = 10:25;

var getSeconds = function(theMins){
	return (theMins.subString(0, 2))
}

console.log(getSeconds.mins);