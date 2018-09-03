
window.onload = function(){
    document.getElementById("botao").onclick = function(){

        var ajax = new XMLHttpRequest();

        var r = document.getElementById("resposta");

        //buscando a alteração no servidor
        ajax.onreadystatechange = function(){
            //Status da comunicação
            //1 - Inicio de comunicação
            //2 - inicio de requisicao ao servidor
            //3 - o servidor esta em processo de envio de resposta
            //4 - o servidor mandou a resposta do servidor
            if(ajax.readyState == 4){
                //status=200 - servidor encontrou a requisição
                //status=404 - não encontrado
                //statusText - traz um texto representacao o status
                //responseText - traz o resultado da requisicao em TXT
                //responseText - traz o resultado da requisicao em XML
                //alert(ajax.responseText);
                //r.appendChild(document.createTextNode(ajax.responseText));


            }
        }

        //função para indicar aonde o AJAX tem q acessar
        //POST - Grande quantidade de informação
        //GET - Pequena quantidade de informação
        //ex: ajax.open("POST","www.google.com.br"); //este 2 parametros sao obrigatorios
        //ajax.open("POST","ajax.txt");
        ajax.open("POST","arquivo.xml");
        ajax.send(null); //iniciar a requisição com o servidor

        return false;
    }
}