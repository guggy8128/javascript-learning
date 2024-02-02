// lexical scope
// const myVar = "value1";
function myApp(){
    const myVar = "value1";
    function myFunk(){
        const myVar = "value59";
        const myFunk2 = () =>{
            console.log("inside myfunk", myVar); 
        }
        myFunk2();
        console.log("inside myfunk", myVar);

    }
    const myFunk2 = function(){
        console.log("inside myFunk2");
    }
    const myfunk3 = ()  => {
        console.log("inside last myfunk");
    }
    console.log(myVar);
    myFunk();
    myFunk2();
    myfunk3();
}

myApp();