let temperatura = 25;

if (temperatura > 30) {
  console.log('Está muito quente!');
} else if (temperatura >= 20 && temperatura <= 30) {
  console.log('A temperatura está agradável.');
} else {
  console.log('Está um pouco frio.');
}


/*Explicação: Neste exemplo, usamos uma estrutura condicional composta
 (if...else if...else) para verificar a temperatura. O programa verifica três condições
  diferentes:
Se a temperatura for maior que 30, imprime "Está muito quente!".
Se a temperatura estiver entre 20 e 30 (incluindo 20 e 30), imprime "A temperatura está agradável.".
Caso contrário (ou seja, se a temperatura for menor que 20), imprime "Está um pouco frio.".*/