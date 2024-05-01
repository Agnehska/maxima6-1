let root = document.querySelector('.root');
function makeList(a, b){
  let newList = [];
  for (let i = a; i<=b; i++){
    let el = (i % 15 === 0) ? 'FizzBuzz' : 
                      (i % 3 === 0) ? 'Fizz' :
                      (i % 5 === 0) ? 'Buzz' : String(i);
    newList.push(el);
  }
  console.log(newList);

  // let elem = document.createElement('p');
  // elem.innerHTML = newList.map(item => String(item))
  // root.append(elem);
  return newList;
}
// makeList(1, 100);
export default makeList;