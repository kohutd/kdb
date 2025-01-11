const a = `
Водою плила
Лебедка біла.
Надлетіли чорні Ворони,
Надлетіли в сесі сторони.
"Бачте, Лебедка біла як сніжок!
А ми такі гидкі,
Чорні і бридкі".
Стрімголов не берег впали,
В дзьоби болота набрали
І стали згори метати,
Білу Лебедку нуряти.
А Лебедь з дурних сміявся,
Став біліший, лиш скупався.
Хоть лихі люди сором метають,
Добрі і чесні на теє не дбають.
`.trim();

const b = a
    .replaceAll('\'', '')
    .replaceAll('ʼ', '')
    .replaceAll('в', 'v')
    .replaceAll('є', 'іе')
    .replaceAll('ж', 'шз')
    .replaceAll('ї', 'іі')
    .replaceAll('й', 'і')
    .replaceAll('ц', 'тс')
    .replaceAll('щ', 'шч')
    .replaceAll('ю', 'іу')
    .replaceAll('я', 'іа')
    .replaceAll('В', 'V')
    .replaceAll('Є', 'Іе')
    .replaceAll('Ж', 'Шз')
    .replaceAll('Ї', 'Іі')
    .replaceAll('Й', 'І')
    .replaceAll('Ц', 'Тс')
    .replaceAll('Щ', 'Шч')
    .replaceAll('Ю', 'Іу')
    .replaceAll('Я', 'Іа')
    .replaceAll('у', 'оо')
    .replaceAll('У', 'Оо');

console.log(b);