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

function getLength(band, album, song) {
    let duration = ((band.length * album.length) * song.length / 2);
    let rotations = Math.ceil(duration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}
getLength('Black Sabbath', 'Paranoid',
    'War Pigs');