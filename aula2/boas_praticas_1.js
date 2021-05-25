// DECLARAR VARIAVEIS GLOBAIS NO TOPO
// Código mais limpo, mais legível e evita re-declarações
// EXEMPLO RUIM:

function adicionarConta() {
    var conta = [];
    var soma = [];
    var total = 0; 
    var items = 0;


}

function adicionarItems() {
    for(let i = 0; i < 10; i++){
        items = i;
    }
}

function somarItems(){
    
}

// EXEMPLO CORRETO

var contas = [];    
var soma = [];
var total = 0;
var items = 0;

function adicionarConta() {


}

function adicionarItems() {
    for(let i = 0; i < 10; i++){
        items = i;
    }
}

function somarItems(){
    
    }
