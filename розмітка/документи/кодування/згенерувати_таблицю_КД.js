const charDefinitions = [
    [undefined, "Кінець"],
    [undefined, "Початок"],
    [undefined, "Передвказівка"],

    ['\n', "Міжряд"],

    ['[', "Відкрита квадратна дужка"],
    ['{', "Відкрита фігурна дужка"],
    ['(', "Відкрита дужка"],
    ['<', "Менше"],

    ['§', "Секція"],
    ['#', "Мітка"],
    ['@', "Адреса"],
    ['№', "Номер"],
    ['+', "Хрестик"],
    ['₴', "Гривня"],
    [undefined, "Дія", `<svg class="no-dark-shadow" style="max-height: 1rem; max-width: 1rem;" width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="69.5881" width="21.2253" height="63.676" transform="rotate(-45 0 69.5881)" fill="currentColor"/><rect x="69.5881" y="151" width="21.2253" height="63.676" transform="rotate(-135 69.5881 151)" fill="currentColor"/><rect x="151" y="81.4121" width="21.2253" height="63.676" transform="rotate(135 151 81.4121)" fill="currentColor"/><rect x="81.412" width="21.2253" height="63.676" transform="rotate(45 81.412 0)" fill="currentColor"/></svg>`],
    ['∑', "Енергія"],

    ['0', "Нуль"],
    ['1', "Один"],
    ['2', "Два"],
    ['3', "Три"],
    ['4', "Чотири"],
    ['5', "Пʼять"],
    ['6', "Шість"],
    ['7', "Сім"],
    ['8', "Вісім"],
    ['9', "Девʼять"],

    ['\'', "Лапка"],
    ['"', "Дволапка"],
    ['`', "Косолапка"],
    ['_', "Підриска"],
    ['-', "Риска"],
    ['ʼ', "Апостроф"],

    ['А', "Велика буква \"А\""],
    ['Б', "Велика буква \"Б\""],
    ['В', "Велика буква \"В\""],
    ['Г', "Велика буква \"Г\""],
    ['Д', "Велика буква \"Д\""],
    ['Е', "Велика буква \"Е\""],
    ['Є', "Велика буква \"Є\""],
    ['Ж', "Велика буква \"Ж\""],
    ['З', "Велика буква \"З\""],
    ['И', "Велика буква \"И\""],
    ['І', "Велика буква \"І\""],
    ['Ї', "Велика буква \"Ї\""],
    ['Й', "Велика буква \"Й\""],
    ['К', "Велика буква \"К\""],
    ['Л', "Велика буква \"Л\""],
    ['М', "Велика буква \"М\""],
    ['Н', "Велика буква \"Н\""],
    ['О', "Велика буква \"О\""],
    ['П', "Велика буква \"П\""],
    ['Р', "Велика буква \"Р\""],
    ['С', "Велика буква \"С\""],
    ['Т', "Велика буква \"Т\""],
    ['У', "Велика буква \"У\""],
    ['Ф', "Велика буква \"Ф\""],
    ['Х', "Велика буква \"Х\""],
    ['Ц', "Велика буква \"Ц\""],
    ['Ч', "Велика буква \"Ч\""],
    ['Ш', "Велика буква \"Ш\""],
    ['Щ', "Велика буква \"Щ\""],
    ['Ь', "Велика буква \"Ь\""],
    ['Ю', "Велика буква \"Ю\""],
    ['Я', "Велика буква \"Я\""],
    ['а', "Мала буква \"а\""],
    ['б', "Мала буква \"б\""],
    ['в', "Мала буква \"в\""],
    ['г', "Мала буква \"г\""],
    ['д', "Мала буква \"д\""],
    ['е', "Мала буква \"е\""],
    ['є', "Мала буква \"є\""],
    ['ж', "Мала буква \"ж\""],
    ['з', "Мала буква \"з\""],
    ['и', "Мала буква \"и\""],
    ['і', "Мала буква \"і\""],
    ['ї', "Мала буква \"ї\""],
    ['й', "Мала буква \"й\""],
    ['к', "Мала буква \"к\""],
    ['л', "Мала буква \"л\""],
    ['м', "Мала буква \"м\""],
    ['н', "Мала буква \"н\""],
    ['о', "Мала буква \"о\""],
    ['п', "Мала буква \"п\""],
    ['р', "Мала буква \"р\""],
    ['с', "Мала буква \"с\""],
    ['т', "Мала буква \"т\""],
    ['у', "Мала буква \"у\""],
    ['ф', "Мала буква \"ф\""],
    ['х', "Мала буква \"х\""],
    ['ц', "Мала буква \"ц\""],
    ['ч', "Мала буква \"ч\""],
    ['ш', "Мала буква \"ш\""],
    ['щ', "Мала буква \"щ\""],
    ['ь', "Мала буква \"ь\""],
    ['ю', "Мала буква \"ю\""],
    ['я', "Мала буква \"я\""],

    ['Ґ', "Велика буква \"Ґ\""],
    ['Ё', "Велика буква \"ё\""],
    ['Ъ', "Велика буква \"ъ\""],
    ['Ы', "Велика буква \"ы\""],
    ['Э', "Велика буква \"э\""],
    ['ґ', "Мала буква \"ґ\""],
    ['ё', "Мала буква \"ё\""],
    ['ъ', "Мала буква \"ъ\""],
    ['ы', "Мала буква \"ы\""],
    ['э', "Мала буква \"э\""],

    [',', "Кома"],
    [':', "Двокрапка"],
    [';', "Крапкакома"],
    ['.', "Крапка"],
    ['?', "Питання"],
    ['!', "Оклик"],

    ['$', "Долар"],
    ['%', "Відсоток"],
    ['°', "Градус"],
    ['*', "Зірочка"],
    ['/', "Коса"],
    ['|', "Пряма"],
    ['\\', "Обернена коса"],
    ['&', "Амперсанд"],
    ['^', "Пірамідка"],
    ['~', "Тильда"],
    ['=', "Рівно"],

    ['>', "Більше"],
    [')', "Закрита дужка"],
    ['}', "Закрита фігурна дужка"],
    [']', "Закрита квадратна дужка"],

    [' ', "Пропуск"],
];

const textEncoder = new TextEncoder();

const lines = charDefinitions.map(([char, definition, logo], index) => {
    const columns = [];
    columns.push(definition);
    if (logo) {
        columns.push(logo);
    } else if (char) {
        columns.push(char[0].replaceAll('\n', '').replaceAll('\\', '\\\\').replaceAll('>', '\\>').replaceAll('<', '\\<').replaceAll('[', '\\[').replaceAll('|', '\\|'));
    } else {
        columns.push('');
    }
    columns.push(String(index));
    columns.push(`<small>0ш</small>${index.toString(16).toUpperCase().replaceAll('A', 'А').replaceAll('B', 'Б').replaceAll('C', 'В').replaceAll('D', 'Г').replaceAll('E', 'Д').replaceAll('F', 'Е')}`);
    columns.push(`<small>0д</small>${index.toString(2)}`);
    if (char) {
        let value = String(char[0].charCodeAt(0));
        const encoded = textEncoder.encode(char[0]);
        if (encoded.length > 1) {
            value = `${value} <small>\\[${encoded.map((c) => c).join(', ')}]</small>`;
        }
        columns.push(value);
    } else {
        columns.push('');
    }
    return `|${columns.join(' | ')}|`;
});

const table = lines.join('\n');
console.log(table);

// const charset = charDefinitions.map(([char]) => char[0]).filter((char) => char && char !== '\n').join('');
// console.log(charset);