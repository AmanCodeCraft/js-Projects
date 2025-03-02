// 5. Callbacks

// 1. Write a function greetUser(name, callback) that logs "Hello, [name]!" and then calls the callback function.
// let greetUser = (name, callback) => {
//     console.log("Hello,", name + "!");
//     callback();
// };

// let hi = () => {
//     console.log("How are you?");  // Added a meaningful action
// };

// greetUser("Ashu", hi);

// 2. Write a function sum(a, b, callback) that returns the sum of two numbers, and then calls a callback that logs the result.
// let  sum=(a,b,callBack)=>{
//     let total=a+b;
//     callBack(total);
// }

// let result=(sum)=>{
//     console.log("sum is: ", sum);
// }

// sum(2,2,result);

// 3. Write a function getUserInfo(callback) that simulates fetching user data after a delay and calls the callback with a user object { name: "John", age: 30 }.
// let getUserInfo=(callback)=>{
//   setTimeout(()=>{
//     let person={
//         name: "John",
//         age: 20
//     };
//     console.log("After little delay...!");
//     callback(person);
//   },4000);
// };

// let result=(person)=>{
//   console.log("info is: ",person);
// };

// getUserInfo(result);

// let getInfo = (callback) => {
//   setTimeout(() => {
//     let data = {
//       name: "ashu",
//       age: 22,
//     };
//     console.log("after little delay!");
//     callback(data);
//   }, 2000);
// };

// let result = (data) => {
//   console.log(data);
// };

// getInfo(result);

// 4. Write a function fetchData(callback) that simulates fetching data (e.g., an array of numbers). After a delay, call the callback function with the array.
// let fetchData = (callback) => {
//   setTimeout(() => {
//     let arr = [2, 2, 2, 2];
//     console.log("After little 2 sec dealy!");
//     callback(arr);
//   }, 2000);
// };

// let showArr=(arr)=>{
//     console.log("array elements are; ", arr);
// }

// fetchData(showArr);

// 5. Create a function multiplyNumbers(a, b, callback) that multiplies two numbers and calls a callback that logs the result.

// let multiplyNumbers=(a,b,callback)=>{
//     let mul= a*b;
//     callback(mul);
// };

// let result=(mul)=>{
//     console.log(mul);
// };

// multiplyNumbers(2,2,result);

// 6. Write a function isEven(number, callback) that checks if a number is even or odd, then calls the callback with the result.

// let isEven = (number, callback)=>{
//     let check=false;
//     if(number%2===0){
//         check=true;
//     }else{
//         check=false;
//     }
//     callback(check);
// };

// let result=(check)=>{
//     console.log("Number is Even: ", check);
// }

// isEven(3,result);

// let isEven = (number, callback) => {
//     callback(number % 2 === 0); // Directly passing the boolean result
// };

// let result = (isEven) => {
//     console.log("Number is Even:", isEven);
// };

// isEven(4, result);
// isEven(7, result);

// 7. Write a function doubleNumbers(arr, callback) that doubles each number in the array and passes the modified array to the callback.

// let doubleNumbers=(arr,callback)=>{
//     let modifiedArr=arr.map((num)=>num*2);
//         callback(modifiedArr);
// };

// let result=(modifiedArr)=>{
//     console.log(modifiedArr);
// };

// doubleNumbers([2,2,2,2],result);

// 8. Create a function filterPositiveNumbers(arr, callback) that filters out negative numbers from an array and calls the callback with the new array.
// let filterPositiveNumbers=(arr,callback)=>{
//     let onlyPositive=arr.filter((a)=>{
//        return a>0;
//     });
//     callback(onlyPositive);
// };

// let result =(onlyPositive)=>{
//     console.log(onlyPositive);
// };

// filterPositiveNumbers([-2,4,5,-5,2,-5],result);

// 9. Write a function getAgeInMonths(age, callback) that converts age (in years) into months and calls the callback with the result.
// let getAgeInMonths=(age,callback)=>{
//     let clcMonths=age*12;
//     callback(clcMonths);
// };

// let result=(clcMonths)=>{
//     console.log("Your age is : ",clcMonths,"Months");
// };

// getAgeInMonths(10,result);

// 10. Create a function downloadFile(url, callback) that simulates downloading a file and calls the callback once it's "downloaded" (after a delay).
// let downloadFile = (url, callback) => {
//   console.log(`Your file is downloading ${url}`);
//   setTimeout(() => {
//     console.log("downloaded completed!");
//     callback();
//   }, 3000);
// };

// let result = () => {
//   console.log("file is ready to use...!");
// };

// downloadFile("aksskk.com", result);

