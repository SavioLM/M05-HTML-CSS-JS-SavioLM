const prompt = require("prompt-sync")();

class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
}

class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Venda {
    constructor(cliente) {
        this.cliente = cliente;
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    total() {
        let total = 0;
        for (let i = 0; i < this.produtos.length; i++) {
        total += this.produtos[i].preco;
        }
        return total;
    }
}

const clientes = [];
const produtos = [];
const vendas = [];

function menu() {
    console.log("\n--- Menu ---");
    console.log("1. Inserir Cliente");
    console.log("2. Inserir Produto");
    console.log("3. Realizar Venda");
    console.log("4. Sair");

    const opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case '1':
        inserirCliente();
        break;
        case '2':
        inserirProduto();
        break;
        case '3':
        realizarVenda();
        break;
        case '4':
        console.log("Programa encerrado.");
        break;
        default:
        console.log("Opção inválida. Tente novamente.");
        menu();
    }
}

function inserirCliente() {
    const nome = prompt("Nome do cliente: ");
    const cpf = prompt("CPF do cliente: ");
    clientes.push(new Cliente(nome, cpf));
    console.log("Cliente inserido com sucesso!");
    menu();
}

function inserirProduto() {
    const nome = prompt("Nome do produto: ");
    const preco = parseFloat(prompt("Preço do produto: "));
    produtos.push(new Produto(nome, preco));
    console.log("Produto inserido com sucesso!");
    menu();
}

function realizarVenda() {
    if (clientes.length == 0 && produtos.length == 0) {
        console.log("É necessário ter pelo menos um cliente e um produto para realizar uma venda.");
        menu();
        return;
}

console.log("Clientes disponíveis:");
clientes.forEach((cliente, index) => {
    console.log(`${index + 1}. ${cliente.nome} - CPF: ${cliente.cpf}`);
});

const clienteIndex = parseInt(prompt("Escolha um cliente (número): ")) - 1;
const selectedCliente = clientes[clienteIndex];

const venda = new Venda(selectedCliente);

while (true) {
    console.log("Produtos disponíveis:");
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. ${produto.nome} - Preço: ${produto.preco.toFixed(2)}`);
    });
    const produtoIndex = parseInt(prompt("Escolha o número do produto ou digite '0' para finalizar a seleção: "));
    let valor = 0;
    if (produtoIndex == 0) {
        console.log({valor})
        break;
    }
    const selectedProduto = produtos[produtoIndex - 1];
    valor += venda.adicionarProduto(selectedProduto);
    console.log("Produto adicionado à venda.");
    }
    vendas.push(venda);
    console.log(`Venda realizada para ${selectedCliente.nome}. Total: R$ ${venda.total().toFixed(2)}`);
    menu();
}

menu();