function thatisfunction(input){
    return `This is function that recive input of ${input}.`;
}

console.log(thatisfunction("Hello, World!"));
console.log(thatisfunction("Function"));
console.log(thatisfunction(function Hello(Hello, World){
    return "Hello";
}));


function MutipleAdd(add,...args) {
    if(!args) {return add}
    for (let arg of args) {
        add = add + arg;
    }
    return add;
}
console.log(MutipleAdd(1,2,3,4,5,6,7,8,9))
