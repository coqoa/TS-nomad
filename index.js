"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const rehiu = new Human("rehiu", 31, "female");
const sayHI = (person) => {
    return `Hello ${person.name}, yot are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHI(rehiu));
//# sourceMappingURL=index.js.map