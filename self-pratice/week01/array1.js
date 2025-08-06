let siravij = [1,'3','5','human','not null',{maybeoject:"this probably object"},['an','another','array']]
// array size
console.log(siravij.length)
// first item
console.log(siravij[0])
// last item
console.log(siravij[siravij.length-1])
// storing obj
console.log(typeof(siravij[siravij.length-2]))
// storing arr
console.log(typeof(siravij[siravij.length-1]))
for (i in siravij){
    console.log("printing",i,":",siravij[i])
}
// for (const i of siravij){
//     console.log("printing 2",i,":",siravij[i])
//
// }
// for (let i in siravij) {
//     console.log(siravij)
//     console.log("poping : ",siravij.pop())
//     console.log(siravij.length)
//
//     console.log("shift : ",siravij.shift())
//     console.log(siravij.length)
// }
let something = ['old','array',...siravij]
console.log(something)
let a = new Array()
console.log(a)
a = new Array(5)
console.log(a)