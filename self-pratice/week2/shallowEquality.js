let book1 = {
    keys: 1,
    isbn: "12345789",
    title: "Javascript",
}
let book2 = {
    keys: 1,
    isbn: "123456789",
    title: "Javascript",
}

function shallowequality(obj1, obj2) {
    let keys1 = Object.keys(book1)
    let keys2 = Object.keys(book2)
    console.log("key 1 of obj 1: ",keys1)
    console.log("key 2 of obj 2: ",keys2)
    if(keys1.length !== keys2.length){
        console.log("key 1 of obj 1: ",keys1.length)
        console.log("key 2 of obj 2: ",keys2.length)
        return false
    }

for (let key of keys1){
    console.log("key: ",key)
    console.log("for loop key 1 of obj 1: ",obj1[key])
    console.log("for loop key 2 of obj 2: ",obj2[key])
    if(obj1[key] !== obj2[key]){
        console.log("key 1 of obj 1: ",obj1[key])
        console.log("key 2 of obj 2: ",obj2[key])
        console.log("key", key," of 1 :, ",obj1[key], ' !== ', obj2[key])
        return false
    }
}
return true
}

shallowequality(book1,book2)