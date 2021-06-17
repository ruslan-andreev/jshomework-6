/*Дана строка 'aaa@bbb@ccc'. Замените все @ на  ! с помощью глобального 
поиска и замены. */

let task1 = 'aaa@bbb@ccc';

console.log(task1.replace(/@/g, '!'));