// function converter(input) {
//     const USD = 1.79549;
//     let lv = input[0];

//     let converted = USD * lv;
//     console.log(converted)
// }

// converter(["22"])

//////////////////

// function converter(input) {
//     let radians = Number(input[0]);
//     let degrees = radians * 180 / Math.PI;

//     console.log(degrees);
// }

// converter(["3.1416"])

//////////////

// function depositCalc(input) {
//     let amount = Number(input[0]);
//     let time = Number(input[1]);
//     let interest = Number(input[2])/100;

//     let total = amount + time * ((amount * interest) / 12);

//     console.log(total)
// }

// depositCalc(["200", "3", "5.7"])

///////////////

// function reader(input) {
//     let pages_per_book = Number(input[0]);
//     let pages_per_hour = Number(input[1]);
//     let days = Number(input[2]);

//     let hours_per_day = pages_per_book / pages_per_hour / days;

//     console.log(hours_per_day);
// }

// reader(["212", "20", "2"]);

////////////////

// function calculateSchool(input) {
//     let pen_price = 5.8;
//     let marker_price = 7.2;
//     let cleaning_price = 1.2;

//     let pen_packs = Number(input[0]);
//     let marker_packs = Number(input[1]);
//     let cleaning_litters = Number(input[2]);
//     let discount_percentage = Number(input[3]) / 100;

//     let total_amount =
//         pen_packs * pen_price +
//         marker_packs * marker_price +
//         cleaning_litters * cleaning_price;
//     let discount = total_amount * discount_percentage;
//     let final = total_amount - discount;

//     console.log(final);
// }

// calculateSchool(["2 ", "3 ", "4 ", "25 "]);

//////////////

// function repainting(input) {
//     let nylon_per_meter = 1.5;
//     let paint_per_litter = 14.5;
//     let razr_per_litter = 5.0;

//     let bags = 0.4;

//     let nylon = Number(input[0]) + 2;
//     let paint = Number(input[1]) * 1.1;
//     let razr = Number(input[2]);
//     let hours = Number(input[3]);

//     let materials =
//         nylon * nylon_per_meter +
//         paint_per_litter * paint +
//         razr * razr_per_litter +
//         bags;

//     let per_hour = materials * 0.3;

//     let work_price = per_hour * hours;

//     let total = materials + work_price;

//     console.log(total);
// }

// repainting(["10 ", "11 ", "4 ", "8 "]);

////////////////////

// function deliveryService(input) {
//     let chicken = 10.35;
//     let fish = 12.4;
//     let vegetarian = 8.15;

//     let delivery = 2.5;

//     let chicken_num = Number(input[0]);
//     let fish_num = Number(input[1]);
//     let veggies = Number(input[2]);

//     let ch_price = chicken * chicken_num;
//     let fish_price = fish * fish_num;
//     let veg = vegetarian * veggies;

//     let amount = ch_price + fish_price + veg;
//     let desert = amount * 0.2;

//     let total = amount + desert + delivery;

//     console.log(total);
// }

// deliveryService(["2", "4", "3"]);

/////////

// function equipmentAcquiring(input) {
//     let fee = Number(input[0]);

//     let trainers = 0.6 * fee;
//     let wearings = trainers * 0.8;
//     let ball = wearings * 0.25;
//     let accessoires = ball * 0.2;

//     let total = fee + trainers + wearings + ball + accessoires;

//     console.log(total);
// }

// equipmentAcquiring(["365"]);

/////////////

function aquariumCalc(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);

    let percentage = Number(input[3]) / 100;

    let volume = (length * width * height) / 1000;

    let water = volume * (1 - percentage);

    console.log(water);
}

aquariumCalc(["85 ", "75 ", "47 ", "17 "]);
