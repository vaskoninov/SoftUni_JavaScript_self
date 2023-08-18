//// SumDigits

// function sumDigits(num) {
//     num = num.toString();
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum += Number(num[i]);
//     }
//     console.log(sum);
// }

// sumDigits(543)

//// CharToString

// function solve(a, b, c) {
//     console.log(`${a}${b}${c}`);
// }
// solve("a", "b", "c")

//// Town Info

// function getInfo(town, population, area) {
//     console.log(`Town ${town} has population of ${population} and area ${area} square km.`)
// }

///// Meters to KM

// function solve(num) {
//     console.log(`${(num / 1000).toFixed(2)}`);
// }
// solve(798)

////// Pound to Dollars

// function solve(pounds) {
//     console.log(`${(pounds * 1.31).toFixed(3)}`);
// }

// solve(80)

/////// Reversed Chars

// function solve(a, b, c) {
//     console.log(c, b, a);
// }
// solve(1, 2,3)

//// Lower || Upper

// function solve(letter) {
//     (letter === letter.toUpperCase()) ?
//         console.log("upper-case") : console.log("lower-case");
// }
// solve("f")

///// Calculator

// function calculateNums(a, op, b) {
//     if (op === "+") {
//         console.log(`${(a + b).toFixed(2)}`) 
//     } else if (op === "-") {
//         console.log(`${(a - b).toFixed(2)}`) 
//     } else if (op === "*") {
//         console.log(`${(a * b).toFixed(2)}`) 
//     } else if (op === "/") {
//         console.log(`${(a / b).toFixed(2)}`) 
//     }
// }

///// Gladiator Expenses 

// function calculateExpenses(lost, helmet, sword, shield, armor) {
//     let expenses = 0;
//     let shield_counter = 0;

//     for (let i = 1; i <= lost; i++) {
//         if (i % 2 === 0 && i % 3 === 0) {
//             expenses += helmet;
//             expenses += sword;
//             expenses += shield;
//             shield_counter++;
//         } else if (i % 2 === 0) {
//             expenses += helmet;
//         } else if (i % 3 === 0) {
//             expenses += sword;
//         }
//         if (shield_counter === 2) {
//             expenses += armor;
//             shield_counter = 0;
//         }
//     }
//     console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
// }
// calculateExpenses(7, 2, 3, 4, 5);

////// Spice Must Flow

function calculateSpices(yield) {
    let total = 0;
    let days = 0;

    while (yield >= 100) {
        days++;
        total += yield;
        let miners = total >= 26 ? 26 : total;
        total -= miners;
        yield -= 10;
    }
    let last_eat = total >= 26 ? 26 : total;
    total -= last_eat;
    console.log(days);
    console.log(total);
}

calculateSpices(450);