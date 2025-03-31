// ###########  SCOPE  ################3

// there are two type of scope  1. block scope   2. global scope

var c = 300;

if(true){
    let a=3
    const b =432
    var c= 32
}
// here a and b will not print because they are assign in block scope , they give error variable not identify
   // console.log(a);
   // console.log(b);

//    here value of c is changed due to var keyword that is assign in block scope
console.log(c);

let a = 7463;
let d =98
if(true){
    let a =948;
    let b =d;

    console.log("inner value of a"+ a);
    
    // here value of d will be accessed from the global scope , we can access any value in block scope from global scope while we can't access value in global scope from block scope
    console.log(b);
}
// here value of a is print 7463 
console.log("outer value of a"+ a);

// ########### Nested Scope ##########

function one(){
    const username ="Sundaram"

    function  two(){

        const website = "youtube"

        // value can be access from the parent /global scope  in child /block scope
        console.log(username); 
    }
    // value can't be access from the child /block scope  in parent /global scope
    // console.log(website);
    two();
}
one();

if(true){
    const username="Sundaram"
    if(username==="Sundaram"){
        const website ="youtube"
        console.log(username + website);
    }
    //  console.log(website);
 }
// console.log(username);


// +++++++++++++++++++++  Hoisting  ++++++++++++++++++
    // In JavaScript, a variable can be declared after it has been used.

    addOneNum();

    function addOneNum(num){
        return num+1;
    }

    // addTwo(9);
// this five me error  (cannot access "addTwo" before initialization) 
    const addTwo = function(){
        return num+2;
    }