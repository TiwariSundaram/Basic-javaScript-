// ***********  reduce method

// Array.reduce(callback function , initialization)

    // by using reduce method callback function gate two value as a argument 1st is accumulator and second se current value that is came from array one by one , 
    // in 1st round accumulator store initilize value that can be pass just after call back 
    // when first operation completed the the value that is being return is store in accumulator till array last item will not be pass 
    // when all the parse complete then the value of accumulator will be return and store in the assign variable





const myNums = [1,2,3,4]

const total = myNums.reduce(function(accumulator,currentValue){
    console.log(`Accumulator ${accumulator} and CurrentValue ${currentValue}`);
    return accumulator+currentValue;
    
} ,0)

console.log(total);


const clothesSale = [12,123,45,234];

const totalPrice = clothesSale.reduce((totalValue,buyClothValue)=>{
    return totalValue+buyClothValue;
},0)

console.log(`total price = ${totalPrice}`);

// **********  realtime  Example *********

const shop =[
    {
        item :"mobile",
        price:10000,
        company:"vivo"
    },
    {
        item:"Earphone",
        price:2000,
        company:"boat"
    },
    {
        item:"charger",
        price:500,
        company:"vivo"
    }
]

const totalPay = shop.reduce((totalvalue,item)=>{
    return totalvalue +item.price
},0)

console.log(`You have to pay ${totalPay}`);
