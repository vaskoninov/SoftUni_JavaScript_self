//// 1 to 1000 by 7

// function solver() {
//     for (let i = 7; i <= 997; i += 10) {
//         console.log(i);
//     }
// }

// solver();

///// Multiplication Table

// function multi(input) {
//     let n = Number(input[0]);

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${i} * ${n} = ${i * n}`);
//     }
// }

// multi(["5"])

///// Histogram

// function histo(input) {
//     let numbers = Number(input[0]);
//     let p1 = 0;
//     let p2 = 0;
//     let p3 = 0;
//     let p4 = 0;
//     let p5 = 0;

//     for (let i = 1; i <= numbers; i++) {
//         let n = Number(input[i]);
//         if (n < 200) {
//             p1 += 1;
//         } else if (n >= 200 && (n <= 399)) {
//             p2 += 1;
//         } else if (n >= 400 && n <= 599) {
//             p3 += 1;
//         } else if (n >= 600 && (n <= 799)) {
//             p4 += 1;
//         } else if (n >= 800) {
//             p5 += 1;
//         }
//     }
//     console.log(`${((p1 / numbers) * 100).toFixed(2)}%`);
//     console.log(`${((p2 / numbers) * 100).toFixed(2)}%`);
//     console.log(`${((p3 / numbers) * 100).toFixed(2)}%`);
//     console.log(`${((p4 / numbers) * 100).toFixed(2)}%`);
//     console.log(`${((p5 / numbers) * 100).toFixed(2)}%`);
// }

// histo(["7", "800", "801", "250", "199", "399", "599", "799"])

//// Clever Lily

// function calculateLaunderu(input) {
//     let age = Number(input[0]);
//     let price = Number(input[1]);
//     let toy_price = Number(input[2]);

//     let birthday_money = 10;
//     let toys = 0;
//     let saved = 0;

//     for (let i = 1; i <= age; i++) {
//         if (i % 2 === 0) {
//             saved += (birthday_money - 1);
//             birthday_money += 10;
//         } else {
//             toys += 1;
//         }
//     }

//     saved += (toys * toy_price);

//     if (saved >= price) {
//         let left = saved - price;
//         console.log(`Yes! ${left.toFixed(2)}`);
//     } else {
//         let needed = price - saved;
//         console.log(`No! ${needed.toFixed(2)}`);
//     }

// }

// calculateLaunderu(["10", "170.00", "6"])
// calculateLaunderu(["21",
//     "1570.98",
//     "3"])

// Salary

// function fines(input) {
//     const face = 150;
//     const insta = 100;
//     const reddit = 50;

//     let tabs = Number(input[0]);
//     let salary = Number(input[1]);


//     for (let i = 2; i < input.length; i++) {
//         let curTab = input[i];
//         switch (curTab) {
//             case "Facebook": salary -= face; break;
//             case "Instagram": salary -= insta; break;
//             case "Reddit": salary -= reddit; break;
//         }
//         if (salary <= 0) {
//             console.log("You have lost your salary.")
//             break;
//         }
//     }
//     if (salary > 0) {
//         console.log(salary);
//     }
// }

////// Oscars

// function calculatePoints(input) {
//     let name = input[0];
//     let points = Number(input[1]);

//     let evaluators = Number(input[2]);

//     for (let i = 3; i < input.length; i += 2) {
//         let cur_points = (input[i].length * input[i + 1]) / 2;
//         points += cur_points;

//         if (points >= 1250.5) {
//             console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
//             break;
//     }


//     } 
//     if (points < 1250.5) {
//         console.log(`Sorry, ${name} you need ${(1250.5 - points).toFixed(1)} more!`);
//     }
// }

// calculatePoints(["Zahari Baharov",
//     "205",
//     "4",
//     "Johnny Depp",
//     "45",
//     "Will Smith",
//     "29",
//     "Jet Lee",
//     "10",
//     "Matthew Mcconaughey",
//     "39"])

// calculatePoints(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])

//// Trekking Mania

// function trekking(input) {
//     let p1 = 0;
//     let p2 = 0;
//     let p3 = 0;
//     let p4 = 0;
//     let p5 = 0;

//     let people = 0;

//     let groups = Number(input[0]);

//     for (let i = 1; i < input.length; i++) {
//         let currentGroup = Number(input[i]);

//         switch (true) {
//             case (currentGroup <= 5): p1 += currentGroup; break;
//             case (currentGroup > 5 && currentGroup <= 12): p2 += currentGroup; break;
//             case (currentGroup > 12 && currentGroup <= 25): p3 += currentGroup; break;
//             case (currentGroup > 25 && currentGroup <= 40): p4 += currentGroup; break;
//             case (currentGroup > 40): p5 += currentGroup; break;
//         }
//         people += currentGroup;
//     }
//     console.log(`${((p1 / people) * 100).toFixed(2)}%`);
//     console.log(`${((p2 / people) * 100).toFixed(2)}%`);
//     console.log(`${((p3 / people) * 100).toFixed(2)}%`);
//     console.log(`${((p4 / people) * 100).toFixed(2)}%`);
//     console.log(`${((p5 / people) * 100).toFixed(2)}%`);
// }

// trekking(["5",
//     "25",
//     "41",
//     "31",
//     "250",
//     "6"]);

///// Tennis Ranklist

function calculateTennisPoints(input) {
    let tournaments = Number(input[0]);
    let initial_points = Number(input[1]);

    let points = 0;
    let won = 0;

    for (let i = 2; i < input.length; i++) {
        let curTour = input[i];

        switch (curTour) {
            case "F": points += 1200; break;
            case "W":
                points += 2000;
                won += 1;
                break;
            case "SF": points += 720; break;
        }
    }

    console.log(`Final points: ${points + initial_points}`);
    console.log(`Average points: ${Math.floor(points / tournaments)}`);
    console.log(`${((won / tournaments) * 100).toFixed(2)}%`);

}

calculateTennisPoints(["5", "1400", "F", "SF", "W", "W", "SF"]);