function handleJustFunctionClick(){
    const ClickText = document.getElementById('textP');
    ClickText.innerText = 'set by using function'
};

document.getElementById('directHandler').addEventListener('click', function(){
    const ClickText = document.getElementById('textP');
    ClickText.innerText = 'Direct Add Event Listener'
});

document.getElementById('update-name').addEventListener('click', function(){
const textField = document.getElementById('input-text');
const ClickText = document.getElementById('textP');
    ClickText.innerText = textField.value;
    textField.value = ''
})