// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//    return str.replace(/[aeiou]/gi, '');
//  }


function disemvowel(str) {
   // arr для запрещенных символов
   let vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
   // узнаем юникод и наполняем массив
   let vowelsIndexes = [];
   for (let i = 0; i < vowels.length; i++) {
      vowelsIndexes.push(vowels[i].charCodeAt());
   }
   // новый массив для результата
   let newArr = [];

   // переводим входящие данные в исходный массив 
   let strArr = str.split('');

   // перебираем данные в исходном массиве
   for (let i = 0; i < strArr.length; i++) {
      // выясняем юникод кажого элемента исходного массива
      let symbolCode = strArr[i].charCodeAt();
      // проверяем запрещенный ли он
      let vowelsMatched = false;
      vowelsIndexes.some(elem => {
         if (symbolCode === elem) {
            vowelsMatched = true;
            return;
         }
      });
      // наполняем новый массив
      if (vowelsMatched == false) {
         newArr.push(strArr[i]);
      }
   }
   str = newArr.join('');
   return str;
}

