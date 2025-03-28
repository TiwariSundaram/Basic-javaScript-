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

