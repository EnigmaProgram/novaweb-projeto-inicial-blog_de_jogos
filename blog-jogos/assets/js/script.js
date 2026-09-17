/*
=========================================================
PESQUISA DO BLOG
=========================================================
*/

const pesquisa = document.querySelector(".pesquisa");

if (pesquisa) {

    const input = pesquisa.querySelector("input");

    const cards = document.querySelectorAll(".card-noticia");

    const mensagem = document.createElement("p");

    mensagem.classList.add("sem-resultados");

    mensagem.textContent = "Nenhum resultado encontrado.";

    mensagem.style.display = "none";

    document.querySelector(".noticias").appendChild(mensagem);


    input.addEventListener("input", function () {

        const termo = input.value.toLowerCase().trim();

        let resultados = 0;


        cards.forEach(function (card) {

            const texto = card.textContent.toLowerCase();

            if (texto.includes(termo)) {

                card.style.display = "";

                resultados++;

            } else {

                card.style.display = "none";

            }

        });


        if (termo !== "" && resultados === 0) {

            mensagem.style.display = "block";

        } else {

            mensagem.style.display = "none";

        }

    });

}