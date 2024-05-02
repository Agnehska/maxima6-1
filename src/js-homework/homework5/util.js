export function makeList(a, b) {
  let newList = [];

  for (let i = a; i <= b; i++) {
    let el =
      i % 15 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : String(i);
    newList.push(el);
  }

  return newList;
}
