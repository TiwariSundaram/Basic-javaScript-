// ####  FOR EACH method ######


// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// syntax
/* array.forEach(element => {
    
});*/


const coding =["js", "py", "c++", "c"]

coding.forEach(function (codingValues){
    console.log(codingValues);  
});

coding.forEach((value)=>{
   console.log(value);
   
})

// we can direct pass the reference of function
function printMe(items){
    console.log(items);
}

coding.forEach(printMe);


// here we can also access index value and all the arr of the item
coding.forEach((item,index , arr)=>{
     console.log(item,index,arr);
     
})


// iteration when object inside the array

const myCoding =[ 
    {
    language:"java",
    languageFileName :"java",
    },
    {
        language:"python",
        languageFileName :"py",
    },
    {
        language:"javaScript",
        languageFileName :"js",
    }
]

myCoding.forEach((items)=>{
    console.log(items.languageFileName);
    
})