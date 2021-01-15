const input = document.querySelector('input');
const sendBtn = document.querySelector('.sendBtn');
const displayMessage = document.querySelector('.display');

sendBtn.addEventListener('click',messageOut);


function messageOut(){

      displayMessage.innerHTML= input.value;
}