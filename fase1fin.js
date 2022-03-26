function responder (){
    var pergunta = prompt(" Digite a letra  da opção");

    while (true){
        if (!pergunta) {
            alert("digite a ou b");
            pergunta = prompt(" Digite a letra da opção");
        }else if (pergunta == 'a'){
         location.href='./fase2fin.html';
        break;
        }else if (pergunta =='b') {
            alert("Não foi dessa vez!");
            location.href='./semaventura.html';
            break;
        }else {
            alert("digite a ou b");
            pergunta = prompt("Digite o numero da opção");
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

digitacao("-Estou com uma sencação estranha Jake, é como se alguém estivesse nos observando, deve ser alguma magia do rei gelado!", 0);