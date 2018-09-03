
window.onload = function(){
    document.getElementById("botao").onclick = function(){
        requisitar("http://cep.republicavirtual.com.br/web_cep.php?cep=91010000&formato=xml");
        return false;
    }
}

function mostrar(ajax){
    var r = document.getElementById("resposta");

    //remover o load para carregar a info
    while(r.hasChildNodes()){
        r.removeChild(r.lastChild);
    }

    //var resultado = ajax.responseXML;
    //var url = resultado.getElementsByTagName("url")[0].firstChild.nodeValue;
    //r.appendChild(document.createTextNode(url));
    alert(ajax.respondeText);
}

function carregando(c){
    //remover todos os valores do containe
    while(c.hasChildNodes()){
        c.removeChild(c.lastChild);
    }
    var img = document.createElement("img");
    img.setAttribute("src","load.gif");
    c.appendChild(img);
}

function requisitar(url){
    var ajax = iniciaAjax();
    carregando(document.getElementById("resposta"));
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            mostrar(ajax);
        }
    }

    ajax.open("POST",url);
    ajax.send(null); 
}

function iniciaAjax(){
    var ajax = null;

    //verificar se existe o objeto no meu navegador:
    if (window.XMLHttpRequest){
        ajax = new XMLHttpRequest();
    }else if (window.ActiveXObject){
        try{
            ajax = new ActiveXObject("Msxml2.XMLHTTP") 
        }catch(e){
            ajax = new ActiveXObject("Microsoft.XMLHTTP")
        }
        
    }
    return ajax;
}