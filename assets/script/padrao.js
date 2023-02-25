function abrirMenu(){
    const fundo = document.querySelector('#dvFundoMenu');

    let h = fundo.style.height;

    fundo.style.transition = 'height 250ms linear'

    if(h=='calc(100vh - 150px)'){
        fundo.style.height = '0px';

        setTimeout(function(){
            fundo.style.display = 'none';
        }, 250);
    }else{
        fundo.style.display = 'block';

        setTimeout(function(){
            fundo.style.height = 'calc(100vh - 150px)';
        }, 100);        
    }    
}

const hamb = document.querySelector('#imgIcon');
hamb.addEventListener('click', abrirMenu);