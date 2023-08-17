///// Ages

// function determineStatus(age) {
//     switch (true) {
//         case (age >= 0 && age <= 2):
//             console.log("baby");
//             break;
//         case (age >= 3 && age <= 13):
//             console.log("child");
//             break;
//         case (age >= 14 && age <= 19):
//             console.log("teenager");
//             break;
//         case (age >= 20 && age <= 65):
//             console.log("adult");
//             break;
//         case (age >= 66):
//             console.log("elder");
//             break;
//         default:
//             console.log("out of bounds");
//             break;
//     }
// }

/////// Rounding

// function roundNumber(n, m) {

//     if (m > 15) m = 15;
//     console.log(parseFloat(n.toFixed(m)))
// }
// roundNumber(3.1400000, 15)

///// Division

// function checkDivision(num) {
//     let value = -1;
//     if (num % 10 == 0) {
//         value = 10;
//     } else if (num % 7 == 0) {
//         value = 7;
//     } else if (num % 6 == 0) {
//         value = 6;
//     } else if (num % 3 == 0) {
//         value = 3;
//     } else if (num % 2 == 0) {
//         value = 2;
//     }
//     if (value !== -1) {
//         console.log(`The number is divisible by ${value}`);
//     } else {
//         console.log("Not divisible")
//     }
// }

////// Vacation

// function calculateVacation(number, type, day) {
//     let total = 0;
//     let price = null;
//     switch (type) {
//         case "Students":
//             if (day == "Friday") {
//                 price = 8.45;
//             } else if (day === "Saturday") {
//                 price = 9.8;
//             } else if (day === "Sunday") {
//                 price = 10.46;
//             }
//             if (number >= 30) {
//                 total = (price * number) * 0.85;
//             } else {
//                 total = price * number;
//             }
//             break;
//         case "Business":
//             if (day == "Friday") {
//                 price = 10.9;
//             } else if (day === "Saturday") {
//                 price = 15.6;
//             } else if (day === "Sunday") {
//                 price = 16;
//             }
//             if (number >= 100) {
//                 number -= 10;
//             }
//             total = price * number;
//             break;
//         case "Regular":
//             if (day == "Friday") {
//                 price = 15;
//             } else if (day === "Saturday") {
//                 price = 20;
//             } else if (day === "Sunday") {
//                 price = 22.5;
//             }
//             if (number >= 10 && number <= 20) {
//                 total = (price * number) * 0.95;
//             } else {
//                 total = price * number;
//             }
//             break;
//     }
//     console.log(`Total price: ${total.toFixed(2)}`);
// }
// calculateVacation(30, "Students", "Sunday")

/// Leap Year

// function checkLeapYear(year) {
//     if (year % 400 === 0) {
//         console.log("yes");
//     } else if (year % 4 === 0 && year % 100 !== 0) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }
// }
// checkLeapYear(2003)

////////// Print And Sum

// function printAndSum(n, m) {
//     let sum = 0;
//     let lineNumbers = "";

//     for (let i = n; i <= m; i++) {
//         sum += i;
//         lineNumbers += `${i} `;
//     }
//     console.log(lineNumbers);
//     console.log(`Sum: ${sum}`);
// }
// printAndSum(5, 10);

////// Triangle of Numbers

// function drawTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         result = "";
//         for (let j = 1; j <= i; j++) {
//             result += `${i} `;
//         }
//         console.log(result)
//     }
// }
// drawTriangle(5)

///// Multiplication Table

// function getTable(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} X ${i} = ${n * i}`);
//     }
// }
// getTable(5);

////// Login

// function logIn(input) {
//     let pass = input[0];
//     let counter = 0;

//     for (let i = 1; i < input.length; i++) {
//         counter++
//         let entry = input[i].split("").reverse().join("");
//         if (entry === pass) {
//             console.log(`User ${pass} logged in.`)
//             break;
//         } else {
//             if (counter === 4) {
//                 console.log(`User ${pass} blocked!`);
//                 break;
//             } else {
//                 console.log("Incorrect password. Try again.")
//             }
//         }
//     }
// }
// logIn(['Acer','login','go','let me in','recA']);

//// King Joser

// function calculatePyramid(base, increment) {
//     let side = base;

//     let stone = 0;
//     let marble = 0;
//     let lapis = 0;
//     let gold = 0;
//     let height = 0;

//     while (side > 1) {
//         if (side - 2 === 0) break;
//         height++;

//         let totalBlocks = (side * side) * increment; 
//         let stoneBlocks = ((side - 2) * (side - 2)) * increment;
//         let outerBlocks = totalBlocks - stoneBlocks;

//         stone += stoneBlocks;
//         if (height % 5 === 0) {
//             lapis += outerBlocks;
//         } else {
//             marble += outerBlocks;
//         }
//         side -=2;
//     }
//     height++
//     let goldenBlocks = (side * side) * increment;
//     gold += goldenBlocks;

//     console.log(`Stone required: ${Math.ceil(stone)}`)
//     console.log(`Marble required: ${Math.ceil(marble)}`)
//     console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
//     console.log(`Gold required: ${Math.ceil(gold)}`)
//     console.log(`Final pyramid height: ${Math.floor(height * increment)}`)
// }
// calculatePyramid(11, 1)