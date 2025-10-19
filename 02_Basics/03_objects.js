// singleton
// Object.create

// Object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Vishal",
  "full name": "Vishal Kubavat",
  [mySym]: "mykey1",
  age: 21,
  location: "Vadodara",
  email: "vishal@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "vishal@microsoft.com";
// Object.freeze(JsUser);
JsUser.email = "vishal@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
