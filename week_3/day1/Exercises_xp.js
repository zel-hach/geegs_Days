///////////////////////////////////////////////////////////////////// Exercice1 //////////////////////////////////////////////////////////////////

function compareToTen(num){
    return(new Promise((resolve,reject)=>{
        if(num <= 10)
            resolve("the argument is less than or equal to 10");
        else
            reject("argument is greater than 10")
    })
)
}
compareToTen(15).then(result => console.log(result)).catch(error => console.log(error))

///////////////////////////////////////////////////////////////////// Exercice2 //////////////////////////////////////////////////////////////////

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("succes");
    },4000) 
})

promise.then(result => {
  console.log(result);
});
///////////////////////////////////////////////////////////////////// Exercice3 //////////////////////////////////////////////////////////////////


const resolvedPromise = Promise.resolve(3);

resolvedPromise.then(result => {
  console.log(result);
});

const rejectedPromise = Promise.reject("Boo!");

rejectedPromise.catch(result =>{
    console.log(result);
})