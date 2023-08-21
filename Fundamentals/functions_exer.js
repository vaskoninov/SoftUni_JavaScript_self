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

function checkPalindrome(seq) {
    for (let number of seq) {
        let numberAsText = String(number);
        let list = numberAsText.split("").reverse().join("");

        if (number === Number(list)) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}

checkPalindrome([131])