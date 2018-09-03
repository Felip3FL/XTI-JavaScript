// Função tipo Declarativa 

function somar(x,y){
    return x + y
}

document.write("<BR>Função somar 1 : " + somar(1,2));




// Função tipo Anômina

var somar2 = new Function("x","y","return x + y");
document.write("<BR>Função somar 2 : " + somar2(1,2));




// Função tipo Literal (mais recente, mais nova)

var somar3 = function(x,y){
    return x + y;
}

document.write("<BR>Função somar 3 : " + somar3(1,2));



////////////////////////////////////////////////////////////////////



window.onload = function(){

    document.getElementById("clickAqui").onclick = function(){
        alert("Deu Certo!");
    }

}

