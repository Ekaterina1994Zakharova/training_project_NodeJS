// подключение встроенного модуля "os" 
const os = require('os')
// используем возможности этого модуля
let res = os.platform()
console.log(res)


// импортируем файл из текущей папки
const my_math = require('./my_math')
// вызываем функции из файла в этой же папке
let res1 = my_math.add(4,5)
let res2 = my_math.minus(3,1)
console.log(`Res1: ${res1}, Res2: ${res2}`)