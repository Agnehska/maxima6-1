// Классы
class Person {
    public name: string; // доступно везде, по дефолту
    private age: number; // доступно только в классе
    protected address: string; // свойства и методы доступны в классе, где определены, а также в наследниках
    readonly city: string; // могут быть прочитаны, но не могут быть изменены

    constructor(name: string, age: number, address: string, city: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.city = city;
    }

    public getGreeting(): string {
        return `Hello, my name is ${this.name}`;
    }

    private getPrivateData(): string {
        return `This is private data: ${this.age}`;
    }

    protected getProtectedData(): string {
        this.getPrivateData();
        // this.age;
        // this.city = "London"; // никак не можем переделать
        return `This is protected data: ${this.address}`;
    }
}

const john = new Person('John', 30, '123 street', 'Moscow');

console.log(john.name);
console.log(john.getGreeting());

console.log(john.age);
console.log(getPrivateData());

console.log(john.address);
console.log(john.protectedData);