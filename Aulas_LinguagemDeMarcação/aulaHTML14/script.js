/*
Descricao: Interatividade da Aula 14 - CSS para Formulários
nome_arquivo: script.js
nome_exercicio: Atividade 14 - CSS para Formulários
nome_aluno: Enrico Bernardo Carneiro Lelis
email_aluno: enrico.lelis@edu.senai.br
turma: TDE-1BAA-26
*/

// Seleciona todos os botões de habilitação
const botoes = document.querySelectorAll("button[data-target]");

// Percorre cada botão
botoes.forEach(function (botao) {

    // Quando o botão for clicado
    botao.addEventListener("click", function () {

        // Encontra o campo indicado pelo botão
        const idCampo = botao.dataset.target;
        const campo = document.getElementById(idCampo);

        // Habilita o campo e coloca o cursor nele
        campo.disabled = false;
        campo.focus();
    });
});

// Seleciona todos os campos do formulário
const campos = document.querySelectorAll("input");

// Percorre cada campo
campos.forEach(function (campo) {

    // Quando o campo perder o foco
    campo.addEventListener("blur", function () {

        // Desabilita o campo novamente
        campo.disabled = true;
    });
});