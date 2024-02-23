// Question #24
var string1 = 'hello';
var string2 = 'world';
var number1 = 10;
var number2 = 5;
var array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Is string1 == string2? I predict false.");
console.log(string1 == string2);
console.log("Is string1 != string2? I predict true.");
console.log(string1 != string2);
// Tests using the lowercase function
console.log("Is string1 lowercase 'hello'? I predict true.");
console.log(string1.toLowerCase() == 'hello');
console.log("Is string2 lowercase 'WORLD'? I predict false.");
console.log(string2.toLowerCase() == 'WORLD');
// Numerical tests
console.log("Is number1 > number2? I predict true.");
console.log(number1 > number2);
console.log("Is number1 < number2? I predict false.");
console.log(number1 < number2);
console.log("Is number1 >= number2? I predict true.");
console.log(number1 >= number2);
console.log("Is number1 <= number2? I predict false.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
console.log("Is number1 > 5 and number2 < 10? I predict true.");
console.log(number1 > 5 && number2 < 10);
console.log("Is number1 > 10 or number2 < 5? I predict false.");
console.log(number1 > 10 || number2 < 5);
