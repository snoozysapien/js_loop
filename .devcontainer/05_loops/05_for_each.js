// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(val){
    console.log(val);
})

//alter
coding.forEach( (item) => {
    console.log(item);
})

//alter
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


/**********************************/


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


// we get the data in form of array, and values are object type

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})