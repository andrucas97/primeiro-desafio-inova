let titulo =  document.querySelector('h1');
titulo.innerHTML = 'Desafio da primeira Semana';
let subTitulo =  document.querySelector('p');
subTitulo.innerHTML = 'Esta é uma pequeno exercício para o primeiro desafio do Trilhas INOVA-MA. Feito por André Lucas';

function verificar01(){
    console.log('O botão 01 foi clicado');
    alert ('Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.');
    let nota01 = parseInt(prompt('insira a primeira nota de Aline'));
    let nota02 = parseInt(prompt('insira a segunda nota de Aline'));
    let nota03 = parseInt(prompt('insira a terceira nota de Aline'));
    let mediaNotas = ((nota01+nota02+nota03)/3);
    console.log(`Primeira: ${nota01},Segunda: ${nota02},Terceira: ${nota03},Média: ${mediaNotas}`);
        if (mediaNotas >= 7){
            alert (`Aline está APROVADA, com média ${mediaNotas}`)
        }
        else{
            alert (`Aline está REPROVADA, com média ${mediaNotas}`)
        }
}
function verificar02(){
    console.log('O botão 02 foi clicado');
    alert ('Os números sorteados foram: 15, 8, 90, 75, 102, 6 e 2.');
    let numerosSorteio = [15, 8, 90, 75, 102, 6, 2];
    console.log(`Os números são ${numerosSorteio}`);
    numerosSorteio.sort(function(a, b){return a - b;});
    alert(`Tais comece a anotar!\nOs números em ordem são:${numerosSorteio}`); 
}
function verificar03(){
    console.log('O botão 03 foi clicado');
    let ordemFrascos = [12, 5, 23, 17, 8, 14, 3, 19]
    ordemFrascos.sort(function(a, b) {return a-b;});
    console.log(`A sequencia secreta é ${ordemFrascos}`)
    let respostaQuimica = prompt ('Ordene os frascos: 12, 5, 23, 17, 8, 14, 3, 19 para revelar o segredo alquímico.');
    if (respostaQuimica == ordemFrascos){
        alert ('PARABÉNS!\nO segredo Alquímico foi revelado, agora você é detentor de um grande poder.')
    }
    else{
        alert('Esta não é a sequencia correta. Nada acontece');
    }   
}
function verificar04(){
    console.log('O botão 04 foi clicado');
    let numeroFazendeiro = [23, 16, 11, 8, 19, 14, 5, 21]
    alert('Um fazendeiro quer separar seus lotes em números primos.\nSão eles 23, 16, 11, 8, 19, 14, 5, 21');
    function verificarPrimo(numero) {
      if (numero <= 1) {
        return false;
      }
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return true;
    }
    let numerosPrimos = [];
    for (let i = 0; i < numeroFazendeiro.length; i++) {
      if (verificarPrimo(numeroFazendeiro[i])) {
        numerosPrimos.push(numeroFazendeiro[i]);
      }
    }
    console.log("Números primos na lista: " + numerosPrimos);
    alert(`O Fazendeiro constatou que os lotes ${numerosPrimos} são os de números primos.`)
}
function verificar05(){
    console.log('O botão 05 foi clicado');
    alert('Olá, jogador. Sou o diagramador Supremo.');
    let textoSupremo = prompt('Digite um pequeno texto e eu contarei quantas palavras tem.')
    let palavras = textoSupremo.split(' ');
    let numeroPalavras = palavras.length;
    console.log(textoSupremo);
    console.log(numeroPalavras + ' palavras');
    alert(`Eu sou o Diagramador Supremo e digo que seu texto tem ${numeroPalavras} palavras.`)
}
function verificar06(){
    console.log('O botão 06 foi clicado');
    let numeroEscolhido = parseInt(prompt("Sou o Fatorador Supremo, irmão do Diagramador Supremo.\nDigite um número para que eu possa calcular o fatorial dele."));
    let fatorial = calcularFatorial(numeroEscolhido);
    function calcularFatorial(numeroEscolhido) {
      if (numeroEscolhido === 0 || numeroEscolhido === 1) {
        return 1;
      }
      for (let i = numeroEscolhido - 1; i >= 1; i--) {
        numeroEscolhido *= i;
      }
      return numeroEscolhido;
    }
    console.log("O fatorial de " + numeroEscolhido + " é: " + fatorial);
    alert(`O fatorial de ${numeroEscolhido} é ${fatorial}`);
}
function verificar07(){
    console.log('O botão 07 foi clicado');
    alert('Um grupo de aventureiros gastou todo o dinheiro da guilda em uma loja de conveniencia.\nCalcule o quanto gastaram.');
    let itensComprados = prompt('Escolha os itens que foram comprados: 1 - R$ 2,50, 2 - R$ 3,75, 3 - R$ 1,99.\nDeixe as respostas separadas por espaço.');
    let totalComprado = 0;
    let opcoes = itensComprados.split(' ');
    for (let i = 0; i < opcoes.length; i++) {
      switch (opcoes[i]) {
        case "1":
          totalComprado += 2.50;
          break;
        case "2":
          totalComprado += 3.75;
          break;
        case "3":
          totalComprado += 1.99;
          break;
        default:
          console.log("Opção inválida");
      }
    }
    console.log(`O valor total da compra é: R$ ${totalComprado.toFixed(2)}`);
    alert(`O valor total da compra é: R$ ${totalComprado.toFixed(2)}.\nIsso é bastante para uma guilda de novatos, ok?`);
}
function verificar08(){
    console.log('O botão 08 foi clicado');
    alert('Na bibioteca do Diagramador Supremo o preço da multa é de R$ 0,50 por dia de atraso para CADA livro.\nCalcule o seu débito e não individe sua guilda, aventureiro!');
    let livrosTotal = parseInt(prompt('Informe o total LIVROS em atraso'));
    let multaDias = parseInt(prompt('Informe o total de DIAS em atraso'));
    console.log(`Você tem ${livrosTotal} livros alugados em ${multaDias} dias em atraso.`);
    alert(`Você tem ${livrosTotal} livro${livrosTotal !== 1 ? 's' : ''} alugado${livrosTotal !== 1 ? 's' : ''} em ${multaDias} dia${multaDias !== 1 ? 's' : ''} em atraso.`);
    let debitoBiblio = (livrosTotal * (multaDias*0.5));
    alert(`Ou seja, você me deve um total de R$ ${debitoBiblio}.`)
    console.log(`Você deve R$ ${debitoBiblio}`)
}
function verificar09(){
    console.log('O botão 09 foi clicado');
    alert('Uma grande quantidade de monstros apareceu e agora você precisa enfrenta-los.');
    function exibirImagemEAudio() {
        let imagem = new Image();
        imagem.src = 'img/cogumelos.jpg';
        imagem.style.display = 'block';
        imagem.style.margin = '0 auto';
        document.body.appendChild(imagem);
        let audio = new Audio('aud/Bonetrousle.mp3');
        audio.volume = 0.5;
        audio.play();
    }
    exibirImagemEAudio();
    let vidaHero = 100
    function atacarHero() {
        vidaHero -= 30;
        console.log(`Vida do personagem após o ataque: " + ${vidaHero}`);
        if (vidaHero <= 0) {
         console.log('Eles são muitos.\nVocê teve que fugir');
         alert('Eles são muitos.\nVocê teve que fugir')
        }
    }
    setTimeout(atacarHero, 2000);
    setTimeout(atacarHero, 4000);
    setTimeout(atacarHero, 6000);
    setTimeout(atacarHero, 8000);
}
function verificar10(){
    console.log('O botão 10 foi clicado');
    function contarLetrasMaiusculas(string) {
        let maiusculas = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] >= 'A' && string[i] <= 'Z') {
                maiusculas++;
            }
         }
        return maiusculas;
    }
    alert('Eu, o Fatorador Supremo também posso contar maiúsculas em frases aleatórias.')
    let tamanho = prompt('Use uma string qualquer para que eu possa contabilziar!', 'LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY');
    console.log("Número de letras maiúsculas na string: " + contarLetrasMaiusculas(tamanho));
}
function verificar11(){
    console.log('O botão 11 foi clicado');
    function calcularIdade(dataNascimento) {
        let dataAtual = new Date();
        let anoAtual = dataAtual.getFullYear();
        let anoNascimento = new Date(dataNascimento).getFullYear();
        let idade = anoAtual - anoNascimento;
        return idade;
    }
    let dataNascimento = prompt('Utilize: ANO-MES-DIA', 'YYYY-MM-DD');
    let idade = calcularIdade(dataNascimento);
    console.log("A idade da pessoa é: " + idade);
    alert(`Você tem ${idade} anos`)
}
