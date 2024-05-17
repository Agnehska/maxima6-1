// console.log('start')

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// console.log('end');

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

// // start 1 end 2 


// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

// // start 1 3 end 2

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log('end');

// // start 1 end 


// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')

// //start middle 1 end success


// console.log('start')

// Promise.resolve(1).then((res) => {
//   console.log(res)
// })

// Promise.resolve(2).then((res) => {
//   console.log(res)
// })

// console.log('end')

// // start end 1 2

// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// })

// Promise.resolve().then(() => {
//   console.log('resolve')
// })

// console.log('end')

// //start end resolve setTime

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

// // 1 2 4 timerStart timerEnd success

// const timer1 = setTimeout(() => {
//   console.log('timer1');
  
//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1')
//   })
// }, 0)

// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 0)

// //timer1 promise1  timer2

// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');

// //start end promise1  timer1 promise2 timer2

// В каком порядке будут выведены консоли и какие именно?
// const p = new Promise((resolve, reject) => {
//   reject(Error('Всё сломалось :('));
// })
//   .catch((error) => console.log('1-я', error.message))
//   .catch((error) => console.log('2-я', error.message));

// const p2 = new Promise((resolve, reject) => {
//   reject(Error('Всё сломалось :('));
// });
// // тут обе консоли, потому что нет цепочки, каждый catch отрабатывает отдельно
// p2.catch((error) => console.log('3-я', error.message));
// p2.catch((error) => console.log('4-я', error.message));
