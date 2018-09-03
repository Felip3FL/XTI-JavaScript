var regex1 = new RegExp("JavaScript");
//ou
var regex2 = /JavaScript/;

var string = "JavaScript";
document.write("<br>Encontrou um padrão? " + regex1.test(string));


//Modificadores i
var regex3 = new RegExp("JavaScript","i");
//ou
var regex4 = /JavaScript/i;

var string = "javascript";
document.write("<br>Encontrou um padrão? " + regex3.test(string));


//chamando o teste direto
document.write("<br>" + /javascript/i.test("JavaScript"));

var str = "Qual é o doce mais doce que o doce";
//Encontrando um primeiro padrao, mas retorna apenas 1
document.write("<br>Exec se alguma parte tem o padrao: " + /doce/i.exec(str));

//Encontrando todos os padrao com modificador g, mas retorna apenas 1
document.write("<br>Exec se alguma parte tem o padrao: " + /doce/ig.exec(str));

//Encontrando todos os padrao com modificador g
document.write("<br>Exec se alguma parte tem o padrao: " + str.match(/doce/ig));



////////////////////////////////////////////////////////////////////////////////////
// Metacaracteres //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

document.write("<br><br>Existem algum caractere? " + /./.test("Felipe10"));
document.write("<br>Existem algum a-z 0-9 _? " + /\w/.test("Felipe10"));
document.write("<br>Existem espaco? " + /\s/.test("Felipe10"));
document.write("<br>Existem numeros? " + /\d/.test("Felipe10"));
document.write("<br>Comeca com 10? " + /^10/.test("Felipe10"));
document.write("<br>Termina com 10? " + /10$/.test("Felipe10"));

document.write("<br>Existem 1 numero no final? " + /\d$/.test("Felipe10"));
document.write("<br>Existem 2 numero no final? " + /\d\d$/.test("Felipe10"));
document.write("<br>Existem 3 numero no final? " + /\d\d\d$/.test("Felipe10"));

document.write("<br>Cep 08190-400 valido? " + /\d\d\d\d\d-\d\d\d$/.test("08190-400"));


////////////////////////////////////////////////////////////////////////////////////
// Quantificadores /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

document.write("<br><br>Existem numeros 10 ? (d) " + /\d*/.test("Felipe")); //0 ou mais
document.write("<br>Existem numeros 10? (+) " + /\d+/.test("Felipe")); //1 ou mais 
document.write("<br>Existem numeros 10? (?) " + /\d?/.test("Felipe")); //0 ou 1 vez
document.write("<br>Existem numeros 10? ({2}) " + /\d{2}/.test("Felipe10")); //informa a quantidade de digitos
document.write("<br>Existem numeros 10? " + /\d{2}$/.test("Felipe10")); //no final
document.write("<br>Cep 08190-400 valido? " + /\d{5}-\d{3}$/.test("08190-400"));
document.write("<br>Data 12/02/2014 valido? " + /^\d{2}\/\d{2}\/\d{2,4}$/.test("12/02/2014"));
document.write("<br>Email felip3.fl@gmail.com valido? " + /\w+@\w+\.\w{2,3}/.test("felip3.fl@gmail.com"));


////////////////////////////////////////////////////////////////////////////////////
// Caracteres opcionais ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

document.write("<br><br>felipe é valido ? " + /felip[ei]/.test("felipi"));
document.write("<br>felipi é valido ? " + /felip[ei]/.test("felipi"));
document.write("<br>23.45 valido ? " + /\d[\d\.]*/.test("23.45"));


////////////////////////////////////////////////////////////////////////////////////
// Buscas e substituicoes //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

document.write("<br><br>Busca a palavra doce: " + str.match(/doce/ig));
document.write("<br>Apos Substituir: " + str.replace(/doce/ig, "DOCINHO"));

var frase = "o rato roeu a roupa do rei de roma";
document.write("<br><br>Busca a palavra doce: " + frase.match(/r[a-z]/ig));
document.write("<br>Substituir: " + frase.replace(/r[a-z]/ig,"XXX"));

var url = "www.xti.com.br/clientes-2011.html";
var re = /www.xti.com.br\/\w{2,}-\d{4}\.html/
document.write("<br>URL valida? " + re.test(url));
re = /(www.xti.com.br)\/(\w{2,})-(\d{4})\.html/

document.write(url.replace(re,"<br>http://$1/$3/$2.jsp"));