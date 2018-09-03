
window.onload = function(){
    document.getElementById("lampada").onclick = ligar;
    setInterval(apresentaHoras,1000);

    //document.cookie="nome=valor; expires=dataFormatoGMT; path=/";

    //lendo o cookie
    var nome = readCookie("nome");

    //se não existir o cookie, ele pergunta o nome
    if (nome == null){
        
        nome = prompt("Qual é o seu nome? ");

        //nome do cookie, valor do cookie, e data que validade
        writeCookie("nome", nome, 1);
        
    }
    

}

function ligar(){
    document.getElementById("lampada").src = "on.png";

    var nome = readCookie("nome");
    if(nome != null){
        alert("Bem-Vindo! " + nome);
    }

}

function desligar(){
    document.getElementById("lampada").src = "off.jpg";
}

function apresentaHoras(){
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds()
    document.getElementById("horas").innerHTML = horas;
}