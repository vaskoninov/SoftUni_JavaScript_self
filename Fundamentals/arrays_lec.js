///// Sum First and Last El

// function sumFirstLast(sequence) {
//     first = sequence.shift()
//     last = sequence.pop()

//     console.log(first + last);
// }
// sumFirstLast([20, 30, 40]);

/////// Day of the Week

// function getDayByNumber(num) {
//     let days = [
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         'Thursday',
//         "Friday",
//         "Saturday",
//         "Sunday"
//     ]

//     if ((num - 1) < 0 || (num - 1) > 6) {
//         console.log("Invalid day!");
//     } else {
//         console.log(days[num - 1]);
//     }

// }

// getDayByNumber(0)

//////// Reverse an Array
// function reverseArray(num, array) {
//     let result = array.slice(0,num).reverse()
//     console.log(result.join(" "))
// }
// reverseArray(3, [10, 20, 30, 40, 50])

///////// Reverse in Place

// function reverseInPlace(array) {
//     for (let i = 0; i < array.length / 2; i++) {
//         let first = array[i];
//         let last = array[array.length - i - 1];
//         array[i] = last;
//         array[array.length - i - 1] = first;
//     }
//     console.log(array.join(" "))
// }
// reverseInPlace(['33', '123', '0', 'dd'])
// reverseInPlace(['a', 'b', 'c', 'd', 'e'])

///////// SumEvenNumbers

// function sumEvenNumbers(seq) {
//     let nums = seq.map((x) => Number(x))
//     let sum = 0;
//     for (let num of nums) {
//         if (!(num % 2)) sum += num;
//     }
//     console.log(sum)
// }

// sumEvenNumbers(['1','2','3','4','5','6'])

//////EvenOddSubtraction

// function calculateEvenOdd(seq) {
//     let even = 0;
//     let odd = 0;

//     for (let num of seq) {
//         (!(num % 2)) ?
//             even += num : odd += num;
//     }

//     console.log(even - odd);
// }
// calculateEvenOdd([1,2,3,4,5,6])

///////// Equal Arrays

// function checkEqualArrays(arrayOne, arrayTwo) {
//     let array1 = arrayOne.map((x) => Number(x));
//     let array2 = arrayTwo.map((x) => Number(x));

//     let sum = 0;
//     let identicalArrayes = true;

//     for (let i = 0; i < array1.length; i++) {
//         sum += array1[i];
//         if (array1[i] !== array2[i]) {
//             identicalArrayes = false;
//             console.log(`Arrays are not identical. Found difference at ${i} index`);
//             break;
//         }
//     }
//     if (identicalArrayes) console.log(`Arrays are identical. Sum: ${sum}`);
// }

// checkEqualArrays(['10', '20', '30'],
//     ['10', '20', '30']);
// checkEqualArrays(['1', '2', '3', '4', '5'],
//     ['1', '2', '4', '4', '5']);

///////// Condense Arrays

function condenseArrays(array) {

    while (array.length > 1) {
        let temp = [];
        for (let i = 0; i < array.length - 1; i++) {
            temp[i] = array[i] + array[i + 1];
        }
        array = temp;
    }
    console.log(array[0]);
}
condenseArrays([2, 10, 3]);