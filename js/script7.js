/*Дана  строка 'aa aba abba abbba abca abea'.  Напишите  регулярку,  которая  
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое 
количество раз, буква 'a'. */

let strTask7 = 'aa aba abba abbba abca abea';
console.log(strTask7.match(/(ab+a)/gi));