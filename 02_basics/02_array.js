// #######################  Array Method ########################

    const marvel_heros = ["thor", "Ironman", "spiderman"];
    const dc_heros =["Superman", "flsh", "batman"];

//  10.  Array1.concat(Array2) => this method add/combined to array , it return the new array

   const allHeros = marvel_heros.concat(dc_heros);
   console.log(allHeros);
   
    // another method for combined to array by using spread operator 
    // 10.1     [...Array1 , ...Array2 , ...Array3 , ...ArrayN]  
   
    const all_heros = [...marvel_heros , ...dc_heros];

 // 11. .flat(arrayDepth/infinity) =>  
 
    // it is work on nested array
    // The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
    // A new array with the sub-array elements concatenated into it.
    // this method convert nested array into sub array

    const number =[1,2,3,4,[5,6],8,[7,9,14]];

    const new_number = number.flat(Infinity);

    console.log(new_number);
   
// 12. Array.isArray("element") => Array.isArray() checks if the passed value/element is an Array. it return boolean value

    console.log(Array.isArray("Sundaram"));
 
// 13.  Array.from("value") => this method convert the value in new array 

   console.log(Array.from("Sundaram"));
   
// 14. Array.of(variable1/element1 ,variable2/element2, variable3/element3)   =>

    //    The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

    let score1 =100;
    let score2 = 200;
    let score3 = 300;

    console.log(Array.of(score1,score2,score3));
    


    
     
    