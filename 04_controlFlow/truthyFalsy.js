

// falsy values =>

     //    false , 0 ,-0 , BigInt 0n ,"" ,null ,undefined , NaN

// truthy value =>

    // "0" , 'false' ," " ,  [] ,{} ,function (){}    etc.


// false == 0  => true
// false == "" => true


// Nullish Coalescing Operator (??) : null undefined  =>

    // The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

    let val1;

    // 5
    val1 = 5 ?? 10

    // 10
    val1 = null ?? 10;

    // 15 
    val1 = undefined ?? 15

    // 12
    val1 = null ?? 12 ?? 13


 // ######### Terniary Operator  #############
 
//  (condition) ? statement1 : statement2  =>  if condition will true then statement 1 will be execute otherwise statement 2 will be execute
 
const icePrice =70;

(icePrice <= 50) ? console.log("Less than 50"): console.log("more than 50");


  

