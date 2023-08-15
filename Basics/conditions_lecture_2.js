////////// Week Days

// function week(input) {
//     let day_number = Number(input[0]);

//     switch (day_number) {
//         case 1:
//             console.log('Monday');
//             break;
//         case 2:
//             console.log('Tuesday');
//             break;
//         case 3:
//             console.log('Wednesday');
//             break;
//         case 4:
//             console.log('Thursday');
//             break;
//         case 5:
//             console.log('Friday');
//             break;
//         case 6:
//             console.log('Saturday');
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("Error");
//             break;
//     }
// }

// week(["10"])

// function week(input) {
//     let day_number = input[0];

//     switch (day_number) {
//         case "Monday":
//         case "Tuesday":
//         case "Wednesday":
//         case "Thursday":
//         case "Friday":
//             console.log('Working Day');
//             break;
//         case "Saturday":
//         case "Sunday":
//             console.log("Weekend");
//             break;
//         default:
//             console.log("Error");
//             break;
//     }
// }

/////// Animals

// function type_animal(input) {
//     let animal = input[0];

//     switch (animal) {
//         case "dog":
//             console.log("mammal");
//             break;
//         case "crocodile":
//         case "tortoise":
//         case "snake":
//             console.log("reptile");
//             break;
//         default:
//             console.log("unknown");
//             break;
//     }
// }

// type_animal(["dog"])

// function titles(input) {
//     let age = Number(input[0]);
//     let gender = input[1];

//     switch (gender) {
//         case "m":
//             if (age >= 16) {
//                 console.log("Mr.");
//             } else {
//                 console.log("Master");
//             }
//             break;
//         case "f":
//             if (age >= 16) {
//                 console.log("Ms.");
//             } else {
//                 console.log("Miss");
//             }
//             break;
//     }
// }

// titles(["17", "m"])

// Small Shop

// function shop(input) {
//     let product = input[0];
//     let city = input[1];
//     let quantity = Number(input[2]);

//     switch (city) {
//         case "Sofia":
//             if (product === "coffee") {
//                 console.log(quantity * 0.5)
//             } else if (product === "water") {
//                 console.log(quantity * 0.8)
//             } else if (product === "beer") {
//                 console.log(quantity * 1.2)
//             } else if (product === "sweets") {
//                 console.log(quantity * 1.45)
//             } else if (product === "peanuts") {
//                 console.log(quantity * 1.6)
//             } 
//             break;
//         case "Plovdiv":
//             if (product === "coffee") {
//                 console.log(quantity * 0.4)
//             } else if (product === "water") {
//                 console.log(quantity * 0.7)
//             } else if (product === "beer") {
//                 console.log(quantity * 1.15)
//             } else if (product === "sweets") {
//                 console.log(quantity * 1.3)
//             } else if (product === "peanuts") {
//                 console.log(quantity * 1.5)
//             } 
//             break;
//         case "Varna":
//             if (product === "coffee") {
//                 console.log(quantity * 0.45)
//             } else if (product === "water") {
//                 console.log(quantity * 0.7)
//             } else if (product === "beer") {
//                 console.log(quantity * 1.10)
//             } else if (product === "sweets") {
//                 console.log(quantity * 1.35)
//             } else if (product === "peanuts") {
//                 console.log(quantity * 1.55)
//             } 
//             break;

//     }
// }
// shop(["coffee", "Varna", "2"])

// Number in Range

// function checkNumber(input) {
//     let number = Number(input[0]);

//     if (number >= -100 && number <= 100 && number != 0) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }

// checkNumber(["0"])

// Work Time

// function checkWorkTime(input) {
//     let hour = Number(input[0]);
//     let day = input[1];

//     switch (day) {
//         case "Sunday":
//             console.log("closed");
//             break;
//         default:
//             if (hour >= 10 && hour <= 18) {
//                 console.log("open");
//             } else {
//                 console.log("closed");
//             }
//             break;
//     }
// }
// checkWorkTime(["11", "Monday"]);
// checkWorkTime(["11", "Sunday"]);

/// Cinema Ticket

// function cinemaTicketPrice(input) {
//     let day = input[0];

//     switch (day) {
//         case "Monday":
//         case "Tuesday":
//         case "Friday":
//             console.log(12);
//             break;
//         case "Wednesday":
//         case "Thursday":
//             console.log(14);
//             break;
//         case "Saturday":
//         case "Sunday":
//             console.log(16);
//             break;
//     }
// }

// Fruit or Vegetable

// function checkType(input) {
//     let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
//     let veggies = ["tomato", "cucumber", "pepper", "carrot"];

//     let product = input[0];

//     if (fruits.includes(product)) {
//         console.log("fruit");
//     } else if (veggies.includes(product)) {
//         console.log("vegetable");
//     } else {
//         console.log("unknown")
//     }
// }

// checkType(["banana"]);

// Wrong Number

// function between(input) {
//     let num = Number(input[0]);

//     if (!((num >= 100 && num <= 200) || num === 0)) {
//         console.log("invalid");
//     }
// }

// between(["2"])

////// Fruit Shop

// function shopFruits(input) {
//     let fruits = ["banana", "apple", "orange", "grapefruit", "kiwi", "pineapple", "grapes"];
//     let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//     let weekend = ["Saturday", "Sunday"];

//     let fruit = input[0];
//     let day = input[1];
//     let quantity = Number(input[2]);

//     if (fruits.includes(fruit) && ((days.includes(day)) || weekend.includes(day))) {
        
//         if (weekend.includes(day)) {
//             if (fruit === "banana") {
//                 console.log((quantity * 2.70).toFixed(2));
//             } else if (fruit === "apple") {
//                 console.log((quantity * 1.25).toFixed(2));
//             } else if (fruit === "orange") {
//                 console.log((quantity * 0.9).toFixed(2));
//             } else if (fruit === "grapefruit") {
//                 console.log((quantity * 1.60).toFixed(2));
//             } else if (fruit === "kiwi") {
//                 console.log((quantity * 3.00).toFixed(2));
//             } else if (fruit === "pineapple") {
//                 console.log((quantity * 5.60).toFixed(2));
//             } else if (fruit === "grapes") {
//                 console.log((quantity * 4.20).toFixed(2));
//             }
//         }
//         else if (days.includes(day)) {
//             if (fruit === "banana") {
//                 console.log((quantity * 2.50).toFixed(2));
//             } else if (fruit === "apple") {
//                 console.log((quantity * 1.20).toFixed(2));
//             } else if (fruit === "orange") {
//                 console.log((quantity * 0.85).toFixed(2));
//             } else if (fruit === "grapefruit") {
//                 console.log((quantity * 1.45).toFixed(2));
//             } else if (fruit === "kiwi") {
//                 console.log((quantity * 2.70).toFixed(2));
//             } else if (fruit === "pineapple") {
//                 console.log((quantity * 5.50).toFixed(2));
//             } else if (fruit === "grapes") {
//                 console.log((quantity * 3.85).toFixed(2));
//             }
//         }
//     } else {
//         console.log("error");
//     }
// }
// function shopFruits(input) {
//     let fruits = ["banana", "apple", "orange", "grapefruit", "kiwi", "pineapple", "grapes"];
//     let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//     let weekend = ["Saturday", "Sunday"];

//     let fruit = input[0];
//     let day = input[1];
//     let quantity = Number(input[2]);

//     if (fruits.includes(fruit) && ((days.includes(day)) || weekend.includes(day))) {
//         switch (true) {
//             case (weekend.includes(day)):
//                 if (fruit === "banana") {
//                     console.log((quantity * 2.70).toFixed(2));
//                 } else if (fruit === "apple") {
//                     console.log((quantity * 1.25).toFixed(2));
//                 } else if (fruit === "orange") {
//                     console.log((quantity * 0.9).toFixed(2));
//                 } else if (fruit === "grapefruit") {
//                     console.log((quantity * 1.60).toFixed(2));
//                 } else if (fruit === "kiwi") {
//                     console.log((quantity * 3.00).toFixed(2));
//                 } else if (fruit === "pineapple") {
//                     console.log((quantity * 5.60).toFixed(2));
//                 } else if (fruit === "grapes") {
//                     console.log((quantity * 4.20).toFixed(2));
//                 }
//                 break;
//             case (days.includes(day)):
//                 if (fruit === "banana") {
//                     console.log((quantity * 2.50).toFixed(2));
//                 } else if (fruit === "apple") {
//                     console.log((quantity * 1.20).toFixed(2));
//                 } else if (fruit === "orange") {
//                     console.log((quantity * 0.85).toFixed(2));
//                 } else if (fruit === "grapefruit") {
//                     console.log((quantity * 1.45).toFixed(2));
//                 } else if (fruit === "kiwi") {
//                     console.log((quantity * 2.70).toFixed(2));
//                 } else if (fruit === "pineapple") {
//                     console.log((quantity * 5.50).toFixed(2));
//                 } else if (fruit === "grapes") {
//                     console.log((quantity * 3.85).toFixed(2));
//                 }
//                 break;
//             }
//     } else {
//         console.log("error");
//     }
// }
// shopFruits(["apple",
//     "Saturday",
//     "2"])

//// Commissions

function bonuses(input) {
    let city = input[0];
    let sales = Number(input[1]);

    switch (true) {
        case (sales >= 0 && sales <= 500):
            if (city === "Sofia") {
                console.log((sales * 0.05).toFixed(2));
            } else if (city === "Varna") {
                console.log((sales * 0.045).toFixed(2));
            } else if (city === "Plovdiv") {
                console.log((sales * 0.055).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case (sales > 500 && sales <= 1000):
            if (city === "Sofia") {
                console.log((sales * 0.07).toFixed(2));
            } else if (city === "Varna") {
                console.log((sales * 0.075).toFixed(2));
            } else if (city === "Plovdiv") {
                console.log((sales * 0.08).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case (sales > 1000 && sales <= 10000):
            if (city === "Sofia") {
                console.log((sales * 0.08).toFixed(2));
            } else if (city === "Varna") {
                console.log((sales * 0.1).toFixed(2));
            } else if (city === "Plovdiv") {
                console.log((sales * 0.12).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case (sales > 10000):
            if (city === "Sofia") {
                console.log((sales * 0.12).toFixed(2));
            } else if (city === "Varna") {
                console.log((sales * 0.13).toFixed(2));
            } else if (city === "Plovdiv") {
                console.log((sales * 0.145).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
    }
}

bonuses(["Sofia", "1500"]);
bonuses(["Kaspichan", "100"]);
bonuses(["Varna", "-10"]);