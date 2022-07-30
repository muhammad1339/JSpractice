// string manipulation
let x = 9;
let y = 23;
// console.log(`reslut is ${x + y}`);
// console.log(+"os");

/////////// try scopes

let letOuterX = 10;
var varOuterX = 9;
const constOuterX = 9;

let myFunc = () => {
  let letInnerX = 10;
  var varInnerX = 9;
  const constInnerX = 9;

  console.log(`Function Scope => ${letOuterX}`);
  console.log(`Function Scope => ${varOuterX}`);
  console.log(`Function Scope => ${constOuterX}`);
};

// console.log(`File Scope => ${varInnerX}`);
// console.log(`File Scope => ${letInnerX}`);
// console.log(`File Scope => ${constInnerX}`);

// console.log(`File Scope => ${letOuterX}`);
// console.log(`File Scope => ${varOuterX}`);
// console.log(`File Scope => ${constOuterX}`);

// myFunc();

let d = "-100";

let e = "20";

let f = 30;

let g = true;

// console.log(++e * ++g + -d + ++f);

//console.log(-d * --e);
////////////////// arrays
let arr = [1, 3, 4, 5];
console.log(arr);

console.log(`array length is ${arr.slice(1)}`);
//////////////////////////////////// functions

function showDetails(...args) {
  let name = "mysterious";
  let age = 0;
  let status = true;

  args.forEach((element) => {
    typeof element == "string"
      ? (name = element)
      : typeof element == "boolean"
      ? (status = element)
      : (age = element);
  });

  console.log(
    `Hello ${name} , Your age is ${age} , ${
      status ? "available" : "not availble"
    }`
  );
}

// showDetails("Ahmed", true, 10);
// showDetails(false, 25, "Ahmed");
// showDetails("Ahmed", 10 ,true);
// showDetails();

/////// arrow functions
let arrow = (a, b) => {
  return a + b;
};
console.log("arrow functions   =======>>>>>>>>>>");
let result = arrow(+"23" , -3);
console.log(typeof arrow);
console.log(result);
