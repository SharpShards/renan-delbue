function aumentarImg(){
    this.style.flex = '2';
    this.style.transform = 'scale(1.2)';
    this.style.zIndex = '3';
    this.style.transition = '250ms linear';
}

function diminuirImg(){
    this.style.flex = '1';
    this.style.transform = 'scale(1)';
    this.style.zIndex = '1';
    this.style.transition = '250ms linear';
}

function abrirVisual(e){
    fundo.style.display = 'flex';

    let visu = document.querySelector('#imgImagem');

    visu.setAttribute('src',e.target.getAttribute('src'));
}

function fecharFundo(e){
    if(e.target == fundo){
        fundo.style.display = 'none';
    }
}

const proj = document.querySelectorAll('#sctProjetos .dvImagem');
for(let loop = 0; loop < proj.length; loop++){
    proj[loop].addEventListener('mouseover', aumentarImg);
    proj[loop].addEventListener('mouseout', diminuirImg);
}

const img = document.querySelectorAll('.dvImagem img');
for(let loop = 0; loop < img.length; loop++){
    img[loop].addEventListener('click', abrirVisual);
}

const fundo = document.querySelector('#dvFundoImg');
fundo.addEventListener('click', fecharFundo);