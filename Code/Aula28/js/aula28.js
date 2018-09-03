document.write("Declarando Array multidimensionais");
var pessoas = new Array(
    ["Felipe","25"],
    ["Pamela","20"]
);


document.write("<br>Array: " + pessoas);
document.write("<br>Array posicao 1,0: " + pessoas[1][0]);
document.write("<br>Array posicao 0,1: " + pessoas[0][1]);


///////////////////////////////////////////////////////////////////////


document.write("<br><br><br>Declarando Array Associativo {} ");
var pessoasAssociativo = {
    nome:"Felipe",
    idade:"25"
};


document.write("<br>Array: " + pessoasAssociativo);
document.write("<br>Array pela propriedade nome: " + pessoasAssociativo.nome);
document.write("<br>Array pela propriedade nome: " + pessoasAssociativo["nome"]);


///////////////////////////////////////////////////////////////////////


var frutas = ["maça","banana","laranja"];

function tipoElementos(elem, ind, obj){
    return (typeof elem == "string");
}

//every chama todas os elementos da array e compara o todos resultado são TRUE ou FALSE
document.write("<br>Todos são string? " + frutas.every(tipoElementos));


///////////////////////////////////////////////////////////////////////


var frutas1 = ["maça","banana","laranja",123];

function tipoElementos(elem, ind, obj){
    return (typeof elem == "number");
}

//some chama todas os elementos da array e compara se algum resultado são TRUE ou FALSE
document.write("<br>Algum é string? " + frutas1.some(tipoElementos));


///////////////////////////////////////////////////////////////////////


var frutas2 = ["maça","banana","laranja"];

function tipoElementos(elem, ind, obj){
    return (elem.indexOf("an") > 0);
}

//pesquisa certa palavra dentro do array
document.write("<br>Tem algum com a letra AN? " + frutas2.filter(tipoElementos));


///////////////////////////////////////////////////////////////////////


var frutas2 = ["maça","banana","laranja"];

function tipoElementos(elem, ind, obj){
    return (elem = elem.toUpperCase());
}

//map server para alterar todos os elementos
document.write("<br>Transforma todos em MAIUSCULO: " + frutas2.map(tipoElementos));

