function inner(a){
    return a ** 2
}
function outerfunction(b){
    return inner(b);
}
console.log(outerfunction(a))


