///// Phone Book

// function createPhoneBook(list) {
//     let book = {};

//     for (let i of list) {
//         let [name, number] = i.split(" ");
//         book[name] = number;
//     }

//     for (let [key, value] of Object.entries(book)) {
//         console.log(`${key} -> ${value}`)
//     }
// }

//// Meetings

// function setMeetingsAppointments(list) {
//     let meetings = {};

//     for (let entry of list) {
//         let [day, name] = entry.split(" ");

//         if (Object.keys(meetings).includes(day)) {
//             console.log(`Conflict on ${day}!`)
//         } else {
//             meetings[day] = name;
//             console.log(`Scheduled for ${day}`)
//         }
//     }

//     for (let [key, value] of Object.entries(meetings)) {
//         console.log(`${key} -> ${value}`)
//     }

// }
// setMeetingsAppointments(['Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim']
// );

/// Address Book

// function createAddressBook(list) {
//     let book = {};

//     for (let entry of list) {
//         let [name, address] = entry.split(":");
//         book[name] = address;
//     }

//     let sortedBook = Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]))
//     for (let entry of sortedBook) {
//         console.log(`${entry[0]} -> ${entry[1]}`)
//     }
// }

// createAddressBook(['Bob:Huxley Rd',
//     'John:Milwaukee Crossing',
//     'Peter:Fordem Ave',
//     'Bob:Redwing Ave',
//     'George:Mesta Crossing',
//     'Ted:Gateway Way',
//     'Bill:Gateway Way',
//     'John:Grover Rd',
//     'Peter:Huxley Rd',
//     'Jeff:Gateway Way',
//     'Jeff:Huxley Rd']
// );

/////// Storage

// function getStorage(list) {
//     let storage = new Map();

//     for (let entry of list) {
//         let [product, quantity] = entry.split(" ");

//         if (storage.has(product)) {
//             storage.set(product, storage.get(product) + Number(quantity));
//         } else {
//             storage.set(product, Number(quantity));
//         }
//     }

//     for (let [product, quantity] of storage.entries()) {
//         console.log(`${product} -> ${quantity}`);
//     }
// }

// getStorage(['tomatoes 10',
//     'coffee 5',
//     'olives 100',
//     'coffee 40']
// );

///// School Grades

// function storeGrade(list) {
//     let book = [];

//     for (let entry of list) {
//         let info = entry.split(" ")
//         let name = info.shift()
//         let grades = info.map(Number)

//         if (Object.keys(book).includes(name)) {
//             book[name].push(...grades);
//         } else {
//             book[name] = grades;
//         }
//     }
//     for (let [name, grades] of Object.entries(book)) {
//         let numberGrades = grades.length
//         let totalGrades = grades.reduce((a, b) => a + b, 0)
//         book[name] = (totalGrades / numberGrades).toFixed(2)
//     }
//     let gradeBook = Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]));

//     for (let entry of gradeBook) {
//         console.log(`${entry[0]}: ${entry[1]}`)
//     }
// }

// storeGrade(['Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6']);

/////  Word Occurances 

function countWordOccurances(list) {
    let counter = new Map()

    for (let i of list) {
        if (counter.has(i)) {
            counter.set(i, counter.get(i) + 1)
        } else {
            counter.set(i, 1)
        }
    }
    
    let sortedCounter = new Map([...counter.entries()].sort((a, b) => b[1] - a[1]))
    
    for (let [key, value] of sortedCounter) {
        console.log(`${key} -> ${value} times`)
    }
}
countWordOccurances(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]
);