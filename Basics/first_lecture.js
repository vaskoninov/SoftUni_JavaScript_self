// function hello(){
//     console.log("Hello world");
// }

// hello();
/////////////////
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

////////////////
// function printNums(i) {
//     for (i; i <= 10; i++) {
//         console.log(i);
//     }
// }
// let num = 1;
// printNums(num);

/////////////

// function numsFrom1To10() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
//     console.log(6);
//     console.log(7);
//     console.log(8);
//     console.log(9);
//     console.log(10);
//   }
// numsFrom1To10();

// //////////

// function squareArea(input) {
//     let a = Number(input[0]);
//     let area = a * a;
//     console.log(area);
// }
// squareArea([3])

//////////

// function inchesToCentimeters(input) {
//     const inch = 2.54;
//     let centimeters = Number(input[0]);
//     let toInches = centimeters * inch;
//     console.log(toInches)
// }
// inchesToCentimeters(['10'])

//////////

// function helloByName(input) {
//     let name = input[0];
//     console.log(`Hello, ${name}!`);
// }
// helloByName(["Peter"])

/////////////

// function concatenateData(input) {
//     let firstName = input[0];
//     let secondName = input[1];
//     let age = Number(input[2]);
//     let town = input[3];

//     console.log(`You are ${firstName} ${secondName}, a ${age}-years old person from ${town}.`)
// }
// concatenateData(["Peter", "Petrov", 21, "Sofia"])

////////////

// function planningProjects(input) {
//     let name = input[0];
//     let hours = Number(input[1]);
//     let needed = hours * 3;

//     console.log(`The architect ${name} will need ${needed} hours to complete ${hours} project/s.`)
// }

/////////

// function costsCalc(input) {
//     const dog_price = 2.50;
//     const cat_price = 4;
//     let dog_n = Number(input[0]);
//     let cat_n = Number(input[1]);
    
//     let total = dog_n * dog_price + cat_n * cat_price

//     console.log(`${total} lv.`)
// }
// costsCalc(["13", "9"])

//////////////

function greening(input) {
    const price = 7.61;
    let squares = Number(input[0]);

    let discount = 0.18 * (price * squares);
    let total = (price * squares) - discount;

    console.log(`The final price is: ${total} lv.`)
    console.log(`The discount is: ${discount} lv.`)
} 
greening(["550"]);