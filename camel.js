// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// function toCamelCase(str){
//    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
//  }


function toCamelCase(str) {
   // arr для запрещенных символов
   let delimiterIndexes = [32, 45, 95];
   // переводим входящие данные в исходный массив 
   let arr = str.split('')
   // новый массив для результата
   let newArr = [];

   // перебираем данные в исходном массиве 
   for (let i = 0; i < arr.length; i++) {

      // выясняем юникод кажого элемента исходного массива
      let symbolCode = arr[i].charCodeAt();

      // проверяем запрещенный ли он
      let delimiterMatched = false;
      delimiterIndexes.some(elem => {
         if (symbolCode === elem) {
            delimiterMatched = true;
            return;
         }
      });

      // если элемент исходного массива не равен запрещенному символу пушим его в новый массив, иначе пушим следующий элемент увеличивая его
      if (delimiterMatched) {
         let nextIndex = i + 1;
         newArr.push(arr[nextIndex].toUpperCase())
         i++;
      } else {
         newArr.push(arr[i])
      }
   }

   // вынимаем строку в готовое предложение нужного формата
   let result = newArr.join('');
   return result;
}