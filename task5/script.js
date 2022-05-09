const input = document.querySelector('input');
const textArea = document.querySelector('#duplicateField');
const button = document.querySelector('button');
input.addEventListener('input', () => {
    textArea.textContent = input.value;
});
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(input.value);
    input.value = "";
    textArea.textContent = "";
});