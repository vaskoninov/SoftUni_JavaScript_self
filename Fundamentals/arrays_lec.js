///// Sum First and Last El

function sumFirstLast(sequence) {
    first = sequence.shift()
    last = sequence.pop()

    console.log(first + last);
}
sumFirstLast([20, 30, 40]);