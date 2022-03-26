function responder() {
    var pergunta = prompt("1 - sim 2 - não Digite o número da opção");

    while (true) {
        if (!pergunta) {
            alert("digite 1 ou 2");
            pergunta = prompt("1 - sim 2 - não Digite o número da opção");
        } else if (pergunta == '1') {
            location.href = 'fase2bimo.html';
            break;
        } else if (pergunta == '2') {
            alert("Voce perdeu!");
            break;
        } else {
            alert("digite 1 ou 2");
            pergunta = prompt("1 - sim 2 - não Digite o numero da opção");
        }
    }
}
