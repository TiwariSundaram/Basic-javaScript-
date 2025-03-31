// ####################  Functions  ######################

function sayMyName (){
    console.log("S");
    console.log("u");
    console.log("n");
    console.log("d");
    console.log("a");
    console.log("r");
    console.log("a");
    console.log("m");   
}
sayMyName();

function addTwoNum(num1,num2){
    console.log(num1 + num2);
    };

addTwoNum(2,3);

// result value is undefined because above function do not return any value
const result = addTwoNum(2,3);

function addTwoNum(num1,num2){

    // let result =num1+num2;
    // console.log(num1 + num2);
    // return result
    return num1+num2;
    };
    result = addTwoNum(8,4);
    console.log("result"+result);


function loginUserMessage(userName = "Tiwari"){
    return `${userName} just logged in`
}
console.log(loginUserMessage("Sundaram"));


// rest operator   ...

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,234,847));


//****************  ########### object as arguments   ###########

const user ={
    userName: "Sundaram",
    price : 99
};

function handleObject (anyObject){
    console.log(` Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObject(user);    or

handleObject({
    userName:"Sundaram",
    price : 999
})

// ######################  Array as arguments  ################

const myNewArray =[2 ,23,432,43,32];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));    or

console.log(returnSecondValue([34,24,56,21]));

