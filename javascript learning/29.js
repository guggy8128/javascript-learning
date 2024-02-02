// how to clone array

// how to concanet two array

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat("item3","item4");
// let array2 = [].concat(array1,("item3","item4"));
// new way
//sprade oprator
let array2 = [...array1, "item3","item4","array8","array7","array6"];

array1.push("item3");
// array2.push("array5");

console.log(array1===array2);
console.log(array1);
console.log(array2);