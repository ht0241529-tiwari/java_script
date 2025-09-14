//date and time in js
let myDate = new Date(); // Creates a Date object with the current date and time

// console.log(myDate.toString()); 
// 👉 Converts the date to a full human-readable string (e.g., "Sun Sep 14 2025 14:00:00 GMT+0530")

// console.log(myDate.toDateString()); 
// 👉 Returns only the date portion (e.g., "Sun Sep 14 2025")

// console.log(myDate.toLocaleString()); 
// 👉 Formats the date and time based on the system's locale (e.g., "14/9/2025, 2:00:00 pm")

// console.log(typeof myDate); 
// 👉 Returns "object" because Date is a built-in object in JavaScript

let myCreatedDate = new Date(2023, 0, 23); 
// 👉 Creates a date: Jan 23, 2023 (month is 0-indexed: 0 = January)

// let myCreatedDate = new Date(2023, 0, 23, 5, 3); 
// 👉 Creates a date with time: Jan 23, 2023 at 5:03 AM

// let myCreatedDate = new Date("2023-01-14"); 
// 👉 ISO format: creates Jan 14, 2023 (safe and consistent across browsers)

// let myCreatedDate = new Date("01-14-2023"); 
// 👉 US-style format: Jan 14, 2023 (can be inconsistent in non-US locales)

// console.log(myCreatedDate.toLocaleString()); 
// 👉 Displays the created date in local format (e.g., "14/1/2023, 12:00:00 am")


let myTimeStamp = Date.now(); 
// 👉 Returns the current timestamp in milliseconds since Jan 1, 1970 (Unix Epoch)

// console.log(myTimeStamp); 
// 👉 Useful for performance tracking or time comparisons

// console.log(myCreatedDate.getTime()); 
// 👉 Converts a specific date to its timestamp (milliseconds since Epoch)

// console.log(Math.floor(Date.now() / 1000)); 
// 👉 Converts current timestamp to seconds (common in APIs and databases)


let newDate = new Date(); 
// 👉 Creates a new Date object with the current date and time

// console.log(newDate); 
// 👉 Full date object with all components

// console.log(newDate.getMonth() + 1); 
// 👉 Returns current month (add 1 because months are 0-indexed)

// console.log(newDate.getDay()); 
// 👉 Returns day of the week (0 = Sunday, 6 = Saturday)

// `${newDate.getDay()} and the time ` 
// 👉 Template literal to combine day index with custom text


newDate.toLocaleString('default', {
  weekday: "long",
}); 
// 👉 Returns the full name of the weekday (e.g., "Sunday")
// Useful for displaying user-friendly date info in dashboards or reports