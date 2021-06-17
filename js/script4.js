/* Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень 
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

let arrTask4 = [4,2,5,19,13,0,10],
    sum = 0;
for(let i = 0; i < arrTask4.length; i++){
    sum += Math.pow(arrTask4[i],3);   
}
console.log(Math.sqrt(sum));