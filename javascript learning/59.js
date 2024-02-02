// reduce method
// const number = [1,2,3,4,5,10];

// // aim : sum of all the nujmbers in array

// const sum = number.reduce((accumulator, currentvalue)=>{
//     return accumulator + currentvalue;
// }, 100);

// console.log(sum);
// accumulator, currentvalue, return
// 1                2           3
// 3                3           6
// 6                4           10
// 10               5           15
// 15               10          25


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 45000},
    {productId: 3, productName: "tv", price: 50000},
];
const totalAmount= userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);