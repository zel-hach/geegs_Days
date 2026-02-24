///////////////////////////////////////////////////////////////////Exercice 1 ///////////////////////////////////////////////////////////////////
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1,promise2,promise3])
.then((result)=>
    console.log(result)
).catch(error =>{
    console.log(error)
})
// Promise.all return resolve if all is resolve ,si one promises return false promise all return reject
///////////////////////////////////////////////////////////////////Exercice 1 ///////////////////////////////////////////////////////////////////


function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);///////////return=>[2,4,6]
  });