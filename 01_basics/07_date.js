// ################  Date  #####################

let myDate =new Date();


// it is a object
console.log(typeof myDate);


// 2025-03-27T14:44:55.851Z
console.log(myDate);

// Thu Mar 27 2025 14:44:55 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toString());

// Thu Mar 27 2025
console.log(myDate.toDateString());

// 2025-03-27T14:44:55.851Z
console.log(myDate.toJSON());

// 3/27/2025
console.log(myDate.toLocaleDateString());

// 3/27/2025, 2:44:55 PM
console.log(myDate.toLocaleString());



let myCreateDate = new Date("01-14-2023");

// 1/14/2023, 12:00:00 AM
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreateDate.getTime());

// it always calculate in ms so convert m.s.  in second we devide the value by 1000
console.log(Math.floor(Date.now()/1000));


let newDate =new Date();

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('defailt',{
    weekday:"long",
})