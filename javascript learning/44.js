// function singHappyBirthday(){
//     console.log("happy birthday too you.........");
// }

// function sumTwoNumbers(number1, number2, number3){
//     return number1 +number2 +number3;
// }
// const returnedValue = sumTwoNumbers(2,3,5);
// console.log(returnedValue);
// console.log(2+3);

// od or even
// input : 1 number
// output : true, false

// function isEven(number){
//    return number % 5 === 0;
// }

// console.log(isEven(2+4));
// console.log(12 % 3 === 0);

// function
// input : String
// output : firstCharacter

// function middelChar(anyString){
//     return anyString[1];
// }
// console.log(middelChar("abc"));

// function
// input : array, target (number);
// output : index of target if target present in array
// [1,2,3,55], 3

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90];
const ans = findTarget(myArray, 4);
console.log(ans);