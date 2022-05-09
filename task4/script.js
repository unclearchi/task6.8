const link = document.querySelector('a');
link.addEventListener('click',
function(e)  {
    e.preventDefault()
    link.textContent = prompt('Изменить ссылку')

})

//const consoleLog = document.querySelector('class');
//const userText = prompt('Введите текст');
//const userTextField = document.querySelector('#userTextField');
///userTextField.textContent = userText;
//console.log('Текст в блоке с id userTextField изменён на', userText);


//consoleLog.addEventListener('click', () => {
//prompt('Введите текст замену')
//})
