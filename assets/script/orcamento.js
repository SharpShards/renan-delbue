function dispararMensagem(){
    const inp = document.querySelectorAll('input');
    const ta = document.querySelector('textarea');

    for(let loop = 0; loop < inp.length; loop++){
        inp[loop].value = '';
    }

    ta.value = '';

    const popup = document.createElement('div');
    popup.style.height = 'fit-content';
    popup.style.width = 'fit-content';
    popup.style.backgroundColor = 'var(--branco)';
    popup.style.borderRadius = '12px';
    popup.style.marginTop = '20px';
    popup.style.marginRight = '20px';
    popup.style.padding = '20px';
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.right = '0';
    
    const text = document.createElement('p');
    text.innerText = 'E-mail enviado com sucesso!';
    text.style.color = 'var(--principal)';
    text.style.fontSize = '2.2rem';    
    text.style.fontWeight = '500';    
        
    fundo.appendChild(popup);
    popup.appendChild(text);

    setTimeout(function(){
        fundo.removeChild(popup);
    },10000);
}

let stt = false;

const fundo = document.querySelector('main');

const form = document.querySelector('#frmForm');
form.addEventListener('submit', dispararMensagem);