/**
 * Выбор операции
 * 1. Снять
 * 2. Положить
 * 3. Показать баланс
 * 4. Выход
 * ! Проверка, что введенные данные не являются числом
*/

let balance = 5000;
let summ = '';
let pin = '0000';
let uPin;
let isLogin = true;

while (pin !== uPin) {
    uPin = prompt('Введите пин(exit - выход): ');
    if (uPin === 'exit') {
        isLogin = false;
        break;
    }
    isLogin = true;
}

// Проверка, что введено число
while (1) {
    let action = +prompt('Выберите число (1 Снять,2 Положить,3 Баланс,4 Выход)');
    
    if (action) {
        
        // Проверка, что такой вариант есть
        console.log('все ок, вы ввели число');        
        // Выход
        if (action <= 4) {
            
            console.log('Такой вариант есть');
            if (action === 4) {
                exit();
                break;
            }
            // Снятие          
            if (action === 1) {
                console.log('Снятие');
                getmoney();
            }
            // Положить
            if (action === 2) {
                console.log('Положить');
                putMoney();
            }
            // баланс
            if (action === 3) {
                console.log(`Баланс: ${balance}`);
                alert(`Баланс карты - ${balance}`);
            }

        } else {
            console.log('Такого варианта нет');
            alert(`Неверное значение пройдите повторно процедуру выбора`);
        }
    }
}

function getmoney() { 
                summ = +prompt('Ввведите желаемую сумму снятия');
                alert(`Все ок. Остаток - ${balance = balance - summ}`);
}
function putMoney() {
                summ = +prompt('Ввведите сумму пополнения карты');
                alert(`Все ок. Остаток - ${balance = balance + summ}`);
}
function exit() {
    alert("Робота с банкоматом окончена. Не забудьте забрать карту.");
    
}






