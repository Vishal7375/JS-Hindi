function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);


function loginUserMessage(username) {
    // if (username === undefined) {
    if (!username) {
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vishal"))
// console.log(loginUserMessage())


function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const cource = {
    courcename: "javascript",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Courcename is ${anyobject.courcename} and price is ${anyobject.price}`);
}

// handleObject(cource)
// handleObject({
//     courcename: "typescript",
//     price: 399
// })

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 500, 600]));
