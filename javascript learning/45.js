// function expression
// function singHappyBirthday(){
    // console.log("happy birthday too you.........");
// }    

const singHappyBirthday = function(){
    console.log("happy birthday too you.........");
}
singHappyBirthday();

const sumThreeNumbers = function(number1, number2, number3){
    return number1 *number2 +number3;
}
const ans = sumThreeNumbers(2,3,4);
console.log(ans);

function isEven(number){
   return number % 5 === 0;
}

const isEven = function(number){
    return number % 2 === 0;
}
console.log(isEven(4));

const middelChar = function(anyString){
    return anyString[0];
}
// // console.log(middelChar("abd"))
// const findTarget = function(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(aray[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// // const myArray = [1,3,8,90];
// // const ans = findTarget(myArray, 4);
// // console.log();


// const singHappyNewyear = function(){
//     console.log("happy new year india.....");
// }
// singHappyNewyear();

// const istEven = function(number){
//     return number % 2 === 0;
// }
// console.log(istEven(2));


// const findTheTarget = function(array, target){
//     for(let i = 0; i>array.length; i++){
//         if(aray[i]===target){
//             return i;
//         }
//     }
//     return 5;
// }
// console.log(findTheTarget(1));