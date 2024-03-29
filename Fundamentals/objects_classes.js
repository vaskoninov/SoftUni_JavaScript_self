/// Employees

// function printEmployeeInfo(seq) {
//     for (let i = 0; i < seq.length; i++) {
//         let obj = {
//             name: seq[i],
//             number: seq[i].length,
//         }
//         console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`)
//     }

// }
// printEmployeeInfo([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ]);

///// Towns

// function printTowns(seq) {
//     for (let i = 0; i < seq.length; i++) {
//         let info = seq[i].split("|").map(e => e.trim())
//         let infor = {
//             town: info[0],
//             latitude: Number(info[1]).toFixed(2),
//             longitude: Number(info[2]).toFixed(2),
//             info: function () {
//                 console.log(`{ town: '${infor.town}', latitude: '${infor.latitude}', longitude: '${infor.longitude}' }`)
//             }
//         }
//         infor.info()
//     }
// }

// printTowns(['Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625']
// );

///// Store Provision

// function storeProvision(arr1, arr2) {
//     let store = {};
//     for (let i = 0; i < arr1.length; i += 2) {
//         store[arr1[i]] = Number(arr1[i + 1]);
//     }

//     for (let i = 0; i < arr2.length; i +=2) {
//         if (Object.keys(store).includes(arr2[i])) {
//             store[arr2[i]] += Number(arr2[i + 1]);
//         } else {
//             store[arr2[i]] = Number(arr2[i + 1]);
//         }
//     }
//     for (let [key, value] of Object.entries(store)) {
//         console.log(`${key} -> ${value}`)
//     }
// }

// storeProvision([
//     'Chips', '5', 'CocaCola', '9', 'Bananas',
//     '14', 'Pasta', '4', 'Beer', '2'
// ],
//     [
//         'Flour', '44', 'Oil', '12', 'Pasta', '7',
//         'Tomatoes', '70', 'Bananas', '30'
//     ]
// );

//// Movies

// function storeMovies(list) {
//     let movies = [];

//     for (let i = 0; i < list.length; i++) {
//         let info = list[i].split(" ");
//         if (info[0] === "addMovie") {
//             let name = info.splice(1).join(" ");
//             movies.push({ name });
//         } else if (info.includes("onDate")) {
//             info.splice(info.indexOf("onDate"), 1);
//             let date = info.pop();
//             let name = info.join(" ");
//             let found = false;
//             for (let movie of movies) {
//                 if (movie.name === name) {
//                     if (!(movie.hasOwnProperty(date))) movie.date = date;
//                     found = true;
//                     break;
//                 }
//             }
//             // if (!(found)) movies.push({ name, date });
//         } else if (info.includes("directedBy")) {
//             let name = info.slice(0, info.indexOf("directedBy")).join(" ");
//             let director = info.slice(info.indexOf("directedBy") + 1, info.length).join(" ")
//             let found = false;
//             for (let movie of movies) {
//                 if (movie.name === name) {
//                     if (!(movie.hasOwnProperty(director))) movie.director = director;
//                     found = true;
//                     break;
//                 }
//             }
//             // if (!(found)) movies.push({ name, director });
//         }
//     }
//     for (let movie of movies) {
//         if (movie.hasOwnProperty("name") && movie.hasOwnProperty("date") && movie.hasOwnProperty("director")) {
//             console.log(JSON.stringify(movie))
//         }
//     }
// }

// storeMovies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]
// );

/////// Inventory

// function registerHeroes(list) {
//     let heroes = [];

//     class Hero {
//         constructor(name, level, items) {
//             this.name = name;
//             this.level = level;
//             this.items = items;
//         }
//         presentation() {
//             let result = `Hero: ${this.name}\nlevel => ${this.level}\nitems => ${this.items}`
//             console.log(result)
//         }
//     }

//     for (let el of list) {
//         let [name, level, items] = el.split(" / ");
//         heroes.push(new Hero(name, Number(level), items));
//     }

//     heroes = heroes.sort((a, b) => a.level - b.level)

//     for (let hero of heroes) {
//         hero.presentation()
//     }

// }

// registerHeroes([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]);

//// Make a Dict

// function makeDict(list) {
//     let dict = [];

//     for (let definition of list) {
//         let parsedDefinition = JSON.parse(definition);
//         let toInsert = {};
//         for (let [key, value] of Object.entries(parsedDefinition)) {
//             toInsert = {
//                 "Term": key,
//                 "Definition": value,
//             };
//         }

//         if (dict.length === 0) {
//             dict.push(toInsert);
//             continue;
//         }

//         let updated = false;

//         for (let item of dict) {
//             if (item["Term"] === toInsert["Term"]) {
//                 item["Definition"] = toInsert["Definition"];
//                 updated = true;
//                 break;
//             }
//         }

//         if (!(updated)) dict.push(toInsert);

//     }

//     dict = dict.sort((a, b) => a.Term.localeCompare(b.Term));
//     for (let item of dict) {
//         console.log(`Term: ${item.Term} => Definition: ${item.Definition}`)
//     }
// }

// makeDict([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds(coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}'
// ]
// );

////// Class Vehicle

// class Vehicle {
//     constructor(type, model, parts, fuel) {
//         this.type = type;
//         this.model = model;
//         this.parts = {
//             engine: parts.engine,
//             power: parts.engine,
//             quality: parts.engine * parts.power,
//         };
//         this.fuel = fuel;
//     }
//     drive(expenses) {
//         this.fuel -= expenses;
//     }
// }

// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);

///// Class Storage

// class Storage {

//     constructor(capacity){
//         this.capacity = capacity;
//         this.storage = [];
//         this.totalCost = 0;
//     }
//     addProduct(product) {
//         if (this.capacity > 0) {
//             this.storage.push(product);
//             this.totalCost += product.price * product.quantity;
//             this.capacity -= product.quantity;
//         }
//     }
//     getProducts() {
//         let result = []
//         for (let product of this.storage) {
//             result.push(JSON.stringify(product))
//         }
//         return result.join("\n");
//     }

// }

// let productOne = {name: 'Cucamber', 
// price: 1.50, quantity: 15};
// let productTwo = {name: 'Tomato', 
// price: 0.90, quantity: 25};
// let productThree = {name: 'Bread', 
// price: 1.10, quantity: 8};
// let storage = new Storage(50);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// storage.addProduct(productThree);
// console.log(storage.getProducts());
// console.log(storage.capacity);
// console.log(storage.totalCost);

//// Catalogue

function sortCatalogue(list) {
    let catalogue = [];

    for (let item of list) {
        item = item.split(" : ");
        let entry = {
            name: item[0],
            quantity: Number(item[1]),
        };
        catalogue.push(entry);
    }
    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    let result = [];

    for (let entry of catalogue) {
        let name = entry.name;
        let value = entry.quantity;
        let startsWithLetter = name[0];
        if (result.includes(startsWithLetter)) {
            result.push(`  ${name}: ${value}`)
        } else {
            startsWithLetter = name[0];
            result.push(startsWithLetter);
            result.push(`  ${name}: ${value}`)
        }
    }
    console.log(result.join("\n"))
}
sortCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);