// this = reference to the object where this is used
//          (the object depends on the immediate context)
//          person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "Hamburger",
    sayHello: function () { console.log(`Hi, I'm ${this.name}`) }, // = person.name
    eat: function () { console.log(`${this.name} is eating ${this.favFood}`) },
}

const person2 = {
    name: "Patrick",
    favFood: "Pizza",
    sayHello: () => { console.log(`Hi, I'm ${(window as unknown as { favFood: string }).favFood}`) },
    eat: function () { console.log(`${this.name} is eating ${this.favFood}`) },
}

person1.eat();
person2.eat();
console.log(this);
person2.sayHello(); //window don't have favFood attribute
