///// 1-100
// function numbers1To100() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }


////// 100 - 1

// function numbersReversed(input) {
//     let n = Number(input[0]);

//     for (let i = n; i > 0; i--) {
//         console.log(i)
//     }
// }

// numbersReversed(["5"])

//// Numbers with Step

// function numbersWithStep(input) {
//     let n = Number(input[0]);

//     for (let i = 1; i <= n; i += 3) {
//         console.log(i);
//     }
// }

// numbersWithStep(["7"])

//// Power of 2 even

// function solve(input) {
//     let n = Number(input[0]);
//     let num = 1;

//     for (let i = 0; i <= n; i += 2) {
//         console.log(num);
//         num = num * 2 * 2;
//     }
// }

//// Print String Char by Char

// function printStringChar(input) {
//     let text = input[0];

//     for (let i = 0; i < text.length; i++) {
//         console.log(text[i]);
//     }
// }
// printStringChar(["softuni"])

///// Sum of Values

// function sumVowels(input) {
//     let word = input[0];
//     let sum = 0;

//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === "a") {
//             sum += 1;
//         } else if (word[i] === "e") {
//             sum += 2;
//         } else if (word[i] === "i") {
//             sum += 3;
//         } else if (word[i] === "o") {
//             sum += 4;
//         } else if (word[i] === "u") {
//             sum += 5;
//         }
//     }
//     console.log(sum);
// }

// sumVowels(["hello"]);

///// Sum of Digits

// function sumDigits(input) {
//     let number = input[0];
//     let size = number.length;

//     let sum = 0;

//     for (let i = 0; i < size; i++) {
//         sum += Number(number.charAt(i));
//     }
//     console.log(`The sum of the digits is:${sum}`)
// }

// sumDigits(["1234"]);

///// Divisible by 9

function divisible9(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let sum = 0;

    let numbers = [];

    for (let i = num1; i < num2; i++) {
        if (i % 9 == 0) {
            sum += i;
            numbers.push(i)
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

divisible9(["100", "200"])