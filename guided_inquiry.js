// Very Easy

var num1 = 21;
var num2 = 10;

console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}.`)

// Easy

var name1 = "Jeremiah"
var name2 = "Conrad"

if (name1.length > name2.length) {
  console.log(`${name1}'s name is longer than ${name2}'s name by ${name1.length - name2.length} characters`)
} else {
  console.log(`${name2}'s name is longer than ${name1}'s name by ${name2.length - name1.length} characters`)
}

// Medium

var string = prompt("Type Anything: ")

if (string.toUpperCase() === string) {
  console.log("You are shouting!");
} else if (string.toLowerCase() === string) {
  console.log("You are whispering.")
} else {
  console.log("You are talking normally.")
}

// Hard

var x = 10
var y = 21

console.log(x += y)
console.log(x -= y)
console.log(x *= y)
console.log(x /= y)

// Very Hard

numberOne = parseFloat(prompt("Enter a number"))
operator = prompt("Enter an operator")
numberTwo = parseFloat(prompt("Enter another number"))

let product;

if (operator === "+") {
  product = numberOne + numberTwo;
} else if (operator === "-") {
  product = numberOne - numberTwo;
} else if (operator === "*") {
  product = numberOne * numberTwo;
} else {
  product = numberOne / numberTwo;
}

console.log(`${numberOne} ${operator} ${numberTwo} = ${product}`)