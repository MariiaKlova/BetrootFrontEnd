function hello() {
    const name = prompt('Введіть своє ім\'я');
    alert(`Привіт, ${name}!`)
}

function year() {
    const year = parseInt(prompt('Введіть рік народження'));
    const rez = 2022 - year;
    alert(`Ваш вік: ${rez} років`);
}

function perimeterSquare(){
    const a = parseInt(prompt('Введіть довжину сторони квадрату'));
    const x = a * 4;
    alert(`Результат: ${x}`);
}

function circleArea(){
    const a = parseInt(prompt('Введіть радіус кола'));
    const x = 3.14 * (a ** 2);
    alert(`Результат: ${x}`);
}

function velocity(){
    const s = parseInt(prompt('Введіть відстань між двома містами'));
    const t = parseInt(prompt('Введіть час на подорож'));
    const v = s / t;
    alert(`Необхідна швидкість: ${v}км/год`);
}

function exchangeRate(){
    const a = parseInt(prompt('Введіть сумму в $'));
    const exc = 0.95;
    const x = a * exc;
    alert(`Результат в евро: ${x}`);
}

function digit3() {
    const abc = parseInt(prompt('Введіть пятизначне число'));
    const x = abc % 10;
    const y = ((abc - x) / 10);
    const z = x * 10000 + y;
    alert(`Результат: ${z}`);
}

function myZp() {
    const sumProd = +prompt('Введіть загальну суму продажів за миулий місяць');
    const rez = parseInt(sumProd / 10 + 250);
    alert(`Нарахувати зарплату: ${rez}$`);
}