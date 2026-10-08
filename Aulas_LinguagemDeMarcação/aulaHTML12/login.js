/*
Descricao: Validação do formulário da Aula 12
nome_arquivo: login.js
nome_exercicio: Atividade 12 - Introdução aos Formulários Web
nome_aluno: Enrico Bernardo Carneiro Lelis
email_aluno: enrico.lelis@edu.senai.br
turma: TDE-1BAA-26
*/

const formLogin = document.getElementById("formLogin");

const email = document.getElementById("email");

const senha = document.getElementById("senha");

const mensagemErro = document.getElementById("mensagemErro");

formLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    mensagemErro.textContent = "";
    mensagemErro.style.color = "#FF0000";

    if (email.value.trim() === "") {

        mensagemErro.textContent = "Digite seu e-mail.";

        email.focus();

        return;
    }

    if (senha.value.trim() === "") {

        mensagemErro.textContent = "Digite sua senha.";

        senha.focus();

        return;
    }

    mensagemErro.style.color = "#7CFC00";

    mensagemErro.textContent = "Login preenchido corretamente!";

});