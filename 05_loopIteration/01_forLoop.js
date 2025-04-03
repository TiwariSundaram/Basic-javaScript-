// ##########  for loop  ##############

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element ==5) {
       console.log("5 is best number");     
    }
    console.log(element);
}

// ######  Nested for loop ############

for (let i = 1; i <= array.length; i++) {
   console.log(`outer loop value : ${i}`);
   
  for (let j = 1; j <= 10; j++) {
     // console.log(`inner loop value ${j} , outer loop value : ${i}`);
      console.log(i +" * "+j +" = "+ i*j);
  }
}



let myArray = ["flash" , " batman" , "superman"]

for (let index = 0; index < myArray.length; index++) {
  const element = array[index];
  console.log(element);
  
}


// ###########  Break and continue keyword  #########

//  break kewword =>

for (let i = 0; i <= 20; i++) {
  if (i==5) {
     console.log(`detected 5`);
     break;
  }
  console.log(`value of i is ${ i}`);
}

// continue keyword => 
  
for (let i = 0; i <= 20; i++) {
  if (i==5) {
     console.log(`detected 5`);
     continue;
  }
  console.log(`value of i is ${ i}`);
}