// your notes here!
//
// Some comment
//
//
console.log("hello world!");

console.log("Types section");

// Converts celsius to farenheit

var cToF = function (tempC) {
	tempF = tempC * 9 / 5 + 32;
	return tempF;
}

var burritoPrice = function (price) {
	result = Math.round((price * 1.09) * 100) / 100;
	return result;
	// body...
}

// Print out 3 letters of a string in upper case

var printThree = function (content) {
	content = content.slice(content.length - 3);
	content = content.toUpperCase();
	return content;
}

// Returns true if a string is a tweet (no more than 140 characters)

var isTweet = function (message) {
	result = message.length
	return result < 10;
}

var lol = function (message) {
	return isTweet(message) && message.indexOf("lol") > -1;
}

var isNumber = function (potentialNumber) {
	return typeof potentialNumber === "number";
}

var isPositiveNumber = function (number) {
	return isNumber(number) && number > 0;
}

var isYear = function (potentialYear) {
	return isPositiveNumber(potentialYear) && potentialYear <= 9999;	
}