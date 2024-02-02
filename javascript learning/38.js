// how to itwrate oobject
// const key = "email";
const person = {
    name: "dharmesh",
    age:"19",
    "person hobbies": ["guitar", "eating", "music", "traveling"]
    
}


// for in loop
// object.keys

// for(let key in person){
//     console.log(key, " : " ,person[key]);
// }

// console.log(typeof(Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

for(let key of Object.keys(person)){
    console.log(person[key]);
}