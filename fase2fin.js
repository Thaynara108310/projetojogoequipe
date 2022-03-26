function responder (){
    var pergunta = prompt(" a ou b  Digite a letra  da opção");

    while (true){
        if (!pergunta) {
            alert("digite a ou b ");
            pergunta = prompt("a ou b  Digite a letra da opção");
        }else if (pergunta == 'a'){
         location.href='./gameover2.html';
        break;
        }else if (pergunta =='b') {
            location.href='./fase3fin.html' ;
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

digitacao("-Do que você ta rindo bebezão, você não é nem uma criança de verdade.", 0);