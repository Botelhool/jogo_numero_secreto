let listaDenumeroSorteados= [];
let numeroLimite= 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1; 


function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1','Desafio do número secreto');
    exibirTextoNaTela('p','escolha um número entre 1 e 100');
}
mensagemInicial('h1','Desafio do Número secreto');
mensagemInicial('p','escolha um número entre 1 e 100');


function verificarChute(){
    let chute = document.querySelector ('input').value;

      if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou miseravi!');
        let palavratentativas = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas =`Você descobriu o número secreto com ${tentativas} ${palavratentativas}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor');
        } else {
            exibirTextoNaTela('p','O numero secreto é maior');
        }
    }tentativas++; 
    limparCampo();
} 

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*100 +1);
    if(listaDenumeroSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else{
        listaDenumeroSorteados.push(numeroEscolhido);
        console.log(listaDenumeroSorteados);
        return numeroEscolhido;
    }
}



function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    numeroSecreto= numeroAleatorio();
    limparCampo();
    tentativas= 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('Disabled',true); 

}




