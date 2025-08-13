class Probablyob{
    constructor(yes,no,ok){
        this.yes = yes
        this.no = no
        this.ok = ok
    }
    getYes(){
        return this.yes;
    }
    getNo(){
        return this.no;
    }
}

let hello = new Probablyob('Yes','Hello','ok');






for (let helloKey in hello) {
    console.log("key:",helloKey)
}

//1. object literal
const per1 = { firstName: "ddd", lastName: "aaaa", age: 20 }
console.log(per1.firstName) //object.property
console.log(per1["lastName"]) //object["property"]
//for...in (object)
for (const key in per1) {
    console.log(key)
    console.log(per1[key])
}


const pet = {id:1,name:"yoyo"}
console.log(pet.name)
pet.name = "xxx"
console.log(pet.name)

function dosomething(){
    obj = {id:1,name:"yoyo"};
    obj.name = "xxx";
}