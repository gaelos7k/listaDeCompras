let itemParaAdicionar = "";
const $output = document.querySelector("#output");
let listaDeItens = new Array();


function novaLista() {
    output.innerHTML = "";
}

function adicionarItem() {
    itemParaAdicionar = prompt("Qual item será adicionado na lista?");
    listaDeItens.push("<li>" + itemParaAdicionar + "</li>");
    let itensDaLista = listaDeItens;
    output.innerHTML = itensDaLista;

}