const validarTamanho = (jogador) => {
    return jogador.length > 2 && jogador.length < 17;
}

const validarNome = (jogador1, jogador2) => {
    return jogador1 === jogador2;
}

export{
    validarTamanho, 
    validarNome
};