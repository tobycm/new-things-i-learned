// 10 Sep 2022
// I have a better understanding of the question mark (?) in javascript

// condition ? run when true : run when false

10 === 15 ? console.log("yeah 10 is larger than 15") : console.log("nah 15 is bigger than 10") // output: nah 15 is bigger than 10

// 11 Sep 2022
// I learned that you can use .constructor to see what object type it is

const example_array = ["a", "z", 14, true]

console.log(example_array.constructor) // output: Array function

console.log(example_array.constructor === Array) // output: true
console.log(example_array.constructor === Number) // output: false

// js is kinda cool

// 12 Sep 2022
// I learned how to check class inheritence by using .prototype and instanceof

class ExampleA {
    // do nothing lol
}

class ExampleB {
    // useless, failure
}

class ExampleC extends ExampleA {
    // do something lmao
}

console.log(ExampleB.prototype instanceof ExampleA) // output: false
console.log(ExampleC.prototype instanceof ExampleA) // output: true
console.log(ExampleA.prototype instanceof ExampleC) // output: false
