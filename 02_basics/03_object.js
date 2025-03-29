// ##################   #########  Objects  ##########  ###################

// singleton
// object Literals =>  

    //  It is a syntax for creating an object in JavaScript that is composed of key-value pairs.
    // Object literals are one of the most commonly used data structures in JavaScript
    // Object literals are one of the most commonly used data structures in JavaScript

    // to add symbol in object key then we use [key] 

    const mySyl = Symbol("Key1");
    const details ={
        name: "Sundaram",
        "fullName": "Sundaram Tiwari",
        age : 21,
        location : "Lucknow",
        [mySyl]:"@",
        lastLoginDate : ["Monday","Thursday"]
    }

    // to access object key value we can access like this
    // 1.
    console.log(details.name);
    // 2. by this object[key] method we can access symbol and like that key which is write in "key" 
    console.log(details["age"]);
    console.log(details["fullName"]);
    console.log(details["symbol"]);
    console.log(typeof details["symbol"]);
    
    
    
// to change key value we can write objectName.key="newValue of key"
 
    details.age = 22;

    console.log(details);
    
// Object.freeze(objectName) => if i want to nobody can change the objects key value than we can use  Object.freeze(objectName) method

    // Object.freeze(details);
    // it can't be change due to freeze
    // details.age = 22;


// function adding in object
  
    details.greeting = function(){
        console.log("Jay Shree Ram");
    }
    // gives only function references 
    // output  =>  function (anonymous)
    console.log(details.greeting);
    
    // it gives the greeting value that in object
    console.log(details.greeting());
    

    // here we use this keyword that access the key value from the details objects
    details.greetingTwo = function (){
        console.log(`Hello mr. ${this.name}`);
    }

    console.log(details.greetingTwo());
    