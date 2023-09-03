////// Fruit
// function fruitPrint(name, quantity, price) {
//     let weight = quantity / 1000;
//     let money = price * weight;
//     console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${name}.`);
// };

// fruitPrint('orange', 2500, 1.80);

///// Greaetest Common Divisor - GCD

// function gcd(a, b) {
//     while (b) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }
//     console.log(a);
// }
// gcd(2154, 458);

////// Check Similar Numbers
// function checkSameNumber(number) {
//     let numberAsString = String(number);
//     const firstChar = numberAsString[0];
//     let similar = true;
//     let sum = 0;

//     for (let char of numberAsString) {
//         sum += Number(char);
//         if (char !== firstChar) {
//             similar = false;
//         }
//     }
//     (similar) ? console.log(true) : console.log(false);
//     console.log(sum);
// }

// checkSameNumber(1234);

//// Print Date

// function printDate(year, month, day) {

//     let date = new Date(year, month - 1, day);
//     date.setDate(date.getDate() - 1);
//     let newDay = date.getDate();
//     let newMonth = date.getMonth() + 1;
//     let newYear = date.getFullYear();

//     console.log(`${newYear}-${newMonth}-${newDay}`);
// }

// printDate(2016, 9, 30);

////// Time To Walk

// function calcWalkTime(steps, stepLength, speed) {
//     let distance = steps * stepLength;
//     let mS = speed / 3.6;
//     let walking = distance / mS;
//     let rest = Math.floor(distance / 500);

//     const timeMin = Math.floor(walking / 60) + rest;
//     const timeSec = Math.round(walking % 60);
//     const timeHours = Math.floor(walking / 3600);

//     const hh = timeHours < 10 ? "0" : "";
//     const mm = timeMin < 10 ? "0" : "";
//     const ss = timeSec < 10 ? "0" : "";

//     console.log(`${hh + timeHours}:${mm + timeMin}:${ss + timeSec}`);
// }
// calcWalkTime(4000, 0.60, 5);

///// Road Radar

// function radar(speed, typeRoad) {
//     const speedLimits = {
//         motorway: 130,
//         interstate: 90,
//         city: 50,
//         residential: 20,
//     };

//     if (speed <= speedLimits[typeRoad]) {
//         console.log(`Driving ${speed} km/h in a ${speedLimits[typeRoad]} zone`);
//     } else {
//         let difference = speed - speedLimits[typeRoad];
//         let status = null;
//         if (difference <= 20) {
//             status = 'speeding';
//         } else if (difference <= 40) {
//             status = 'excessive speeding';
//         } else {
//             status = 'reckless driving';
//         }
//         console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[typeRoad]} - ${status}`);
//     }
// }

// radar(21, 'residential');

//// Cooking by Numbers

// function numberCooking(...commands) {
//     const instructions = {
//         chop: a => a / 2,
//         dice: a => Math.sqrt(a),
//         spice: a => a + 1,
//         bake: a => a * 3,
//         fillet: a => a - (a * 0.2),
//     };

//     let number = Number(commands.shift());

//     for (let el of commands) {
//         number = instructions[el](number);
//         console.log(number);
//     }
// }
// numberCooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// numberCooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

////// Validity Checker

// function validityChecker(x1, y1, x2, y2) {
//     const result = (x1, y1, x2, y2) => {
//         const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//         let output = '';
//         if (Number.isInteger(distance)) {
//             output = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
//         } else {
//             output = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
//         }
//         console.log(output);
//     };
//     result(x1, y1, 0, 0);
//     result(x2, y2, 0, 0);
//     result(x1, y1, x2, y2);
// };

// validityChecker(3, 0, 0, 4);

//////// Word Uppercase

function uppercaser(string) {
    const pattern = /\w+/g;

    let result = string.match(pattern).join(", ").toUpperCase();
    console.log(result);
}

uppercaser('Hi, how are you?');