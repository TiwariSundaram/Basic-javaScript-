

// JavaScript is a dynamically typed language, meaning the type of a variable is determined during runtime, not at compile time, and there is not need to mention variable dataType as compare to java,c,c++ like languages

// typeScript is a statically typed language





// there are two type dataType =>   1.Premitive Data Type  2. Non-Primitive Data Type

// **************   Premitive DataType******************  (it's is a call by Value )

// there are 7 type of Premitive dataType 
// 1.String 2. Boolean  3.Number 4.null  5.undefined 6.Symbol 7.BigInt


const id=Symbol('123');
const anotherId=Symbol("123");
// false
console.log(id===anotherId);


const bigNumber=846373672373268322837632;


// *******************************  Non-Primitive Data Type****************(it' a call by reference)

//  1.Array  

const heroes=["shaktiman","ironman","God"];

// 2. Objects 

const detail={
    name:"Sundaram",
    age:21,
} 
//  3. Function

const myFunction=function(){
    console.log("Jay Shree Ram");
    
}






// ****************************Type of val	Result**************


//      Undefined	=>   "undefined"
//        Null      =>  	"object"
//       Boolean    =>  "boolean"
//        Number    =>    "number"
//      String      =>	"string"
//      Object  (native and does not implement [[Call]])	  =>   "object"
//      Object (native or host and does implement [[Call]])   =>     	"function"
//     Object (host and does not implement [[Call]])	      => Implementation-defined except may not be "undefined", "boolean", "number", or "string".