// Number
const num1: number = 1;

// String
let str1: string = "string";

// Boolean
const bool1: boolean = true;

// Symbol
const sym1: symbol = Symbol('key');

// Null
const empty: null = null;

// Undefined
const undef: undefined = undefined;

// BigInt
// const bigInt1: bigint = 10000000n;

console.log(str1);

str1 = "5";

// Void (Не возвращает значение)
const check = (a: number): void => {
    console.log(a);
}

check(5);

const check1 = (a: number): number => {
    return 5 * 2;
}

// Never (Никогда не возвращает значение) - нет значения, выбрасывает ошибку или вечный цикл
const throwError = (message: string): never => {
    throw new Error(message);
}

// Unknown (Неизвестно что возвращает, требуется проверка)
// const response: unknown = await fetch('');

// Any (Любой тип, не требуется проверка)
// const response2: any = await fetch('');