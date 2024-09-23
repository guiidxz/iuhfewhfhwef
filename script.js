let botaoAtivo = null;

function exibirImagem(opcao, botao) {

    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto");

    if (opcao === 'sol'){
        imagem.src = "sol.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o Sol! Uma estrela que ilumina o nosso dia.";
    } else if(opcao === 'lua') {
        imagem.src = "lua.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Lua! ELa brilha durante a noite.";
    } else if (opcao === 'estrela') {
        imagem.src = "estrela.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu uma Estrela! Um dos pontos brilhantes no céu noturno.";
    } else if (opcao === 'planeta') {
        imagem.src = "planeta.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o Planeta!";
    }else if (opcao === 'arcoiris') {
        imagem.src = "arcoiris.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o Arco Iris!";
    }else {
        imagem.style.display = "none";
        texto.innerText = "Opção inválida. Escolha entre Sol, Lua ou Estrela.";
    }

    if (botaoAtivo) {
        botaoAtivo.classList.remove('active');
    }
    botao.classList.add('active');
    botaoAtivo = botao;
}