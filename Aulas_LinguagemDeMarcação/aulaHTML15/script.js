
/*
Descricao: Interatividade da Aula 15 - JavaScript aplicado a Formulários
nome_arquivo: script.js
nome_exercicio: Atividade 15 - JavaScript aplicado a Formulários
nome_aluno: Enrico Bernardo Carneiro Lelis
email_aluno: enrico.lelis@edu.senai.br
turma: TDE-1BAA-26
*/

// Seleciona os elementos do formulário
const formulario = document.getElementById("formCadastro");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoTelefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

// Captura o envio do formulário
formulario.addEventListener("submit", cadastrar);

// Função executada ao enviar o formulário
function cadastrar(event) {
    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os dados digitados
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const telefone = campoTelefone.value.trim();

    // Validação personalizada do nome
    if (nome.length < 3) {
        mostrarMensagem("Digite um nome com pelo menos 3 caracteres.", "erro");
        campoNome.focus();
        return;
    }

    // Validação do e-mail
    if (!campoEmail.validity.valid || email === "") {
        mostrarMensagem("Digite um e-mail válido.", "erro");
        campoEmail.focus();
        return;
    }

    // Validação do telefone
    if (telefone === "") {
        mostrarMensagem("Preencha o campo telefone.", "erro");
        campoTelefone.focus();
        return;
    }

    // Exibe a confirmação com um dado do formulário
    mostrarMensagem(
        "Cadastro realizado com sucesso! Nome: " + nome,
        "sucesso"
    );

    // Registra os dados no console para fins de estudo
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Telefone:", telefone);
}

// Exibe mensagens no topo do formulário
function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
    mensagem.hidden = false;
}
