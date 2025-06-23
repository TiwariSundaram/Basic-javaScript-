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