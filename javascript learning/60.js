// sort method
// ASCII TABLE
// char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// sort
// 5,9,1200,400,3000
// 5,9,1200,400,3000 (expected)

// const numbers = [5,9,1200,400,3000];
// numbers.sort();
// console.log(numbers);

// const userName = ['dharmesh', 'guggy', 'vijay', 'd.man', 'abcd', 'ABCD','AAB'];
// userName.sort();
// console.log(userName)

// const numbers = [5,9,1200,400,3000];
// numbers.sort((a,b)=>{
//     return a-b;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);
// 1200,410
// a-b ---> 790
// a-b ---> positive (greater than 0) --->b,a
// 410, 1200

// a-b ---> negative ---> a,b
// 5,9 --->-4
// price LoeToHigh HighToLow
const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 400},
    {productId: 3, productName: "p3", price: 500},
    {productId: 4, productName: "p4", price: 600},
    {productId: 5, productName: "p5", price: 700},
]

// lowToHig
const HighToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price
});
console.log(products);