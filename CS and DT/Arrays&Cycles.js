/*
Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
Given an array of car manufacturers, convert the array to a string and back to an array
Given an array of the names of your friends, add the words hello to each element of the array
Convert numeric array to Boolean
Sort the array [1,6,7,8,3,4,5,6] in descending order
Filter array [1,6,7,8,3,4,5,6] by value> 3
Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
Implement a loop that will print the number 'a' until it is less than 10
Implement a loop that prints prime numbers to the console
Implement a loop that prints odd numbers to the console
*/

const moviesArray = [
  "Snatch",
  "Cloud Atlas",
  "Shawshank Redemption",
  "Cable Guy",
];

moviesArray.forEach((mov) => console.log(mov));

const carManufacturers = ["Ford", "Toyota", "Chevrolet", "Renault"];
console.log(carManufacturers.toString().split(","));

const friendsArray = ["Natalya", "Michael", "Irina", "Isaiah"];
const greetedFriends = [];
for (let i = 0; i < friendsArray.length; i++) {
  greetedFriends.push("Hello " + friendsArray[i]);
}
//console.log(greetedFriends);

const numArr = [1, 6, 7, 8, 3, 4, 5, 6];

//console.log(Boolean(numArr));

const numArrDesc = numArr.slice().sort((a, b) => b - a);
//console.log(numArrDesc);

const numArrFiltered = numArr.filter((num) => num > 3);
//console.log(numArrFiltered);

function logElement(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number){
        return i;
    }
  }
}
// console.log(numArr)
// console.log(logElement(numArr, 1));

for(let i=0; i<10;i++){
    console.log(i)
} 
 
let rangeNumber = 69;
for (let i = 1; i < rangeNumber; i++) {
  let prime = i > 1;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      prime = false;
    }
  }
  if (prime) {
    console.log(i)
  }
}

for(let i=0; i < rangeNumber; i++){
    if (i % 2 === 1){
        console.log(i)
    }
}