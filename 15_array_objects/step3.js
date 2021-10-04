const someObject = {};
const outputDiv = document.getElementById("output");

addItem = () => {
    let key = document.getElementById("some-object-key").value;
    let value = document.getElementById("some-object-value").value;
    someObject[key] = value;
    console.log(someObject);

    let output = '';
    for (key in someObject) {
        output += `<tr><td>${key}</td>
        <td>${someObject[key]}</td></tr>`;
    }
    outputDiv.innerHTML = output;
};