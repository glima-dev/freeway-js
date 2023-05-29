//imagens e sons do jogo

//efeitos sonoros
let somDaTrilha;
let somDaColisao;
let somDoPonto;

//Imagens apenas
let imagemEstrada;
let imagemAtor;
let imagemCarros = ['', '', '', '', '', '']; //eu comentei a solução do professor e fiz do meu jeito e funcionou. Criei uma variável com 3 posições vazias e já atribuí direto cada imagem em sua respectiva posição
//let imagemCarro;
//let imagemCarro2;
//let imagemCarro3;

//Vai carregar as imagens a serem utilizadas
function preload() {
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  //imagemCarro = loadImage("imagens/carro-1.png");
  //imagemCarro2 = loadImage("imagens/carro-2.png");
  //imagemCarro3 = loadImage("imagens/carro-3.png");
  //imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];  
  imagemCarros[0] = loadImage("imagens/carro-1.png");
  imagemCarros[1] = loadImage("imagens/carro-2.png");
  imagemCarros[2] = loadImage("imagens/carro-3.png");  
  imagemCarros[3] = loadImage("imagens/carro-1.png");
  imagemCarros[4] = loadImage("imagens/carro-2.png");
  imagemCarros[5] = loadImage("imagens/carro-3.png"); 
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  
  
}