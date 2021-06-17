/*Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово 
«javascript» тремя разными способами (через substr, substring, slice).*/

let strTask3 = 'Я учу javascript!';

console.log(strTask3.substring(2,16));
console.log(strTask3.substr(2,14));
console.log(strTask3.slice(2,16));