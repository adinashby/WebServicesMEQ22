function addNumbers(num1, num2) {
    return num1 + num2;
}

let result = addNumbers(5, 7);

console.log('result is: ');
console.log(result);

if (result == 12) {
    console.log("it's 12!");
} else {
    console.log("it's not 12!");
}

let input = "a";

switch (input) {
    case "a":
        console.log("A");
        break;
    case "b":
        console.log("B");
        break;
    case "c":
        console.log("C");
        break;
    default:
        console.log("No match");
}

let a = null;
let b = null;
let c = null;

console.log(a ?? b ?? c);

let user = {
    name: "John",
    age: 30,
}

console.log(user);

user.isAdmin = true;
console.log(user);

console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);

delete user.age;

console.log(user);
console.log(user.age === undefined);

// let substractFunc = (num1, num2) => {
//     return num1 - num2;
// };

let substractFunc = (num1, num2) => num1 - num2;

console.log(substractFunc(10, 3));

function subtractAndComment(comment, num1, num2, operation) {
    return comment + " " + operation(num1, num2);
}

console.log(subtractAndComment("Result is", 10, 6, (num1, num2) => num1 + num2));
console.log(subtractAndComment("Result is", 10, 6, (num1, num2) => num1 - num2));
console.log(subtractAndComment("Result is", 10, 6, (num1, num2) => num1 * num2));
console.log(subtractAndComment("Result is", 10, 6, (num1, num2) => num1 / num2));