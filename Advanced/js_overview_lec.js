//// Print and Count

// function echo(string) {
//     console.log(string.length);
//     console.log(string);
// }

////// String Length

// function stringCalc(a, b, c) {
//     let lengthStr = a.length + b.length + c.length;
//     let aver = Math.floor(lengthStr / 3);

//     console.log(lengthStr);
//     console.log(aver);
// }

///// Largest Number

// function calcLargest(a, b, c) {
//     let largest = -Infinity;
//     let numbers = [a, b, c];

//     for (let i of numbers) {
//         if (i > largest) {
//             largest = i;
//         }
//     }
//     console.log(`The largest number is ${largest}.`);
// }

////// Circle Area

// function circleCalc(a) {
//     if (typeof a !== "number") {
//         console.log(`We can not calculate the circle area, because we receive a ${typeof a}.`);
//     } else {
//         let circleArea = Math.PI * (Math.pow(a, 2));
//         console.log(circleArea.toFixed(2));
//     }
// }

////  Math Ops

// function mathOps(a, b, operator) {

//     let operations = {
//         "+": (a, b) => a + b,
//         "/": (a, b) => (b !== 0) ? a / b : 0,
//         "*": (a, b) => a * b,
//         "-": (a, b) => a - b,
//         "**": (a, b) => a ** b,
//         "%": (a, b) => a % b,
//     };

//     let result = operations[operator](a, b);
//     console.log(result);
// }

// mathOps(5, 0, '/');

//// SumNumbers

// function sumNumbersRange(n, m) {
//     let result = 0;

//     for (let index = Number(n); index <= Number(m); index++) {
//         result += index;

//     }
//     console.log(result);
// }
// sumNumbersRange('1', '5');

//// Days of the Week

// function printWeekDayNum(day) {
//     let days = [
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//         'Sunday',
//     ];

//     (days.includes(day)) ? console.log(days.indexOf(day) + 1) : console.log('error');
// }

// printWeekDayNum('Monday');

//// Days in A Month

// function getDaysInMonth(month, year) {
//     console.log(new Date(year, month, 0).getDate());
// }

// getDaysInMonth(2, 2021);

//// StarSquare

// function starSquare(a = 5) {
//     for (let i = 0; i < a; i++) {
//         console.log("* ".repeat(a));
//     }
// }

// starSquare();

//// Aggregate Els

function transformArr(arr) {
    let sum = 0;
    let sum1 = 0;
    let conc = "";
    arr.forEach(element => {
        sum += element;
        sum1 += 1 / element;
        conc = conc + element;
    });


    console.log(sum);
    console.log(sum1);
    console.log(conc);
}

transformArr([1, 2, 3]);