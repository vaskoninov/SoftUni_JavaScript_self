/// Sum FirstAndLast
// function sumFirstLast(seq) {
//     let first = Number(seq.shift());
//     let last = Number(seq.pop());
//     console.log(`${first + last}`);
// }

///// NegativeOrPositive

// function orderNegativeOrPositive(seq) {
//     let sequence = [];
//     for (let el of seq) {
//         if (el >= 0) {
//             sequence.push(el)
//         } else {
//             sequence.unshift(el)
//         }
//     }
//     console.log(sequence.join("\n"))
// }
// orderNegativeOrPositive(['7', '-2', '8', '9']);

///////// FirstLastKNumbers

// function firstLastKNumbers(seq) {
//     let k = seq.shift();

//     let first = seq.slice(0, k);
//     let last = seq.slice(seq.length - k);

//     console.log(first.join(' '));
//     console.log(last.join(' '));
// }

// firstLastKNumbers([2,
//     7, 8, 9]
// );

////// LastKNumbersSeq

// function printLastKNumbers(n, k) {
//     let res = [1];
//     while (res.length < n) {
//         let temp = res.slice(-k);
//         let sum = 0;
//         for (let i of temp) {
//             sum += i;
//         }
//         res.push(sum);
//     }
//     console.log(res);
// }
// printLastKNumbers(6, 3);

///// Process Odd Numbers

// function processOddNumbers(seq) {
//     let res = seq.filter((x, i) => i % 2 !== 0)
//         .map(x => x * 2)
//         .reverse();

//     console.log(res.join(" "));
// }
// processOddNumbers([10, 15, 20, 25]);

//// Smallest Number

// function sortAscending(seq) {
//     let res = seq.sort((a, b) => a - b)
//     console.log(res.slice(0,2).join(" "))
// }
// sortAscending([30, 15, 50, 5])

//// List of Products

// function sortListProducts(seq) {
//     let res = seq.sort();
//     let i = 1;
//     for (let el of res) {
//         console.log(`${i}.${el}`);
//         i++;
//     }
// }
// sortListProducts(['Potatoes', 'Tomatoes', 'Onions',
//     'Apples']
// );

///// Array manipulations

function arrayManipulation(sequence) {
    let arr = sequence.shift().split(" ");

    let manipulations = {
        "Add": (a) => arr.push(a),
        "Remove": (a) => arr = arr.filter(el => el != a),
        "RemoveAt": (a) => arr.splice(a, 1),
        "Insert": (a, b) => arr.splice(b, 0, a),
    };
    for (let i = 0; i < sequence.length; i++) {
        let instructions = sequence[i].split(" ");
        if (instructions.length === 3) {
            manipulations[instructions[0]](Number(instructions[1]), Number(instructions[2]));
        } else {
            manipulations[instructions[0]](Number(instructions[1]));
        }
    }
    console.log(arr.join(" "));
}
arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
arrayManipulation(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);