let txtField = document.querySelector('.main');
let key = document.querySelector('#Key');
let info = document.querySelector('.info');
let charCode = document.querySelector('#keyCode');
let which = document.querySelector('#which');



document.addEventListener('keydown' , e => {

    txtField.innerHTML = `<p class="keyText">${e.keyCode}</p>`;
    key.innerText = e.key;
    charCode.innerText = e.code;
    which.innerText = e.which;
  
    console.log(e);
    info.classList.remove('display');
    
})

