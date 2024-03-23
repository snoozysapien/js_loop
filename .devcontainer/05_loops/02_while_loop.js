//while loop

let index = 0
while (i <= 10) {
    console.log(`value of index is ${index}`);
    i = i + 2     
}
//____________

let myArray = ['flash', 'batman', 'superman']
let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}


// do while loop - kaam pehle condition check baad me
// isliye do while loop give atleast one value i.e, initial value
let score = 1
do {
    console.log(`score is ${score}`);
    score++
    
} while (score <=10);