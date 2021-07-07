// There is a queue for the self - checkout tills at the supermarket.Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue.Each integer represents a customer, and its value is the amount of time they require to check out.
//    n: a positive integer, the number of checkout tills.
//       output
// The function should return an integer, the total time required.
// Examples
// queueTime([5, 3, 4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// queueTime([10, 2, 3, 3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

// queueTime([2, 3, 10], 2)
// should return 12
function queueTime(customers, tillsQuantity) {
   if (customers.length == 0) { return 0 }
   if (tillsQuantity > customers.length) { tillsQuantity = customers.length }
   let timeOfEveryTill = []; // [[],[],[]]
   for (let i = 0; i < tillsQuantity; i++) {
      timeOfEveryTill.push([customers[i]]); // [[12], [3]]
   }
   const summ = (arg1, arg2) => arg1 + arg2;
   const sortArr = (arr1, arr2) => arr1[0] > arr2[0] ? 1 : -1;

   for (let i = tillsQuantity; i < customers.length; i++) {
      timeOfEveryTill.sort(sortArr);
      timeOfEveryTill[0].push(customers[i]);
      timeOfEveryTill[0][0] = timeOfEveryTill[0].reduce(summ);
      timeOfEveryTill[0].pop();
      timeOfEveryTill.sort(sortArr);
   }
   // // timeOfEveryTill.sort(sortArr);
   timeOfEveryTill.reverse();
   result = timeOfEveryTill[0][0];
   return console.log(result);
}
queueTime([2, 3, 10], 2)