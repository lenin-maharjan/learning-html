// Exercise 1: Variables and Data Types
const personName = "John Doe";
const personAge = 25;
const personEmail = "john.doe@example.com";
console.log("Name:", personName);
console.log("Age:", personAge);
console.log("Email:", personEmail);

// Exercise 2: Functions and Conditional Statements
function isAdult(age) {
	return age >= 18 ? "Adult" : "Minor";
}
console.log(isAdult(17)); // Minor
console.log(isAdult(18)); // Adult
console.log(isAdult(30)); // Adult

// Exercise 3: Loops
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// Exercise 4: Arrays and Loops
const favoriteFruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < favoriteFruits.length; i++) {
	console.log(favoriteFruits[i]);
}

// Exercise 5: Conditional Statements and Functions
function isEven(number) {
	return number % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(2)); // Even
console.log(isEven(7)); // Odd

// Exercise 6: Conditional Statements and Loops
for (let n = 1; n <= 20; n++) {
	console.log(n, n % 2 === 0 ? "Even" : "Odd");
}

// Exercise 7: Functions, Arrays, and Loops
const numbersArray = [1, 2, 3, 4, 5];
function sumArray(array) {
	let sum = 0;
	for (let num of array) sum += num;
	return sum;
}
console.log("Sum:", sumArray(numbersArray));

// Exercise 8: Nested Loops (Multiplication Table 1 to 10)
for (let a = 1; a <= 10; a++) {
	let line = "";
	for (let b = 1; b <= 10; b++) {
		line += (a * b).toString().padStart(4, " ");
	}
	console.log(line);
}

