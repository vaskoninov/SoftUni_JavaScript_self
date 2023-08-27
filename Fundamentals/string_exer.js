///// Reveal Words

// function revealWords(string, sentence) {
//     let toReplace = string.split(", ");
//     let sentenceByWords = sentence.split(" ");

//     for (let word of toReplace) {
//         for (let part of sentenceByWords) {
//             if (word.length === part.length && part.startsWith("*")) {
//                 sentenceByWords.splice(sentenceByWords.indexOf(part), 1, word);
//             }
//         }
//     }
//     console.log(sentenceByWords.join(" "));
// }

// revealWords('great',
//     'softuni is ***** place for learning new programming languages');

//// Modern Times of #

// function findTags(string) {

//     function containsNumbers(str) {
//         return /\d/.test(str);
//     }

//     let filtered = string.split(" ").filter(a => a.startsWith("#"));
//     let finalFilter = filtered.filter(a => a.length > 1).map(a => a.slice(1)).filter(a => !containsNumbers(a));
//     console.log(finalFilter.join("\n"));

// }
// findTags('Nowadays everyone uses # to tag a #special word in #socialMedia #social1');

////// Extract File

// function extractFileExt(string) {
//     let lastPoint = string.lastIndexOf(".");
//     let lastSlash = string.lastIndexOf("\\");

//     let fileName = string.slice(lastSlash + 1, lastPoint);
//     let extension = string.slice(lastPoint + 1);

//     console.log(`File name: ${fileName}`);
//     console.log(`File extension: ${extension}`);

// }
// extractFileExt('C:\\Internal\\training-internal\\Template.pptx');


/////// StringSubstring

// function stringSubstring(string, sentence) {
//     let stringLowered = string.toLowerCase();
//     let sentenceByWords = sentence.split(" ").map(a => a.toLowerCase());
//     let found = false;
//     for (let word of sentenceByWords) {
//         if (word == stringLowered) {
//             found = true;
//             break;
//         }
//     }
//     (found) ? console.log(string.toLowerCase()) : console.log(`${string.toLowerCase()} not found!`);
// }
// stringSubstring('javascript',
//     'JavaScript is the best programming language');

////// Remove Repeating

// function removeRepeatingChars(string) {
//     let i = 0;
//     let trimmed = [];
//     let letter = null;
//     for (i; i < string.length; i++) {
//         if (string[i] === letter) continue;
//         letter = string[i];
//         trimmed.push(letter);
//     }
//     console.log(trimmed.join(""));
// }
// removeRepeatingChars('aaaaabbbbbcdddeeeedssaa');
/////
////// Split
// function splitByCapital(strings) {
//     let splitted = [];
//     let index = 0;

//     for (let i = 1; i < strings.length; i++) {
//         if (strings.charCodeAt(i) >= 65 && strings.charCodeAt(i) <= 90) {
//             splitted.push(strings.substring(index, i));
//             index = i;
//         }
//     }

//     splitted.push(strings.substring(index, strings.length));
//     console.log(splitted.join(", "));

// }
// splitByCapital('SplitMeIfYouCanHaHaYouCantOrYouCan');

///// Cut Revers

function cutReverse(string) {
    let result = [];

    let middle = string.length / 2;

    result.push(string.substring(0, middle));
    result.push(string.substring(middle, string.length));

    let reversed = [];
    result.forEach((a) => reversed.push(a.split("").reverse().join("")));

    console.log(reversed.join("\n"));
}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');