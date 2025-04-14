const coding =["js" ,"ruby", "java","python","cpp"];

//  .forEach(item)=> do not return anything

const value = coding.forEach((items)=>{
    // console.log(items);
    return items;
})
// undefined  => output here due to .forEach() do not return anything
console.log(value);

// .filter(callback function)  => 
       // it is similar to .forEach() but here it can return value that satisfy the condition , in filter()  value is return based on the condition 
      // for example in below code value is return those are greater than 4 


   const myNums =[1,2,3,4,5,6,7,8,9,10];

   const newNums = myNums.filter((items)=>{
       return items > 4
   })

   console.log(newNums);
   
//    or
   
    const newNums2 = myNums.filter((num)=>(num>4));

    console.log(newNums2);
    

// if we want to do same but using forEach() then

const newNums3 =[];

myNums.forEach((items)=>{
      if (items >4){
        newNums3.push(items);
      }
})

console.log(newNums3);

// #########  real word use of filter

const book =[ 
    
    { titel:'Book One',genre:'finction',publish:1981,edition:2004},
    { titel:'Book Two',genre:'Non-Fiction',publish:1992,edition:2008},
    { titel:'Book Three',genre:'History',publish:1999,edition:2007},
    { titel:'Book Four',genre:'Non-Fiction',publish:1989,edition:2012},
    { titel:'Book Five',genre:'Science',publish:1994,edition:2005},
    { titel:'Book six',genre:'History',publish:1991,edition:2010}
];

const historyBook = book.filter((bk) => (bk.genre ==='History'));

console.log(historyBook);

const userBook = book.filter((bk) => { 
    return (bk.publish >=1900) && (bk.genre ==='History')});

console.log(userBook);
