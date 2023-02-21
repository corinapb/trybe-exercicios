/* Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

let a = 2;
let b = 3;

console.log('Soma: ' + a + b);

console.log('Subtração: ' + (b - a));

console.log('Multiplicação: ' + (a * b));

console.log('Divisão: ' + (a / b));

console.log('Módulo: ' + (a % b));

/* Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados. */

if (a > b) {
    console.log('O maior número é: ' + a);
} else if (b > a) {
    console.log('O maior número é: ' + b)
} else {
    console.log('Os números são iguais');
}

/* Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados. */

let c = 4;

if (a > b && a > c) {
    console.log('O maior número é o a: ' + a);
} else if (b > a && b > c) {
    console.log('O maior número é o b: ' + b);
} else if (c > a && c > b) {
    console.log('O maior número é o c: ' + c);
} else {
    console.log('Temos um empate.');
}

/* Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo. */

if (a > 0) {
    console.log('positive');
} else if (a < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

/* 🚀 Utilize if/else para escrever um código que defina três variaveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro. 

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo. */

let d = 60;
let e = 80;
let f = 40;

if ((d + e + f) === 180 && d > 0 && e > 0 && f > 0) {
    console.log(true);
} else {
    console.log(false);
}

/* Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
    case 'rei':
        console.log('Rei-> Uma casa apenas para qualquer direção.');
        break;
    case 'bispo':
        console.log('Bispo-> Diagonal.');
        break;
    case 'rainha':
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peão':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log('Erro, peça inválida!');
        break;
};

/* Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let porcentagem = 80;
let nota = '';

if (porcentagem >= 90) {
    nota = 'A';
} else if (porcentagem >= 80) {
    nota = 'B';
} else if (porcentagem >= 70) {
    nota = 'C';
} else if (porcentagem >= 60) {
    nota = 'D';
} else if (porcentagem >= 50) {
    nota = 'E';
} else if (porcentagem > 0 && porcentagem < 50) {
    nota = 'F';
} else {
    console.log('Erro');
};

console.log(nota);

/* Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
Bônus: use somente um if. */

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

/* Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.
Bônus: use somente um if. */

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

/* Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.
Atente para o fato de que um imposto de 20% incide sobre o custo do produto.

Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto); */

let custo = 50;
let venda = 80;



if (custo > 0 && venda > 0) {
    let custoTotal = custo * 1.2;
    let lucro = (venda - custoTotal) * 1000;
    console.log('O custo total é: ' + custoTotal);
    console.log('O lucro ao vender 1.000 produtos é: ' + lucro);
} else {
    console.log('Erro');
};

/* Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00, terá como primeiro desconto referente à contribuição do INSS. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda, que representa um desconto de R$ 200,25.
R$ 142,80 parcela a se deduzir do imposto de renda.
Fazendo a conta para obtermos o valor do imposto de renda temos: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55. */

let salarioBruto = 3500;
let salarioBase;
let salarioLiquido;
let aliquotaIR;
let deducaoIR;
let aliquotaINSS;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = 0.08;
    salarioBase = salarioBruto - salarioBruto * aliquotaINSS;
    salarioLiquido = salarioBase;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquotaINSS = 0.09;
    salarioBase = salarioBruto - salarioBruto * aliquotaINSS;

    if (salarioBase < 1903.98) {
        salarioLiquido = salarioBase;
    } else if (salarioBase >= 1903.99 && salarioBase < 2826.65) {
        aliquotaIR = 0.075;
        deducaoIR = 142.80;
        salarioLiquido = salarioBase - salarioBase * aliquotaIR + deducaoIR;
    }

} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotaINSS = 0.011;
    salarioBase = salarioBruto - salarioBruto * aliquotaINSS;

    if (salarioBase >= 1903.99 && salarioBase < 2826.65) {
        aliquotaIR = 0.075;
        deducaoIR = 142.80;
        salarioLiquido = salarioBase - salarioBase * aliquotaIR + deducaoIR;
    } else if (salarioBase >= 2826.65 && salarioBase < 3751.05) {
        aliquotaIR = 0.15;
        deducaoIR = 354.80;
        salarioLiquido = salarioBase - salarioBase * aliquotaIR + deducaoIR;
    } else if (salarioBase >= 3751.05 && salarioBase < 4664.68) {
        aliquotaIR = 0.225;
        deducaoIR = 636.13;
        salarioLiquido = salarioBase - salarioBase * aliquotaIR + deducaoIR;
    } else if (salarioBruto >= 4664.68) {
        aliquotaIR = 0.275;
        deducaoIR = 869.36;
        salarioLiquido = salarioBase - salarioBase * aliquotaIR + deducaoIR;
    }

} else if (salarioBruto > 5189.82) {
    aliquotaINSS = 570.88;

    if (salarioBase >= 3751.05 && salarioBase < 4664.68) {
        aliquotaIR = 0.225;
        deducaoIR = 636.13;
        salarioLiquido = salarioBase - salarioBase * aliquotaIR + deducaoIR;
    } else if (salarioBruto >= 4664.68) {
        aliquotaIR = 0.275;
        deducaoIR = 869.36;
        salarioLiquido = salarioBase - salarioBase * aliquotaIR + deducaoIR;
    }
}

console.log('O salário líquido é: ' + salarioLiquido);