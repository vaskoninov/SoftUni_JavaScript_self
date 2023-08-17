//// Clock

// function clock() {
//     for (let i = 0; i <= 23; i++) {
//         for (let j = 0; j <= 59; j++){
//             console.log(`${i}:${j}`)
//         }
//     }
// }

/// M Table

// function mTable() {
//     for (let i = 1; i <= 10; i++) {
//         for (let j = 1; j <= 10; j++) {
//             console.log(`${i} * ${j} = ${i * j}`)
//         }
//     }
// }

//// Combinations

// function calculateCombinations(input) {
//     let num = Number(input[0]);
//     let result = 0;

//     for (let i = 0; i <= num; i++) {
//         for (let j = 0; j <= num; j++) {
//             for (let k = 0; k <= num; k++) {
//                 if ((i + j + k) === num) {
//                     result += 1;
//                 }
//             }
//         }
//     }
//     console.log(result);
// }
// calculateCombinations(["25"])

/// Sum of Numbers

// function sumNumbers(input) {
//     let a = Number(input[0]);
//     let b = Number(input[1]);
//     let target = Number(input[2]);

//     let combs = 0;
//     let found = false;
//     let expression = null;

//     for (let i = a; i <= b; i++) {
//         for (let j = a; j <= b; j++) {
//             combs++;
//             if ((i + j) === target) {
//                 found = true;
//                 expression = `(${i} + ${j} = ${target})`;
//                 break;
//             }
//         }
//         if (found) {
//             break;
//         }
//     }
//     if (found) {
//         console.log(`Combination N:${combs} ${expression}`);
//     } else {
//         console.log(`${combs} combinations - neither equals ${target}`)
//     }
// }

// sumNumbers(["23", "24", "20"])

/// Travelling

// function toTravel(input) {
//     let i = 0;
//     while (true) {
//         let destination = input[i];
//         if (destination === "End") break;
//         ++i;
//         let cost = Number(input[i]);
//         ++i;
//         let gathered = 0;

//         while (gathered < cost) {
//             gathered += Number(input[i]);
//             i++;
//         }
//         console.log(`Going to ${destination}!`);
//     }
// }

// toTravel(["Greece",
//     "1000",
//     "200",
//     "200",
//     "300",
//     "100",
//     "150",
//     "240",
//     "Spain",
//     "1200",
//     "300",
//     "500",
//     "193",
//     "423",
//     "End"]);

///// Building

// function showRoomNumbers(input) {
//     let floors = Number(input[0]);
//     let rooms = Number(input[1]);

//     for (let i = floors; i > 0; i--) {
//         let numbers = "";
//         for (let j = 0; j < rooms; j++) {

//             if (i === floors) {
//                 numbers += `L${i}${j} `;
//             } else if (i % 2 == 0) {
//                 numbers += `O${i}${j} `;
//             } else if (i % 2 != 0) {
//                 numbers += `A${i}${j} `;
//             }
//         }
//         console.log(numbers);
//     }
// }

// showRoomNumbers(["1", "4"]);