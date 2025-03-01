// 4. Loops**

// For Loops:
// 1. Write a 'for' loop that prints the numbers from 1 to 10.
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// 2. Write a 'for' loop that prints the even numbers between 1 and 20.
// for(let i=2; i<=20; i+=2){
//     console.log(i);
// }

// 3. Write a 'for' loop that prints the odd numbers between 1 and 20.
// for(let i=1; i<=20; i+=2){
//     console.log(i);
// }

// 4. Write a 'for' loop that calculates the sum of the numbers from 1 to 50.
// let sum=0;
// for(let  i=1; i<=50; i++){
//     sum+=i;
// }
// console.log("Sum: ", sum);

// 5. Write a 'for' loop that prints all the elements in the array 'fruits'.
// let fruits=["apple","bnana","grapes"];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// 6. Write a 'for' loop that prints the multiplication table of 5 (5 * 1, 5 * 2, ..., 5 * 10).
// for(let i=1; i<=10; i++){
//     console.log(5*i);
// }

// 7. Write a 'for' loop that reverses the order of the array 'colors'.
// let colors=["blue","white","green"];
// for(let i=colors.length-1; i>=0; i--){
//     console.log(colors[i]);
// }

// 8. Write a 'for' loop that prints the numbers from 10 to 1 in descending order.
// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// 9. Write a 'for' loop that finds the factorial of a number 'n'.
// let n = prompt("Enter any positive value: ");
// n = parseInt(n);
// let factorial = 1;
// for (let i = n; i >= 1; i++) {
//   factorial *= i;
// }
// console.log(factorial);

// 10. Write a 'for' loop that prints the sum of the squares of numbers from 1 to 10.
// let sum=0;
// for(let i=1; i<=10; i++){
//     sum+=i*i;
// }
// console.log(sum);

// While Loops:

// 11. Write a 'while' loop that prints the numbers from 1 to 10.
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// 12. Write a 'while' loop that prints the sum of numbers from 1 to 100.
// let sum=0;
// let i=1;
// while (i<=100) {
//     sum+=i;
//     i++;
// }
// console.log(sum);

// 13. Write a 'while' loop that prints the even numbers between 1 and 20.
// let i=2;
// while(i<=20){
//     console.log(i);
//     i+=2;
// }

// 14. Write a 'while' loop that counts down from 10 to 1.
// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// 15. Write a 'while' loop that finds the largest number in an array of numbers.
// let numbers= [10,2,8,40];
// let i=0;
// let big= numbers[i];
// while(i<numbers.length){
//    if(numbers[i]>big){
//     big=numbers[i];
//    }
//    i++;
// }

// console.log(big);

// 16. Write a 'while' loop that finds the smallest number in an array.

// let i = 0;
// let numbers = [ 4, 5, 5, 8];
// let small = numbers[i]; //4
// while (i < numbers.length) { 
//   if (small > numbers[i]) {
//     small = numbers[i];
//   }
//   i++;
// }
// console.log(small);

// 17. Write a 'while' loop that keeps adding numbers to a sum until the sum is greater than 50.
// let i=1;
// let sum=0;
// while (sum<=50) {
//     sum+=i;
//     i++;
// }

// console.log(sum);

// 18. Write a 'while' loop that counts the number of times a certain letter appears in a string.
// let name = "amandeepashuaman";
// let targetLetter = "a";  // ✅ Define the letter to count
// let i = 0; 
// let count = 0;

// while (i < name.length) {
//     if (name[i] === targetLetter) {
//         count++;
//     }
//     i++;
// }

// console.log(`The letter '${targetLetter}' appears ${count} times.`);


// 19. Write a 'while' loop that prints the Fibonacci sequence up to a certain number.
// let numTerms = 10;  // Define the number of terms
// let first = 0, second = 1;  // Initialize first two numbers

// console.log("Fibonacci Series:");
// console.log(first);  // Print first number
// console.log(second); // Print second number

// let i = 2;  // Start from the 3rd term

// while (i < numTerms) {
//     let next = first + second;  // Calculate next number
//     console.log(next);
    
//     // Update variables for next iteration
//     first = second;
//     second = next;
    
//     i++;  // Increment loop counter
// }

// 20. Write a 'while' loop that prints the numbers from 1 to 100, but prints '"Fizz"' for multiples of 3 and '"Buzz"' for multiples of 5.
// let i = 1;
// while (i <= 100) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");  //  Both 3 & 5
//     } else if (i % 3 === 0) {
//         console.log("Fizz");  //  Multiples of 3
//     } else if (i % 5 === 0) {
//         console.log("Buzz");  //  Multiples of 5
//     } else {
//         console.log(i);  //  Print number if not divisible by 3 or 5
//     }
//     i++;  //  Correct increment
// }


