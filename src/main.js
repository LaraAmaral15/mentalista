var numeroSecreto
var contador = 0;
var imgCerebro = document.getElementById("img-cerebro")
var textoInput = document.getElementById("texto-input")
Sortear();

function Sortear() {
  if(contador == 0) {
    numeroSecreto = parseInt(Math.random() * 1001)
  }
}

function Chutar() {
  textoInput.style.display= 'none';

  if (chute != numeroSecreto) {
    console.log(contador);

    var tentativas = document.getElementById("tentativas")
    var resultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("input-chute").value);
    var lugarGif = document.getElementById("gif")
    console.log(chute)

     if (chute > 1000 || chute < 0 || isNaN(chute)) {
      imgCerebro.style.display= 'none';
      resultado.innerHTML = "Não...digite um número de 0 a 1000"

      lugarGif.innerHTML = `<img src="./src/img/nao.gif" alt="">`
      return
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


    if(chute == numeroSecreto) {
      imgCerebro.style.display= 'none';
      resultado.innerHTML = "Acertou!"

      lugarGif.innerHTML = `<img src="./src/img/acertou.gif">`
      contador = 0;
      Sortear()
    } else if (chute > numeroSecreto) {
      imgCerebro.style.display= 'none';
      resultado.innerHTML = "Errou... o número secreto é menor que " + chute

      lugarGif.innerHTML = `<img src="./src/img/errou-rude.gif">`
    } else if (chute < numeroSecreto) {
      imgCerebro.style.display= 'none';
      resultado.innerHTML = "Errou... o número secreto é maior que " + chute

      lugarGif.innerHTML = `<img src="./src/img/errou.gif">`
    }
  }
}

