function responder (){
    var pergunta = prompt(" Digite a letra  da opção");

    while (true){
        if (!pergunta) {
            alert("digite a ou b");
            pergunta = prompt("Digite a letra da opção");
        }else if (pergunta == 'a'){
          alert("Correto!");
         location.href='./acertou.html';
        break;
        }else if (pergunta =='b') {
            alert("Não foi dessa vez!");
            break;
        }else {
            alert("digite 1 ou 2");
            pergunta = prompt("1 - sim 2 - não Digite o numero da opção");
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

digitacao("As cores que vemos em suas pinturas não são como ele pretendia.", 0);