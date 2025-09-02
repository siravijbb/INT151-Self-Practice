const carts = [
    { productId: 1002, price: 10, amount: 5 },
    { productId: 2005, price: 100, amount: 2 },
    { productId: 5001, price: 5, amount: 4 },
]
//net price = total price * VAT 7% cart = [

let totalprice = carts.reduce((acc, cur) => acc +( cur.amount * cur.price), 0)
let vatsum = totalprice*1.07;
console.log(vatsum.toFixed(5))