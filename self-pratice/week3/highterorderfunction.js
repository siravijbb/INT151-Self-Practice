const numbers = [1, 2, 3, 4, 5];

let mappedfunction = numbers.map(function(number) {
    return number * 2;
})
console.log(mappedfunction);
// map function do by map things in array then put do function that we defined [ 2, 4, 6, 8, 10 ]

let filterfunction = numbers.filter(function(number) {
    return number % 2 === 0;
})
console.log(filterfunction);
// It fill ter in array by putting function or calling or methibg inside filter to return only we need [ 2, 4]

