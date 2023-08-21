/// Format grades

// function formatGrades(grade) {
//     let wording = null;
//     switch (true) {
//         case (grade < 3):
//             wording = "Fail (2)";
//             break;
//         case (grade >= 3 && grade < 3.5):
//             wording = `Poor (${grade.toFixed(2)})`;
//             break;
//         case (grade >= 3.5 && grade < 4.5):
//             wording = `Good (${grade.toFixed(2)})`;
//             break;
//         case (grade >= 4.5 && grade < 5.5):
//             wording = `Very good (${grade.toFixed(2)})`;
//             break;
//         case (grade >= 5.5):
//             wording = `Excellent (${grade.toFixed(2)})`;
//             break;
//     }
//     console.log(`${wording}`);
// }
// formatGrades(3.5);

/// Power Number

// function calculatePower(n, power) {
//     let sum = 1;
//     for (let i = 0; i < power; i++) {
//         sum *= n;
//     }
//     console.log(sum)
// }
// calculatePower(2, 8)

//// Repeat String

// function repeatString(text, n) {
//     let res = [];
//     for (let i = 0; i < n; i++) {
//         res.push(text);
//     }
//     console.log(res.join(""));
// }

// repeatString("abc", 3)

//// Products Orders

// function calculateOrdersPrice(product, quantity) {
//     switch(product) {
//         case "water":
//             console.log(`${(quantity * 1).toFixed(2)}`)
//             break;
//         case "coffee":
//             console.log(`${(quantity * 1.5).toFixed(2)}`)
//             break;
//         case "coke":
//             console.log(`${(quantity * 1.4).toFixed(2)}`)
//             break;
//         case "snacks":
//             console.log(`${(quantity * 2).toFixed(2)}`)
//             break;
//     }
// }
// calculateOrdersPrice("water", 5)

///// Simple Calculator

// function calculateCalc(numOne, numTwo, operator) {
//     let calc = {
//         "add": (a, b) => a + b,
//         "divide": (a, b) => b != 0 ? a / b : 0,
//         "multiply": (a, b) => a * b,
//         "subtract": (a, b) => a - b,
//     };
//     console.log(calc[operator](numOne, numTwo));
// }
// calculateCalc(2, 0, "divide");

//// Sign checkout

function checkSign(a, b, c) {
    let list = [a, b, c]
    let check = 0;

    for (let el of list) {
        if (el < 0) {
            check += 1
        }
    }

    if (check % 2 === 0) {
        console.log("Positive")
    } else {
        console.log("Negative")
    }
}