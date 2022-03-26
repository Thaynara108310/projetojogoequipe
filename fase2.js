function responder (){
    var pergunta = prompt(" Digite a letra  da opção");
  
    while (true){
        if (!pergunta) {
            alert("digite a ou b");
            pergunta = prompt("a b  Digite a letra da opção");
        }else if (pergunta == 'a'){
            alert("resposta certa")
         location.href='./fase3.html';
        break;
        }else if (pergunta =='b') {
            alert("Talvez não seja a melhor alternativa");
            location.href='./erroufase1.html';
            break;
        }else {
            alert("digite a ou b");
            pergunta = prompt("Digite o numero da opção");
        }
    }
  }