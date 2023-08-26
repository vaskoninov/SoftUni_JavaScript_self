//////// Word Tracker

// function wordTracker(list) {
//     let controlWords = list.shift().split(" ");
//     let trackedWords = {};
//     for (let item of controlWords) {
//         trackedWords[item] = 0;
//     }

//     for (let word of list) {
//         if (controlWords.includes(word)) trackedWords[word] += 1;
//     }

//     let ordered = Object.entries(trackedWords).sort((a, b) => b[1] - a[1]);

//     for (let entry of ordered) {
//         console.log(`${entry[0]} - ${entry[1]}`);
//     }
// }

// wordTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have',
//     'to', 'count', 'the', 'occurrences', 'of',
//     'the', 'words', 'this', 'and', 'sentence',
//     'because', 'this', 'is', 'your', 'task'
// ]);

//// Odd occurances

// function oddOccurrences(string) {
//     let final = [];

//     let stringArray = string.split(" ").map(a => a.toLowerCase());

//     let counter = {};
//     for (let item of stringArray) {
//         if (Object.keys(counter).includes(item)) {
//             counter[item] += 1;
//         } else {
//             counter[item] = 1;
//         }
//     }

//     for (let [key, value] of Object.entries(counter)) {
//         if (value % 2 !== 0) final.push(key);
//     }

//     console.log(final.join(" "));
// }

// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

////// Piccolo

// function registrar(list) {
//     let parkingLot = [];

//     for (let info of list) {
//         let [direction, number] = info.split(", ");
//         if (direction === "IN" && !parkingLot.includes(number)) {
//             parkingLot.push(number);
//         } else if (direction === "OUT" && parkingLot.includes(number)) {
//             let index = parkingLot.indexOf(number);
//             parkingLot.splice(index, 1);
//         }
//     }

//     let sortedParkingLot = parkingLot.sort((a, b) => a.localeCompare(b));

//     if (parkingLot.length > 0) {
//         sortedParkingLot.forEach(number => console.log(number));
//     } else {
//         console.log("Parking Lot is Empty");
//     }
// }

// registrar(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU']);

////// Party Time

// function registrar(list) {
//     let guests = [];
//     let vips = [];

//     while (true) {
//         let guest = list.shift();
//         if (guest === "PARTY") break;
//         if (isNaN(guest[0])) {
//             guests.push(guest);
//         } else {
//             vips.push(guest);
//         }

//     }
//     guests = vips.concat(guests);

//     console.log(guests.sort((a, b) => a.localeCompare(b)));

//     for (let guest of list) {
//         let index = guests.indexOf(guest);
//         guests.splice(index, 1);
//     }
//     console.log(guests.length);
//     guests.forEach(guest => console.log(guest));
// }

// registrar(['7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc']);