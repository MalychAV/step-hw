let user = ['Дима', '1981', 'Вася', '1995', 'Коля', '1993', 'Иван', '1970'];

const nowYear = 2021;
let age = `${nowYear - user[1]}`;
let age1 = `${nowYear - user[3]}`;
let age2 = `${nowYear - user[5]}`;
let age3 = `${nowYear - user[7]}`;
// Если 18 <= возраст <= 40 подходит


function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let dima = {  age: 40 };
  let vasya = {  age: 26 };
  let kolya = {  age: 28 };
  let ivan = {  age: 51 };
  
  let arr = [ dima, vasya, kolya, ivan ];
  
function midle(user) {
    if (age <= 40 &&
        age >= 18
        ) {
            
        console.log('Подходит');
        
    } 
    if (age1 <= 40 &&
        age1 >= 18) {
            
        console.log('Подходит');
       
    }
    if (age2 <= 40 &&
        age2 >= 18) {
            
        console.log('Подходит');
        
    }
    if (age3 <= 40 &&
        age3 >= 18) {
            
        console.log('Подходит');
        
    }
    else {
        console.log('Не подходит');
       
    }
}



console.log(`Имя: ${user[0]}, возраст: ${age}, Статус: ${midle(user)} `);


console.log(`Имя: ${user[2]}, возраст: ${age1}, Статус:`);

console.log(`Имя: ${user[4]}, возраст: ${age2}, Статус: `);

console.log(`Имя: ${user[6]}, возраст: ${age3}, Статус: `);

console.log(`Средний возраст представленных кандидатов:  ${getAverageAge(arr)}`);







