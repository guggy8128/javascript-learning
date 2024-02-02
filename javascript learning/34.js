// for in loop

const fruits = ["apple","mango","grapes","watermalan"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());  
}
console.log(fruits2)