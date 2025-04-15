
const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((items)=>(items+10));
console.log(newNums);

// using forEach method

newNums2 =[];

myNums.forEach((item)=>{
    newNums2.push(item+10);
})
console.log(newNums2);


// *****************  method chaining  *********************

newNums3=myNums
               .map((items)=>(items*10))
               .map((items)=>(items+4))
               .filter((items)=>{
                return items >=40
               })
console.log(newNums3);

