var result = "Hello".indexOf('l');
console.log(result);
var clothes = [];
  clothes.push('gray t-shirt');
  clothes.push('green scarf');
  clothes.pop();
  clothes.push('slippers');
  clothes.pop();
  clothes.push('boots');
  clothes.push('old jeans');
  console.log(clothes);
    var food = [];
  food.push('Chocolate');
  food.push('Ice cream');
  food.push('Donut');

  console.log(food[1]);

    var dog = {
      color: "brown",
      height: 30,
      length: 60
  };
  dog["type"] = "corgi";
  console.log(dog);

  function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message); // Division by zero is not allowed.
};

var food1;

console.log("food",food1);

  var result1 = null;
  console.log(result1);

   try {
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  };

    var x;

  if(x === null) {
    console.log("null");
  } else if(x === undefined) {
    console.log("undefined");
  } else {
    console.log("ok");
  };

//     throw new Error();
//   console.log("Hello");

try {
console.log('hello')
} catch(e) {
console.log('caught')
};

var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
  console.log(burger[2]);
// In the following code, how many methods does the  bicycle  object have?
  var bicycle = {
      wheels: 2,
      start: function() {

      },
      stop: function() {

      }
  };

  // Question 5
// When the following code runs, what will print out?
  try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  };
  //  Question 7
// Will the following code execute and provide a string as the output?

  function add(a, b) {
    console.log(a + b)
  }

  add(3, "4");

  // Question 8
// What will be printed when the following code runs?


  var result2;
  console.log(result2);

  // Question 9
// What will be the output of the following code?

var str = "Hello";
console.log(str.match("jello"));

/* 10.
Question 10
What will be the output of the following code?
*/
try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
};

