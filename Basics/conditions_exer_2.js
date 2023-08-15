//// Cinema

// function cinemaTickets(input) {
//     const premiere = 12;
//     const normal = 7.50;
//     const discount = 5;

//     let projection = input[0];
//     let rows = Number(input[1]);
//     let columns = Number(input[2]);

//     switch (projection) {
//         case "Premiere":
//             console.log(`${(rows * columns * premiere).toFixed(2)} leva`);
//             break;
//         case "Normal":
//             console.log(`${(rows * columns * normal).toFixed(2)} leva`);
//             break;
//         case "Discount":
//             console.log(`${(rows * columns * discount).toFixed(2)} leva`);
//             break;
//     }
// }

// cinemaTickets(["Premiere", "10", "12"]);

///// Summer Outfit

// function outfitAdvice(input) {
//     let degrees = Number(input[0]);
//     let dayTime = input[1];

//     switch (dayTime) {
//         case "Morning":
//             if (degrees >= 10 && degrees <= 18) {
//                 console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);
//             } else if (degrees > 18 && degrees <= 24) {
//                 console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
//             } else if (degrees >= 25) {
//                 console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
//             }
//             break;
//         case "Afternoon":
//             if (degrees >= 10 && degrees <= 18) {
//                 console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
//             } else if (degrees > 18 && degrees <= 24) {
//                 console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
//             } else if (degrees >= 25) {
//                 console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
//             }
//             break;
//         case "Evening":
//             console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
//             break;
//     }
// }

// outfitAdvice(["16", "Morning"])

/// New Home

// function calculateFlowers(input) {
//     let flowers_type = input[0];
//     let flowers_number = Number(input[1]);
//     let budget = Number(input[2]);

//     let flowers_price = 0;

//     if (flowers_type === "Roses") {
//         if (flowers_number > 80) {
//             flowers_price = (flowers_number * 5) * 0.9;
//         } else {
//             flowers_price = (flowers_number * 5);
//         }
//     } else if (flowers_type === "Dahlias") {
//         if (flowers_number > 90) {
//             flowers_price = (flowers_number * 3.8) * 0.85;
//         } else {
//             flowers_price = (flowers_number * 3.8);
//         }
//     } else if (flowers_type === "Tulips") {
//         if (flowers_number > 80) {
//             flowers_price = (flowers_number * 2.8) * 0.85;
//         } else {
//             flowers_price = (flowers_number * 2.8);
//         }
//     } else if (flowers_type === "Narcissus") {
//         if (flowers_number < 120) {
//             flowers_price = (flowers_number * 3) * 1.15;
//         } else {
//             flowers_price = (flowers_number * 3);
//         }
//     } else if (flowers_type === "Gladiolus") {
//         if (flowers_number < 80) {
//             flowers_price = (flowers_number * 2.5) * 1.2;
//         } else {
//             flowers_price = (flowers_number * 2.5);
//         }
//     }

//     if (budget >= flowers_price) {
//         let left = budget - flowers_price;
//         console.log(`Hey, you have a great garden with ${flowers_number} ${flowers_type} and ${left.toFixed(2)} leva left.`);
//     } else {
//         let needed = flowers_price - budget;
//         console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`);
//     }
// }

// calculateFlowers(["Roses", "55", "250"])

// Fishboat

// function fishingBoat(input) {
//     let budget = Number(input[0]);
//     let season = input[1];
//     let fishermen = Number(input[2]);

//     let price = 0;
//     let discount = 0;

//     if (fishermen <= 6) {
//         discount = 0.9;
//     } else if (fishermen > 6 && fishermen <= 11) {
//         discount = 0.85;
//     } else if (fishermen >= 12) {
//         discount = 0.75;
//     }


//     switch (season) {
//         case "Spring":
//             price = 3000 * discount;
//             break;
//         case "Summer":
//         case "Autumn":
//             price = 4200 * discount;
//             break;
//         case "Winter":
//             price = 2600 * discount;
//             break;
//     }

//     if (fishermen % 2 == 0 && season != "Autumn") {
//         price *= 0.95;
//     }

//     if (budget >= price) {
//         let left = budget - price;
//         console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
//     } else {
//         let needed = price - budget;
//         console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`);
//     }
// }

// fishingBoat(["3000", "Summer", "11"])

////// Journey

// function journey(input) {
//     let budget = Number(input[0]);
//     let season = input[1];

//     let destination = null;
//     let facility = null;
//     let cost = 0;

//     if (budget <= 100) {
//         destination = "Bulgaria";
//         if (season === "summer") {
//             facility = "Camp";
//             cost = budget * 0.30;
//         } else {
//             facility = "Hotel";
//             cost = budget * 0.70;
//         }
//     } else if (budget <= 1000) {
//         destination = "Balkans";
//         if (season === "summer") {
//             facility = "Camp";
//             cost = budget * 0.40;
//         } else {
//             facility = "Hotel";
//             cost = budget * 0.80;
//         }
//     } else if (budget > 1000) {
//         destination = "Europe";
//         facility = "Hotel";
//         cost = budget * 0.90;
//     }

//     console.log(`Somewhere in ${destination}`);
//     console.log(`${facility} - ${cost.toFixed(2)}`);
// }

// journey(["50", "summer"])

////////// Number Operations

// function numbersOperator(input) {
//     let a = Number(input[0]);
//     let b = Number(input[1]);
//     let operator = input[2];

//     if (operator === "+") {
//         let even_odd = ((a + b) % 2 == 0) ? "even" : "odd";
//         console.log(`${a} ${operator} ${b} = ${a + b} - ${even_odd}`);
//     } else if (operator === "-") {
//         let even_odd = ((a - b) % 2 == 0) ? "even" : "odd";
//         console.log(`${a} ${operator} ${b} = ${a - b} - ${even_odd}`);
//     } else if (operator === "*") {
//         let even_odd = ((a * b) % 2 == 0) ? "even" : "odd";
//         console.log(`${a} ${operator} ${b} = ${a * b} - ${even_odd}`);
//     } else if (operator === "/") {
//         if (b === 0) {
//             console.log(`Cannot divide ${a} by zero`);
//         } else {
//             console.log(`${a} ${operator} ${b} = ${(a / b).toFixed(2)}`);
//         }
//     } else if (operator === "%") {
//         if (b === 0) {
//             console.log(`Cannot divide ${a} by zero`);
//         } else {
//             console.log(`${a} ${operator} ${b} = ${(a % b)}`);
//         }
//     }
// }

// numbersOperator(["10", "12", "+"])

//// Hotel Room

// function reservationSystem(input) {
//     let month = input[0];
//     let nights = Number(input[1]);

//     let studio = 0;
//     let appartment = 0;
//     let discount_studio = 1;
//     let discount_app = 1;

//     switch (month) {
//         case "May":
//         case "October":
//             studio = 50;
//             appartment = 65;
//             break;
//         case "June":
//         case "September":
//             studio = 75.20;
//             appartment = 68.70;
//             break;
//         case "July":
//         case "August":
//             studio = 76;
//             appartment = 77;
//             break;
//     }

//     if (nights > 14) {
//         discount_app = 0.9;
//         if (month == "May" || month == "October") {
//             discount_studio = 0.70;
//         } else if (month == "June" || month == "September") {
//             discount_studio = 0.80;
//         }
//     } else if ((nights > 7 && nights <= 14) && (month == "May" || month == "October")) {
//         discount_studio = 0.95;
//     }
//     console.log(`Apartment: ${((nights * appartment) * discount_app).toFixed(2)} lv.`);
//     console.log(`Studio: ${((nights * studio) * discount_studio).toFixed(2)} lv.`);
// }

// reservationSystem(["June", "14"]);

///// On Time

// function examOnTime(input) {
//     let hour = Number(input[0]);
//     let minute = Number(input[1]);
//     let arrival_hour = Number(input[2]);
//     let arrival_minute = Number(input[3]);

//     let exam_start_minutes = (hour * 60) + minute;
//     let arrival_minutes = (arrival_hour * 60) + arrival_minute;

//     // console.log(exam_start_minutes);
//     // console.log(arrival_minutes);

//     if (arrival_minutes > exam_start_minutes) {
//         console.log("Late");
//         let difference = arrival_minutes - exam_start_minutes;
//         if (difference <= 59) {
//             console.log(`${difference} minutes after the start`) 
//         } else {
//             let new_hours = Math.floor(difference / 60);
//             let new_seconds = difference % 60;
//             if (new_seconds < 10) {
//                 console.log(`${new_hours}:0${new_seconds} hours after the start`)
//             } else {
//             console.log(`${new_hours}:${new_seconds} hours after the start`)
//             }
//         }
//     } else if (exam_start_minutes >= arrival_minutes) {
//         let difference = exam_start_minutes - arrival_minutes;
//         if ((exam_start_minutes === arrival_minutes) || ((exam_start_minutes - arrival_minutes) <= 30)) {
//             console.log("On time");
//             if (!(exam_start_minutes == arrival_minutes)) {
//             console.log(`${difference} minutes before the start`)
//             }
//         } else {
//             console.log("Early");
//             if (difference <= 59) {
//                 console.log(`${difference} minutes before the start`)
//             } else {
//                 let new_hours = Math.floor(difference / 60);
//                 let new_seconds = difference % 60;
//                 if (new_seconds < 10) {
//                     console.log(`${new_hours}:0${new_seconds} hours before the start`)
//                 } else {
//                 console.log(`${new_hours}:${new_seconds} hours before the start`)
//                 }
//             }
//         }
//     }
// }

// examOnTime(["11",
//     "30",
//     "8",
//     "12"])

/////// Ski Vacation

function skiVacation(input) {
    const room = 18;
    const appartment = 25;
    const president = 35;

    let days = Number(input[0]) - 1;
    let accomodation = input[1];
    let assessment = input[2];

    let cost = 0;

    switch (accomodation) {
        case "room for one person":
            cost = days * room;
            break;
        case "apartment":
            if (days < 10) {
                cost = (days * appartment) * 0.7;
            } else if (days >= 10 && days <= 15) {
                cost = (days * appartment) * 0.65;
            } else if (days > 15) {
                cost = (days * appartment) * 0.5;
            }
            break;
        case "president apartment":
            if (days < 10) {
                cost = (days * president) * 0.9;
            } else if (days >= 10 && days <= 15) {
                cost = (days * president) * 0.85;
            } else if (days > 15) {
                cost = (days * president) * 0.8;
            }
            break;
    }
    if (assessment === "positive") {
        cost *= 1.25;
    } else {
        cost *= 0.9;
    }
    console.log(cost.toFixed(2));
}

skiVacation(["14", "apartment", "positive"]);
