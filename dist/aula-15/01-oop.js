class Estabelecimento {
    endereco;
    setor;
    produtos;
    _filaDeEspera = 10;
    constructor(endereco, setor, produtos, filaDeEspera) {
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera;
    }
    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    }
    get filaDeEspera() {
        return this._filaDeEspera;
    }
    set filaDeEspera(fila) {
        if (fila <= 0) {
            return;
        }
        this._filaDeEspera = fila;
    }
    diminuiFilaDeEspera() {
        if (this._filaDeEspera === 0) {
            return;
        }
        this._filaDeEspera -= 1;
    }
}
class Farmacia extends Estabelecimento {
    endereco;
    setor;
    produtos;
    constructor(endereco, setor, produtos, filaDeEspera) {
        super(endereco, setor, produtos, filaDeEspera);
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
    }
    compraRemedioPrescrito(receita) {
        const nomeDosRemediosReceitados = receita.remedios;
        const remediosDisponiveis = this.retornaNomeDosProdutos().filter(produto => nomeDosRemediosReceitados.includes(produto));
        console.log(remediosDisponiveis);
    }
}
const supermercado = new Estabelecimento('Rua Dos Abacates, 1320 - bloco A', 'alimentação', [
    { nome: 'banana', valor: 8 },
    { nome: 'beijinho', valor: 2.5 },
    { nome: 'carne moida', valor: 20 },
], 25);
const farmaciaDoZe = new Farmacia('Rua X, 1299', 'farmaceutico', [
    { nome: 'aspirina', valor: 8 },
    { nome: 'remédio controlado', valor: 2.5 },
    { nome: 'vitamina C', valor: 20 },
]);
// não temos acesso diretamente no objeto instanciado a produtos e _filadeEspera
// supermercado.produtos
// supermercado._filaDeEspera
supermercado.retornaNomeDosProdutos();
farmaciaDoZe.compraRemedioPrescrito({
    remedios: ['aspirina', 'remédio controlado', 'shampoo'],
    identificacaoDoMedico: '123-456-111'
});
export {};
