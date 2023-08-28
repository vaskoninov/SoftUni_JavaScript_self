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

// function cutReverse(string) {
//     let result = [];

//     let middle = string.length / 2;

//     result.push(string.substring(0, middle));
//     result.push(string.substring(middle, string.length));

//     let reversed = [];
//     result.forEach((a) => reversed.push(a.split("").reverse().join("")));

//     console.log(reversed.join("\n"));
// }

// cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');

/// Hard Words

// function replaceWords(list) {
//     let text = list[0];
//     let words = list[1];
//     let index = 0

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === "_") {
//             index = i;
//             while (text[i] === "_") {
//                 i++
//             }

//             let toReplace = i - index;
//             let word = null;
//             for (let item of words) {
//                 if (item.length === toReplace) {
//                     word = item;
//                 }
//             }
//             text = text.replace(text.substring(index, i), word)
//             index = i - index;
//         }
//     }
//     console.log(text)
// }
// replaceWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened.My dad bought me a sled.Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious.I hope this year Santa will _____ me a robot.',
//     ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);

/////// Pass Generator

// function generatePass(list) {
//     let stringPassRaw = list[0].concat(list[1]);

//     let key = list[2];
//     let keyLength = key.length;
//     let counter = 0;
//     let vowels = 'aouei';

//     for (let i = 0; i < stringPassRaw.length; i++) {
//         if (vowels.includes(stringPassRaw[i])) {
//             let keyChar = counter % keyLength;
//             stringPassRaw = stringPassRaw.replace(stringPassRaw[i], key[keyChar].toUpperCase());
//             counter++;
//         }
//     }

//     stringPassRaw = stringPassRaw.split("").reverse().join("");

//     console.log(`Your generated password is ${stringPassRaw}`);

// }
// generatePass([
//     'easymoneyeazylife',
//     'atleasttencharacters',
//     'absolute',
// ]
// );

///// *Letters Change Numbers

function lettersChangeNumbers(string) {
    let expressions = string.split(" ").filter(a => a !== "");
    
    let sum = 0;

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let exp of expressions) {
        let num = Number(exp.slice(1, exp.length - 1));
        let a = exp[0];
        let b = exp[exp.length - 1];
        let temp = 0;

        if (a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) {
            temp = num / (alphabet.indexOf(a.toLowerCase()) + 1)
        } else {
            temp = num * (alphabet.indexOf(a.toLowerCase()) + 1)
        }

        if (b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90) {
            temp -= (alphabet.indexOf(b.toLowerCase()) + 1)
        } else {
            temp += (alphabet.indexOf(b.toLowerCase()) + 1)
        }

        sum += temp;

    }
    console.log(sum.toFixed(2))
}
lettersChangeNumbers('P34562Z q2576f   H456z');