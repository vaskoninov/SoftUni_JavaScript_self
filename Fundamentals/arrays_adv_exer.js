//// Train

// function train(seq) {
//     let composition = seq.shift().split(" ").map(Number);
//     const wagonCapacity = Number(seq.shift());

//     for (let i = 0; i < seq.length; i++) {
//         let instructions = seq[i].split(" ");
//         if (instructions.length === 2) {
//             composition.push(Number(instructions[1]));
//         } else {
//             for (let i = 0; i < composition.length; i++) {
//                 if (composition[i] + Number(instructions[0]) <= wagonCapacity) {
//                     composition[i] += Number(instructions[0]);
//                     break;
//                 }
//             }
//         }
//     }
//     console.log(composition.join(" "))

// }
// train(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75'])

//// Distinct Arrays

// function createUniqueArray(seq) {
//     let res = [];

//     for (let i = 0; i < seq.length; i++) {
//         let temp = seq[i];
//         if (res.includes(temp)) {
//             continue;
//         } else {
//             res.push(temp);
//         }
//     }
//     console.log(res.join(" "))
// }

// createUniqueArray([7, 8, 9, 7, 2, 3,
//     4, 1, 2])

/////// House Party 
