// alert ()     уведомление
// prompt ()     ввод данных
// confirm ()      подтверждение действия
// console.log ()   вывод в консоль браузера
//-----

// Задача 2: 
// Получить от пользователя два числа и вывести в диалоговое окно сумму значений, 
// которые ввел пользователь, вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.

// let num = 5;
// const n = Number.parseFloat (prompt ("Введите вещественное число"));
// alert (n + num);    // отбрасывает дробную часть при parseInt
// alert (`Сумма ${n} и ${num} = ${n + num}`);

// function sum (n1, n2) {
//     return n1 + n2;
// }
// alert (`Сумма ${n} и ${num} = ${sum (n, num)}`);
//-----


// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”и кнопками «ОК», «Отмена», 
// для чего необходимо использовать confirm.- При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением 
// “Тогда мы идем к вам!”.- При нажатии на кнопку “Отмена” 
// вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

// const answer = confirm ("Это ваще норм?");
// if (answer == true) {
//     alert ("Cool");
// } else {
//     alert ("Doh!");
// }
//-----



// // Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.
 
// // <script>
// // let product = "Бананы";
// // if (product == "Мандарины") {
// //   alert('Мандарины стоят 100 руб/кг.');
// // } else if (product == "Бананы") {
// //   alert('Бананы и груши стоят 70 руб/кг.');
// // } else if (product == "Груши") {
// //   alert('Бананы и груши стоят 70 руб/кг.');
// // } else {
// //   alert('Нет такого продукта.');
// // }
// // </script>

// const product = prompt ("Введите наименование продукта").toLowerCase ();
// switch (product) {
//     case "mandarin":
//         alert ("Mandarin pay 100 rub/kg.");
//         break;
//     case "banana":
//     case "apple":
//         alert ("Banana & apple pay 70 rub/kg.");
//         break;
//     default:
//         alert ("No product");
// }
//-----

 
 
// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.
 
function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let index = 2; index < arr.length; index += 2) {
        if (arr[index] > max) {
            max = arr[index];
        }    
    }
    return max; 
}
 
console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
const arr = [4, -12, 29, 6, 31, 92, -50];
console.log(`Наибольшое значение в чётном индексе, ${arr.join(", ")} будет равен ${getMaxEvenElement(arr)}`); // 31