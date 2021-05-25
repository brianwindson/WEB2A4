//Nao declarar numeros, strings or Boolean como objetos
// Declarar como objetos pode porduzir erros

//Exemplo ruim:

var x = "palavra";
var y = new String("palavra");

(x===y) //Retorna falso porque x é uma string e y é um objeto


//Exemplo bom:
var x = "palavra";
var y = "palavra";
(x===y) //a comparação agora é possivel