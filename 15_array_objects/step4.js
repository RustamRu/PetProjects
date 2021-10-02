let d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
let a1 = [];
let a2 = [];
const outputA1Div = document.getElementById("output_a1");
const outputA2Div = document.getElementById("output_a2");
let output_a1 = '';
let output_a2 = '';

let i_last = d.length;
for (let i = 0; i < i_last; i++) {
    if (i % 2) {
        a1.push(d[i]);
        output_a1 += `<p>a1[${a1.length - 1}] = ${d[i]}</p>`;
    } else {
        a2.push(d[i]);
        output_a2 += `<p>a2[${a2.length - 1}] = ${d[i]}</p>`;
    }
}

outputA1Div.innerHTML = output_a1;
outputA2Div.innerHTML = output_a2;