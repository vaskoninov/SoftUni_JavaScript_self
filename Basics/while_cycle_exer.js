///// Old Library

// function findBook(input) {
//     let word = input[0];
//     let i = 1;
//     let found = false;

//     while (i < input.length) {
//         let book = input[i];

//         if (book === "No More Books") break;

//         if (book === word) {
//             found = true;
//             break;
//         }
//         i++;

//     }

//     if (found) {
//         console.log(`You checked ${i - 1} books and found it.`)
//     } else {
//         console.log("The book you search is not here!");
//         console.log(`You checked ${i - 1} books.`)
//     }
// }
// findBook(["Troy",
//     "Stronger",
//     "Life Style",
//     "Troy"]);

//// Exam Preparation

// function prepareExam(input) {

//     let failing = Number(input[0]);
//     let bad_grades = 0;
//     let i = 1;
//     let exams = 0;
//     let total_grades = 0;
//     let last_problem = null;

//     while (true) {
//         let exam = input[i];
//         if (exam === "Enough") {
//             console.log(`Average score: ${(total_grades / exams).toFixed(2)}`);
//             console.log(`Number of problems: ${exams}`);
//             console.log(`Last problem: ${last_problem}`);
//             break;
//         }
//         exams += 1;
//         last_problem = exam;
//         let grade = Number(input[i + 1]);
//         if (grade <= 4) {
//             bad_grades += 1;
//             if (bad_grades === failing) {
//                 console.log(`You need a break, ${failing} poor grades.`);
//                 break;
//             }
//         }
//         total_grades += grade;
//         i += 2;
//     }
// }

// prepareExam(["3",
//     "Money",
//     "6",
//     "Story",
//     "4",
//     "Spring Time",
//     "5",
//     "Bus",
//     "6",
//     "Enough"]);

// prepareExam(["2",
//     "Income",
//     "3",
//     "Game Info",
//     "6",
//     "Best Player",
//     "4"]);

////// Vacation

// function calculateMoney(input) {
//     let cost = Number(input[0]);
//     let available = Number(input[1]);

//     let days_spending = 0;
//     let days = 1;
//     let i = 2;

//     while (true) {
//         let action = input[i];
//         let amount = Number(input[i + 1]);

//         if (action === "spend") {
//             ++days_spending;
//             available -= amount;
//             if (available < 0) available = 0;
//             if (days_spending === 5) {
//                 console.log("You can't save the money.");
//                 console.log(days);
//                 break;
//             }
//         } else {
//             days_spending = 0;
//             available += amount;
//             if (available >= cost) {
//                 console.log(`You saved the money for ${days} days.`);
//                 break;
//             }
//         }
//         days++;
//         i += 2;
//     }
// }

// calculateMoney(["2000",
//     "1000",
//     "spend",
//     "1200",
//     "save",
//     "2000"]);

////// Steps

// function calculateSteps(input) {
//     const goal = 10000;

//     let steps = 0;
//     let i = 0;

//     while (i < input.length) {
//         let entry = input[i];
//         if (entry === "Going home") {
//             // let last_entry = Number(input.at(-1));
//             ++i;
//             let last_entry = Number(input[i])
//             steps += last_entry;
//             break;
//         }
//         steps += Number(entry);
//         i++;
//     }
//     if (steps >= goal) {
//         console.log("Goal reached! Good job!")
//         console.log(`${steps - goal} steps over the goal!`)
//     } else {
//         console.log(`${goal - steps} more steps to reach goal.`)
//     }

// }

// // calculateSteps(["1000",
// //     "1500",
// //     "2000",
// //     "6500"]);

// calculateSteps(["1500", "300", "2500", "3000", "Going home", "200"])

/////// Coins

