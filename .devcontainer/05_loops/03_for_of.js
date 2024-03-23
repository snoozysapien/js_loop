// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    console.log(num);
}


const greetings = "hello world!"
for(const greet of greetings){
    console.log(`Each char is${greet}`)
}


// Maps : it is also an object, has unique values, and order specific

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('Fr', "France")

console.log(map);

for (const key of map) {
    console.log(key);
    
} // print whole map

for (const [key, value] of map){
    console.log(key, ':-',value)
} // would print key and value seperately


//object
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject){
    console.log(key, ':-', value);
}

