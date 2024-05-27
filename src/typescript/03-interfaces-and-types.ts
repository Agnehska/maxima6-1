// Интерфейсы
interface IUser {
    name: string;
    age: number;
    isAdmin: boolean;
    address: {
        city: string;
        street: string;
        house: number;
    }
}

let vasya: IUser = {
    name: 'Вася',
    age: 25,
    isAdmin: true,
    address: {
        city: 'Москва',
        street: 'Ленинский проспект',
        house: 12
    }
}

// Типы и алиасы типов
type Category = string | number;

// Объединение типов:
type ICategory = string | number | null;

// Пересечение типов
type IUserCategory = IUser & { category: Category } & { description: string };

let petya: IUserCategory = {
    name: 'Петя',
    age: 25,
    isAdmin: true,
    address: {
        city: 'Москва',
        street: 'Ленинский проспект',
        house: 12
    },
    category: '123',
    description: '123'
}

// Запросы типов
const news = {
    author: 'Andrei',
    category: ["all"],
    description: "Typescript",
    id: 1,
    image: null,
    language: "ru",
    published: "yes",
    title: "Typescript",
    url: ""
}

type NewsType = typeof news;

let myNews: NewsType = {
    author: 'Andrei',
    category: ["all"],
    description: "Typescript",
    id: 1,
    image: null,
    language: "ru",
    published: "yes",
    title: "Typescript",
    url: ""
}

type NewsType1 = {
    author: string;
    category: CategoriesType[];
    description: string;
    id: number;
    image: null;
    language: string;
    published: string;
    title: string;
    url: string;
}

let myNews1: NewsType1 = {
    author: 'Andrei',
    category: ["typescript", "javascript", "php", "java", "c++", "c#"],
    description: "Typescript",
    id: 1,
    image: null,
    language: "ru",
    published: "yes",
    title: "Typescript",
    url: ""

}

// Литеральные типы (строковые, числовые, булевые)
export type CategoriesType =
    | "all"
    | "javascript"
    | "typescript"
    | "php"
    | "java"
    | "c++"
    | "c#"

// Типизация объектов
interface DateTimeFormatOptions {
    weekday?: 'narrow' | 'short' | 'long';
    year?: 'numeric' | '2-digit';
    month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
    day?: 'numeric' | '2-digit';
    hour?: 'numeric' | '2-digit';
    minute?: 'numeric' | '2-digit';
    second?: 'numeric' | '2-digit';
    hour12: boolean;
    timeZone?: string;
    timeZoneName?: 'short' | 'long';
}

// export const formatDate = (date: Date): string => {
//     const options: DateTimeFormatOptions = {
//         weekday: 'long',
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//     }

//     return date.toLocaleDateString('en-US', options);
// }

// Intl.DateTimeFormatOptions из библиотеки

export const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour12: true,
    }

    return date.toLocaleDateString('en-US', options);
}