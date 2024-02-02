// find method

const myArray = ["Hello", "cat", "dog", "lion"];

function isLength3(string){
    return string.isLength === 3;
}

const ans = myArray.find(isLength3);
console.log(ans);
// const ans = isLength("doggy");

// console.log(ans)