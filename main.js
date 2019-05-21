let myInfo = {
    name: 'Beerrapa',
    age: 28,
    phoneno: 9740673194,
    address : 'Kalaburagi',
    pincode :585102
};
console.table(myInfo);


//Access the html element
let myNameId = document.getElementById('myName');
console.log(myNameId);
myNameId.textContent = myInfo.name;

// TODO: access by Name
let myName = document.getElementsByClassName('name');
console.log(myName);
myName[0].innerHTML = myInfo.phoneno;
myName[1].innerHTML = myInfo.address;
myName[2].innerHTML = myInfo.pincode;
// event trigering

//TODO : js trigger all events
function onClick(){
    myName[2].innerHTML = myInfo.phoneno;
}


// ways of accessing html element
let myTag = document.getElementsByTagName('article');
console.log("tag name", myTag);
myTag[0].innerHTML = "Hello World"
myTag[1].innerHTML = "Hello good morning"

let querySelector = document.querySelector('#demo-query');
console.log("#demo-query",querySelector);
querySelector.innerHTML = "Query-selector 5"

let querySelectorAll = document.querySelectorAll('.demo-query-all');
console.log(".demo-query-all", querySelectorAll);
querySelectorAll[0].innerHTML = "demo-query selector all"
querySelectorAll[1].innerHTML = "demo-query selector all 2"
