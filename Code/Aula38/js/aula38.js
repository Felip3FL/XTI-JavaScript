
window.onload = function(){
    document.getElementById("lampada").onclick = ligar;

    //Exercuta em tempo em tempo
    setInterval(apresentaHoras,1000);
    
}

function ligar(){
    document.getElementById("lampada").src = "on.png";

    //Executa uma unica vez
    setTimeout("desligar()", 2000);



    //limpar o temporizador
    //clearTimeout(...)
}

function desligar(){
    document.getElementById("lampada").src = "off.jpg";
}

function apresentaHoras(){
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds()
    document.getElementById("horas").innerHTML = horas;
}