// ##########################       Array    ##################

// JavaScript arrays are resizable and can contain a mix of different data types. 
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes

const myArray =[1,2,4,5,'sbs',7.9];

const myHeroes =["shaktiman","ironman"];

const myArray2= new Array(1,2,3,4);

console.log(myArray[1]);

// ####################  Array Method ###############

//  1.   .push(number)  => this method add number in the array from last

myArray.push(7);
myArray.push(8);

console.log(myArray);


// 2.  .pop()  => this method delete last value from  array

myArray.pop();
myArray.pop();

console.log(myArray);

// 3.  .unshift(number) => it use for adding number in the array from start

myArray.unshift(-1);
myArray.unshift(-2);

console.log(myArray);

// 4. .shift() => this method delete starting value from  array

myArray.shift();
myArray.shift();

console.log(myArray);

// 5. .includes(number) => this method check the number is present in array or not ;it gives boolean value

console.log(myArray.includes(6));

// 6. .indexOf(number) => this method return the index of the number in the array if number is present in array,else return -1

console.log(myArray.indexOf(4));

// 7.  .join() => this method convert the array into string

const newArr =myArray.join();

console.log(myArray);
console.log(newArr);
console.log(typeof newArr);

// 8. .slice() => gives the copies aportion of an array

let color=["red", "blue","yellow","orange","pink","white"];

console.log(color.slice());

// .slice(number) => if we pass a single number then it considerd as a starting index value , then it gives the copy from starting index value to end of array, if the given index value not exist in array then it gives empty array

console.log( ".slice(2) ," +color.slice(2));
console.log(".slice(12) ," +color.slice(12));


// .slice( starting index ,end index) => it return the copy from starting index to (ending index -1), here ending index value not includes

console.log(".slice(2,4); "+color.slice(2,4));

// .slice(-number) => if the passing number is negative then also it considered as starting value but from last 

console.log("After .slice (-3) => "+color.slice(-3));

// 9. .splice(start index,deleteCount,item0....itemN) =>  it changes in original array 

    // slice: it removes /replace/add element in place

    // deleteCount tell how many element will be deleted from the starting index . deleteCount is optional ,if i want to no element delete then we can  set value 0

    // we can add item0  to itemN from the starting index or we can say that it replace the deleted value
 
// when only starting index is being pass then it remove all the index element from the starting index to till end of array 

    console.log("color = "+color.slice());
    
    console.log(".splice(starting index) "+(color.splice(3)));

    console.log("after .splice(3) =>"+ color);
    
// when two number pass then first is considered as starting index and 2nd is deleteCount
   
    console.log(".splice(starting Index,deleteCount) =>"+color.splice(0,1));

    console.log( " after .splice(0,1) => "+color);

// when pass stating index ,deletecount and items then deleted element will replaced by items 

    console.log(".splice(start index,deleteCount,item0....itemN) =>"+color.splice(0,1,"black","grey"));

    console.log("After .splice(0,1,'black','grey') " +color);
    
// when we only add the element from the starting index then we have to se deleteCount value o for example if we want to add teal and brown color in index 1 the we can set starting index 1, deleteCount 0, and elements , here element of 1st index will comes after this items

    console.log(color.splice(1,0,"teal","brown"));
    
    
    
    