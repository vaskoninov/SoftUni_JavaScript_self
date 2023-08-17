/// Multiply by 2

// function mult(num) {
//     console.log(num * 2);
// }
// mult(2)

/// Student Info

// function getInfo(name, age, grade) {
//     console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
// }
// getInfo('John', 15, 5.54678)

/// Excellent Grade

// function getGrade(num) {
//     if (num >= 5.50) {
//         console.log("Excellent");
//     } else {
//         console.log("Not excellent");
//     }
// }

/// Foreign Language

// function getLanguage(country) {
//     switch (country) {
//         case "USA":
//         case "England":
//             console.log("English");
//             break;
//         case "Spain":
//         case "Argentina":
//         case "Mexico":
//             console.log("Spanish");
//             break;
//         default:
//             console.log("unknown");
//             break;
//     }
// }

//// Month Printer

// function getMonth(month_number) {
//     let months = ["January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December",
//     ];
//     if (month_number >= 1 && month_number <= 12) {
//         console.log(months[month_number - 1]);
//     } else {
//         console.log("Error!")
//     }
// }
// getMonth(13)

/// Theatre Promotion

// function getPrice(day, age) {
//     if (age < 0 || age > 122) {
//         console.log("Error!");
//     } else {
//         switch (day) {
//             case "Weekday":
//                 if (age >= 0 && age <= 18) {
//                     price = "12$";
//                 } else if (age > 18 && age <= 64) {
//                     price = "18$";
//                 } else if (age > 64 && age <= 122) {
//                     price = "12$";
//                 }
//                 break;
//             case "Weekend":
//                 if (age >= 0 && age <= 18) {
//                     price = "15$";
//                 } else if (age > 18 && age <= 64) {
//                     price = "20$";
//                 } else if (age > 64 && age <= 122) {
//                     price = "15$";
//                 }
//                 break;
//             case "Holiday":
//                 if (age >= 0 && age <= 18) {
//                     price = "5$";
//                 } else if (age > 18 && age <= 64) {
//                     price = "12$";
//                 } else if (age > 64 && age <= 122) {
//                     price = "10$";
//                 }
//                 break;
//         }
//         console.log(price)
//     }
// }

// getPrice("Weekday", 42)

/// Number 1-5

// function printNums() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }

// printNums()

///// Divisible By 3

// function divisible() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0) console.log(i);
//     }
// }
// divisible()

/////// Numbers from N to 1

// function backwards(num) {
//     for (let i = num; i > 0; i--) {
//         console.log(i);
//     }
// }
// backwards(5)

////// Numbers from M to N

// function lineNumbers(start, end) {
//     for (let i = start; i >= end; i--) {
//         console.log(i);
//     }
// }
// lineNumbers(6, 2)

//// Sum of Odd Numbers

// function sumOddNumbers(num) {
//     let sum = 0;
//     let i = 1;
//     let counter = 1;
//     while (counter <= num) {
//         if (i % 2 !== 0) {
//             sum += i;
//             counter++;
//             console.log(i);
//         }
//         i++;
//     }
//     console.log(`Sum: ${sum}`);
// }
// sumOddNumbers(3)