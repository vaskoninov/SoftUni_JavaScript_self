/// Number Pyramid

// function drawPyr(input) {
//     let n = Number(input[0])
//     let current = 1;
//     let isBigger = false;
//     let printCurrentLine = ""

//     for (let rows = 1; rows <= n; rows++) {
//         for (let cols = 1; cols <= rows; cols++) {
//             if (current > n) {
//                 isBigger = true;
//                 break;
//             }
//             printCurrentLine += current + " ";
//             current++;
//         }
//         console.log(printCurrentLine);
//         printCurrentLine = "";
//         if (isBigger) {
//             break;
//         }
//     }
// }

// drawPyr(["7"])

/// EqualSums

// function equalSums(input) {
//     let firstNum = Number(input[0]);
//     let secondNum = Number(input[1]);
//     let printLine = "";

//     for (let i = firstNum; i <= secondNum; i++) {
//         let currentNum = "" + i;
//         let oddSum = 0;
//         let evenSum = 0;
//         for (let j = 0; j < currentNum.length; j++) {
//             let currentDigit = Number(currentNum.charAt(j));
//             if (j % 2 === 0) {
//                 evenSum += currentDigit;
//             } else {
//                 oddSum += currentDigit;
//             }
//         }
//         if (oddSum === evenSum) {
//             printLine += `${i} `;
//         }
//     }
//     console.log(printLine);
// }

//// Sum Prime and Non Prime
// function sumPrimeNonPrime(input) {

//     let primes = 0;
//     let nonPrimes = 0;
//     let i = 0;


//     while (true) {

//         let n = input[i];
//         let isPrime = true;
//         if (n === "stop") break;

//         n = Number(n);

//         if (n < 0) {
//             console.log("Number is negative.");
//             i++;
//             continue;
//         }

//         for (let i = 2; i < n; i++) {
//             if (n % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             primes += n;
//         } else {
//             nonPrimes += n;
//         }
//         i++;
//     }


//     console.log(`Sum of all prime numbers is: ${primes}`);
//     console.log(`Sum of all non prime numbers is: ${nonPrimes}`);
// }

// sumPrimeNonPrime(["-1",
//     "9",
//     "0",
//     "7",
//     "19",
//     "4",
//     "stop"]);

///////// Train the Trainers

// function trainTrainers(input) {
//     let jury = Number(input[0]);
//     let i = 1;
//     let finalGrade = 0;
//     let count = 0;

//     while (true) {
//         let info = input[i];
//         if (info === "Finish") break;
//         let current = 0;
//         count++;
//         ++i;
//         for (let j = 0; j < jury; j++) {
//             current += Number(input[i]);
//             i++;
//         }
//         finalGrade += current / jury;
//         console.log(`${info} - ${(current / jury).toFixed(2)}.`);
//     }
//     console.log(`Student's final assessment is ${(finalGrade / count).toFixed(2)}.`);
// }

// trainTrainers(["2",
//     "While-Loop",
//     "6.00",
//     "5.50",
//     "For-Loop",
//     "5.84",
//     "5.66",
//     "Finish"]);

//////// Special Numbers

// function specialNumbers(input) {
//     let n = Number(input[0]);
//     let specials = '';

//     for (let i = 1; i <= 9; i++) {
//         for (let j = 1; j <= 9; j++) {
//             for (let k = 1; k <= 9; k++) {
//                 for (let l = 1; l <= 9; l++) {
//                     if ((n % i === 0) && (n % j === 0) && (n % k === 0) && (n % l === 0)) {
//                         specials += `${i}${j}${k}${l} `;
//                     }
//                 }
//             }
//         }
//     }
//     console.log(specials)
// }

// specialNumbers(["3"]);

////// Cinema Tickets

function calculateTickets(input) {

    let student = 0;
    let standard = 0;
    let kid = 0;

    let i = 0;
    let info = input[i];
    i++;
    while (info !== "Finish") {

        let numbers = Number(input[i]);
        i++;
        let command = input[i];
        i++;
        let tickets = 0;
        while (command !== "End") {

            tickets++;

            switch (command) {
                case "standard": standard++; break;
                case "kid": kid++; break;
                case "student": student++; break;
            }
            if (tickets === numbers) break;
            command = input[i];
            i++;
        }
        console.log(`${info} - ${((tickets / numbers) * 100).toFixed(2)}% full.`);
        info = input[i];
        i++;
    }
    let totalTickets = student + standard + kid;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((student / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}

calculateTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);