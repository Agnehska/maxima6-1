// Generics
// 1. Псевдонимы типов с обобщением
type Container<T> = {
    value: T;
}

const stringContainer: Container<string> = { value: "Hello" };
const numberContainer: Container<number> = { value: 10 };

// 2. Интерфейсы с обобщениями
interface Pair<T, U> {
    first: T;
    second: U;
}

const pair: Pair<number, string> = { first: 10, second: "Hello" };

// 3. Функции с обобщениями
function echo<T>(item: T): T {
    return item;
}

console.log(echo<string>("Hello"));
console.log(echo<number>(10));

// Generic Constraints - ограничения. Только подтип определенного типа
interface IUser {
    name: string;
}

function logName<T extends IUser>(value: T): void {
    console.log(value.name);
}

logName<IUser>({ name: "John" });
logName<{ name: string; id: number }>({ name: "John", id: 10 });

// по умолчанию IUser
// function logName<T extends IUser = IUser>(value: T): void {
//     console.log(value.name);
// }

// Условные типы
interface IUser {
    name: string;
}

type IPerson<T> = T extends IUser ? IUser : null;

function logName<T extends IUser = IPerson<IUser>, U = string>(value: T, str: U): void {
    console.log(value.name + str);
}

logName({ name: "", id: 1 }, "Rus");

// Дискриминантное объединение - общее свойство (дискриминант)
interface INews {
    type: "news";
    title: string;
    urlNews: string;
}

interface IArticle {
    type: "article";
    title: string;
    urlArticle: string;
}

type ContentType = INews | IArticle;

const getImageUrl = (item: ContentType) => {
    return item.urlNews;
}

// Нужна обязательно проверка
const getImageUrl = (item: ContentType) => {
    if (item.type === "news") {
        return item.urlNews;
    }
    return item.urlArticle;
}

// Type assertions - когда уверены в типе, но тайпскрипт не знает об этом - осторожность
const getImageUrl = (item: ContentType) => {
    return (item as INews).urlNews;
}

// Type guards - помогают с узить. В условных выражениях используются if-else switch-case
export const formatTimeAgo = (dateString: string | null) => {
    if (!dateString) return "";
    if (typeof dateString !== "string") return ""; // аналогично строке 90

    const date = new Date(dateString);
    // и преобразование дальше

    // свойство в объекте
}

// keyof, lookup types, mapped types
export interface IUser {
    name: string;
    age: number;
    address: string;
}

type Keys = keyof IUser;
const key: Keys = "name";
const key1: Keys = "surname"; // mistake

// MappedTypes - новый тип на основе интерфейса, добавили readonly
type ReadonlyUser = { readonly [K in keyof IUser]: IUser[K] };

let readonlyUser: ReadonlyUser = {
    name: "John",
    age: 20,
    address: "Moscow"
}

// const user: ReadonlyUser

// - минус используем
type ReadonlyUser1 = { -readonly [K in keyof IUser]?: string };

// Lookup types - отдельный интерфейс
type NameType = IUser["name"];


// Утилитарные типы
// Readonly 
type ReadonlyNews = Readonly<INews>;
news.author = "";

// Partial - опциональные поля
type PartialNews = Partial<INews>;

// Required - обязательные поля
type RequiredNews = Required<INews>;

// Pick
type PickNews = Pick<INews, "title" | "urlNews">;

// Record
type RecordNews = Record<'author', string>;

// Omit
type OmitNews = Omit<INews, "title" | "urlNews">;

// Exclude, Extract, Omit, NonNullable, NonOptional, PickByValue,
// OmitByValue, PickByType, OmitByType, ReturnType, InstanceType, ThisType, ExactType

// Массивоподобные типы
// readonly - ReadonlyArray<string>, ReadonlyMap<string, number>, ReadonlySet<string>, ReadonlyTuple<string, number>
