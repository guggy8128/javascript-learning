// nested destructuring
const users = [
    {userId: 1,firstName: `dharmesh`, gender: `male`},
    {userId: 2,firstName: `guggy`, gender: `male`},
    {userId: 3,firstName: `vijay`, gender: `male`},
]

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(user3gender);
console.log(userId);


