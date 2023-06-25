// подключаем модуль (библиотеку) "Конвертер валют"
const CC = require('currency-converter-lt')
// создаем объект, на основе подключенного класса, тут же
// указываем валюту
let currencyConverter = new CC({from:"USD", to:"JPY", amount:100})
// обращаемся к самой функции конвертирования, далее выполняем функцую, принимающую как параметр ответ
currencyConverter.convert().then((response) => {
    console.log(response) 
})