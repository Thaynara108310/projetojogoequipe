function responder (){
    var pergunta = prompt(" Digite a letra  da opção");

    while (true){
        if (!pergunta) {
            alert("digite a ou b");
            pergunta = prompt("Digite a letra da opção");
        }else if (pergunta == 'a'){
          alert("Não foi dessa vez!");
         location.href='erroubimo.html';
        break;
        }else if (pergunta =='b') {
            alert("Correto!");
            location.href='./fase3bimo.html';
            break;
          }else if (pergunta =='c') {
            alert("Não foi dessa vez!");
            location.href='erroubimo.html';
            break;
        }else {
            alert("digite a ou b");
            pergunta = prompt(" Digite o numero da opção");
        }
    }
}
const saida = document.querySelector(".saida");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 89);
  }
}

digitacao("-Ele tinha 27 anos quando pintou sua primeira peça.", 0);