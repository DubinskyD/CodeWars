"use strict"

// получаем исходные данные, записываем в переменные
let price = +(prompt('Price?', [500]));
let pay = +(prompt('My payment ', [575]));
let dept = pay - price; //вычисляем сдачу
let change = []; //масив куда мы будем закидывать нужные для сдачи купюры
let total = pay - price;

let bills = [200, 5, 50, 20, 10, 100, 2, 1]; //купюры в наличии
//соритируем купюры от большего к меньшему для перебора 
bills.sort((function (a, b) {
   return b - a
}));

// проверка на бомжа
if (price > pay) {
   alert('sorian');
   pay = +(prompt('You must pay more, price is ' + price));
}
// проверка на необходимость сдачи
else {
   if (price === pay) {
      alert('there will be no change')
   }

   //реализуем механизм сдачи
   else {
      //перебираем каждую купюру начиная с большой и записываем ее в масив
      for (let i = 0, bill; bill = bills[i]; i++) {
         let count = dept / bill;
         for (let i = 1; i <= count; i++) {
            change.push(bill);
            dept = dept - bill;
         }
      };

      //результат
      console.log('your change (' + change + ') Total: ' + total + 'UAH');
      alert('your change (' + change + ') Total: ' + total + 'UAH');
   }
}

