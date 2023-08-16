//// Clock

// function clock() {
//     for (let i = 0; i <= 23; i++) {
//         for (let j = 0; j <= 59; j++){
//             console.log(`${i}:${j}`)
//         }
//     }
// }

/// M Table

// function mTable() {
//     for (let i = 1; i <= 10; i++) {
//         for (let j = 1; j <= 10; j++) {
//             console.log(`${i} * ${j} = ${i * j}`)
//         }
//     }
// }

//// Combinations

// function calculateCombinations(input) {
//     let num = Number(input[0]);
//     let result = 0;

//     for (let i = 0; i <= num; i++) {
//         for (let j = 0; j <= num; j++) {
//             for (let k = 0; k <= num; k++) {
//                 if ((i + j + k) === num) {
//                     result += 1;
//                 }
//             }
//         }
//     }
//     console.log(result);
// }
// calculateCombinations(["25"])

/// Sum of Numbers

function sumNumbers(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let target = Number(input[2]);

    let combs = 0;
    let found = false;
    let expression = null;

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            combs++;
            if ((i + j) === target) {
                found = true;
                expression = `(${i} + ${j} = ${target})`;
                break;
            }
        }
        if (found) {
            break;
        }
    }
    if (found) {
        console.log(`Combination N:${combs} ${expression}`);
    } else {
        console.log(`${combs} combinations - neither equals ${target}`)
    }
}

sumNumbers(["23", "24", "20"])