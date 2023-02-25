function expandirConteudo(){
    this.children[0].style.transform = "scale(1.1)";
    this.children[0].style.transition = "transform 400ms linear";

    this.children[1].style.opacity = "1";
    this.children[1].style.transition = "opacity 400ms linear";
}

function esconderConteudo(){
    if(this != elemento){
        this.children[0].style.transform = "scale(1)";
        this.children[0].style.transition = "transform 400ms linear";

        this.children[1].style.opacity = "0";
        this.children[1].style.transition = "opacity 400ms linear";
    }
}

function mostrarDesc(){
    desc.style.display = 'flex';
    desc.style.height = 'fit-content';
    desc.style.transition = "400ms linear";

    if(this.children[0].innerText == 'DRONE'){
        cont[1].style.opacity = '0';
        cont[2].style.opacity = '0';
        cont[3].style.opacity = '0';

        cont[1].style.display = 'none';
        cont[2].style.display = 'none';
        cont[3].style.display = 'none';

        cont[0].style.display = 'flex';
        cont[0].style.opacity = '1';
        cont[0].style.height = '100%';
    }else if(this.children[1].innerText == 'Em estúdio e ao ar livre'){
        cont[0].style.opacity = '0';
        cont[2].style.opacity = '0';
        cont[3].style.opacity = '0';

        cont[0].style.display = 'none';
        cont[2].style.display = 'none';
        cont[3].style.display = 'none';

        cont[1].style.display = 'flex';
        cont[1].style.opacity = '1';
        cont[1].style.height = '100%';
    }else if(this.children[1].innerText == 'Produtos'){
        cont[1].style.opacity = '0';
        cont[0].style.opacity = '0';
        cont[3].style.opacity = '0';

        cont[1].style.display = 'none';
        cont[0].style.display = 'none';
        cont[3].style.display = 'none';

        cont[2].style.display = 'flex';
        cont[2].style.opacity = '1';
        cont[2].style.height = '100%';
    }else if(this.children[0].innerText == 'EVENTOS'){
        cont[1].style.opacity = '0';
        cont[2].style.opacity = '0';
        cont[0].style.opacity = '0';

        cont[1].style.display = 'none';
        cont[2].style.display = 'none';
        cont[0].style.display = 'none';

        cont[3].style.display = 'flex';
        cont[3].style.opacity = '1';
        cont[3].style.height = '100%';
    }

    for(let loop = 0; loop < cont.length; loop++){
        cont[loop].style.transition = "opacity 800ms linear";
    }
}

function fecharDesc(){
    elemento = " ";
    
    cont[0].style.opacity = '0';
    cont[1].style.opacity = '0';
    cont[2].style.opacity = '0';
    cont[3].style.opacity = '0';

    setTimeout(function(){
        desc.style.height = '0px';
    }, 400);

    setTimeout(function(){
        desc.style.display = 'none';
    }, 800);

    for(let loop = 0; loop < card.length; loop++){
        card[loop].children[0].style.transform = "scale(1)";
        card[loop].children[0].style.transition = "transform 400ms linear";

        card[loop].children[1].style.opacity = "0";
        card[loop].children[1].style.transition = "opacity 400ms linear";

        card[loop].children[1].children[2].style.transform = "rotateZ(0deg)";
        card[loop].children[1].children[2].style.transition = "transform 100ms linear";
    }
}

function abrirConteudo(){
    let x = this.children[1].children[2].style.transform;

    if(x == 'rotateZ(45deg)'){
        fecharDesc();
    }else{
        elemento = this;

        for(let loop = 0; loop < card.length; loop++){
            card[loop].children[0].style.transform = "scale(1)";
            card[loop].children[0].style.transition = "transform 400ms linear";

            card[loop].children[1].style.opacity = "0";
            card[loop].children[1].style.transition = "opacity 400ms linear";

            card[loop].children[1].children[2].style.transform = "rotateZ(0deg)";
            card[loop].children[1].children[2].style.transition = "transform 100ms linear";
        }

        this.children[0].style.transform = "scale(1.1)";
        this.children[0].style.transition = "transform 400ms linear";

        this.children[1].style.opacity = "1";
        this.children[1].style.transition = "opacity 400ms linear";

        this.children[1].children[2].style.transform = "rotateZ(45deg)";
        this.children[1].children[2].style.transition = "transform 100ms linear";
    }
}

let elemento;

const card = document.querySelectorAll('#sctServicos .dvCard');
for(let loop = 0; loop < card.length; loop++){
    card[loop].addEventListener('mouseover', expandirConteudo);
    card[loop].addEventListener('mouseout', esconderConteudo);

    card[loop].addEventListener('click', abrirConteudo);

    card[loop].children[1].addEventListener('click', mostrarDesc);
}

const desc = document.querySelector('#dvDesc');

const cont = document.querySelectorAll('#sctServicos #dvDesc .dvSub');