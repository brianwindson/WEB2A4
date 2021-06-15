function Carro(){
    this.ano;
    this.fabricante;
}

function Vectra(){
    Pessoa.call(this);
    this.carroceria;
    this.transmissao;
    this.portas;
}
Vectra.prototype = Object.create(Carro.prototype);

var novoVectra = new Vectra;
novoVectra.ano ="1993";
console.log(novoVectra.ano)
novoVectra.fabricante = "Chevrolet";
console.log(novoVectra.fabricante);
novoVectra.carroceria = "Sedan";
console.log(novoVectra.carroceria);
novoVectra.transmissao = "Automatica";
console.log(novoVectra.transmissao);
novoVectra.portas = "4";
console.log(novoVectra.portas);