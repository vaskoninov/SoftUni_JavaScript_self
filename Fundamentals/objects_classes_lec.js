///// Person Info

// function personInfo(firstName, lastName, age) {
//     let info = {
//         firstName,
//         lastName,
//         age,
//     };
//     return info;
// }

// console.log("George",
//     "Smith",
//     "18"
// );

///// City

// function returnCity(obj) {
//     for (let [key, value] of Object.entries(obj)) {
//         console.log(`${key} -> ${value}`);
//     }
// }
// returnCity({
//     name: "Plovdiv",
//     area: 389,
//     population: 1162358,
//     country: "Bulgaria",
//     postCode: "4000"
// });

////// Convert to Object

// function convertToObject(string) {
//     for (let [key, value] of Object.entries(JSON.parse(string))) {
//         console.log(`${key}: ${value}`);
//     }
// }
// convertToObject('{"name": "George", "age": 40, "town": "Sofia"}'
// );

//// Convert to JSON

// function convertToJSON(name, lastName, hairColor) {
//     let obj = {
//         name,
//         lastName,
//         hairColor,
//     }
//     console.log(JSON.stringify(obj))
// }
// convertToJSON('George', 'Jones',
//     'Brown');

//// Cats

// function creatingCats(sequence) {
//     let cats = [];
//     class Cat {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }
//         meow() {
//         console.log(`${this.name}, age ${this.age} says Meow`);
//         }
//     }

//     for (let animal of sequence) {
//         let [name, age] = animal.split(" ");
//         cats.push(new Cat(name, age));
//     }
//     for (let cat of cats) {
//         cat.meow()
//     }
// }

// creatingCats(['Mellow 2', 'Tom 5']
// );

/////// Songs

function songsRead(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let number = input.shift();
    let typeToPrint = input.pop();

    for (let i = 0; i < number; i++) {
        let [type, name, time] = input[i].split("_");
        songs.push(new Song(type, name, time));
    }

    if (typeToPrint === "all") {
        for (let song of songs) {
            console.log(song.name);
        }
    } else {
        for (let song of songs) {
            if (song.type === typeToPrint) {
                console.log(song.name);
            }
        }
    }
}

songsRead([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);