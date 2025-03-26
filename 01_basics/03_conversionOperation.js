// -------------------number-------------------

let score = 33;

console.log(typeof score);
console.log(typeof (score));



// -------------------------string-------------------------

let marks = "33";

console.log(typeof marks);
console.log(typeof (marks));

// string => number        conversion
let marksValue =Number(marks);

console.log(typeof marksValue);






let string = "33abc";
let stringValue=Number(string);

console.log(typeof stringValue);
// stringValue => NaN     after converting in this type string  in  number its type is Number but value is NaN
console.log(stringValue);





// -----------------null is object----------------------- 
let rollNo=null;

console.log(typeof rollNo);

let rollNoValue=Number(rollNo);
console.log(typeof rollNoValue);

// when we convert null value in number , its value 0 although type be number
console.log(rollNoValue);




/*  33=>33
    "33abc" => NaN
    true => 1,    false => 0;   

*/

// --------------number => boolean------------------->

let number=646;
let numberValue=Boolean(number);

console.log(typeof numberValue);
console.log(numberValue);


 /*   1=> true  ;  0 => false
    ""= false  ; " Sundaram" => true
*/

// **************************operations**************************

// console.log(2+3);
// console.log(3*3);
// console.log(65-7);
// console.log(3**2);
// console.log(7/4);

let str1="Sundaram";
let str2 =" Tiwari";

let str3= str1+str2;
console.log(str3);

console.log("5"+4);
console.log(4+"5");
console.log(4+4+"7");
console.log("4"+4+7);









