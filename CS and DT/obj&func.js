/*
-        Create a car object, add a color property to it with the value equals 'black'

-        Change the color property of the car object to 'green'

-        Add the power property to the car object, which is a function and displays the engine power to the console

-        Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

-       Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

-        Write a function for calculating the type of argument and type output to the console

-        Write a function that determines whether a number is prime or not
*/

const car = {
  colour: "Black",
  horsePower: 177,
  power: function () {
    return this.horsePower;
  },
};

car.colour = "Green";
/*
console.log(car.colour);
console.log(car.power());
*/

function addItems({ item }) {}

const testArray = ["Bakhtiyar", "John", "Mohammed"];

function sayHello(name) {
  if (testArray.includes(name)) {
    return `Hello ${name}`;
  } else {
    return "Hello";
  }
}

/*
console.log(sayHello("Bakhtiyar"));
console.log(sayHello("Joachim"));
*/

const typeOfArg = (arg1) => console.log(typeof arg1);

/*
typeOfArg(1)
typeOfArg(true)
*/

function primeNumberCheck(num) {
  let prime = true;
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
    }
  }
  prime
    ? console.log(`${num} is a prime number`)
    : console.log(`${num} is not a prime number`);
}
/*
primeNumberCheck(1)
primeNumberCheck(3)
primeNumberCheck(5)
primeNumberCheck(27)
primeNumberCheck(69)
*/