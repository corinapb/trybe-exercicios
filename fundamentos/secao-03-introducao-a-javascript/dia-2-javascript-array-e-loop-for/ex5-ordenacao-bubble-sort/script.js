// Ordene o array numbers em ordem crescente e imprima seus valores.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[i] < numbers[j]) {
            let menor = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = menor;
        }
    }
}

console.log('Array em ordem crescente: ' + numbers);

// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let xNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    let mult;

    if (i === numbers.length - 1) {
        mult = numbers[i] * 2;
    } else {
        mult = numbers[i] * numbers[i + 1];
    }

    xNumbers.push(mult);
}

console.log('Array multiplicada: ' + xNumbers);

// Agora, trabalhe com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os códigos a seguir.

// Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

let n = 5;

for (let i = 0; i < n; i++) {
    let linha = '';
    for (let j = 0; j < n; j++) {
        linha += '*';
    }
    console.log(linha);
}

// Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base.

n = 5;

for (let i = 1; i <= n; i++) {
    let linha = '';
    for (let j = 0; j < i; j++) {
        linha += '*';
    }
    console.log(linha);
}

// Agora, inverta o lado do triângulo.

n = 5;

for (let i = 0; i < n; i++) {
    let linha = '';
    for (let j = 0; j < n - i; j++) {
        linha += ' ';
    }
    for (let k = 0; k <= i; k++) {
        linha += '*';
    }
    console.log(linha);
}

// Depois, faça uma pirâmide com n asteriscos de base.

n = 5;

for (let i = 1; i <= n; i += 2) {
    let space = (5 - i) / 2;
    let linha = '';

    for (let j = 0; j < space; j++) {
        linha += ' ';
    }
    for (let k = 0; k < i; k++) {
        linha += '*';
    }
    for (j = 0; j < space; j++) {
        linha += ' ';
    }
    console.log(linha);
}

// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar.



// Faça um algoritmo que indique se um número definido em uma variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele por quaisquer outros números dá resto diferente de zero.

