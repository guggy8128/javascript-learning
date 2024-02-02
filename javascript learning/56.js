// important array methods

// forEach
// map =#imp
// filter
// reduce

const numbers = [4,2,5,8];

function myFunk(number, index){
    console.log(`index is ${index} number is ${number}`);
}
// for(let i = 0 ; i< numbers.length; i++){
//     // console.log(i);
//     multiplyby2(numbers[i], i);
// }

// numbers.forEach(function(number, index){
//     console.log(`index is ${index} number is ${number}`)
// });
// numbers.forEach(function(number,index){
//     console.log(number*2, index);
// })

const users = [
    {firstName: "dharmesh", age:19},
    {firstName: "tulshibhai", age:55},
    {firstName: "vijay", age:24},
    {firstName: "guggy", age:20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// })

users.forEach((user, index)=>{
    console.log(user.firstName, index);
})

// for(let user of users){
//     console.log(user.firstName);
// }

