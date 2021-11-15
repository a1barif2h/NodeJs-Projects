
// GENERATE RANDOM NUMBER BETWEEN TWO NUMBER
// function generateRandomNumber(startNumber, endNumber) {
//     let exactRandomNumber;

//     const randomNumber = Math.floor(Math.random() * endNumber)

//     if(randomNumber >= startNumber) {
//         exactRandomNumber = randomNumber
//     } else {
//         exactRandomNumber = startNumber
//     }

//     console.log(randomNumber >= startNumber, exactRandomNumber)

//     return exactRandomNumber
// }

// console.log(generateRandomNumber(5, 100))

// REVERSE A STRING
// const str = 'javascript'

// function reverseString(str) {
//     let a = '';
//     for(let i = str.length - 1; i >=0; i--) {
//         a += str[i]
//     }

//     return a
// }

// console.log(reverseString(str))

// REVERSE A NUMBER

const num = 3874

function reverseNumber(num) {
    let a = ''

    for(let i = num.toString().length - 1; i >= 0; i--) {
        a += num.toString()[i]
    }

    return Number(a)
}

console.log(reverseNumber(num))
