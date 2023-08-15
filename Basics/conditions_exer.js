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

// function toyStore(input) {
//     const puzzle = 2.60;
//     const doll = 3;
//     const bear = 4.10;
//     const minion = 8.20;
//     const truck = 2;

//     let order_numbers = 0;

//     let holiday_price = Number(input[0]);
//     let number_puzzles = Number(input[1]);
//     let number_dolls = Number(input[2]);
//     let number_bears = Number(input[3]);
//     let number_minions = Number(input[4]);
//     let number_trucks = Number(input[5]);

//     let total_cost = (puzzle * number_puzzles) + (doll * number_dolls) + (bear * number_bears)
//         + (minion * number_minions) + (truck * number_trucks);

//     let total_number = number_bears + number_dolls + number_dolls + number_minions + number_trucks;

//     if (total_number >= 50) {
//         total_cost = total_cost * 0.75;
//     }

//     let final = total_cost * 0.9;

//     if (final >= holiday_price) {
//         let left = final - holiday_price;
//         console.log(`Yes! ${left.toFixed(2)} lv left.`);
//     } else {
//         let needed = holiday_price - final;
//         console.log(`Not enough money! ${needed.toFixed(2)} lv needed.`)
//     }
// }

// toyStore(["320", "8", "2", "5", "5", "1"])

// Godzilla vs Kong

// function godzillaKong(input) {
//     let budget = Number(input[0]);
//     let helpers = Number(input[1]);
//     let clothes_price = Number(input[2]);

//     let decoration = 0.1 * budget;

//     let total_clothes = helpers * clothes_price;

//     if (helpers > 150) {
//         total_clothes = total_clothes * 0.9
//     }

//     let total_expenses = decoration + total_clothes;

//     if (total_expenses > budget) {
//         let needed = total_expenses - budget;
//         console.log("Not enough money!");
//         console.log(`Wingard needs ${needed.toFixed(2)} leva more.`);
//     } else {
//         let left = budget - total_expenses;
//         console.log("Action!")
//         console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`)
//     }
// }

// godzillaKong(["20000",
//     "120",
//     "55.5"])

// godzillaKong(["15437.62",
//     "186",
//     "57.99"])
// godzillaKong(["9587.88",
//     "222",
//     "55.68"])

// Word Swimming Record

// function swimming(input) {
//     let record = Number(input[0]);
//     let distance = Number(input[1]);
//     let time_per_meter = Number(input[2]);

//     let water_resistance = Math.floor((distance / 15) )* 12.5

//     let result = (distance * time_per_meter) + water_resistance;

//     if (result < record) {
//         console.log(`Yes, he succeeded! The new world record is ${result.toFixed(2)} seconds.`);
//     } else {
//         let needed = result - record;
//         console.log(`No, he failed! He was ${needed.toFixed(2)} seconds slower.`)
//     }
// }

// swimming(["10464",
//     "1500",
//     "20"])
// swimming(["55555.67",
//     "3017", "5.03"])

// Shopping

// function shopping(input) {
//     const video = 250;

//     let budget = Number(input[0]);
//     let number_video = Number(input[1]);
//     let number_cpu = Number(input[2]);
//     let number_ram = Number(input[3]);

//     let total_video = video * number_video;
//     let price_cpu = 0.35 * total_video;
//     let price_ram = 0.1 * total_video;

//     let final = total_video + (price_cpu * number_cpu) + (price_ram * number_ram);

//     if (number_video > number_cpu) {
//         final *= 0.85;
//     }

//     if (budget >= final) {
//         console.log(`You have ${(budget - final).toFixed(2)} leva left!`)
//     } else {
//         console.log(`Not enough money! You need ${(final - budget).toFixed(2)} leva more!`)
//     }
// }

// shopping(["900",
//     "2",
//     "1",
//     "3"])

// Lunch Time

function lunchTime(input) {
    let series = input[0];
    let series_length = Number(input[1]);
    let lunch_duration = Number(input[2]);

    let having_lunch = lunch_duration * 1 / 8;
    let rest_time = lunch_duration * 0.25;

    let total = series_length + having_lunch + rest_time;

    if (total <= lunch_duration) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(lunch_duration - total)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(total - lunch_duration)} more minutes.`);
    }
}

lunchTime(["Game of Thrones",
    "60",
    "96"])
lunchTime(["Teen Wolf",
    "48",
    "60"])