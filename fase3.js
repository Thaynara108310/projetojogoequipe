function responder (){
    var pergunta = prompt(" Digite a letra  da opção");
  
    while (true){
        if (!pergunta) {
            alert("digite a ou b");
            pergunta = prompt("a b  Digite a letra da opção");
        }else if (pergunta == 'a'){
            alert("resposta correta")
         location.href='./acertoufinal.html';
        break;
        }else if (pergunta =='b') {
            alert("Tente novamente");
            location.href='./erroufase1.html';
            break;
        }else {
            alert("digite a ou b");
            pergunta = prompt("Digite o numero da opção");
        }
    }
  }
