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

///// Card Game


// function playCardGame(list) {

//     let powerMultipliers = {
//         S: 4,
//         H: 3,
//         D: 2,
//         C: 1,
//     };

//     let letterPower = {
//         J: 11,
//         Q: 12,
//         K: 13,
//         A: 14,
//     };

//     let players = {};
//     let results = {};

//     for (let entry of list) {
//         let [name, cards] = entry.split(": ");
//         cards = cards.split(", ");

//         if (!players.hasOwnProperty(name)) players[name] = new Set();

//         for (let card of cards) {
//             players[name].add(card);
//         }

//     }
//     for (let player of Object.keys(players)) {
//         let result = 0;
//         for (let card of players[player]) {

//             let multiplier = powerMultipliers[card[card.length - 1]];
//             let value = card.slice(0, card.length - 1);
//             value = (isNaN(value)) ? letterPower[value] : Number(value);
//             result += value * multiplier;

//         }
//         results[player] = result;
//     }
//     for (let [player, result] of Object.entries(results)) {
//         console.log(`${player}: ${result}`);
//     }
// }
// playCardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]);

//// Company Users

// function registrar(list) {

//     let employees = new Map();

//     for (let entry of list) {
//         let [name, employee] = entry.split(" -> ");

//         if (!employees.has(name)) employees.set(name, new Set());

//         employees.get(name).add(employee);
//     }

//     let sortedEmployers = new Map([...employees.entries()].sort((a, b) => a[0].localeCompare(b[0])));

//     for (let [key, value] of sortedEmployers.entries()) {
//         console.log(key);
//         for (let emp of value) {
//             console.log(`-- ${emp}`);
//         }
//     }
// }
// registrar([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
// ]);

////// A Miner Task

// function mine(list) {
//     let resources = new Map();

//     for (let i = 0; i < list.length; i += 2) {
//         if (resources.has(list[i])) {
//             resources.set(list[i], resources.get(list[i]) + Number(list[i + 1]));
//         } else {
//             resources.set(list[i], Number(list[i + 1]));
//         }
//     }
//     resources.forEach((value, key) => console.log(`${key} -> ${value}`));
// }
// mine([
//     'gold',
//     '155',
//     'silver',
//     '10',
//     'copper',
//     '17',
//     'gold',
//     '15'
// ]);

////// Travel Time

// function calculateTrave(list) {
//     let travels = {};

//     for (let entry of list) {
//         let [country, town, price] = entry.split(" > ");

//         if (!travels.hasOwnProperty(country)) travels[country] = {};

//         if (!travels[country].hasOwnProperty(town)) {
//             travels[country][town] = Number(price);
//         } else {
//             if (travels[country][town] > Number(price)) {
//                 travels[country][town] = Number(price);
//             }
//         }
//     }

//     for (let country of Object.keys(travels)) {
//         travels[country] = Object.fromEntries(Object.entries(travels[country]).sort((a, b) => a[1] - b[1]));
//     };

//     travels = Object.fromEntries(Object.entries(travels).sort((a, b) => a[0].localeCompare(b[0])));
//     let result = [];
//     for (let [country, entries] of Object.entries(travels)) {
//         let newResult = [`${country} ->`];
//         for (let [town, price] of Object.entries(entries)) {
//             newResult.push(`${town} -> ${price}`);
//         }
//         result.push(newResult.join(" "));
//     }
//     console.log(result.join("\n"));
// }


// calculateTrave([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]);

////// Arena Tier

// function fight(list) {
//     let gladiators = {};

//     for (let entry of list) {
//         if (entry === "Ave Cesar") break;
//         if (entry.includes("->")) {
//             let [name, skill, value] = entry.split(" -> ");
//             value = Number(value);
//             if (!gladiators.hasOwnProperty(name)) gladiators[name] = {};
//             if (!gladiators[name].hasOwnProperty(skill)) {
//                 gladiators[name][skill] = value;
//             } else if (gladiators[name][skill] < value) {
//                 gladiators[name][skill] = value;
//             }
//         }
//         if (entry.includes("vs")) {
//             let [first, second] = entry.split(" vs ");
//             if (Object.keys(gladiators).includes(first) && Object.keys(gladiators).includes(second)) {
//                 let toFight = false;

//                 for (let firstKey of Object.keys(gladiators[first])) {
//                     if (Object.keys(gladiators[second]).includes(firstKey)) {
//                         toFight = true;
//                         break;
//                     }
//                 }

//                 if (toFight) {
//                     let firstPoints = 0;
//                     let secondPoints = 0;
//                     for (let v of Object.values(gladiators[first])) {
//                         firstPoints += v;
//                     }
//                     for (let v of Object.values(gladiators[second])) {
//                         secondPoints += v;
//                     }
//                     firstPoints > secondPoints ? delete gladiators[second] : delete gladiators[first];
//                 }
//             }
//         }
//     }
//     gladiators = Object.fromEntries(Object.entries(gladiators).sort((a, b) => {
//         // console.table(Object.entries(a[1]));
//         let firstSum = Object.entries(a[1]).reduce((x, y) => x + y[1], 0);
//         let secondSum = Object.entries(b[1]).reduce((x, y) => x + y[1], 0);

//         return secondSum - firstSum || a[0].localeCompare(b[0]);
//     }));

//     for (let [gladiator, values] of Object.entries(gladiators)) {
//         // console.table(Object.entries(values));
//         gladiators[gladiator] = Object.fromEntries(Object.entries(values).sort((a, b) => {
//             return b[1] - a[1] || a[0].localeCompare(b[0]);
//         }));
//         // console.table(values);
//     }

//     for (let [gladiator, values] of Object.entries(gladiators)) {
//         let sum = Object.entries(values).reduce((x, y) => x + y[1], 0);
//         console.log(`${gladiator}: ${sum} skill`);
//         for (let [key, value] of Object.entries(values)) {
//             console.log(`- ${key} <!> ${value}`);
//         }
//     }
// }
// fight([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ]);

//// Legendary Farming

function farmItem(string) {
    let info = string.split(" ").map(a => a.toLowerCase());

    let legends = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath"
    };
    let items = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };
    let farmedItem = null;
    let junk = {};

    for (let i = 0; i < info.length; i += 2) {
        let quantity = Number(info[i]);
        let material = info[i + 1];

        if (items.hasOwnProperty(material)) {
            items[material] += quantity;
        } else if (junk.hasOwnProperty(material)) {
            junk[material] += quantity;
        } else {
            junk[material] = quantity;
        }

        if (items[material] >= 250) {
            farmedItem = legends[material];
            items[material] -= 250;
            break;
        }
    }

    let sortedMaterials = Object.fromEntries(Object.entries(items).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    }));
    let sortedJunk = Object.fromEntries(Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0])));

    console.log(`${farmedItem} obtained!`);
    for (let [key, value] of Object.entries(sortedMaterials)) {
        console.log(`${key}: ${value}`);
    }
    for (let [key, value] of Object.entries(sortedJunk)) {
        console.log(`${key}: ${value}`);
    }
}

farmItem('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');