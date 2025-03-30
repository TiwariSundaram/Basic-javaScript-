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
