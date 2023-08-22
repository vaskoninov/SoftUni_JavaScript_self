////  Smallest Number

// function getSmallest(a, b, c) {
//     let arr = [a, b, c];
//     console.log(Math.min(...arr));
// }

// getSmallest(2, 5, 3);

///// Add and Subtract


// function calcAddSubtract(a, b, c) {
//     function summing(a, b) {
//         return a + b;
//     }

//     let amount = summing(a, b);

//     function subtract(x, c) {
//         return x - c;
//     }

//     let result = subtract(amount, c);

//     return result;
// }

// console.log(calcAddSubtract(23, 6, 10));

/// ASCII table

// function solve(a, b) {
//     let start = a.charCodeAt();
//     let end = b.charCodeAt();

//     let res = [];

//     if (start < end) {
//         for (let i = start + 1; i < end; i++) {
//             res.push(String.fromCharCode(i))
//         }
//     } else {
//         for (let i = end + 1; i < start; i++) {
//             res.push(String.fromCharCode(i))
//         }
//     }
//     console.log(res.join(" "))
// }

// solve("Z", "A")

////// Odd and Even Sum

// function calcOddEven(num) {
//     let numAsText = String(num);
//     let odd = 0;
//     let even = 0;

//     for (let i = 0; i < numAsText.length; i++) {
//         if (Number(numAsText[i]) % 2 === 0) {
//             even += Number(numAsText[i]);
//         } else {
//             odd += Number(numAsText[i]);
//         }
//     }
//     console.log(`Odd sum = ${odd}, Even sum = ${even}`);
// }

// calcOddEven(1000435)

///// Palindrome

// function checkPalindrome(seq) {
//     for (let number of seq) {
//         let numberAsText = String(number);
//         let list = numberAsText.split("").reverse().join("");

//         if (number === Number(list)) {
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }
// }

// checkPalindrome([131])

////////////////
/// Password Validator

// function validatePassword(pass) {
//     let message = [];

//     function checkLength(text) {
//         return (text.length >= 6 && text.length <= 10);
//     }

//     function isAlphanumeric(text) {
//         return /^[a-zA-Z0-9]+$/.test(text);
//     }

//     function checkTwoDigits(text) {
//         let check = 0;
//         let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//         for (let i = 0; i < text.length; i++) {
//             if (nums.includes(Number(text[i]))) { check++ }
//         }
//         return (check >= 2);
//     }
//     let hasLength = false;
//     let isAlNum = false;
//     let hasTwoDigits = false;
//     if (checkLength(pass)) {
//         hasLength = true;
//     } else {
//         message.push("Password must be between 6 and 10 characters");
//     }
//     if (isAlphanumeric(pass)) {
//         isAlNum = true;
//     } else {
//         message.push("Password must consist only of letters and digits")
//     }
//     if (checkTwoDigits(pass)) {
//         hasTwoDigits = true;
//     } else {
//         message.push("Password must have at least 2 digits")
//     }

//     if (hasLength && isAlNum && hasTwoDigits) {
//         return "Password is valid";
//     } else {
//         return message.join("\n");
//     }
// }
// console.log(validatePassword("LogIn"))

////// NxN Matrix

// function printMatrix(n) {
//     let matrix = [];

//     for (let i = 0; i < n; i++) {
//         let temp = [];
//         for (let j = 0; j < n; j++) {
//             temp.push(n)
//         }
//         matrix.push(temp.join(" "))
//     }
//     return matrix.join("\n")
// }

// console.log((printMatrix(3)))

//// Aliquot

// function getAliquot(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (!(num % i)) {
//             sum += i
//         }
//     }
//     if (sum === num) {
//         return "We have a perfect number!"
//     } else {
//         return "It's not so perfect."
//     }
// }
// console.log(getAliquot(6))
////////////////////////
// # number = int(input())
// #
// # def get_loading_bar(number):
// #     bar = []
// #     percents = number // 10
// #     for _ in range(1, percents + 1):
// #         bar.append("%")
// #     if number < 100:
// #         remaining = (100 - number) // 10
// #         for _ in range(1, remaining + 1):
// #             bar.append(".")
// #     return bar
// #
// # loading_bar = get_loading_bar(number)
// #
// # if number < 100:
// #     print(f"{number}%", end=" ")
// #     print(f'[{"".join(loading_bar)}]')
// #     print("Still loading...")
// # else:
// #     print(f"{number}% Complete!")
// #     print(f'[{"".join(loading_bar)}]')

// #######################

//////////Loading Bar

// function loadBar(number) {
//     let bar = [];
//     let percents = Math.floor(number / 10);
//     let remaining = 0;
//     for (let i = 1; i <= percents; i++) {
//         bar.push("%");
//     }
//     if (number < 100) {
//         remaining = Math.floor((100 - number) / 10);
//     }
//     for (let i = 1; i <= remaining; i++) {
//         bar.push(".")
//     }
//     let result = [];
//     if (number < 100) {
//         result.push(`${number}% [${bar.join("")}]`);
//         result.push("Still loading...");
//         return result.join("\n")
//     } else {
//         result.push("100% Complete!");
//         result.push(`[${bar.join("")}]`);
//         return result.join("\n")
//     }
// }

// console.log(loadBar(100));

/////////////// Factorial Division

function factDiv(a, b) {

    function factorial(num) {
        if (num < 0)
            return -1;
        else if (num == 0)
            return 1;
        else {
            return (num * factorial(num - 1));
        }
    }
    let facA = factorial(a);
    let facB = factorial(b);

    result = facA / facB;
    return result.toFixed(2);
}
console.log(factDiv(5, 2))