function responder (){
  var pergunta = prompt(" Digite a letra  da opção");

  while (true){
      if (!pergunta) {
          alert("digite a ou b");
          pergunta = prompt("a b c Digite a letra da opção");
      }else if (pergunta == 'a'){
        alert("Esta pergunta é pessoal, portanto não tem resposta certa ou errada! Autoestima lá em cima")
       location.href='./fase2.html';
      break;
      }else if (pergunta =='b') {
          alert("Esta pergunta é pessoal, portanto não tem resposta certa ou errada! Vamos trabalhar um pouco está autoestima viu");
          location.href='./fase2.html';
          break;
        }else if (pergunta =='c') {
          alert("Esta pergunta é pessoal, portanto não tem resposta certa ou errada! É incrivel mesmo");
          location.href='./fase2.html';
          break;
      }else {
          alert("digite a ou b");
          pergunta = prompt("Digite o numero da opção");
      }
  }
}
