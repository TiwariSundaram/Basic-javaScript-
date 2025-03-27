// ##########################################################   Number ##########################################


const score=400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// .tostring() => this method convert the number in string ,once it convert in string ,it contain all property  of string like .toUpperCase(),.length() etc.

console.log(balance.toString());

// .tofixed(num) => The toFixed() method rounds the string to a specified number of decimals.If the number of decimals are higher than in the num, zeros are added
console.log(balance.toFixed(2));

// .toLocalString('en-In') => The toLocaleString() returns a number as a string, using local language format, it seperate the values by comma mean if i write 10000.toLocalstring('en-In') then the value show as 10,000
const hundreds =1000000;
console.log(hundreds.toLocaleString('en-In'));




//  ############################################################# Math #################################################



console.log(Math);

// Math.abs(number)=>this method change the number in positive

console.log(Math.abs(-8338));

// Math.round(number) => this method round off the number in nearest integer

console.log(Math.round(7.4));
console.log(Math.round(7.6));

// Math.ceil(Number) => if the number is greater than its integer value than it convert it by adding +1  , for example if number is 4.1 than it convert in 5

console.log(Math.ceil(4.1));

// Math.floor(number) => this method convert the number into it's integer value ,it remove the decimal value of number 

console.log(Math.floor(4.9));

// Math.min(number,numbers ,numbers) => this method find the minimum value of the given number, if the number is 4 ,5,75,44 than it gives the min value 4

console.log(Math.min(45,74,24,35));

// Math.max(number,number,number) => this method fond the tha maxmimum value of the given number , if the number is 4,5,75,44 than it gives the max value 75

console.log(Math.max(54,76,36));

// Math.random() => it gives the random value from 0 to 1 but not 1 if i want to the number between 1 to 10 than we multiply by 10 and add 1 ,we add here 1 for avoiding 0
console.log(Math.random());

console.log((Math.random()*10)+1);

const min =10;
const max= 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);



