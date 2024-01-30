# 📝 Anotações / Estudos 

Vou deixar junto deste projeto as minhas anotações sobre o desenvovlimento do Javascript.
Eu desenvolvi ele sendo inciante, para adquirir mais experiência com DOM.

Espero que essas anotações ajudem a todos que precisarem acessá-las.
🤜🏼🤛🏼

## 🧩 Organização das informações
As anotações a seguir foram organizadas respeitando a escrita do código no script do JS. Mesmo que isso possa gerar um "sobe desce" na leitura, acredito que contribuí para uma melhor assimilação das boas práticas não "embaralhar" o código.

### ➡️ Variáveis globais

~~~javascript
let player = null; 
//player começa com valor nulo
//ela é responsável por indicar de quem é a vez de jogar (xis ou bolinha)
~~~
~~~javascript
const playerSelected = document.getElementById('player-selected');
//playerSelected recebe o valor da id de mesmo nome
//essa id vai exibir no html 'X' ou 'O'
~~~
### 🔛 Início do jogo / troca de jogador
~~~javascript
changePlayer('X');
//o jogo vai começar com o jagador 'X', porque agora player recebeu 'X' (analisar a função)
//a função também é responsável por alterar a vez de cada jogador
~~~
### ⬜ Função para os click's
~~~javascript
//a função squareClick reconhce os click's em cada quadrado do jogo. Seu parâmetro são as id's das <div>
function squareClick(id) {
    const square = document.getElementById(id);
  //const para os quadrados do jogo. Eecebe as id's, que é o parâmetro da função

  //BLOQUEANDO A ALTERAÇÃO DE UM QUADRADO JÁ CLICADO
    if(square.innerHTML !== '-') { return; }
~~~
Do jeito que o jogo está, se um quadrado já tem um xis, é possível mudar para bolinha clicando nele. Para evitar esse comportamento, foi feita a verificação: **if (square.innerHTML !== '-') {return;}**.  
Cada *div* tem um no seu conteúdo um traço. No CSS isso foi escondido, deixando ele da mesma cor que o fundo depois que um jogador clica em um quadrado, esse traço é substituído por xis ou bolinha.  
Como a verificação **!=='-'** está no início da função, e o seu retorno é "vazio", nada mais vai acontecer. Só o que resta ao jogador da vez é escolher outro quadrado.
~~~javascript
    square.innerHTML = player;
  //innerHTML renderiza na página o valor que recebeu, no caso o jogador
    square.style.color = '#000';
  //.style.color defini a cor dos textos de square
    
  //VERIFICAÇÃO PARA ALTER ENTRE OS JOGADORES 'X' E 'O'
    if(player === 'X') { player = 'O'; } else { player = 'X' };
~~~
O jogo começa com o o jogador X. Ao clicar em um quadrado, a função squareClick é iniciada. Clicando vai inserir o X no jogo (conforme o inner e o style), após o click, a função vai para o *if*.  
Verificação: **if(player === 'X')**. O jogo acabou de começar, então essa verificação é verdadeira (true). Por ser true, o jogador muda para 'O'. Depois, a verificação no else retorna player para 'X'.  
Por fim, a função **changePlayer** é invocada recebendo player como parâmetro -> *changePlayer(player);*
### 🎮 Função para alternar os jogadores
~~~javascript
function changePlayer(value) {
  player = value;
  playerSelected.innerHTML = player; };
//changePlayer vai alternar os jagadores, indicando de quem é a vez de jogar
//o parâmetro 'value' é um valor exclusivo da função. Value vai receber o valor do jogador que vai começar
~~~
A partir dessa função, player deixa de ser *null* e recebe o valor passado. O valor passado para *changePlayer/player* vai para o HTML, através da const **"playerSelected"**.