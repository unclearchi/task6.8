const consoleLog = document.querySelector('#consoleLog');
const consoleLog2 = document.querySelector('#alert');
const consoleLog3 = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
alert('Служит для вывода информации в консоль')
})

consoleLog2.addEventListener('click', () => {
alert('Служит для отображении информации')
})


consoleLog3.addEventListener('click', () => {
prompt('Служит для ввода информации')
})
