// // arrow function
// const singHappyBirthday = function(){
//     console.log("happy birthdaytoo you.....");
// }

const singHappyBirthday = () => {
    console.log("happy birthdaytoo you.....");
}

singHappyBirthday();
const sumThreeNumbers = (number1, number2, number3) =>  number1 + number2 + number3;

const ans = sumThreeNumbers(2,3,4);
console.log(ans)
const isEven = (number) =>  number % 2 === 0;
console.log(isEven(2));

const firstChar = (anyString) =>  anyString[0];

console.log(firstChar("dharmesh"));

const findTarget = (array, target) => {
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}