// array destructuring

const myArray = ["value1","value2","value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

let [myvar1,myvar2, ...mynewArray] = myArray;
// myvar1 = "value changed";
// let mynewArray = myArray.slice(2)
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(mynewArray);