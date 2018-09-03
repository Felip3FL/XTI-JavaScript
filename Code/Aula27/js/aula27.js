//Array Indexado
var paisesSemValoresInicial = new Array();
var paisesPreenchida = new Array("Brasil","Rússia","India","China","BRAZIL");

var paisesPreenchidaTipo2 = new Array();
paisesPreenchidaTipo2[0] = "Brasil"
paisesPreenchidaTipo2[1] = "Rússia"
paisesPreenchidaTipo2[2] = "India"
paisesPreenchidaTipo2[3] = "China"
paisesPreenchidaTipo2[4] = "BRAZIL"

//Exibir valores
document.writeln("<br>Apresenta todos os elemento array: " + paisesPreenchida);
document.writeln("<br>Apresenta elemento determinada posicao: " + paisesPreenchida[1]);

//Alterar valores
paisesPreenchida[0] = "BRAZIL"
document.writeln("<br>Pos-atualizacao: " + paisesPreenchida[0]);

//Tamanho da Array
document.writeln("<br>Tamanho array: " + paisesPreenchida.length);

//Percorer a array
for (var i = 0; i<paisesPreenchida.length; i++){
    document.writeln("<br>Valores posicao " + i + ": " + paisesPreenchida[i]);
}

//Saber o indice do elemento
document.writeln("<br>Indice Rússia: " + paisesPreenchida.indexOf("Rússia"));
document.writeln("<br>Indice BRAZIL: " + paisesPreenchida.indexOf("BRAZIL"));

//Ultima occorencia encontrada
document.writeln("<br>Posição ultima occorencia encontrada: " + paisesPreenchida.lastIndexOf("BRAZIL"));

//STRING
//Tratando String como array
var tipoString = "Felipe";
for(var i=0; i<tipoString.length; i++){
    document.writeln("<br>Valores posicao " + i + ": " + tipoString[i]);
}


//Inverte a orden
document.writeln("<br>Inverte: " + paisesPreenchida.reverse());


//Ordenar em ordem alfabética
document.writeln("<br>ordem alfabética: " + paisesPreenchida.sort());

//Alterar o separador padrão
document.writeln("<br>outro separador: " + paisesPreenchida.join(" - "));

//Contatenar array 
document.writeln("<br>Contatenar array: " + paisesPreenchida.concat("EUA","Argentina"));


//Retorna elemento a parti de certa posição pra frente
document.writeln("<br>posição 2 pra frente: " + paisesPreenchida.slice(2));
document.writeln("<br>posição 2 a 4: " + paisesPreenchida.slice(2,4));

//Remover e incluir elemento e certa posição
document.writeln("<br>Antes splice:" + paisesPreenchida);
paisesPreenchida.splice(3,3,"Alemanha","Irlanda");
document.writeln("<br>Depois splice:" + paisesPreenchida);


//TRABALHANDO COM FILAS FIFO
document.writeln("<br><br><br>TRABALHANDO COM FILAS FIFO");

var pessoas = new Array("Felipe","Paloma","Pamela","Roberio");
document.writeln("<br>Adicionar pessoa a fila");
pessoas.push("Bruno"); //Adicionar pessoa a fila
document.writeln("<br>Fila pessoas:" + pessoas);

//Remover da fila a primeira pessoa
document.writeln("<br>Remover pessoa da fila ");
pessoas.shift(); //Remover pessoa da fila
document.writeln("<br>Fila pessoas:" + pessoas);

//Remover a ultima pessoa da fila
document.writeln("<br>Remover a ultima pessoa da fila ");
pessoas.pop(); //Remover a ultima pessoa da fila
document.writeln("<br>Fila pessoas:" + pessoas);

//Adicionar pessoa no inicio da fila
document.writeln("<br>Adicionar pessoa no inicio da fila ");
pessoas.unshift("Joao"); //Adicionar pessoa no inicio da fila
document.writeln("<br>Fila pessoas:" + pessoas);
