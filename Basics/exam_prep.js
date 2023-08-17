//// Oscars

// function oscarExpenses(input) {
//     let rent = Number(input[0]);

//     let statues = rent * 0.7;
//     let catering = statues * 0.85;
//     let sound = catering * 0.5;

//     let total = rent + statues + catering + sound;

//     console.log(total.toFixed(2));
// }
// oscarExpenses(["3500"])

////// Speed Climbing

// function climbing(input) {
//     let record = Number(input[0]);
//     let distance = Number(input[1]);
//     let metersPerSecond = Number(input[2]);

//     let slowness = Math.floor(distance / 50) * 30;

//     let finalTime = (distance * metersPerSecond) + slowness;

//     if (record > finalTime) {
//         console.log(`Yes! The new record is ${finalTime.toFixed(2)} seconds.`);
//     } else {
//         let needed = finalTime - record;
//         console.log(`No! He was ${needed.toFixed(2)} seconds slower.`)
//     }
// }

// climbing(["5554.36", "1340", "3.23"])

///////// Snooker Tickets

function calculateTickets(input) {
    let cost = 0;

    let stage = input[0];
    let type = input[1];
    let quantity = Number(input[2]);
    let picture = input[3];

    if (stage === "Quarter final") {
        switch (type) {
            case "Standard":
                cost += 55.5 * quantity;
                break;
            case "Premium":
                cost += 105.2 * quantity;
                break;
            case "VIP":
                cost += 118.9 * quantity;
                break;
        }
    } else if (stage === "Semi final") {
        switch (type) {
            case "Standard":
                cost += 75.88 * quantity;
                break;
            case "Premium":
                cost += 125.22 * quantity;
                break;
            case "VIP":
                cost += 300.4 * quantity;
                break;
        }
    } else if (stage === "Final") {
        switch (type) {
            case "Standard":
                cost += 110.1 * quantity;
                break;
            case "Premium":
                cost += 160.66 * quantity;
                break;
            case "VIP":
                cost += 400 * quantity;
                break;
        }
    }
    if (cost > 4000) {
        cost *= 0.75;
    } else if (cost > 2500) {
        cost *= 0.9;
        if (picture === "Y") {
            cost += 40 * quantity;
        }
    } else {
        if (picture === "Y") {
            cost += 40 * quantity;
        }
    }
    console.log(cost.toFixed(2))
}


calculateTickets(["Semi final", "VIP", "9", "Y"]);