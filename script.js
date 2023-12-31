let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let valorTotal = document.getElementById("valorTotal");
let valorTotal2 = document.getElementById("valorTotalCarrinho");

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

// Display e Icons
let displayCompras = document.getElementById("displayCompras");
let displayCarrinho = document.getElementById("displayCarrinho");
let seta = document.getElementById("seta")
let carrinhoIcon = document.getElementById("carrinho")
let limparCarrinho = document.getElementById("limparCarrinho"); 
let information = document.getElementById("information")

function adicionar(item) { // Adiciona Itens ao carrinho (que está em forma de array)
    carrinho.push(item);
    preço(); // cade vez que um item for add, o preço total atualiza
    preçoUnidade(); // cade vez que um item for add, o preço individual atualiza
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
        preçoUnidade();
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
    valorTotal2.textContent = " Valor Total: R$" + valor.toFixed(2).replace(".", ","); // imprimindo o valor total
}

function trocarDisplay() { // Vai para o carrinho
    information.style.display = "none"
    displayCarrinho.style.display = "inline"
    displayCompras.style.display = "none";
    seta.style.display = "inline";
    carrinhoIcon.style.display = "none";
    limparCarrinho.style.display = "none";
    carrinhoVerificar();
    preçoUnidade();   
}

function displayVoltar() { // Volta para o menu principal
    information.style.display = "none"
    limparCarrinho.style.display = "none";
    displayCarrinho.style.display = "none"
    displayCompras.style.display = "inline";
    seta.style.display = "none";
    carrinhoIcon.style.display = "inline";
    carrinhoVerificar();
    preçoUnidade();
}

function informationMostrar() {// Display de informação no menu principal
    limparCarrinho.style.display = "none";
    displayCarrinho.style.display = "none"
    information.style.display = "Inherit"
    displayCompras.style.display = "none";
}

function confirmarLimpar() { // Mostra o display de limpar o carrinho
    limparCarrinho.style.display = "inline";
    displayCarrinho.style.display = "none";
}
    
function limparCarrinhoDisplay() { // limpar totalmente o carrinho, e depois vai voltar para o display do carrinho
        carrinho = [];
        limparCarrinho.style.display = "none";
        displayCarrinho.style.display = "inherit";
        preçoUnidade();
        preço();
        salvarCarrinhoNoLocalStorage();
        attQuantidade();
        carrinhoVerificar();
}

function carrinhoRemover(tipo) { // Remove todos os tipos de um item do carrinho
    carrinho = carrinho.filter(item => item !== tipo); // Filtra o array para manter apenas os itens que não são do tipo especificado
    salvarCarrinhoNoLocalStorage(); // Salva o carrinho atualizado no Local Storage
    attQuantidade(); // Atualiza a lista de itens do carrinho no HTML
    carrinhoVerificar();
    preço();
    preçoUnidade();
}

function carrinhoVerificar() { // Verifica se tem pelo menos um item para que ele possa ser exibido no carrinho
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

function preçoUnidade() { // Calcula o preço total de cada tipo de item e exibe no carrinho
    let precoPaoInput = document.getElementById("precoPao");
    let precoPaoQueijoInput = document.getElementById("precoPaoQueijo");
    let precoPaoMilhoInput = document.getElementById("precoPaoMilho")
    let precoBoloCenouraInput = document.getElementById("precoBoloCenoura")
    let precoDonutInput = document.getElementById("precoDonut")
    let precoRoscaCocoInput = document.getElementById("precoRoscaCoco")

    // Definindo o valor do input com o preço de cada item
    precoPaoInput.value = "R$" + (contarItems("Pao") * 0.60).toFixed(2).replace(".", ",");
    precoPaoQueijoInput.value = "R$" + (contarItems("PaoQueijo") * 0.70).toFixed(2).replace(".", ",");
    precoPaoMilhoInput.value = "R$" + (contarItems("paoMilho") * 0.80).toFixed(2).replace(".", ",");
    precoBoloCenouraInput.value = "R$" + (contarItems("boloCenoura") * 2.00).toFixed(2).replace(".", ",");
    precoDonutInput.value = "R$" + (contarItems("donuts") * 5.00).toFixed(2).replace(".", ",");
    precoRoscaCocoInput.value = "R$" + (contarItems("rosquinhaCoco") * 13.00).toFixed(2).replace(".", ",");

}

attQuantidade(); // atualizando a quantidade de itens no input ao carregar a pagina
preço();  // atualizando o preço total ao carregar a pagina
preçoUnidade();  // atualizando o preço total ao carregar a pagina
carrinhoVerificar() // verifica se tem pelo menos um tipo de item para poder exibi-lo no carrinho
