let myInfo = {
    name: 'Beerrapa',
    age: 28
};
console.table(myInfo);

//Access the html element
let myNameId = document.getElementById('myName');
console.log(myNameId);
myNameId.textContent = myInfo.name;

// TODO: access by Name

// event trigering

function onClick() {
myNameId.textContent = myInfo.age;
}


//TODO : js trigger all events