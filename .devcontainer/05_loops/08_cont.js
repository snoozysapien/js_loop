const myNums = [1, 2, 3]

/*
acc : accumulator
currval : current value
*/
let myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0) // 0 is initial value
console.log(myTotal);
/* in above fn -
   initially acc=0 bcoz we give it and currval=1 from myNum
   then acc=0+1=1 currval=2
   then acc=1+2=3 currval=3

*/

//we have use let to write myTotal therefore we can use it again
myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) //shortcut of above code


const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    },
]
//add all price in shopping cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);