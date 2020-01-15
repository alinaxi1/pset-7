function commonEnd(a, b) {

  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  // write your code here
  if (a.length < 1 || b.length <1) {
    return false;
  }

  if(a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {
  // write your code here
  if (!values||values.length < n||!Number.isInteger(n)||n < 0) {
     return [];
   } else {
     let first = values[0];
     let last = values[values.length - 1];

     return [first, last];
   }
}

function difference(numbers) {
  // write your code here
  if (numbers == undefined||numbers < 1||numbers.some(isNaN)) {
    return undefined;
  } else {
    let largest = Math.max.apply(Math, numbers);
    let smallest = Math.min.apply(Math, numbers);
    return largest - smallest;
  }
}

function max(number) {
  // write your code here
  if (number == undefined||number < 3||number.some(isNaN)||number.length % 2 == 0) {
    return undefined;
  } else {
    let first = number[0];
    let last = number[number.length -1];
    let middle = number[Math.floor((number.length - 1) / 2)];
    let elements = [first, middle, last];

    return Math.max.apply(Math, elements);
  }
}

function middle(values) {
  // write your code here
  if (values == undefined||values.length < 3||values.length % 2 == 0) {
    return [];
  } else {
    let middle1 = values [Math.floor((values.length - 1) / 2) - 1];
    let middle2 = values[(values.length - 1) / 2];

    return [middle1, middle2];
  }
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
