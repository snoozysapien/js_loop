//for loop
/* syntax
   for (declare variable; condition check; after operation){
         what operation
   }
*/
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is best");
    }
    console.log(element);
    
}
console.log(element); //show error bcoz element is not global variable


for (let i = 0; i <= 2; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 3; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
    
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let i = 0; i <= myArray.length; i++) {
    const element = array[i];
    console.log(element);
    
}


// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log("detected 5")
        break
    }
    console.log(`value of i is ${i}`);
    
}
for (let j = 1; j <= 20; j++) {
    if (i == 5){
        console.log("detected 5")
        continue
    }
    console.log(`value of i is ${i}`);
    
}