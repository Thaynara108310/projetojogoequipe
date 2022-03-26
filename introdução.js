
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
  
  digitacao("-Hora de sugar umas almas!.", 0);