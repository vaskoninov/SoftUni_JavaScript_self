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

// #######################
// #
// # password = input()
// #
// #
// # def validate_password(password):
// #     length = 6 <= len(password) <= 10
// #     alphanum = password.isalnum()
// #     digits = 0
// #     messages = []
// #     for ch in password:
// #         if ch.isdigit():
// #             digits += 1
// #     if length and alphanum and digits >= 2:
// #         messages.append("Password is valid")
// #     else:
// #         if not length:
// #             messages.append("Password must be between 6 and 10 characters")
// #         if not alphanum:
// #             messages.append("Password must consist only of letters and digits")
// #         if digits < 2:
// #             messages.append("Password must have at least 2 digits")
// #     return messages
// #
// #
// # validation = validate_password(password)
// #
// # for message in validation:
// #     print(message)

// #####################

// # number = int(input())
// #
// # def get_aliquot_sum(number):
// #     summa = 0
// #     for i in range(1, number):
// #         if number % i == 0:
// #             summa += i
// #     if summa == number:
// #         return 'We have a perfect number!'
// #     else:
// #         return "It's not so perfect."
// #
// # result = get_aliquot_sum(number)
// # print(result)
// ######################
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
// import math

// a = int(input())
// b = int(input())


// def calculate(a, b):
//     fac_a = math.factorial(a)
//     fac_b = math.factorial(b)
//     result = fac_a / fac_b
//     return result


// division = calculate(a, b)
// print(f"{division:.2f}")

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

