const name ="Sundaram";
const age =21;

// console.log(name+ age);

console.log(`My name is ${name} ,i am ${age}year old`);

const gameName=new String("Sundaram");

console.log(gameName[0]);
console.log(gameName.length);

console.log(gameName.toUpperCase());

// .charat(index)=>find the string at given index
console.log(gameName.charAt(2));

// .indexOf("str") => it find the index of given index
console.log(gameName.indexOf("S"));

// .substring(starting value ,ending value) => it give the substring of given string where starting value decide from where to start and ending value decide the (ending value -1 )
const newGameName = gameName.substring(0,6);
console.log(newGameName);

// .slice(start,end)  => in the slice method we can use negative value ,where starting value for starting index and end value for ending (index-1 ), it also gave a subString

const anotherName =gameName.slice(0,6);
console.log(anotherName);

const string=gameName.slice(-7,4);
console.log(string );


// .trim() => this method trim or remove the starting whitespaces and ending space in string 

const cource ="       b.tech";
console.log(cource.trim());

// .replace("value","new Value") => this method replce the the give value by new Value which is given , in the string (for example in below string love is replace by do and final str is become "IDoCoding")

const str ="ILoveCoding";
console.log(str.replace("Love","do"));

// .includes("value") => this method check the value is present in string or not ,if present then give true otherwise give false

console.log(str.includes("love"));

