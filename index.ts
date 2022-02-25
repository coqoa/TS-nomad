class Human{
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const rehiu = new Human("rehiu", 31, "female")


const sayHI = ( person: Human):string => {
    return `Hello ${person.name}, yot are ${person.age}, you are a ${person.gender}`
}

console.log(sayHI(rehiu))

export{};