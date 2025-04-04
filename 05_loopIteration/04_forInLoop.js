// ###############  FOR  IN LOOP ###############



// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


const myObject ={
    js:"javaScript",
    py:"python",
    rb:"ruby",
    cpp:"c++"
}

for (const key in myObject) {
   console.log(`${kay} shortcut is for ${myObject[key]}`);
}

const arr =[ "js", "py", "c++", "c"]

for (const key in object) {
    // here in key => index value
    //  console.log(key);
    
    console.log(arr[key]);   
}