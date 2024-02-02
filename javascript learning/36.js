// objects refrence type
// array are good but not suficiant
// for real world data
// object store key value pairs
// objects don't have index

// how to create objects
// const person = {name: "dharmesh", age:"19", height:"5'6"};
const person = {
    name: "dharmesh",
    age:"19",
    // height:"5'6"
    hobbies: ["guitar", "eating", "music", "traveling"]
}
console.log(person);

// how to access data frome objects
// console.log(person["name"].toUpperCase());
// console.log(person.age);
// // console.log(person.height);
// console.log(person.hobbies);
// // how to add key value pair to objects
// person.gender = "male";
person["person"] = "5'6"
console.log(person);