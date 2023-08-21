///// Add and Subtract

// function arrayAddSubstract(array) {
//     let sumOriginal = 0;

//     for (let i = 0; i < array.length; i++) {
//         sumOriginal += array[i];
//         if (array[i] % 2) {
//             array[i] -= i;
//         } else {
//             array[i] += i;
//         }
//     }
//     let sumTransformed = array.reduce((a, b) => a + b, 0);
//     console.log(array);
//     console.log(sumOriginal);
//     console.log(sumTransformed);
// }
// arrayAddSubstract([5, 15, 23, 56, 35]);

///////// Common Elements

// function getCommonElements(arrayOne, arrayTwo) {
//     let res = [];

//     for (let el of arrayOne) {
//         if (arrayTwo.includes(el)) res.push(el);
//     }
//     if (res) console.log(res.join("\n"));
// }

// getCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
//     ['Petar', 10, 'hey', 4, 'hello', '2']);

///// Merge Arrays

// function mergeArrays(arrayOne, arrayTwo) {
//     let res = [];

//     for (let i = 0; i < arrayOne.length; i++) {
//         if (i % 2 === 0) {
//             res[i] = Number(arrayOne[i]) + Number(arrayTwo[i]);
//         } else {
//             res[i] = arrayOne[i] + arrayTwo[i];
//         }
//     }
//     console.log(res.join(" - "));
// }

// mergeArrays(['5', '15', '23', '56', '35'],
//     ['17', '22', '87', '36', '11']);

//////// Array Rotation

// function rotateArray(seq, num) {
//     for (let i = 0; i < num; i++) {
//         let a = seq.shift();
//         seq.push(a);
//     }
//     console.log(seq.join(" "));
// }
// rotateArray([51, 47, 32, 61, 21], 2);

///// Max Number

// function checkMaxNumbers(seq) {
//     let res = [];

//     for (let i = 0; i < seq.length; i++) {
//         let top = true;
//         for (let j = i + 1; j < seq.length; j++) {
//             if (seq[i] <= seq[j]) {
//                 top = false;
//                 break;
//             }
//         }
//         if (top) res.push(seq[i]);
//     }
//     if (res) console.log(res.join(" "));
// }

// checkMaxNumbers([27, 19, 42, 2, 13, 45, 48]);

///// Equal Sums

function checkEqualSums(array) {
    if (array.length === 1) {
        console.log(0);
    } else if (array.length > 1) {
        let equality = false;
        for (let i = 1; i < array.length; i++) {
            let first = array.slice(0, i);
            let second = array.slice(i + 1);
            let sumFirst = first.reduce((a, b) => a + b, 0);
            let sumSec = second.reduce((a, b) => a + b, 0);
            if (sumFirst === sumSec) {
                equality = true;
                break;
            }
        }
        if (equality) {
            console.log(i);
        } else {
            console.log("no");
        }
    }
}
checkEqualSums([1, 2, 3, 3]);