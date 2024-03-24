const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// now we have to add 10 in each num
//here we use map, it is also a callback function
const newNums = myNumbers.map( (num) => num + 10)

// now we have to multiply 10 and add 1 in each num
const nuNums = myNumbers
.map( (num) => num*10)
.map( (num) => num+1)
.filter( (num) => num >= 40 ) //extra, concept smjhane ke liye

console.log(newNums);
console.log(nuNums);