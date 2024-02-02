// // rest parameters

// function myFunk(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`a is ${b}`);
//     console.log(`a is`, c);
// }
// myFunk(3,4,5,6,7,8);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans = addAll(4,5,6,7,8,9);
console.log(ans);