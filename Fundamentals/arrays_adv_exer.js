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

// function houseParty(seq) {
//     let result = [];
//     for (let el of seq) {
//         let temp = el.split(" ");
//         if (temp.length === 3) {
//             if (!(result.includes(temp[0]))) {
//                 result.push(temp[0]);
//             } else {
//                 console.log(`${temp[0]} is already in the list!`)
//             }
//         } else {
//             if (result.includes(temp[0])) {
//                 let index = result.indexOf(temp[0]);
//                 result.splice(index, 1)
//             } else {
//                 console.log(`${temp[0]} is not in the list!`)
//             }
//         } 
//     }
//     console.log(result.join("\n"))
// }

// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']);

//// Sorting
// function sortMixed(seq) {
//     let res = [];
//     let sorted = seq.sort((a, b) => b - a);

//     let length_sorted = sorted.length / 2;
//     for (let i = 0; i < length_sorted; i++) {
//         res.push(sorted.shift());
//         res.push(sorted.pop());
//     }
//     console.log(res.join(" "))
// }
// sortMixed([1, 21, 3, 52, 69, 63, 31,
//     2, 18, 94]);

///// SortByTwo

// function sortByTwo(seq) {
//     let sorted = seq.sort((a, b) => a.length !== b.length ? a.length - b.length : a.localeCompare(b))
//     // let sorted = seq.sort((a, b) => a.length - b.length || a.localeCompare(b))
//     console.log(sorted.join("\n"))
// }
// sortByTwo(['alpha',
//     'beta',
//     'gamma']
// );

///// bombNumbers 

// function bombNumbers(seq, bomb) {
//     let [bomb_number, power] = bomb;

//     while (seq.includes(bomb_number)) {
//         let index = seq.indexOf(bomb_number);
//         let startIndex = (index - power) >= 0 ? index - power : 0;

//         seq.splice(startIndex, (2 * power + 1));
//     }
//     let final = seq.reduce((a, b) => a + b, 0);
//     console.log(final);
// }
// bombNumbers([1, 7, 7, 1, 2, 3],
//     [7, 1]

// );

///////// searchForNumber

// function searchForNumber(seq, instructions) {
//     let [toTake, toDelete, toFind] = instructions;
//     let counter = 0;

//     let new_one = seq.splice(0, toTake);
//     new_one.splice(0, toDelete);
//     for (let i of new_one) {
//         if (i === toFind) counter++;
//     }
//     console.log(`Number ${toFind} occurs ${counter} times.`)
// }
// searchForNumber([5, 2, 3, 4, 1, 6],
//     [5, 2, 3]
// );

////// ArrayManipulator

// function arrayManipulator(numbers, commands) {

//     for (let command of commands) {
//         let instructions = command.split(" ");
//         let [mani, ...rest] = instructions;
//         if (mani === "shift") {
//             for (let i = 0; i < Number(rest[0]); i++) {
//                 let temp = numbers.shift();
//                 numbers.push(temp);
//             }
//         } else if (mani === "sumPairs") {
//             let temp = [];
//             if (numbers.length % 2 !== 0) numbers.push(0);
//             for (let i = 0; i < numbers.length; i += 2) {
//                 let new_value = Number(numbers[i]) + Number(numbers[i + 1]);
//                 temp.push(new_value);
//             }
//             numbers = temp;
//         } else if (mani === "print") {
//             console.log(`[ ${numbers.join(", ")} ]`);
//             break;
//         } else if (mani === "addMany") {
//             let [index, ...values] = rest;
//             numbers.splice(Number(index), 0, ...values);
//         } else if (mani === "add") {
//             let [index, values] = rest;
//             numbers.splice(Number(index), 0, Number(values));
//         } else if (mani === "contains") {
//             let a = Number(rest[0]);
//             numbers.includes(a) ? console.log(numbers.indexOf(a)) : console.log(-1);
//         } else if (mani === "remove") {
//             let a = Number(rest[0]);
//             numbers.splice(a, 1);
//         }
//     }
// }
// arrayManipulator([1, 2, 3, 4, 5],
//     ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
// );

////// Gladiator Equipment

// function gEquipment(sequence) {
//     let inventory = sequence.shift().split(" ");

//     for (el of sequence) {
//         let [command, part] = el.split(" ");

//         if (command === "Buy") {
//             if (!(inventory.includes(part))) inventory.push(part);
//         }
//         if (command === "Trash") {
//             if (inventory.includes(part)) {
//                 let index = inventory.indexOf(part);
//                 inventory.splice(index, 1);
//             }
//         }
//         if (command === "Repair") {
//             if (inventory.includes(part)) {
//                 let index = inventory.indexOf(part);
//                 let temp = inventory.splice(index, 1);
//                 inventory.push(temp);
//             }
//         }
//         if (command === 'Upgrade') {
//             let [piece, upgrade] = part.split("-");
//             if (inventory.includes(piece)) {
//                 let index = inventory.indexOf(piece);
//                 let text = piece.concat(":", upgrade);
//                 inventory.splice(index + 1, 0, text);
//             }
//         }
//     }
//     console.log(inventory.join(" "));
// }
// gEquipment(['SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel']
// );
// gEquipment(['SWORD Shield Spear',
//     'Trash Bow',
//     'Repair Shield',
//     'Upgrade Helmet-V']
// );


///////// Build A Wall

function buildWall(parts) {
    let numbered = parts.map(Number);
    const completed = 30;
    const price = 1900;
    let dailyYards = [];

    let yards = 0;

    while (true) {
        if (numbered.every((a) => a === completed)) break;
        let daily = 0;
        for (let i = 0; i < numbered.length; i++) {
            if (numbered[i] === completed) continue;
            daily += 195;
            numbered[i]++;
        }
        dailyYards.push(daily);
        yards += daily;
    }
    console.log(dailyYards.join(", "));
    let total = yards * price;
    console.log(`${total} pesos`)
}
buildWall([17]);