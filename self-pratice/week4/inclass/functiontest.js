const word = ['mango','apple','banana'];


//arrow fuction
const startAword = word.filter((word) => word.startsWith('a'));
console.log(startAword);

//annonymous func
const startBword = word.filter(
function(word){
    return word.startsWith('b');
}
    )
console.log(startBword);

// const checkstarta =(word) = word.startsWith('a');
// const startCword = word.filter(checkstarta);
// console.log(startCword);

function checkD(word){
    return word.startsWith('a')
}
//
// const checkDword = word.filter(checkstarta);
// console.log(checkDword);


///
let checkEarray = []
// function checkE(word){
//     if (word != 'banana'){
//         console.log(word)
//         return word;
//     }
//     return null
//
// }
function checkE(word){
    if (word[0] === 'a'){
        console.log(word)
        return word;
    }

}
word.forEach(word => checkEarray.push(checkE(word)));
console.log(checkEarray);