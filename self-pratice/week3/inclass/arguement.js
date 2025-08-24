function sum(...args){
    let a = 0;
    for(i= 1; i < arguments.length;i++){
        a = a + args[i];
    }
    return a
}

console.log(sum(1,2,3,4,5))