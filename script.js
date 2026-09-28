document.addEventListener("DOMContentLoaded", config);

let jogadorAtual = 1;
let totalJogadas = 0;
let jogoAtivo = true;
let jogadasJogador1 = []
let jogadasJogador2 = []
let jogador1
let jogador2
const idsTabuleiro = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];

let combinacoes = [ //são as combinações possíveis para ganhar
    ["00", "01", "02"], ["10", "11", "12"], ["20", "21", "22"], //linhas
    ["00", "10", "20"], ["01", "11", "21"], ["02", "12", "22"], //colunas
    ["00", "11", "22"], ["02", "11", "20"] //diagonais
]

window.onload = function(){ //requisição dos nomes dos jogadores e nome do jogador que irá iniciar a partida
    jogador1 = prompt("Informe o nome do jogador 1 (O):");
    jogador2 = prompt("Informe o nome do jogadr 2 (X):");
    document.getElementById("jogador1").innerText = `${jogador1}`;
    document.getElementById("jogador2").innerText = `${jogador2}`;
    document.getElementById("vez").innerText = `Vez do jogador ${jogador1}`
}

function config(){ //adicionar event listeners para cada um dos campos do jogo da velha e também o botão "jogar novamente"

    idsTabuleiro.forEach(id =>{
        document.getElementById(id).addEventListener("click", swap)
    })

    document.getElementById("jogarNovamente").addEventListener("click", reset);
}


function swap(){ //

    if(!jogoAtivo)
        return

    let idClicado = this.id

    if(!this.src.includes("imagens/vazio.png"))
        return

    if (jogadorAtual === 1)
	{
		this.setAttribute("src", "imagens/circulo.png");

        jogadasJogador1.push (idClicado); //adiciona o id da area clicada pelo jogador 

        if(verificarVitoria(jogadasJogador1)){
            alert(`${jogador1} venceu`)
            jogoAtivo = false
            return
        }

        jogadorAtual = 2
        document.getElementById("vez").innerText = `Vez do jogador ${jogador2}`
	}
	else
	{
        this.setAttribute("src", "imagens/x.png");

        jogadasJogador2.push (idClicado); //adiciona o id da area clicada pelo jogador 

        if(verificarVitoria(jogadasJogador2)){
            alert(`${jogador2} venceu`)
            jogoAtivo = false
            return
        }

        jogadorAtual = 1
        document.getElementById("vez").innerText = `Vez do jogador ${jogador1}`
	}

    totalJogadas++

    if(totalJogadas == 9){
        document.getElementById("vez").innerText = "Deu velha!";
        alert("Nenhum jogador venceu.")
        jogoAtivo = false
        return
    }

}

function verificarVitoria(jogadasDoJogador){ //verifica as jogadas de um dos jogadores. 
                                             //compara jogadas com as combinações setadas no inicio 
    for(let i = 0; i < combinacoes.length; i++){
        let combo = combinacoes[i];

        let posicao1 = combo[0]
        let posicao2 = combo[1]
        let posicao3 = combo[2]

        //verifica se há um subconjunto com os valores determinados nas combinações
        let temPosicao1 = jogadasDoJogador.includes(posicao1)
        let temPosicao2 = jogadasDoJogador.includes(posicao2)
        let temPosicao3 = jogadasDoJogador.includes(posicao3)

        if(temPosicao1 && temPosicao2 && temPosicao3){
            return true;
        }
    }

    return false

}

function reset(){ //reseta o jogo 
    document.getElementById("vez").innerText = `Vez do jogador ${jogador1}`;

    idsTabuleiro.forEach(id =>{
        document.getElementById(id).setAttribute("src", "imagens/vazio.png");
    })

    jogoAtivo = true;
    jogadasJogador1 = []
    jogadasJogador2 = []
    totalJogadas = 0
    jogadorAtual = 1
}

