const fs = require('fs')

/*// создаем папку синхронно
fs.mkdirSync('text-files')
*/

// создаем папку "text-files" асинхронно
// в нее помещаем текст "Hello"
fs.mkdir('text-files', () => {
    fs.writeFile('./text-files/some.text', 'Hello', () =>{})
})


// удаление папки
/* необходимо сначала удалять содержимое папки, а затем и ее саму
*/
/*fs.unlink('./text-files/some.text', () =>{
    fs.rmdir('./text-files', () => {})
})
*/