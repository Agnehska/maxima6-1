// Угадай число
// Программа загадывает случайное целое число от 0 до 100 (вкл).
// При помощи prompt() пользователь старается угадать число.
// •    число угадано - программа останавливается и говорит, что пользователь выиграл
// •    число отличается на 5 пунктов (n-5 <= n <= n+5) - программа говорит "горячо"
// •    число отличается на 10 пунктов (n-10 <= n <= n+10) - программа говорит "тепло"
// •    в остальных случаях программа говорит "холодно".
// При всех вариантах, кроме первого, программа повторно продолжает спрашивать число, пока пользователь его не угадает.

let number = Math.floor(Math.random() * 100);
let answer = 102;
let tries = 6;

while (answer !== number && tries !== 0) {
  answer = +prompt("Угадай число");

  if (Math.abs(number - answer) === 0) {
    break;
  }

  if (Math.abs(number - answer) <= 5) {
    alert("Горячо!");
  } else if (Math.abs(number - answer) <= 10) {
    alert("Тепло!");
  } else {
    alert("Холодно!");
  }

  tries--;
}

if (tries === 0) {
  alert("Вы проиграли");
} else {
  alert("Вы выиграли");
}
