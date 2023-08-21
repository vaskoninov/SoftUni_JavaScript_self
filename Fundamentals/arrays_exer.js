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

// function checkEqualSums(array) {
//     if (array.length === 1) {
//         console.log(0);
//     } else if (array.length > 1) {
//         let equality = false;
//         let index = null;
//         for (let i = 1; i < array.length; i++) {
//             let first = array.slice(0, i);
//             let second = array.slice(i + 1);
//             let sumFirst = first.reduce((a, b) => a + b, 0);
//             let sumSec = second.reduce((a, b) => a + b, 0);
//             if (sumFirst === sumSec) {
//                 equality = true;
//                 index = i;
//                 break;
//             }
//         }
//         if (equality) {
//             console.log(index);
//         } else {
//             console.log("no");
//         }
//     }
// }
// checkEqualSums([1, 2]);

////// Max Sequence of Same Elements

// function getMaxSequence(seq) {

//     let max_length = 0;
//     let start_index = 0;

//     for (let i = 0; i < seq.length; i++) {
//         let temp_length = 1;
//         for (let j = i + 1; j < seq.length; j++) {
//             if (seq[i] === seq[j]) {
//                 temp_length++;
//             } else {
//                 break;
//             }
//         }
//         if (temp_length > max_length){ 
//             max_length = temp_length;
//             start_index = i;
//         }
//     }

//     console.log(seq.slice(start_index, start_index + max_length).join(" "));

// }

// getMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

///// Magic Sum

// function solve(seq, num) {
//     for (let i = 0; i < seq.length; i++) {
//         for (let j = i + 1; j < seq.length; j++) {
//             if ((seq[i] + seq[j]) === num) {
//                 console.log(seq[i], seq[j]);
//             }
//         }
//     }
// }

// solve([1, 7, 6, 2, 19, 23], 8);
// solve([14, 20, 60, 13, 7, 19, 8],
//     27);


// ///////// Dungeonest Dark

// function adventures(instructions) {
//     let health = 100;
//     let coins = 0;
//     let dead = false;
//     let rooms = String(instructions).split("|");

//     for (let i = 0; i < rooms.length; i++) {
//         let room = rooms[i];
//         room = room.split(" ");
//         let monster = room[0];
//         let value = Number(room[1]);

//         if (monster === "potion") {
//             if (health + value > 100) {
//                 hp = 100 - health;
//                 health = 100;
//             } else {
//                 health += value;
//                 hp = value;
//             }
//             console.log(`You healed for ${hp} hp.`);
//             console.log(`Current health: ${health} hp.`);
//         } else if (monster === "chest") {
//             coins += value;
//             console.log(`You found ${value} coins.`);
//         } else {
//             health -= value;
//             if (health > 0) {
//                 console.log(`You slayed ${monster}.`);
//             } else {
//                 console.log(`You died! Killed by ${monster}.`);
//                 console.log(`Best room: ${i + 1}`);
//                 dead = true;
//                 break;
//             }
//         }
//     }
//     if (!(dead)) {
//         console.log("You've made it!");
//         console.log(`Coins: ${coins}`);
//         console.log(`Health: ${health}`);
//     }

// }
// adventures(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// console.log("___________________");
// adventures(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

///////// Lady Bugs

function ladyBugs(seq) {
    let size = seq[0];
    let initial_locations = seq[1].split(" ").map(Number);

    let field = [];
    for (let i = 0; i < size; i++) {
        field.push(0);
    }


    for (let el of initial_locations) {
        if (el >= 0 && el < size) {
            field[el] = "lady";
        }
    }


    for (let i = 2; i < seq.length; i++) {
        let instructions = seq[i].split(" ");
        let start = Number(instructions[0]);
        if (start < 0 || start >= size || (field[start] !== "lady")) continue;
        let end = Number(instructions[instructions.length - 1]);
        let direction = instructions[1];
        if (end < 0) {
            end = Math.abs(end);
            direction = command === "right" ? "left" : "right";
        }
        field[start] = 0;


        if (direction === "right") {
            let newPosition = start + end;
            if (field[newPosition] === "lady") {
                newPosition = newPosition + end;
            }
            if (newPosition <= field.length) {
                field[newPosition] = "lady";
            }
        } else {
            let newPosition = start - end;
            if (field[newPosition] === "lady") {
                newPosition = newPosition - end;
            }
            if (newPosition >= 0) {
                field[newPosition] = "lady";
            }
        }
        
    }

    for (let i = 0; i < field.length; i++) {
        if (field[i] === "lady") field[i] = 1;
    }
    console.log(field.join(" "));
}

// ladyBugs([3, '0 1',
//     '0 right 1',
//     '2 right 1']);
ladyBugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']
);

// ladyBugs([3, '0 1 2',
//     '0 right 1',
//     '1 right 1',
//     '2 right 1']
// );
