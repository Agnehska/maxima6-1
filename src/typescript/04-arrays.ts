import { useState } from "react";

// Типизация массивов - методоы массивов работают
type IUser = {
    name: string;
    age: number;
    isAdmin: boolean;
    address: {
        city: string;
        street: string;
        house: number;
    }
}

interface User {
    users: IUser[]; // [IUser] или Array<IUser>
}

let myUsers: User = {
    users: [
        {
            name: 'Ivan',
            age: 25,
            isAdmin: true,
            address: {
                city: 'Moscow',
                street: 'Lenina',
                house: 1
            }
        },
        {
            name: 'Petr',
            age: 30,
            isAdmin: false,
            address: {
                city: 'Moscow',
                street: 'Lenina',
                house: 2
            }
        }
    ]


// Типизация кортежа
// если props.value указан, то возьмет из него
// const [value, setValue] = useState(props.value);

// или
// const [value, setValue] = useState<string>(props.value);

// или
// value: [string, number]