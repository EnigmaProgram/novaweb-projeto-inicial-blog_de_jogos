
/*
Descricao: Interatividade da Aula 14 - CSS para Formulários
nome_arquivo: script.js
nome_exercicio: Atividade 14 - CSS para Formulários
nome_aluno: Enrico Bernardo Carneiro Lelis
email_aluno: enrico.lelis@edu.senai.br
turma: TDE-1BAA-26
*/

// Seleciona os botões de habilitação
const botoes = document.querySelectorAll("button[data-target]");

// Habilita o campo correspondente ao botão clicado
botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const idCampo = botao.dataset.target;
        const campo = document.getElementById(idCampo);

        if (!campo) {
            return;
        }

        // Libera o campo para edição
        campo.disabled = false;
        campo.readOnly = false;

        // Coloca o foco no campo habilitado
        campo.focus();
    });
});

// Seleciona os campos do formulário
const campos = document.querySelectorAll("input");

// Desabilita o campo quando ele perde o foco
campos.forEach(function (campo) {
    campo.addEventListener("blur", function () {
        campo.disabled = true;
        campo.readOnly = true;
    });
});
