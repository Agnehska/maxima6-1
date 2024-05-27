// Расширение интерфейсов, для создания новых интерфейсов
interface IUser {
    name: string;
    age: number;
    // [key: string]: string; - для расширения интерфейсов - для динамического добавления - индексные типы
}

interface IAdmin extends IUser {
    isAdmin: boolean;
}

const admin: IAdmin = {
    name: 'John',
    age: 30,
    isAdmin: true,
}

class Admin implements IAdmin { // через запятую можем ещё добавлять интерфейсы
    name: string;
    age: number;
    isAdmin: boolean;

    constructor(name: string, age: number, isAdmin: boolean) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }

    getName() {
        console.log(this.name);
    }
}