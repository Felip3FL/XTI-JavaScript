
window.onload = function(){
   

    //Objeto Imagem: http://www.w3schools.com/jsref/dom_obj_image.asp
    //Recuperar coleção de imagens HTML
    //alert("Quantidade de imagem: " + document.images.length)

    var img = document.images;
    for(var i = 0; i < img.length; i++){
        //alert(img.item(0));
    }

    //recupera o elemento que tenha o nome "on"
    //alert(img.namedItem("on").name);

    //pegar o link 
    //alert(document.links[1]);

    //atribuir um alt a um link e acessa-lo em seguida
    //document.links[0].alt = "titulo";
    //alert(document.links[0].alt);

    //pegar a coleção de formularios
    //alert(document.forms.length); //qtde de forms
    //alert(document.forms[0]);

    //adicionarLinha("welcome 1","bem vindo 1");

    var btn = document.getElementById("btn");
    btn.onclick = function(){
        var l = document.links;
        for(var i = 0; i <l.length;i++ ){
                adicionarLinha(l[i], l[i].href)
        }
    }

}


function adicionarLinha(texto1, texto2){
    //pegar as tabelas
    var tabelas = document.getElementsByTagName("table").item(0);
    alert(tabelas);

    //criar uma nova linha na tabelas
    var row = tabelas.insertRow(-1);
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);

    cel1.appendChild(document.createTextNode(texto1));
    cel2.appendChild(document.createTextNode(texto2));

}