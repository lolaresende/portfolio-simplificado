const botaoMostarPrjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostarPrjetos.addEventListener('click', () => {
   mostarMaisProjetos();
   esconderBotao();
});

function esconderBotao() {
    botaoMostarPrjetos.classList.add("remover");
}

function mostarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
