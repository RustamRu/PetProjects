let someObject = {};
const addItemBtn = document.getElementById("addItem");
const outputDiv = document.getElementById("output");

addItemBtn.onclick = () => {
    let key = document.getElementById("some-object-key").value;
    let value = document.getElementById("some-object-value").value;
    someObject[key] = value;
    console.log(someObject);
    
    let output = '';
    for (key in someObject) {
        output+=`<p>someObject[${key}] = ${value}</p>`;
    }
    outputDiv.innerHTML = output;
};