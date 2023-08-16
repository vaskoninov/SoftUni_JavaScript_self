/// Word Reading

// function read(input) {
//     let i = 0;
//     while (true) {
//         let word = input[i];
//         if (word === "Stop") break;
//         console.log(word);
//         i++;
//     }
// }
// read(["Nakov",
//     "SoftUni",
//     "Sofia",
//     "Bulgaria",
//     "SomeText",
//     "Stop",
//     "AfterStop",
//     "Europe",
//     "HelloWorld"]);

///// Read Password

// function readPass(input) {
//     let user = input[0];
//     let pass = input[1];

//     let i = 2;
//     while (true) {
//         let attempt = input[i];
//         if (pass === attempt) {
//             console.log(`Welcome ${user}!`)
//             break;
//         }
//         i++;
//     }
// }

// readPass(["Nakov",
//     "1234",
//     "Pass",
//     "1324",
//     "1234"]);

/// Sum Numbers

// function sumNumbers(input) {
//     let result = 0;
//     let initial = Number(input[0]);
//     let i = 1;

//     while (true) {
//         result += Number(input[i]);
//         if (result >= initial) break;
//         i++;
//     }
//     console.log(result);
// }

// sumNumbers(["100", "10", "20", "30", "40"]);

///// Row of Numbers

// function calcNumbers(input) {
//     let num = Number(input[0]);
//     let curNum = 1;

//     while (curNum <= num) {
//         console.log(curNum);
//         curNum = 2 * curNum + 1;
//     }
// }

// calcNumbers(["3"]);

//// Accounting

// function accountBalance(input) {
//     let total = 0;
//     let i = 0;

//     while (true) {
//         let income = input[i];
//         if (income === "NoMoreMoney") {
//             console.log(`Total: ${total.toFixed(2)}`);
//             break;
//         }
//         let add = Number(input[i]);
//         if (Number(input[i]) < 0) {
//             console.log("Invalid operation!");
//             console.log(`Total: ${total.toFixed(2)}`);
//             break;
//         }
//         console.log(`Increase: ${add.toFixed(2)}`);
//         total += Number(add);
//         i++;
//     }
// }

// accountBalance(["120",
//     "45.55",
//     "-100",
//     "NoMoreMoney"]);

///// MaxNumber

// function findMaxNumber(input) {
//     let num = Number.MIN_SAFE_INTEGER;
//     let i = 0;
//     while (true) {
//         let nums = input[i];
//         if (nums === "Stop") {
//             console.log(num);
//             break;
//         }
//         nums = Number(nums);
//         if (nums > num) num = nums;
//         i++;
//     }
// }
// findMaxNumber(["100",
//     "99",
//     "80",
//     "70",
//     "Stop"]);

//// Min Number

// function findMaxNumber(input) {
//     let num = Number.MAX_SAFE_INTEGER;
//     let i = 0;
//     while (true) {
//         let nums = input[i];
//         if (nums === "Stop") {
//             console.log(num);
//             break;
//         }
//         nums = Number(nums);
//         if (nums < num) num = nums;
//         i++;
//     }
// }

////// Graduation

function calculateAverageGrade(input) {
    let name = input[0];
    let total = 0;
    let repetitions = 0;
    let i = 1;
    let classs = 1;
    
    while (true) {
        let grade = Number(input[i]);
        if (grade < 4) {
            repetitions += 1;
            if (repetitions === 2) break;
            i++;
            continue;
        }
        total += grade;
        if (classs === 12) break;
        i++;
        classs++;
    }
    if (repetitions > 1) {
        console.log(`${name} has been excluded at ${classs} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(total / 12).toFixed(2)}`)
    }
}

calculateAverageGrade(["Gosho","5","5.5","6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])