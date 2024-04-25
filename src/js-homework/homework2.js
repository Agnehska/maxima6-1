// function countSquares(cuts){
//     let n = cuts + 1 ;
//     if ( cuts === 0){
//       return 1
//     } 
//     return 2*n**2 + (n**2 - n*2)*2 + 2*(n-2)**2
// }
// console.log(countSquares(1));

// -----------------
// function oddCount(n){
//     let count = 0;
//     for (let i = 1; i < n; i += 1) {
//         if (i % 2 !== 0) {
//         count++
//         }
//     }
//     return count
// }
// console.log(oddCount(64));

//---------------------
// function evenOrOdd(number) {
//     if (number % 2 !== 0){
//       return "Odd"
//     }
//     return "Even"
// }
// console.log(evenOrOdd(-7));

//-----------------------------------
// function multiply(number){
//     let l = String(Math.abs(number)).length;
//     return number*5**l
//   }

//-----------------------------
// function monkeyCount(n) {
//     let arr = [];
//     for (let i=1; i<=n; i++){
//       arr.push(i)
//     }
//     return arr
//   }

//---------------------------
// task 1
// let n1 = Math.floor(Math.random()*255);
// let n2 = Math.floor(Math.random()*255);
// let n3 = Math.floor(Math.random()*255);
// let n4 = Math.floor(Math.random()*255).toFixed(2);
// console.log(`rgba(${n1}, ${n2}, ${n3}, ${n4})`);

//---------------------------
//task 2
// let n = Math.floor(Math.random()*(2592000000 - 86400000) + 86400000);
// console.log(`${n} мс - ${Math.floor(n/86400000)} д ${Math.floor(n%86400/3600000)} ч ${Math.floor(n%3600/60000)} мин ${Math.floor(n%60/1000)} сек ${Math.floor(n%1000)} мс`);

//----------------------
// task 3
let n1 = Math.floor(Math.random()*(-200)+100);
let n2 = Math.floor(Math.random()*(-200)+100);
let n3 = Math.floor(Math.random()*(-200)+100);
if (n1 <=n2 && n2 < n3){
    console.log(`Наибольшее число: ${n1} \nНаименьшее число: ${n3}`);
} else if (n2 <=n1 && n1 < n3){
    console.log(`Наибольшее число: ${n2} \nНаименьшее число: ${n3}`);
}else if (n3 <=n1 && n1 < n2){
    console.log(`Наибольшее число: ${n3} \nНаименьшее число: ${n2}`);
}else if (n3 <=n2 && n2 < n1){
    console.log(`Наибольшее число: ${n3} \nНаименьшее число: ${n1}`);
}else if (n1 <=n3 && n3 < n2){
    console.log(`Наибольшее число: ${n3} \nНаименьшее число: ${n1}`);
} else {
    console.log(`Наибольшее число: ${n2} \nНаименьшее число: ${n1}`);
}
console.log(n1, n2, n3);