//Variáveis para o ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30); //Insere imagem, pede a variável dela e as coordenadas x e y, depois as dimensões
  //print(yAtor);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3;    
  }
  if(keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }      
  }  
}

function verificaColisao() {
  //collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
    for (let i = 0; i < imagemCarros.length; i++) {
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
      if (colisao) {
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
        if (pontosMaiorQueZero()) {
          meusPontos -= 1;
        }
      }
    }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 366;  
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color('#00FF00'));
  stroke('#00FF00');
  text(meusPontos, width / 3.5, 27);
  noStroke();  
}

function marcaPonto() {
  if (yAtor < 9) {
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
    somDoPonto.play();
  }  
}

function pontosMaiorQueZero() {
  return meusPontos > 0;  
}

function podeSeMover() {
  return yAtor < 366;  
}























