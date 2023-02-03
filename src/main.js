var numeroSecreto
var contador = 0;
var imgCerebro = document.getElementById("img-cerebro")
var textoInput = document.getElementById("texto-input")
var lugarGif = document.getElementById("gif")
Sortear();

function Sortear() {
  if(contador == 0) {
    numeroSecreto = parseInt(Math.random() * 1001)
  }
}

function Chutar() {

  textoInput.style.display= 'none';
  lugarGif.style.display= 'block';

  console.log(numeroSecreto)

  if (chute != numeroSecreto) {
    var tentativas = document.getElementById("tentativas")
    var resultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("input-chute").value);

    if (chute > 1000 || chute < 0 || isNaN(chute)) {
      imgCerebro.style.display= 'none';
      resultado.innerHTML = "Não...digite um número de 0 a 1000"

      lugarGif.innerHTML = `<img src="./src/img/nao.gif" alt="">`
      return
    } 

    if(chute == numeroSecreto) {
      imgCerebro.style.display= 'none';
      resultado.innerHTML = "Acertou!"

      lugarGif.innerHTML = `<img src="./src/img/acertou.gif">`
      contador = 0;
      Sortear()
      return
    } else if (chute > numeroSecreto) {
      imgCerebro.style.display= 'none';
      resultado.innerHTML = "Errou... o número secreto é menor que " + chute

      lugarGif.innerHTML = `<img src="./src/img/errou-rude.gif">`
    } else if (chute < numeroSecreto) {
      imgCerebro.style.display= 'none';
      resultado.innerHTML = "Errou... o número secreto é maior que " + chute

      lugarGif.innerHTML = `<img src="./src/img/errou.gif">`
    }

    if(contador == 9) {
      contador = 0;
      imgCerebro.style.display= 'none';
      tentativas.innerHTML ="Ah, as 10 tentativas acabaram! Será sorteado outro número";
      resultado.innerHTML = "O número secreto era: " + numeroSecreto
      lugarGif.innerHTML = `<img src="./src/img/sorry.gif">`
      Sortear();

      return
    } else if (contador !== 10) {
      contador++;
      tentativas.innerHTML = "Tentativas: " + contador;
    }

    // Limpar o input-chute após o usuário clicar no botão "Chutar"
    document.getElementById('input-chute').value='';
  }
}

