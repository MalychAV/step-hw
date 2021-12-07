let debet = [
    {name: 'ЗП', summ: 10000, data: '02.12.21', operation: 'Приход'},
    {name: 'Халтура', summ: 2000, data: '04.12.21'},
    {name: 'Проценты депозита', summ: 2000, data: '05.12.21'},
    {name: 'Халтура', summ: 2000, data: '05.12.21'},
    {name: 'Халтура', summ: 2000, data: '06.12.21'},
    {name: 'Аванс', summ: 2000, data: '06.12.21'},
    {name: 'Халтура', summ: 2000, data: '06.12.21'},
    {name: 'Премия', summ: 2000, data: '08.12.21'},
    {name: 'Халтура', summ: 2000, data: '09.12.21'},
    {name: 'Выиграш', summ: 50000, data: '10.12.21'},
];

let credit = [
    {name: 'АТБ', summ: 600, data: '02.12.21', operation: 'Расход'},
    {name: 'Кафе', summ: 1000, data: '04.12.21'},
    {name: 'Боулинг', summ: 500, data: '06.12.21'},
    {name: 'Картинг', summ: 1000, data: '06.12.21'},
    {name: 'Метро', summ: 500, data: '07.12.21'},
    {name: 'Анчоусная', summ: 600, data: '08.12.21'},
    {name: 'Эпицентр', summ: 3000, data: '09.12.21'},
    {name: 'Кино', summ: 500, data: '10.12.21'},
    {name: 'Топливо', summ: 800, data: '10.12.21'},
    {name: 'Хозтовары', summ: 500, data: '10.12.21'},
]

console.log(debet[0].data);
console.log(debet[0].operation);
for (let i = 0; i < debet.length; i++) {
    if ('02.12.21' === debet[i].data)
    {console.log`(${debet[i].name}: ${debet[i].summ})`;
}
};
console.log(credit[0].operation);
for (let i = 0; i < credit.length; i++) {
    if ('02.12.21' === credit[i].data)
    {console.log`(${credit[i].name}: ${credit[i].summ})`;
}
};


console.log(debet[1].data);
console.log(debet[0].operation);
for (let i = 0; i < debet.length; i++) {
    if ('04.12.21' === debet[i].data)
    {console.log`(${debet[i].name}: ${debet[i].summ})`;
}
};
console.log(credit[0].operation);
for (let i = 0; i < credit.length; i++) {
    if ('04.12.21' === credit[i].data)
    {console.log`(${credit[i].name}: ${credit[i].summ})`;
}
};

console.log(debet[2].data);
console.log(debet[0].operation);
for (let i = 0; i < debet.length; i++) {
    if ('05.12.21' === debet[i].data)
    {console.log`(${debet[i].name}: ${debet[i].summ})`;
}
};
console.log(credit[0].operation);
for (let i = 0; i < credit.length; i++) {
    if ('05.12.21' === credit[i].data)
    {console.log`(${credit[i].name}: ${credit[i].summ})`;
}
};

console.log(credit[3].data);
console.log(debet[0].operation);
for (let i = 0; i < debet.length; i++) {
    if ('06.12.21' === debet[i].data)
    {console.log`(${debet[i].name}: ${debet[i].summ})`;
}
};
console.log(credit[0].operation);
for (let i = 0; i < credit.length; i++) {
    if ('06.12.21' === credit[i].data)
    {console.log`(${credit[i].name}: ${credit[i].summ})`;
}
};

console.log(credit[4].data);
console.log(debet[0].operation);
for (let i = 0; i < debet.length; i++) {
    if ('07.12.21' === debet[i].data)
    {console.log`(${debet[i].name}: ${debet[i].summ})`;
}
};
console.log(credit[0].operation);
for (let i = 0; i < credit.length; i++) {
    if ('07.12.21' === credit[i].data)
    {console.log`(${credit[i].name}: ${credit[i].summ})`;
}
};

console.log(credit[5].data);
console.log(debet[0].operation);
for (let i = 0; i < debet.length; i++) {
    if ('08.12.21' === debet[i].data)
    {console.log`(${debet[i].name}: ${debet[i].summ})`;
}
};
console.log(credit[0].operation);
for (let i = 0; i < credit.length; i++) {
    if ('08.12.21' === credit[i].data)
    {console.log`(${credit[i].name}: ${credit[i].summ})`;
}
};

console.log(credit[6].data);
console.log(debet[0].operation);
for (let i = 0; i < debet.length; i++) {
    if ('09.12.21' === debet[i].data)
    {console.log`(${debet[i].name}: ${debet[i].summ})`;
}
};
console.log(credit[0].operation);
for (let i = 0; i < credit.length; i++) {
    if ('09.12.21' === credit[i].data)
    {console.log`(${credit[i].name}: ${credit[i].summ})`;
}
};


console.log(credit[7].data);
console.log(debet[0].operation);
for (let i = 0; i < debet.length; i++) {
    if ('10.12.21' === debet[i].data)
    {console.log`(${debet[i].name}: ${debet[i].summ})`;
}
};
console.log(credit[0].operation);
for (let i = 0; i < credit.length; i++) {
    if ('10.12.21' === credit[i].data)
    {console.log`(${credit[i].name}: ${credit[i].summ})`;
}
};

console.log(debet[0].name, debet[0].summ);
console.log(credit[0].operation);
console.log(credit[0].name, credit[0].summ );
console.log(credit[1].data);
console.log(debet[0].operation);
console.log(debet[1].name, debet[1].summ);
console.log(credit[0].operation);
console.log(credit[1].name, credit[1].summ );
console.log(credit[2].name, credit[2].summ );
console.log(debet[2].data);
console.log(debet[0].operation);
console.log(debet[2].name, debet[2].summ);
console.log(debet[3].name, debet[3].summ);
console.log(debet[4].data);
console.log(debet[0].operation);
console.log(debet[4].name, debet[4].summ);
console.log(debet[5].name, debet[5].summ);
console.log(debet[6].name, debet[6].summ);
console.log(credit[0].operation);
console.log(credit[2].name, credit[2].summ );
console.log(credit[3].name, credit[3].summ );
console.log(credit[4].data);
console.log(credit[0].operation);
console.log(credit[4].name, credit[4].summ );
console.log(debet[7].data);
console.log(debet[0].operation);
console.log(debet[7].name, debet[7].summ);
console.log(credit[0].operation);
console.log(credit[5].name, credit[5].summ );
console.log(debet[8].data);
console.log(debet[0].operation);
console.log(debet[8].name, debet[8].summ);
console.log(credit[0].operation);
console.log(credit[6].name, credit[6].summ );
console.log(debet[9].data);
console.log(debet[0].operation);
console.log(debet[9].name, debet[9].summ);
console.log(credit[0].operation);
console.log(credit[7].name, credit[7].summ );
console.log(credit[8].name, credit[8].summ );
console.log(credit[9].name, credit[9].summ );

/*
02.12.21
Приход
ЗП: 200
Расход:
АТБ: 200
Кино: 500

*/