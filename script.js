let $item = document.getElementById("item");

let $lista = document.getElementById("lista");

function adicionarItem() {
    $lista += '<li>' + $item.value + '</li>';
    document.querySelector('#lista').innerHTML = $lista;
}