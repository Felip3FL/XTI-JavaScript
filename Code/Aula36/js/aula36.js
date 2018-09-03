window.onload = function(){

    document.getElementById("texto").focus();

    var botao = document.getElementById("botao");
    var div = document.getElementById("primeira");

    botao.onclick = function(evt){
        //evt.stopPropagation();
        //alert("botao");

        //this representa o proprietario da função
        //representa o elemento que chamou 
        alert(this.id);
    }

    // div.onclick = function(){
    //     alert("div");
    // }

    // document.onclick = function(){
    //     alert("document");
    // }

    document.getElementById("texto").onblur = function(){
        alert(this.value);
    }
    

}

