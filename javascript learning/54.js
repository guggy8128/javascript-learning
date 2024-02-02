// callback functions

function myFunk2(name){
    console.log("inside myFunk2")
    console.log(`your name is ${name}`)
}

function myFunk(callBack){
    console.log("hello there i am a function");
    callBack("dhamrsh");

}



// function myFunk2(){
//     console.log("inside my funk");
// }
myFunk(myFunk2);
