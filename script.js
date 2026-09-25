document.addEventListener("DOMContentLoaded", config);

let jogadorAtual = 1;
let totalJogadas = 0;
let jogoAtivo = true;

window.onload = function(){
    let jogador1 = prompt("Informe o nome do jogador 1 (X):");
    let jogador2 = prompt("Informe o nome do jogadr 2 (O):");
    document.getElementById("jogador1").innerText = `${jogador1}`;
    document.getElementById("jogador2").innerText = `${jogador2}`;
}

function config(){
    document.getElementById("00").addEventListener("click", swap);
    document.getElementById("01").addEventListener("click", swap);
    document.getElementById("02").addEventListener("click", swap);
    document.getElementById("10").addEventListener("click", swap);
    document.getElementById("11").addEventListener("click", swap);
    document.getElementById("12").addEventListener("click", swap);
    document.getElementById("20").addEventListener("click", swap);
    document.getElementById("21").addEventListener("click", swap);
    document.getElementById("22").addEventListener("click", swap);
}


function swap(){

    if(!this.src.includes("imagens/vazio.png"))
        return

    if (jogadorAtual === 1)
	{
        jogadorAtual = 2
		this.setAttribute("src", "imagens/circulo.png");
	}
	else
	{
        jogadorAtual = 1
		this.setAttribute("src", "imagens/x.png");
	}

    totalJogadas++

    if(totalJogadas == 9){
        alert("Ninguém venceu")
        return
    }
        

}

