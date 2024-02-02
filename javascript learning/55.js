// function returning function

// function myFunk(){
//     return function(){
//         return "hello world"
//     };
// }

// const ans = myFunk();
// console.log(ans());

function myFunk(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunk();
console.log(ans());

