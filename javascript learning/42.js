// object inside array
// very useful in real world applications

const users = [
    {userId: 1,firstName: `dharmesh`, gende: `male`},
    {userId: 2,firstName: `guggy`, gende: `male`},
    {userId: 3,firstName: `vijay`, gende: `male`},
]
for(let user of users){
    console.log(user.firstName);
}
// console.log(users);

