const student = {
    id: 1,
    fullname: "student",
    email: "someo@omg[kf.com",
    address: {id: 1,  city: "Washing",},
}
let {id,fullname,email} = student;

let{ address:{city:myAddress}}=student;
console.log(myAddress);