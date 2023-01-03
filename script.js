//  task 1 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
//     Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.

// const names = (namesNew) => {
//    return namesNew.join().toLowerCase().replaceAll("а","я")
// }
// console.log(names(['Аскар', 'Баяман', 'Калмамат']))

// task 2 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.

// const str = (newStr) => {
//     return newStr.split("").sort().join("")
// }
// console.log(str("ьилпдввоао"))


// task 3 Напишите функцию, которая принимает массив чисел и возвращает массив только с четными числами.

// const arr = (newArr) => {
//     return newArr.filter((el) => { 
//         return el % 2 === 0
// })
// }
// console.log(arr([2,5,4,6,7,9]))

// task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.
    // const arr = (newArr) => {
    //     return newArr.filter((el) => {
    //         return typeof el === "number"
    //     })
    // }
    // console.log(arr([1,2,3,4,5,"y","t","u","t","i"]))

// task 5 Напишите функцию, которая принимает массив и возвращает:
//     Минимальный элемент
// Максимальный элемент
// Длину массива
// Среднее арифметическое
// Ответ должен быть в виде массива
// Пример входных данных: [7, 13, 3, 77, 100]
// Результат: [ 3, 100, 5, 40 ]


// const min = () => {
//     return Math.min(7, 13, 3, 77, 100)
// }
// console.log(min([7, 13, 3, 77, 100]))

// const max = () => {
//     return Math.max(7, 13, 3, 77, 100)
// }
// console.log(max([7, 13, 3, 77, 100]))

// const arrlenght = (numbers) => {
//     return numbers.length
// }
// console.log(arrlenght([7, 13, 3, 77, 100]))

// const getAverage = (numbers) => { 
//     return numbers.reduce((acc,number) => acc + number , 0)
// / numbers.length
// }
// console.log(getAverage([7, 13, 3, 77, 100]))

// const arr = (newArr) => {
// return `${Math.min(7, 13, 3, 77, 100)} ${Math.max(7, 13, 3, 77, 100)} ${newArr.length} ${newArr.reduce((acc,newArr) => acc + newArr , 0)/ newArr.length}`.split(" ")
// }
// console.log(arr([7, 13, 3, 77, 100]))


// task 6
// Напишите функцию, которая принимает массив чисел и возвращает первое четное число.
// const arr = (newArr) => {
//     return newArr.find((el) => {
//     return el % 2 === 0
// })
// }
// console.log(arr([1,2,3,4,5,6]))

// task 7

// const str = (newStr) => {
//     return newStr.join().split(" ").map((el) => {
//         return `${el} ${el.length}` 
//       })
// }
// console.log(str(["apple ban"]))

// task 8 
// const arr = (newArr) => {
//     return newArr.filter((el,idx) => {
//         return idx % 2 === 0
//       })
// }
// console.log(arr(["Keep", "Remove", "Keep", "Remove", "Keep"]))


// task 9 

// const str = (arr) => {
//     return arr.split(" ")
// }
// console.log(str("Robin Singh"))


// task 10
// const str = (a,b) =>{
//     let newStr = +a + +b 
//     return newStr.toString()
// }

// console.log(str("4","5"))


//task 11 
// const numbers = (newNumbers) =>{
//     return newNumbers.filter((el,idx) => {
//         return idx === newNumbers.indexOf(el)
//     })
// }
// console.log(numbers([22,34,22,56,65,34]))

//task 12
// const fizzbuzz = (n) => {
//     return n.map((el) => {
//         if(el % 5 === 0 && el % 3 == 0){
//             return "fizzbuzz"
//         }
//         else if(el % 5 === 0){
//             return"buzz"
//         }
//         else if(el % 3 === 0 ){
//             return "fizz"
//         }
//         else{
//             return el
//         }
//     })
// }
// console.log(fizzbuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))