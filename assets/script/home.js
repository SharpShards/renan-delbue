function transicaoBanner(){        
    let slide = document.querySelectorAll('.dvSlide');
    
    setTimeout(function(){
        if(progresso0 == 'flex'){
            slide[0].style.display = 'none';

            progresso0 = "none";
        }else if(progresso1 == 'flex'){
            slide[1].style.display = 'none';
            
            progresso1 = "none";
        }else if(progresso2 == 'flex'){
            slide[2].style.display = 'none';

            progresso2 = "none";        
        }else{
            slide[0].style.display = 'flex';
            slide[1].style.display = 'flex';
            slide[2].style.display = 'flex';
            slide[3].style.display = 'flex';

            progresso0 = 'flex';
            progresso1 = 'flex';
            progresso2 = 'flex';
    }}, 20000);
}

setInterval(transicaoBanner, 5000);
let progresso0 = 'flex';
let progresso1 = 'flex';
let progresso2 = 'flex';