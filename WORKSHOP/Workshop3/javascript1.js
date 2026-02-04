// 1.Check if a number is positive, negative, or zero
let number = 5;
if (number > 0) {
    console.log("The number is positive.");
}
if (number < 0) {
    console.log("The number is negative.");
}
if (number === 0) {
    console.log("The number is zero.");
}

//2.user eligible to vote
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}   
if (age < 18) {
    console.log("You are not eligible to vote.");
}      
if (age === 18) {
    console.log("You have just become eligible to vote.");
}
else {
    console.log("Age is not valid.");
}

//3.switcch case for days of the week
let day = 3;    
if (day === 1) {
    console.log("Monday");
}
if (day === 2) {
    console.log("Tuesday");
}
if (day === 3) {
    console.log("Wednesday");
}
if (day === 4) {
    console.log("Thursday");
}
if (day === 5) {
    console.log("Friday");
}
if (day === 6) {
    console.log("Saturday");
}
if (day === 7) {
    console.log("Sunday");
}
else {
    console.log("Invalid day.");
}


//4. check if sting is longer than 10 characters
let str = "Hello, World!";
if (str.length > 10) {
    console.log("The string is longer than 10 characters.");
}   
if (str.length <= 10) {
    console.log("The string is 10 characters or shorter.");
}   
if (str.length === 10) {
    console.log("The string is exactly 10 characters long.");
}
else {
    console.log("String length is not valid.");
}

//5. determin the grade of studnet 0-100
let score = 85;
if (score >= 90 && score <= 100) {
    console.log("Grade: A");
}
if (score >= 80 && score < 90) {
    console.log("Grade: B");
}       
if (score >= 70 && score < 80) {
    console.log("Grade: C");
}
if (score >= 60 && score < 70) {
    console.log("Grade: D");
}       
if (score < 60) {
    console.log("Grade: F");
}
else {
    console.log("Score is not valid.");
}


//6. check if a year is a leap year
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
}   
if ((year % 4 !== 0) || (year % 100 === 0 && year % 400 !== 0)) {
    console.log(year + " is not a leap year.");
}
else {
    console.log("Year is not valid.");
}

//7. check if a character is a vowel or consonant
let char = 'a';             
if ('aeiouAEIOU'.includes(char)) {
    console.log(char + " is a vowel.");
}   
if (!'aeiouAEIOU'.includes(char) && /^[a-zA-Z]$/.test(char)) {
    console.log(char + " is a consonant.");
}
else {
    console.log("Character is not valid.");
}

//8. while loop print even numbers from 1 to 20 (inclusive)
let i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }   
    i++;
}

//9. loop to calculate the sum of numbers from 1 to 100
let sum =0;
let k = 1;
while (k <= 100) {
    sum += k;
    k++;
}
console.log("Sum of numbers from 1 to 100 is: " + sum);


//10. while loop print multiplication table of 7
let j = 1;
while (j <= 10) {
    console.log("7 x " + j + " = " + (7 * j));
    j++;
}

//11. Write a for loop to iterate through an array of names and print each name in the console.
let names = ["Alice", "Bob", "Charlie", "David"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);  
}

//  12. Using a while loop, find the sum of elements in an array of numbers.
let numbers = [1, 2, 3, 4, 5];
let total = 0;
let index = 0;
while (index < numbers.length) {
    total += numbers[index];
    index++;
}