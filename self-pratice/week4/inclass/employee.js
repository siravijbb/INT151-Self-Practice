const employees = [
    {
        id: 'e1001',
        firstname: "Somchai",
        lastname: "Jaidee",
    },
    {
        id: 'e1002',
        firstname: "Pornchai",
        lastname: "Deejai",
    },
    {
        id: 'e1005',
        firstname: "Suda",
        lastname: "Rakdee",
    },
]
 mapemployee = employees.map(e => (  e.firstname + ' ' + e.lastname).toUpperCase()).filter(e => e.includes('JAI'));
console.log(mapemployee)


filteremployee = employees.filter(e => (e.firstname.toUpperCase()+e.lastname.toUpperCase()).includes('JAI')) ;
console.log(filteremployee);
let mapoffilter = filteremployee.map ( e =>( e.firstname + ' ' + e.lastname).toUpperCase())
console.log(mapoffilter);
// filteremployee = employees.filter(e => (e.firstname.toLowerCase()+e.lastname.toLowerCase()).includes('jai'))
// console.log(filteremployee)