//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2.2, 2.5, 3.5, 5.3, 3.8, 4];
let comprimentoCarro = 50;
let alturaCarro = 40;

//Variáveis do carro1

//Variáveis do carro2

//Variáveis do carro3

//Está senfo feito dentro de um for para ele iterar o valor de i e usar apenas uma linha para os 3 carros
function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    //print("o valor do i nesta repetição é " + i);
  }
    //print(yCarros[1]);
  
}


function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
  //print(xCarro);
}

function voltaPosicaoInicialDoCarro() {
  for (i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;    
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -50;  
}