//Objective is to implement a function that converts a string into an integer

let str = "   -42"


//O(n) solution that uses character codes to check for numbers

let index = 0
let sign = 0
let max = 2147483647
let min = -2147483648
let result = 0

//Remove the white space
str = str.trim()

//Check the sign of the number
if (str[index] == '-' || str[index] == '+') {
    sign = str[index++] == '-' ? -1 : 1
}

//Number character codes exist between 48 and 57
while (index < str.length && str[index].charCodeAt(0) - 48 <= 9 && str[index].charCodeAt(0) - 48 >= 0) {
    result = (result * 10) + (str[index++].charCodeAt(0) - 48)
}

if (sign != 0) {
    result = result * sign
}

//Check for overflow
return result <= min ? min : result >= max ? max : result