const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item //for Each wont return any value, it give undefined
})

console.log(values);

/***********************/

//filter()
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 4) //we use callback arrow function inside filter fn
console.log(newNums);

//or
const nayaNums = myNums.filter((num) => {
    return num > 4
})// if we use "{}"then we have to write return keyword
console.log(nayaNums);

// if used in for each
// const nuNums = []
// myNums.forEach(() => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(nuNums);


/* qus: 1.to get books which genre is history
        2.filter book which publish after 2004
        3.after 1995 && history
*/
const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1995},
];
//actually we get the data in this form only from database

let userBooks = books.filter( (bk) => bk.genre === 'History') //bk.genre is use to access genre

userBooks = books.filter( (bk) => { return bk.publish >= 2000}) //we have already declare userbook, here we wont declare
//also we have use scope i.e,{} here therefore use return keyword, it is an alternate method

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);