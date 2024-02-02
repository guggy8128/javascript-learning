// functions inside functions
const app = () =>{
    const myfunk = () =>{
        console.log("hello from myfunk")
    }
    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    const num = (num1, num2) => num1 + num2;
    console.log("inside app");
    myfunk();
    console.log(addTwo(2,3));
    console.log(num(2,3));
}
app();