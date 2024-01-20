const staus = true;
console.log('task 1');
//promice define 
const promisePractice = new Promise(function(resolve,reject) {
   setTimeout(function(){
    if (staus) {
        resolve('task 2');
    }else{
        console.log('faild');
    }
   }, 2000); 
});

console.log('task 3');
//promice call
promisePractice
    .then(function(value){
        console.log(value);
    })
    .catch(function(error) {
        console.log(error);
    })
