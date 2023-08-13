// Sum of Seconds

// function sumSeconds(input) {
//     let first = Number(input[0]);
//     let second = Number(input[1]);
//     let third = Number(input[2]);

//     let totalTime = first + second + third;

//     let minutes = Math.floor(totalTime / 60);
//     let seconds = totalTime % 60;

//     if (seconds < 10) {
//         console.log(`${minutes}:0${seconds}`);
//     } else {
//         console.log(`${minutes}:${seconds}`);
//     }
// }

// sumSeconds(["35",

//     "45",

//     "44"])

// Bonus Points

// function calculateBonusPoints(input) {
//     let points = Number(input[0]);

//     let bonus = 0;

//     if (points <= 100) {
//         bonus = 5;
//     } else if (points > 100 && points <= 1000) {
//         bonus = points * 0.2;
//     } else if (points > 1000) {
//         bonus = points * 0.1;
//     }

//     if (points % 2 === 0) {
//         bonus += 1;
//     }
//     if (points % 10 === 5) {
//         bonus += 2;
//     }
//     console.log(bonus)
//     console.log(points + bonus)
// }

// Time + 15 mins

// function getTime(input) {
//     let hours = Number(input[0]);
//     let minutes = Number(input[1]);

//     let new_minutes = minutes + 15;
//     if (new_minutes > 59) {
//         new_minutes -= 60;
//         hours += 1;
//     }
//     if (hours > 23) {
//         hours -= 24;
//     }

//     if (new_minutes < 10) {
//         console.log(`${hours}:0${new_minutes}`);
//     } else {
//         console.log(`${hours}:${new_minutes}`);
//     }
// }

// getTime(["23", "59"])

// Toy Store

function toyStore(input) {
    const puzzle = 2.60;
    const doll = 3;
    const bear = 4.10;
    const minion = 8.20;
    const truck = 2;

    let order_numbers = 0;

    let holiday_price = Number(input[0]);
    let number_puzzles = Number(input[1]);
    let number_dolls = Number(input[2]);
    let number_bears = Number(input[3]);
    let number_minions = Number(input[4]);
    let number_trucks = Number(input[5]);

    let total_cost = (puzzle * number_puzzles) + (doll * number_dolls) + (bear * number_bears)
        + (minion * number_minions) + (truck * number_trucks);

    let total_number = number_bears + number_dolls + number_dolls + number_minions + number_trucks;

    if (total_number >= 50) {
        total_cost = total_cost * 0.75;
    }

    let final = total_cost * 0.9;

    if (final >= holiday_price) {
        let left = final - holiday_price;
        console.log(`Yes! ${left.toFixed(2)} lv left.`);
    } else {
        let needed = holiday_price - final;
        console.log(`Not enough money! ${needed.toFixed(2)} lv needed.`)
    }
}

toyStore(["320", "8", "2", "5", "5", "1"])