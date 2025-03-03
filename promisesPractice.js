// 6. Promises

// 1. Create a promise fetchUserData() that resolves with an object { name: "Alice", age: 25 } after 2 seconds.
// function fetchUserData() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         let person = {
//           name: "Alice",
//           age: 25
//         };
//         console.log("Resolved:", person); // Logging for debugging
//         resolve(person); // Resolve with the object
//       }, 2000); // 2 seconds delay
//     });
//   }

//   // Example usage:
//   fetchUserData().then((data) => console.log("User Data:", data));

// 2. Write a promise checkPassword(password) that resolves if the password is "secure123" and rejects otherwise.
// let checkPassword = (password) => {
//   return new Promise((resolve, reject) => {
//     if (password === "secure123") {
//       resolve("Matched!");
//     } else {
//       reject("Not Matched..!");
//     }
//   });
// };

// checkPassword("secure123")
// .then(message=>console.log(message))
// .catch(message=>console.log(message));

// 3. Write a function addNumbers(a, b) that returns a promise which resolves with the sum of the two numbers after 1 second.
// let addNumbers = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 1000);
//   });
// };

// addNumbers(2, 2).then((sum)=>console.log("sum is: ",sum)
// );

// 4. Write a function fetchDataFromAPI() that simulates an API call using a promise, which resolves with an array of numbers after 2 seconds.
// 5. Create a promise downloadImage(url) that simulates downloading an image. Resolve with "Image downloaded" if successful, and reject with an error message if not.
// 6. Write a promise checkLoginStatus() that simulates checking if a user is logged in. Resolve with "User is logged in" or reject with "User is not logged in."
// 7. Create a promise saveData(data) that simulates saving user data. Resolve with "Data saved" after 2 seconds, and reject if the data is invalid.
// 8. Write a promise sendEmail(email) that simulates sending an email. Resolve with "Email sent" and reject if the email is invalid.
function sendEmail(email) {
  return new Promise((resolve, reject) => {
    if (email.includes("@")) {
      setTimeout(() => {
        resolve("Email sent");
      }, 2000);
    } else {
      reject("Invalid email address");
    }
  });
}

let email = prompt("Enter your mail id: ");
sendEmail(email)
  .then((message) => {
    console.log("Sending mail...!");
    console.log(message);
  })
  .catch((error) => {
    console.log("Mail rejected...!");
    console.log(error);
  });


// 9. Create a promise getWeather(city) that simulates fetching weather data and resolves with the temperature in Celsius after 2 seconds.
// 10. Write a promise fetchUserProfile() that resolves with a user profile object { name: "Tom", location: "New York" } after 3 seconds, and rejects if there’s an error.
