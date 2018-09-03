/*
    função: ligar()
    autor: Felip3FL
    descrição: aoresenta o nome do usuario e liga a lampada
 */
function ligar(){

    var nome = window.prompt("Qual é o seu nome:");
    alert("Prazer em conhecer voce " + nome);

    window.document.getElementById("lampada").src="on.png";
}


function desligar(){
    window.document.getElementById("lampada").src="off.jpg";
}