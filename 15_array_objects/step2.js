const cats = {
    abyssinian: '😸',
    'american-bobtail': '🐱',
    'siam': '🙀',
    'bombay': '😼'
};

let output = '';

for (key in cats) {
    if (key.length > 4) {
        output += cats[key];
    }
}

document.getElementById("output").innerHTML = output;