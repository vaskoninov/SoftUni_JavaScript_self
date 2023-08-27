//// Print Chars

// function printChars(string) {
//     for (let i = 0; i < string.length; i++) {
//         console.log(string[i]);
//     }
// }

//// Substring

// function printSubstring(string, a, b) {
//     let subs = string.substring(a, a + b);
//     console.log(subs);
// }
// printSubstring('ASentence', 1, 8);

///// Censored Words

// function censorWords(string, sub) {
//     while (true) {
//         if (!string.includes(sub)) break;
//         string = string.replace(sub, "*".repeat(sub.length));
//     }
//     console.log(string);
// }

// censorWords('A small sentence with some words',
//     'small');


//// Count Occurrences

function count(string, sub) {
    let counter = 0;
    for (let i of string.split(" ")) {
        if (i === sub) counter++;
    }
    console.log(counter);
}