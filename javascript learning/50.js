// // block scope vs function scope


// // let and const are block scope
// // var is function scope

// {
//     var firstName = "dharmesh";   
// }
// console.log(firstName);

// {
//     // var firstName = "guggy";
//     console.log(firstName);
// }
// if(true){
//     let firstName = "dharmesh";
//     console.log(firstName);
// }

// console.log(firstName);
let firstName = "garima";
function myApp(){
    if(true){
        var firstName = "dharmesh";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();


// function myApp(){
//     if(false){
//         var firstName = "dharmesh";
//         console.log(firstName);
//     }
//     console.log(firstName);
// }
// myApp();
