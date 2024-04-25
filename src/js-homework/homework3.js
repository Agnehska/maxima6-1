// function possiblyPerfect(key, answers) {
//   let ans = 0,
//     keys = 0;
//   for (let i = 0; i < key.length; i++) {
//     if (key[i] === "_") {
//       keys += 1;
//       continue;
//     }
//     if (key[i] === answers[i]) {
//       ans += 1;
//     }
//   }
//   return ans + keys === key.length || keys === key.length || ans === 0;
// }

// console.log(possiblyPerfect([..."_TTT"], [..."TTTT"]));

//-------------------

// function removeSmallest(numbers) {
//   let min = Math.min(...numbers)
//   let elem = numbers.indexOf(min)
//   return [...numbers.slice(0, elem),...numbers.slice( elem+1, numbers.length)]
// }
// console.log(removeSmallest([2, 2, 1, 2, 1]))

//_____________

// function likeOrDislike(buttons) {
//   let output = "Nothing";
//   buttons.forEach((value) => {
//     if (output === "Nothing") {
//       output = value;
//     } else if (
//       (output === "Like" && value === "Like") ||
//       (output === "Dislike" && value === "Dislike")
//     ) {
//       output = "Nothing";
//     } else {
//       output = value;
//     }
//   });
//   return output;
// }
// console.log(likeOrDislike(['Like','Like']));

//Задано случайное целое число от 2 до 30. Написать цикл, который вычисляет факториал заданного числа.
// let num = Math.floor(Math.random() * (30 - 2) + 2);
// let fact = 1;
// for (let i=1; i<=num; i++){
//   fact *= i
// }
// console.log(fact);

//  Вите 10 лет и он мечтает о велосипеде за 60 тыс. руб. 
// Каждый день рождения мама дарит Вите 1000 руб, а папа, на 1200 руб больше, 
// чем в прошлом году (начиная с 11 лет). Через сколько лет у Вити появится велосипед?
// let sum = 0;
// let years = 0;
// let dad = 0;
// while (sum < 60000){
//   sum += 1000 + dad;
//   dad += 1200;
//   years++;
// }
// console.log(years);