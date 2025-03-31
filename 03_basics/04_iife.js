// Immediately Invoke Function Expression (IIFE)

(function chai(){
    console.log("jay Shree Ram");
    
}) ();

// here we use (function) (); for immediately invoke here no need to call function , here we have to gave (;)  just after end of the immediately invoke
// chai();

(()=>{
    console.log("jay mahakal")
}) ();

// passing arguments


// named iife => when there are function name 
(function chai(name){
    console.log(`hell0 ${name}`); 
}) ("Sundaram");

// here we pass argument in immediately invoke FE (argument);
// (function)(argument);
// chai(name);


// unnamed iife
((name)=>{
    console.log(`hell0 ${name}`); 
}) ("Sundaram");
