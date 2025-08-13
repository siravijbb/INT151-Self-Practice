students1 = {
    id: 1,
    name: "yoyo",
}
student2 = {
    id: 1,
    name: "yoyo",
}
function isobjnameeq(object1, object2) { // shadow comparasion

    if(object1.id === object2.id  && object1.name.toUpperCase() === object2.name.toUpperCase()) {
        return true;
    }
    return false;
}
console.log(isobjnameeq(students1, student2));