function questao1() {
  let populacaoA = 80000;
  let populacaoB = 200000;
  let anos = 0;

  while (populacaoA < populacaoB) {
    populacaoA = populacaoA + (populacaoA * 0.03);
    populacaoB = populacaoB + (populacaoB * 0.015);
    anos++;
  }

  console.log("Vai levar " + anos + " anos para A ultrapassar ou igualar B");
}

function questao2() {
  let pares = 0;
  let impares = 0;

  for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Digite o " + i + "º número:"));
    if (num % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  console.log("Quantidade de pares: " + pares);
  console.log("Quantidade de ímpares: " + impares);
}

function questao3() {
  let qtd = parseInt(prompt("Digite a quantidade de números:"));
  let soma = 0;
  let menor = Infinity;
  let maior = -Infinity;

  for (let i = 1; i <= qtd; i++) {
    let num = parseFloat(prompt("Digite o " + i + "º número:"));
    soma += num;

    if (num < menor) menor = num;
    if (num > maior) maior = num;
  }

  console.log("Menor: " + menor);
  console.log("Maior: " + maior);
  console.log("Soma: " + soma);
}

function questao4() {
  let salario = 1000;
  let ano = 1996;
  let aumento = 0.015;

  while (ano <= new Date().getFullYear()) {
    salario += salario * aumento;
    aumento = aumento * 2;
    ano++;
  }

  console.log("Salário atual (fixo): R$ " + salario.toFixed(2));

  let salarioInicial = parseFloat(prompt("Digite o salário inicial:"));
  ano = 1996;
  aumento = 0.015;

  while (ano <= new Date().getFullYear()) {
    salarioInicial += salarioInicial * aumento;
    aumento = aumento * 2;
    ano++;
  }

  console.log("Salário atual (informado): R$ " + salarioInicial.toFixed(2));
}

function questao5() {
  let raio = parseFloat(prompt("Digite o raio do círculo:"));

  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;

  console.log("Área: " + area.toFixed(2));
  console.log("Perímetro: " + perimetro.toFixed(2));
}

function questao6() {
  let capital = parseFloat(prompt("Digite o capital inicial:"));
  let taxa = parseFloat(prompt("Digite a taxa de juros mensal (em %):")) / 100;
  let tempo = parseInt(prompt("Digite o tempo do investimento (em meses):"));

  let montante = capital * Math.pow((1 + taxa), tempo);

  console.log("O montante é R$ " + montante.toFixed(2));
}


let escolha = parseInt(prompt(
  "Qual questão você quer rodar?\n" +
  "1 - Crescimento Populacional\n" +
  "2 - Pares e Ímpares\n" +
  "3 - Menor, Maior e Soma\n" +
  "4 - Salário com Aumento\n" +
  "5 - Área e Perímetro do Círculo\n" +
  "6 - Investimento\n"
));

switch (escolha) {
  case 1:
    questao1();
    break;
  case 2:
    questao2();
    break;
  case 3:
    questao3();
    break;
  case 4:
    questao4();
    break;
  case 5:
    questao5();
    break;
  case 6:
    questao6();
    break;
  default:
    console.log("Nada");
}
