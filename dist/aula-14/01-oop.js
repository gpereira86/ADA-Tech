// class Estabelecimento {
//
//     private endereco: string
//     private setor: string
//     private produtos: Produto[]
//
//     constructor(endereco: string, setor: string, p: Produto[]) {
//         this.endereco = endereco
//         this.setor = tipo
//         this.produtos = p
//     }
// }
class EstabelecimentoBase {
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
const padaria = {
    endereco: 'Rua Dos Laranjais, 1320 - bloco D',
    tipo: 'alimentação',
    produtos: [
        { nome: 'pão', valor: 0.8 },
        { nome: 'arroz', valor: 10 },
        { nome: 'leite', valor: 5 },
        { nome: 'brigadeiro', valor: 1.5 },
        { nome: 'carne moida', valor: -20 },
    ],
    retornaNomesDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    },
    _filaDeEspera: 5,
    get filaDeEspera() {
        return this._filaDeEspera;
    },
    set filaDeEspera(fila) {
        if (fila <= 0) {
            return;
        }
        this._filaDeEspera = fila;
    }
};
// Object.freeze(padaria)
const padaria2 = {
    endereco: 'Rua Dos Abacates, 1320 - bloco D',
    tipo: 'alimentação',
    produtos: [
        { nome: 'pão', valor: 0.8 },
        { nome: 'arroz', valor: 10 },
        { nome: 'leite', valor: 5 },
        { nome: 'brigadeiro', valor: 1.5 },
        { nome: 'carne moida', valor: -20 },
    ],
};
const padaria3 = new EstabelecimentoBase('Rua Dos Abacates, 1320 - bloco A', 'alimentação', [
    { nome: 'banana', valor: 8 },
    { nome: 'beijinho', valor: 2.5 },
    { nome: 'carne moida', valor: 20 },
], -3);
const padaria4 = new EstabelecimentoBase('Rua Dos Morangos, 1320 - bloco A', 'alimentação', [], 27);
console.log(padaria);
console.log(padaria.retornaNomesDosProdutos());
// console.log(padaria2.retornaNomesDosProdutos())
console.log(padaria3.retornaNomeDosProdutos());
padaria3.diminuiFilaDeEspera();
padaria3.diminuiFilaDeEspera();
padaria3.diminuiFilaDeEspera();
padaria3.diminuiFilaDeEspera();
console.log(padaria4.filaDeEspera);
padaria4.filaDeEspera = -100;
console.log(padaria4.filaDeEspera);
padaria4.filaDeEspera = 20;
console.log(padaria4.filaDeEspera);
console.log(padaria3.endereco);
console.log(padaria3.filaDeEspera);
export {};
