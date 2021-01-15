const input = document.querySelector('input');
const sendBtn = document.querySelector('.sendBtn');
const displayMessage = document.querySelector('.display');

sendBtn.addEventListener('click',messageOut);


function messageOut(){
      
      if(input.value === ''){
            alert('please Enetr valid Info')
      }else{
      displayMessage.innerHTML= input.value;
      input.value = '';
      }

      
}
