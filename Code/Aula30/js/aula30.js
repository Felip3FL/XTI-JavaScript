var data = new Date();
document.write("<br>Data do computador atual: " + data);
document.write("<br>Formato para exibição: " + data.toLocaleDateString());
document.write("<br>Formato para exibição: " + data.toDateString());

var data2 = new Date(123456);
document.write("<br>01/01/1970 123456 : " + data2);

var data3 = new Date("Jul-20-2016 02:30:20");
document.write("<br>Informado a data Jul-20-2016 02:30:20: " + data3);

var data4 = new Date(1992,6,30);
document.write("<br>Informado uma data: " + data4);

var data5 = new Date();
document.write("<br>Data Brasil: " + data5.getHours());
document.write("<br>Data Universal: " + data5.getUTCHours());

var data6 = new Date("jul/10/2014 04:30:20");
document.write("<br>Data informada local: " + data6.getHours());
document.write("<br>Data informada Universal: " + data6.getUTCHours());

//Dia da semana
var dias = ["sunday","monday","tuesday","wednesday","thursday","friday","sartuday"]
var data7 = new Date("Jun-30-1992");
document.write("<br>Dia da semana: " + dias[data7.getDay()]);

var data8 = new Date();
document.write("<br>Ano com todos os digitos: " + data8.getFullYear());

var data9 = new Date();
document.write("<br>Quantidade de milesegundos: " + data9.getMilliseconds());

var data10 = new Date();
document.write("<br>Retorna o mes: " + data10.getMonth());

data10.setMonth(6);
document.write("<br>Retorna o mes: " + data10.getMonth());

