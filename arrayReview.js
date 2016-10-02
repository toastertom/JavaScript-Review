// var threeItems = [1,2,3];
// //create a function named 'last' that returns the last item from 'threeItems'
// //alert the result of your function
//
//   function last(array) {
//     return array.map(function (i) {
//       if (i === array.length) {
//         console.log(i);
//       }
//     })
//   }
// last(threeItems);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
// var evenArray = [1,2,3,6,22,98,45,23,22,12];
//
// function removeOdd(array) {
//   for (var i = array.length; i >= 0; i--) {
//     if (array[i] % 2 !== 0 ) {
//       array.splice(i, 1);
//       console.log(i);
//     }
//   }
//   return array;
//   }
// removeOdd(evenArray);
//
//
// console.log(evenArray);
//




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
// var getRandomArbitrary = function() {
//   return Math.floor(Math.random() * (30 - 0) + 0);
// }
// var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//
//   function arrRandCheck(array) {
//     return array.map(function (i) {
//       if (getRandomArbitrary(i) === i ) {
//         console.log(true);
//       }else if(getRandomArbitrary(i) !== i){
//         console.log(false);
//       }
//
//     })
//
//   }
//   arrRandCheck(randomArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
// var first = [1,2,3,4,5];
// var second = first.slice();
//
// second.push(6,7);
//
//
// console.log(first) //[1,2,3,4,5];
// console.log(second) //[1,2,3,4,5,6,7];
//


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
// var sentence = "Dev Mountain is the best"
//
// function longest(string) {
//   var str = string.split(' ');
//   var longestWord = ' ';
//   var word = null;
//   for (var i = 0; i < str.length; i++){
//     if (longestWord < str[i].length){
//       longestWord = str[i].length;
//       word = str[i];
//     }
//   }
//   return word;
// }
//
// console.log(longest(sentence));
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
// var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?
//
// function capitalize(str) {
//   return str.replace(/\b\w/g, function (str) {
//      return str.toUpperCase()
//   })
// return str;
// }
// console.log(capitalize(myPoem));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
// Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(str) {

return str.match(/[aeiou]/gi).length;

//   var numVow = 0;
//   var vowelFinder = /[aeiou]/;
//   for (var i = 0; i < str.length; i++){
//     if (vowelFinder === str[i]) {
//       numVow++;
//     }
//   }
// return numVow;
}

console.log(vowelCounter(theOdyssey));
