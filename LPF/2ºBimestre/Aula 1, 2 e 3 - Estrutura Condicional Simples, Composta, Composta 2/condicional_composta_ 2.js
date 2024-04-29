let hora = 14;
let saudacao;

if (hora >= 0 && hora < 12) {
  saudacao = 'Bom dia!';
} else if (hora >= 12 && hora < 18) {
  saudacao = 'Boa tarde!';
} else {
  saudacao = 'Boa noite!';
}

console.log(saudacao);


/*Explicação: Neste exemplo, usamos uma estrutura condicional composta 2, 
também chamada de estrutura condicional aninhada.
 O programa verifica a hora do dia e define a variável saudacao com base na hora:
Se a hora for maior ou igual a 0 e menor que 12, a variável saudacao recebe "Bom dia!".
Caso contrário, se a hora estiver entre 12 e 18 (incluindo 12 e excluindo 18), 
a variável saudacao recebe "Boa tarde!".
Se nenhuma das condições anteriores for atendida, a variável saudacao recebe "Boa noite!".
Ao final, a mensagem de saudação é exibida no console conforme a hora do dia.*/