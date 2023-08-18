//// EchoType

// function echoType(entry) {
//     console.log(typeof entry)
//     if (typeof entry === "string" || typeof entry === "number") {
//         console.log(entry)
//     } else {
//         console.log("Parameter is not suitable for printing")
//     }
// }

// echoType(18);

//// Concatenate Names

// function concatenateNames(first, second, deli) {
//     console.log(`${first}${deli}${second}`);
// }

////// Right Place

// function findMatch(word, char, toMatch) {
//     let result = word.replace('_', char);
//     let final = result === toMatch ? "Matched" : "Not Matched";
//     console.log(final);
// }

///// Integer or Float

// function getTypeNumber(first, second, third) {
//     let sum = first + second + third;
//     sum % 1 === 0 ? console.log(sum, '- Integer') : console.log(sum, '- Float');
// }
// getTypeNumber(1, 2,3)

///// Amazing Numbers

// function evaluateNumber(num) {
//     let sum = 0;
//     n = num.toString();
//     for (let i = 0; i < n.length; i++) {
//         sum += Number(n[i]);
//     }
//     sum.toString().includes("9") ?
//         console.log(`${num} Amazing? True`) :
//         console.log(`${num} Amazing? False`);
// }

////// Gramophone

// function getLength(band, album, song) {
//     let duration = ((band.length * album.length) * song.length / 2);
//     let rotations = Math.ceil(duration / 2.5);

//     console.log(`The plate was rotated ${rotations} times.`);
// }
// getLength('Black Sabbath', 'Paranoid',
//     'War Pigs');

////// Required reading

// function calculateHoursReading(pages, pages_per_hour, days) {
//     let result = (pages / pages_per_hour) / days;
//     console.log(result);
// }

////// Centuries to Minutes

// function solve(centuries) {
//     const year = 365.2422;

//     let years = centuries * 100;
//     let days = Math.trunc(years * year);
//     let hours = days * 24;
//     let minutes = hours * 60;

//     console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
// }
// solve(1);

/////// Special Numbers

// function solve(n) {
//     for (let i = 1; i <= n; i++) {
//         let sum = 0;
//         let toCheck = i.toString();
//         for (let j = 0; j < toCheck.length; j++) {
//             sum += Number(toCheck[j]);
//         }
//         ((sum === 5) || (sum === 7) || (sum === 11)) ?
//             console.log(`${i} -> True`) : console.log(`${i} -> False`);
//     }
// }
// solve(20);

///// Triple Latin Letters

function getTrippled(number) {
    let n = Number(number);

    for (let i = 0; i < n; i++) {
        let let_i = String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {
            let let_j = String.fromCharCode(97 + j);
            for (let k = 0; k < n; k++) {
                let let_k = String.fromCharCode(97 + k);
                console.log(`${let_i}${let_j}${let_k}`);
            }
        }
    }
}
getTrippled(3)