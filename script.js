       /* OBS: 
Para adicionar um novo item:
- o valor irá na "function preço()"
- o id que foi colocado nos inputs, terá que ser atualizado na "function attQuantidade()"
- e terá que ser adicionado um let com o id que foi colocado nos inputs, seguindo o modelo abaixo:
       */

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let valorTotal = document.getElementById("valorTotal");


// Produtos 
let quantidadePao = document.getElementById("quantidadePao");
let qntPaoQueijo = document.getElementById("qntPaoQueijo");
let qntBoloCenoura = document.getElementById("qntBoloCenoura");
let qntDonuts = document.getElementById("qntDonuts");
let qntPaoMilho = document.getElementById("qntPaoMilho");
let qntRosquinhaCoco = document.getElementById("qntRosquinhaCoco");

// Produtos carrinho

let quantidadePao2 = document.getElementById("quantidadePao2");
let qntPaoQueijo2 = document.getElementById("qntPaoQueijo2");
let qntBoloCenoura2 = document.getElementById("qntBoloCenoura2");
let qntDonuts2 = document.getElementById("qntDonuts2");
let qntPaoMilho2 = document.getElementById("qntPaoMilho2");
let qntRosquinhaCoco2 = document.getElementById("qntRosquinhaCoco2");

function adicionar(item) { // Adiciona Itens ao carrinho (que está em forma de array)
    carrinho.push(item);
    preço(); // cade vez que um item for add, o preço total atualiza
    contarItems(item); // usa o .filter no array Carrinho pra calcular a quantidade do mesmo item que está presente
    attQuantidade(); // atualiza os input de text com a quantidade itens atuais (os dados são obtidos através do contarItems)
    salvarCarrinhoNoLocalStorage(); // salvando no local storage
}

function remover(item) { // Remove Itens ao carrinho (que está em forma de array)
    const index = carrinho.lastIndexOf(item); // Está procurando o Index(Localização) do ultimo tipo de item desejado
    if (index !== -1) { // Conferindo se há itens daquele tipo no array
        carrinho.splice(index, 1); // Removendo o item desejado
        // Os itens a baixo executam a mesma função dos da function adicionar
        preço();
        contarItems(item);
        salvarCarrinhoNoLocalStorage();
        attQuantidade();

    }
}

function contarItems(item) { // usa filter pra contar a quantidade de itens de um mesmo tipo no array
    let quantidade = carrinho.filter(x => x === item).length;
    return quantidade;
}

function attQuantidade() { // pega os numeros do contarItems e os coloca nos inputs de texto
    quantidadePao.value = contarItems("Pao");
    qntPaoQueijo.value = contarItems("PaoQueijo");
    qntBoloCenoura.value = contarItems("boloCenoura");
    qntDonuts.value = contarItems("donuts");
    qntPaoMilho.value = contarItems("paoMilho");
    qntRosquinhaCoco.value = contarItems("rosquinhaCoco");


    // itens carrinho
    quantidadePao2.value = contarItems("Pao");
    qntPaoQueijo2.value = contarItems("PaoQueijo");
    qntBoloCenoura2.value = contarItems("boloCenoura");
    qntDonuts2.value = contarItems("donuts");
    qntPaoMilho2.value = contarItems("paoMilho");
    qntRosquinhaCoco2.value = contarItems("rosquinhaCoco");
}


function salvarCarrinhoNoLocalStorage() { // está salvando o array carrinho no local storage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function preço() { // Aqui é salvo o preço dos produtos
    valor = 0; // Resetando o valor
    carrinho.forEach(function(item) { // definindo novos valores
        if (item === "Pao") {
            valor += 0.60; // os numeros são os valores
        } else if (item === "PaoQueijo") {
            valor += 0.70;
        } else if (item === "boloCenoura") {
            valor += 2.00;
        } else if (item === "donuts") {
            valor += 5.00;
        } else if (item === "paoMilho") {
            valor += 0.80;
        } else if (item === "rosquinhaCoco") {
            valor += 13.00;
        } 
    });
    valorTotal.textContent = "R$" + valor.toFixed(2).replace(".", ","); // imprimindo o valor total
}

function trocarDisplay() { // Botão continuar

    let displayCompras = document.getElementById("displayCompras");
    let displayCarrinho = document.getElementById("displayCarrinho");
    let seta = document.getElementById("seta")
    let carrinho = document.getElementById("carrinho")
    displayCarrinho.style.display = "inline"
    displayCompras.style.display = "none";
    seta.style.display = "inline";
    carrinho.style.display = "none";
    carrinhoVerificar();
    
}

function displayVoltar() { // Botão voltar
    let displayCompras = document.getElementById("displayCompras");
    let displayCarrinho = document.getElementById("displayCarrinho");
    let seta = document.getElementById("seta")
    let carrinho = document.getElementById("carrinho")

    displayCarrinho.style.display = "none"
    displayCompras.style.display = "inline";
    seta.style.display = "none";
    carrinho.style.display = "inline";
    carrinhoVerificar();

}

function carrinhoRemover(tipo) {
    carrinho = carrinho.filter(item => item !== tipo); // Filtra o array para manter apenas os itens que não são do tipo especificado
    salvarCarrinhoNoLocalStorage(); // Salva o carrinho atualizado no Local Storage
    attQuantidade(); // Atualiza a lista de itens do carrinho no HTML
    carrinhoVerificar();
    preço();
}

function carrinhoVerificar() {
let paoElemento = document.getElementById("paoElemento")

    if (quantidadePao.value <= 0) {
        paoElemento.style.display = "none"
    } else {
        paoElemento.style.display = "inherit"
    }

    if (qntBoloCenoura.value <= 0) {
        boloCenouraElemento.style.display = "none"
    } else {
        boloCenouraElemento.style.display = "inherit"
    }

    if (qntDonuts.value <= 0) {
        donutElemento.style.display = "none"
    } else {
        donutElemento.style.display = "inherit"
    }

    if (qntPaoQueijo.value <= 0) {
        paoQueijoElemento.style.display = "none"
    } else {
        paoQueijoElemento.style.display = "inherit"
    }

    if (qntRosquinhaCoco.value <= 0) {
        rosquinhaCocoElemento.style.display = "none"
    } else {
        rosquinhaCocoElemento.style.display = "inherit"
    }

    if (qntPaoMilho.value <= 0) {
        paoMilhoElemento.style.display = "none"
    } else {
        paoMilhoElemento.style.display = "inherit"
    }






}

function confirmarLimpar() {

    let limpei = document.getElementById("limpei");
    let displayCarrinho = document.getElementById("displayCarrinho");

limpei.style.display = "inline";
displayCarrinho.style.display = "none";

}


function voltar2() {
let limpei = document.getElementById("limpei");
let displayCarrinho = document.getElementById("displayCarrinho");

limpei.style.display = "none";
displayCarrinho.style.display = "inline";
}

function limparCarrinho() {
    carrinho = [];
    let limpei = document.getElementById("limpei");
    let displayCarrinho = document.getElementById("displayCarrinho");
    
    limpei.style.display = "none";
    displayCarrinho.style.display = "inherit";
    
    preço();
    salvarCarrinhoNoLocalStorage();
    attQuantidade();
    carrinhoVerificar();
}




attQuantidade(); // atualizando a quantidade de itens no input ao carregar a pagina
preço();  // atualizando o preço total ao carregar a pagina
carrinhoVerificar();