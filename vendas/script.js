// SYNCA - Sistema de Vendas
// JavaScript para funcionalidades básicas

document.addEventListener('DOMContentLoaded', function () {

    const quantidade1 = document.getElementById('quantidade1');
    const botao_mais1 = document.getElementById('botao_mais1');
    const botao_menos1 = document.getElementById('botao_menos1');

    const quantidade2 = document.getElementById('quantidade2');
    const botao_mais2 = document.getElementById('botao_mais2');
    const botao_menos2 = document.getElementById('botao_menos2');

    botao_mais1.addEventListener('click', function () {
        quantidade1.value = parseInt(quantidade1.value) + 1;
    });
    botao_menos1.addEventListener('click', function () {
        if (parseInt(quantidade1.value) > 0) {
            quantidade1.value = parseInt(quantidade1.value) - 1;
        }
    });

    botao_mais2.addEventListener('click', function () {
        quantidade2.value = parseInt(quantidade2.value) + 1;
    });
    botao_menos2.addEventListener('click', function () {
        if (parseInt(quantidade2.value) > 0) {
            quantidade2.value = parseInt(quantidade2.value) - 1;
        }
    });

});