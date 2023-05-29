/*In a try catch construction, wrap the code: console.log (a), let a = 3. 
And display an error - ‘let must be declared’ before use. 
When running 1/0, the error 'cannot be divided by zero'*/

try {
  console.log(a);
  let a = 3;
} catch {
  let msg = "let must be declared before use";
  console.log(msg);
}

try {
  let dividend = 1;
  let divisor = 0;
  if (divisor === 0) {
    throw Error;
  } else {
    dividend / divisor;
  }
} catch {
  console.log("Cannot be divided by zero");
}
