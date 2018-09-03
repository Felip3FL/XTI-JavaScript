window.onload = function(){
    carregaPoltronas();

    var imagens = document.getElementsByTagName("img");
    for(var i=0; i < imagens.length; i++){
        imagens[i].onclick =  verificarStatus(i);
    }

}

 
function verificarStatus(poltrona){
    return function(){
        var src = document.getElementsByTagName("img")[poltrona].src;
        var msg = "";
        if (src.indexOf("chairON.jpg") > 0){
            msg = "Poltrona Disponível"
        }else if (src.indexOf("chairOFF.jpg") > 0){
            msg = "Poltrona Indisponível"
        }else{
            msg = "Esta Poltrona é sua"
        }
        alert(msg);
    }
}

var poltronas = new Array(
    false,
    true,
    false,
    true,
    true,
    true,
    false,
    true,
    true
);

function carregaPoltronas(){
    var arrayImagens = document.getElementsByTagName("img");
    for(var i = 0; i < arrayImagens.length; i++){
        if(poltronas[i]){
            arrayImagens[i].src = "chairON.jpg";
        }else{
            arrayImagens[i].src = "chairOFF.jpg";
        }
    }
}

function selecionarPoltrona(){
    var arrayImagens = document.getElementsByTagName("img");
    for(var i = 0; i < poltronas.length; i++){
        if(poltronas[i]){
            arrayImagens[i].src = "chairSelect.jpg"

            var quer = confirm("Você quer esta poltrona");
            if(quer){
                break;
            }else{
                arrayImagens[i].src = "chairON.jpg";
            }
            
        }
    }
}

function selecionarPoltronaParaCasal(){
    var arrayImagens = document.getElementsByTagName("img");
    for(var i = 0; i < poltronas.length; i++){
        if(poltronas[i] && poltronas[i+1]){
            arrayImagens[i].src = "chairSelect.jpg"
            arrayImagens[i+1].src = "chairSelect.jpg"

            var quer = confirm("Você quer estas poltronas? ");
            if(quer){
                break;
            }else{
                arrayImagens[i].src = "chairON.jpg";
                arrayImagens[i+1].src = "chairON.jpg";
            }
            
        }
    }   
}