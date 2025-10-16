// const TwitterUser = new Object()
const TwitterUser = {}

TwitterUser.id = "123abc"
TwitterUser.name = "Sam"
TwitterUser.isLoggedIn = false

// console.log(TwitterUser);

const regularUser = {
    email: "some@gmai.com",
    fullname: {
        username: {
            firstname: "vishal",
            lastname: "kubavat"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "kv@gmail.com"
    },
    {
        id: 1,
        email: "kv@gmail.com"
    },
    {
        id: 1,
        email: "kv@gmail.com"
    },
    {
        id: 1,
        email: "kv@gmail.com"
    },
]

users[1].email
console.log(TwitterUser);

console.log(Object.keys(TwitterUser));
console.log(Object.values(TwitterUser));
console.log(Object.entries(TwitterUser));

console.log(TwitterUser.hasOwnProperty('isLoggedIn'));
