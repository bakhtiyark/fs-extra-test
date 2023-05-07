/*
Given the string 'ahb acb aeb aeeb adcb axeb'. 
Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
Get the day, month and year of the current date and output it to the console separately */

const testStr = "ahb acb aeb aeeb adcb axeb";
const numStr = "2 + 3 223 2223";

const regStr = /a.b/gi;
//console.log(testStr.match(regStr))
const regNumStr = /2\s\+\s3/
console.log(numStr.match(regNumStr))

const now = Date();

const day = now.slice(8, 10);
const month = now.slice(4, 7);
const year = now.slice(11, 15);

console.log(day);
console.log(month);
console.log(year);
