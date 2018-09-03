
window.onload = function(){
   
    //Navegar na Árvore de Documento
    //Tipos de nós (Documentos, Elementos, atributo e Texto)
    //Parentesco dos Nós (pai=parent, filho=child, irmao=sibling)

    var div = document.getElementsByName("div").item(0);
    //alert(div.parentNode); //pai (pai é apenas 1)
    //alert(div.childNodes); //filhos (pode ser varios)

    var ul = div.childNodes.item(0);
    //var ul = div.childNodes.length;
    //alert(ul); //primeiro filho

    //pegar o tipo:
    //alert(ul.nodeType); //1-Elementos; 2=Atributo; 3=Texto;

    alert(ul.firstChild);//pegar a primeira li (filho)
    //alert(ul.lastChild);//pegar a ultima li (filho)

    //alert(ul.firstChild.firstChild.nodeType);

    //Recuperar valor 
    //var li = ul.firstChild.lastChild.childNodes[1];
    //alert(li.firstChild.nodeValue);

}