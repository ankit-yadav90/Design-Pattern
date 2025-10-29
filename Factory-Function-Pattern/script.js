function createUser(name, age) {
  return {
    name,
    age,
    sayHello() {
      console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
    }
  };
}

const user1 = createUser("Ankit", 22);
const user2 = createUser("Ravi", 25);

user1.sayHello(); // Hello, my name is Ankit and I'm 22 years old.
user2.sayHello();