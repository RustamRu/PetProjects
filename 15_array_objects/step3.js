const someObject = {};
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("addItemForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const key = document.getElementById("some-object-key").value;
        const value = document.getElementById("some-object-value").value;
        const outputDiv = document.getElementById("output");

        someObject[key] = value;
        console.log(someObject);

        let output = '';
        for (const item in someObject) {
            output += `<tr><td>${item}</td>
        <td>${someObject[item]}</td></tr>`;
        }
        outputDiv.innerHTML = output;
    });
});