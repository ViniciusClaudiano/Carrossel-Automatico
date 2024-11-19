function darkMode() {
    document.body.classList.toggle("dark-theme");
}

const imagensContainer = document.querySelector(".imagens");
const imagens = document.querySelectorAll(".imagens img");
const totalImagens = imagens.length;
let indiceAtual = 0;

function avancarCarrosel() {
    // "%" é o resto de uma divisão.
    indiceAtual = (indiceAtual + 1) % totalImagens;
    const larguraImagem = imagens[0].clientWidth;

    // A ideia dessa linha é mover a imagem utilizado um comando pelo css. como que funciona ? não faço ideia.
    imagensContainer.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;

}

setInterval(avancarCarrosel, 3000);



// ------------------ ACCORDEON ------------------ //

document.querySelectorAll(".titulo").forEach(titulo => {
    titulo.addEventListener("click", () => {
        const conteudo = titulo.nextElementSibling; // Encontra próximo elemento irmão (conteudo associado ao título).

        document.querySelectorAll(".conteudo").forEach(c => {
            if (c !== conteudo) {
                c.style.maxHeight = null;
            }
        });

        if (conteudo.style.maxHeight) {
            conteudo.style.maxHeight = null;
        } else {
            conteudo.style.maxHeight = conteudo.scrollHeight + "px"
        }
    })
})