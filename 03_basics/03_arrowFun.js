const user = {
    username : "Sundaram",
    price :999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessagee();
user.username="Tiwari"
user.welcomeMessagee();

console.log(this);

// function chai(){
//     let username ="Sundaram"

//     // this. username = undefined  =>  this contest work only object not function
//     console.log(this.username);
    
// }
// chai()

chai = ()=>{
    let username = "Sam"
    // here this keyword return empty {}
    console.log(this);
    
}

// Arrow function

const addTwo =(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(87,38));


// emplicite return =>  here we not need tor use return keyword it automatically return
// when we use {} in arrow function the we have to use return keyword if want to return  while when we not use {} or we use () in Arrow function then no need to write return keyword


// const addThree = (num1,num2,num3)=>num1+num2+num3
// ++++++++++ OR ++++++
const addThree = (num1,num2,num3)=>( num1+num2+num3)


const returnObject = (num1,num2,num3)=>({username:"tesla"})

console.log(addThree(8,4,3));

console.log(returnObject());
