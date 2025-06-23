

// Creating a Promise:

// A Promise is created using the Promise constructor, which takes an "executor" function as an argument. This executor function receives two arguments: resolve and reject, which are functions used to change the state of the Promise.


// Consuming a Promise:
// The then() and catch() methods are used to consume the result of a Promise

// .then(callback function) => when the callback function executed when the promise is filfilled, receiving the resolve value

// catch(callback function) => This is a shorthand for .then(null, onRejected) and is commonly used for error handling. whn A callback function executed when the Promise is rejected, receiving the rejection reason 



const promisesOne = new Promise(function(resolve,reject){
    setTimeOut(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})


promisesOne.then(function(){
    console.log("Promises complete");
    
})
//  resolve() connected with .then(callback)  => 

    new Promise(function(resolve,reject){

        setTimeout(()=>{
            console.log("Asynk task 2 complete");
            resolve()
        },1000)
    }).then(function (){
        console.log("promise complete");
   
    })


    const promiseThree = new Promise(function(resolve,reject){

        setTimeout(function(){

            console.log("Asyns task 3 completed");
            resolve({ username:"Sundaram", password:123})
        },1000)
    })
    promiseThree.then(function(user){
        console.log(user)
    })

    const promiseFour = new Promise(function(resolve,reject){

        setTimeOut(function(){
            let error = true
            if(!error){
                resolve({userName:"Sundaram",password:123})
            }else{
                reject("ERROR OCCUR")
            }
        },1001)
    })


    promiseFour.then(function(user){
        console.log(user)
        return user.userName
    })
    .then(function(username){
        console.log(username); 
    })
    .catch(function(error){
        console.log(error);   
    })   
    .finally(()=>{
        console.log("promiseFour either resolve or rejected");
        
    })
    
    const promiseFive = new Promise(function(resolve,reject){

        setTimeOut(function(){
            let error = true
            if(!error){
                resolve({userName:"Hanuman",password:123})
            }else{
                reject("ERROR OCCUR")
            }
        },1001)
    })

    // When a Promise is resolved, await returns its resolved value. If the Promise is rejected, await throws an error, which can be caught using a try...catch block. 
// await keyword =>
          // The await keyword can only be used inside an async function 


    async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(response);
            
        } catch (error) {
            
        }
    }
   consumePromiseFive()