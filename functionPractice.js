// 3. Functions**

// Basic Functions:
// 1. Write a function 'greet()' that logs '"Hello, world!"' to the console.
// const greet=()=>console.log("hello world");
// greet();
// function greet(){
//     console.log("hello, world");
// }
// greet();

// 2. Write a function 'sayHello(name)' that takes a name as a parameter and logs '"Hello, [name]!"'.
// let sayhello=(name)=>console.log(`hello ${name}`);
// sayhello("ashu");

// 3. Write a function 'add(a, b)' that takes two parameters and returns their sum.
// const add=(a,b)=> a+b;
// console.log("sum is: ", add(2,2));

// 4. Write a function 'subtract(a, b)' that returns the difference between 'a' and 'b'.
// const sub=(a,b)=>a-b;
// console.log("difference is : ", sub(2,4));

// 5. Write a function 'multiply(a, b)' that returns the product of 'a' and 'b'.
// const mul=(a,b)=>a*b;
// console.log("multiply is: ", mul(2,2));

// 6. Write a function 'isEven(num)' that checks if a number is even.
// let isEven=(a)=>a%2===0;
// let check = isEven(9);
// if(check){
//     console.log("Even Number");
// }else{
//     console.log("not Even");
// }

// 7. Write a function 'isOdd(num)' that checks if a number is odd.

// const isOdd = (num) => num % 2 !== 0;
// let odd = isOdd(5);
// if (odd) {
//     console.log("yes odd number");
// } else {
//     console.log("not a odd number");
// }

// 8. Write a function 'isPalindrome(str)' that checks if a string is a palindrome.

// const isPalindrom=(str)=>{
//     let reverse= str.split(" ").reverse().join(" ");
//     return reverse === str;
// }

// console.log(isPalindrom("madam"));

// 9. Write a function 'areaOfRectangle(length, width)' that returns the area of a rectangle.
// const areaOfRectangle=(length,width)=> {
//     return length*width;
// }

// console.log("Area of Rectangle is: ",areaOfRectangle(6,2));

// 10. Write a function 'convertToFahrenheit(celsius)' that converts Celsius to Fahrenheit.

// let convertToFahrenheit= (celcius)=>{
//     return (celcius * 9/5)+ 32; 
// }

// console.log(convertToFahrenheit(10));

// Functions with Return:

// 11. Write a function 'getFullName(firstName, lastName)' that returns the full name.
// let fullName=(firstName,lastName)=>{
//     return firstName+lastName;
// }

// console.log("fullname is: ", fullName("Aman","deep"));

// 12. Write a function 'calculateArea(radius)' that calculates the area of a circle (use π = 3.14).
// let calculateArea=(r)=>{
//     let pi=3.14;
//     return pi*r*r;
// }
// console.log("Circle area is: ", calculateArea(2));

// 13. Write a function 'calculatePerimeter(length, width)' that calculates the perimeter of a rectangle.
// let calculatePerimeter=(l,w)=>{
//     return 2*(l+w);
// }
// console.log("Perimater of rectangle is: ", calculatePerimeter(2,2));

// 14. Write a function 'findMax(a, b, c)' that returns the largest of three numbers.
// let findMax=(a,b,c)=>{
//     return Math.max(a,b,c);
// }
// console.log(findMax(2,4,8));

// 15. Write a function 'calculateSum(arr)' that returns the sum of all elements in an array.

// let calculateSum = (arr) => {
//     return arr.reduce((total,num) => total + num, 0);
// }

// let arr2 = [2, 2, 2, 2];
// console.log(calculateSum(arr2));

// 16. Write a function 'findLongestWord(arr)' that returns the longest word from an array of strings.
// let findLongestWord=(arr)=>{
//     return arr.reduce((longest,word)=>word.length>longest.length ? word:longest," ");
// }

// let arr2=["Aman", "ashu","amnii"];
// console.log("logest word is: ", findLongestWord(arr2));


// 17. Write a function 'convertToUpperCase(str)' that returns the string in uppercase.

// let convertToUpperCase=(str)=>{
//     return str.toUpperCase();
// }

// console.log(convertToUpperCase("ashu"));


// 18. Write a function 'countVowels(str)' that counts and returns the number of vowels in a string.


// 19. Write a function 'reverseString(str)' that returns the reverse of a string.

// let reverseString=(str)=>{
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("ashu"));

// 20. Write a function 'factorial(n)' that returns the factorial of a number.

// let factorial=(n)=>{
//     if(n===0 || n===1) return 1;
//     return n * factorial(n-1);
// }

// console.log(factorial(5));

