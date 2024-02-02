// map method
// const numbers = [3,4,6,1,8,9]

// const square = function(number){
//     console.log(number*number);
// }

// const squareNumber = numbers.map((number, index)=>{
//     return`index: ${index}, ${number * number}`;
// });
// console.log(squareNumber);

const users = [
    {firstName: "dharmesh", age: 19},
    {firstName: "guggy", age: 20},
    {firstName: "vijay", age: 23},
]
const userNames = users.map((user)=>{
    return user.firstName;
});
console.log(userNames);