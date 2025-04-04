// #############  for of loop ############

// for (const element of object) {
    
// }

const arr = [1,2,3,4,5,6,7]

for (const newArr of arr) {
    console.log(newArr);
    
}

const greeting = "Hello world"

for (const greet of greeting) {
    console.log(greet);
    
}

// ###########  MAP  ###########

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. unique value 

const map = new Map();

map.set('IN',"INDIA")
map.set('USA',"United states of America")
map.set('Fr',"France")

console.log(map);

for (const [key,value] of map) {
    console.log(key +":-"+ value);
}

const myObject ={
    game1 : "shaktiman",
    game2 : "spiderman"
}

// object is not iterable by using for of loop ,it can be iterate using for in loop

// for (const [key,value] of myObject) {
//     console.log(key +":-"+ value);
// }