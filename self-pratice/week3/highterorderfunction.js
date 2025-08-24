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

let reducefunction = numbers.reduce(function(a, b) {
    console.log(a,b)
    return a + b;
})
console.log(reducefunction);

// this function reduce an array of thing to only 1 value on return


// Get the names of students who passed (score >= 50)
const students = [
    { name: "Alice", score: 70 },
    { name: "Bob", score: 40 },
    { name: "Charlie", score: 90 },
];
let filteredstudents = students.filter(function(student) {
    return student.score > 50;
})
let listofstudent = filteredstudents.map(function(student) {
    return student.name;
});

// co pilot suggested   by usubg map fuction to return only student.name; this method is ok since we dont need the score value
console.log(filteredstudents);
console.log(listofstudent);
// Expected: ["Alice", "Charlie"]
