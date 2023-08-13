// Excellent Grade

// function isExcellent(input) {
//     let grade = Number(input[0]);

//     if (grade >= 5.50) {
//         console.log("Excellent!");
//     }
// }

// isExcellent(["5.51"])

// Compare numbers

// function greaterNumber(input) {
//     let num1 = Number(input[0]);
//     let num2 = Number(input[1]);
//     if (num1 > num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }

// greaterNumber(["1", 2])

// Even or Odd

// function evenOrOdd(input) {
//     let num = Number(input[0]);
//     if (num % 2 == 0) {
//         console.log("even")
//     } else {
//         console.log("odd")
//     }
// }

// evenOrOdd(["3"])

// Geuess the Pass

// function guessPass(input) {
//     const correct_pass = "s3cr3t!P@ssw0rd";
//     let entered_pass = input[0];

//     if (entered_pass === correct_pass) {
//         console.log("Welcome")
//     } else {
//         console.log("Wrong password!")
//     }
// }

// guessPass(["s3cr3t!P@ssw0rd"])

// Number between 100 and 200

// function numberGuess(input) {
//     let num = Number(input[0]);

//     if (num < 100) {
//         console.log("Less than 100");
//     } else if (100 <= num && num <= 200) {
//         console.log("Between 100 and 200");
//     } else {
//         console.log("Greater than 200")
//     }
// }

// numberGuess(["95"])

// Speed Info

// function speedInfo(input) {
//     let num = Number(input[0]);

//     if (num <= 10) {
//         console.log("slow");
//     } else if (num <= 50) {
//         console.log("average");
//     } else if (num <= 150) {
//         console.log("fast");
//     } else if (num <= 1000) {
//         console.log("ultra fast");
//     } else {
//         console.log("extremely fast")
//     }
// }

// speedInfo(["100"])

function areaCalculate(input) {
    let shape = input[0];
    let area = 0;

    if (shape === "square") {
        let side = Number(input[1]);
        area = side * side;
    } else if (shape === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if (shape === "circle") {
        let r = Number(input[1]);
        area = Math.PI * r * r;
    } else if (shape === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = (a * h) / 2;
    }
    console.log(area.toFixed(3));
}
areaCalculate(["rectangle", "7", "2.5"])