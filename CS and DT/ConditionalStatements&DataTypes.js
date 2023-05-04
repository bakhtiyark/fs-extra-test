// Additions

let num = 3;
let bool = true;
let str = "lala";
let strNum = "9";

let numPlusBool = num + bool;

let strPlusBool = str + bool;

let strPlusNum = str + num;

console.log(
  `Result of adding number(${num}) to string(${str}) is ${strPlusNum}`
);
console.log(
  `Result of adding boolean value(${bool}) to string(${str}) is ${strPlusBool}`
);
console.log(
  `Result of adding boolean value(${bool}) to number(${num}) is ${numPlusBool}`
);

// Multiplications
let strTimesBool = str * bool;
let strTimesNum = str * num;
let numTimesBool = num * bool;

// Divisions
let strDividedByBool = str / bool;
let strDividedByNum = str / num;
let numDividedByBool = num / bool;

// Conversions
let boolConverted = String(bool);
let strConvertedtoNum = Number(strNum);
let numberConverted = String(num);
let strConvertedtoBool = Boolean(str);
