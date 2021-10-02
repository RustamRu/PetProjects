let month_names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Juny",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let month_temp = [
    -9,
    -8,
    -2,
    8,
    19,
    23,
    26,
    24,
    16,
    8,
    0,
    -6
];
let month_Iswarm = [
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
    false
];

let monthData = { month_names, month_temp, month_Iswarm };

// Вывод всех значений массивов
for (let obj_item in monthData) {
    console.log(obj_item + ":");
    for (let array_item of monthData[obj_item]) {
        console.log(array_item);
    }
}

// Вывод значений массивов с четным индексом
for (let obj_item in monthData) {
    console.log(obj_item + ":");
    let array_index_last = monthData[obj_item].length;
    for (let array_index = 0; array_index < array_index_last; array_index+=2) {
        console.log(monthData[obj_item][array_index]);
    }
}