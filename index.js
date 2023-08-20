console.log('Hello World Axel Console')


let name = 'Axel';

console.log(name);

// let is mutable
// const is immutable

const interestRate = 0.3;

console.log(interestRate);

// Primitive Types/ Value Types
// String, Number, Boolean, undefined, null

// Reference Types
// Object, Array, Function
// Objects are dynamic, can be changed
// Objects are collections of key-value pairs
// in python, objects are called dictionaries
// in python, arrays are called lists

let person = {
	'name': 'Axel',
	'age': 31
}; // Object Literal

console.log(person);

// Dot Notation
person.name = 'John';

console.log(person);


// Bracket Notation
// Use bracket notation when you don't know the name of the property you want to access
// or when the name of the property is stored in a variable
person['name'] = name;

console.log(person);

// Array Literal
// Arrays are used to store lists of items
// Arrays are objects in JS
// Arrays index start at 0
// in python, arrays are called lists
// to change the last item in an array, use the index -1
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors);
console.log(selectedColors.length)

selectedColors[-1] = 'purple';
console.log(selectedColors);
console.log(selectedColors.length)


let age = 31; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; // Undefined
let lastName = null; // Null
let cost = 39.99; // Number Literal

// difference between int and float
// int is a whole number
// float is a decimal number
// both are number literals in JS (no difference) 

// Functions
// Functions are a set of statements that perform a task or calculate a value
// Functions are objects in JS
// Functions are first class objects in JS
// Functions can be passed as arguments to other functions
// Functions can be returned from other functions
// Functions can be stored in variables
// Functions can be anonymous	

function greet(name, lastName) {
	console.log('Hello ' + name + ' ' + lastName);
}

greet('Axel', 'Maldonado');
greet('John', 'Smith');
greet(1, 2);
let test = square(8);
console.log(test);

function square(number) {
	return number * number;
}

greet('Axel', square(2));


