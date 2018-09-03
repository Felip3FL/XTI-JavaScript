
window.onload = function(){
   
    //funcoes para pegar os elementos
    var titulos = document.getElementById("tit_id");
    titulos = document.getElementsByName("tit_name");
    titulos = document.getElementsByClassName("tit_class");
    titulos = document.getElementsByTagName("h2");
    titulos = document.querySelector("#tit_id")
    alert(titulos)

    //funcoes para altera valores no html - NÃO RECOMENDADO
    titulos.innerHTML = "OUTRO TEXTO!";

    titulos.style.color = "#0000FF" //DOM HTML API
    titulos.setAttribute("style","color:#0000FF") //DOM Core API


    var texto = document.getElementById("texto");
    texto.size = "100";
    texto.setAttribute("size","100");
}


