//  #########   IF Statement  #########

// if(condition){} => if statement run ,when condition will be true 

if(true){
   console.log("Jay Shree Ram"); 
}

let temp = 40;

// if(condition){}else{} => here when the condition will be true than the code  that is writen inside the if statement will be executed otherwise else statement will execute

if(temp ===40){
    console.log("less than 50"); 
}else{
    console.log("tempis greater than 50"); 
}

//+++++++++++++++   If statement Shorthand =>

    const balance =1000;
    //if(condition) statement ;   when we use shorthand ,we have to  insure the code will be in a single line although we can can write statement in multiple line by seperating by comma but it is not a good practice 

     if (balance >600) console.log("test");

     if(balance>800) console.log("test"),console.log("test2");
     
// ############  if else-if statement #############

   // when we want to check multiple condition and want to execution accordind to its different condition then we use if else if statement
   //  it will first check if condition (even if it is true or false ) then else if condition will be check ,

   if(balance<500){
    console.log("less than 500");  
   }
   else if( balance<750){
       console.log("less than 750"); 
   }
   else if(balance <950){
       console.log("less than 950");
    }
     

    const userLoggedIn = true;
    const debitCard = true;
    const loggedInFromGoogle = false;
    const loggedInFromEmail = true;


// if (condition1 && condition2) statement;  =>  here statement will execute when both condition will be true 

// if (condition1 || condition2) statement;  =>  here statement will execute ,if  one or both will be true

if (userLoggedIn && debitCard){
    console.log("Allow to buy cource");
}

if(loggedInFromEmail|| loggedInFromGoogle){
    console.log("user logged in ");
    
}