// 🚀 Lidando com arrays

//Percorra o array imprimindo todos os valores contidos nele com a função console.log().
//Some todos os valores contidos no array e imprima o resultado.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
    sum += numbers[i];
}

console.log('A soma é: ' + sum);

// Calcule e imprima a média aritmética dos valores contidos no array.

let media = sum / numbers.length;

console.log(media);

// Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

// Utilizando for, descubra o maior valor contido no array e imprima-o.

let biggestNumber = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > biggestNumber) {
        biggestNumber = numbers[i]
    }
}

console.log('O maior número é: ' + biggestNumber);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let odds = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        odds += 1;
    }
}

if (odds === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(`Foram encontrados ${odds} números ímpares`);
}

// Utilizando for, descubra o menor valor contido no array e imprima-o.

let smallestNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i]
    }
}

console.log('O menor número é: ' + smallestNumber);

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let array = [];

for (let i = 0; i <= 25; i += 1) {
    array.push(i);
}

console.log(array);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let i = 0; i < array.length; i += 1) {
    console.log(array[i] / 2);
}

// Lógica de programação e algoritmos

//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//4! = 4 x 3 x 2 x 1 = 24

// Crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 1;

for (let i = 10; i > 0; i--) {
    fatorial *= i;
}

console.log('O fatorial de 10 é: ' + fatorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverse = '';

for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
}

console.log(`A palavra ${word} invertida fica: ` + reverse);

// Considere o array de strings abaixo:
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array2 = ['java', 'javascript', 'python', 'html', 'css'];
let menor = array2[0];
let maior = '';

for (let i = 0; i < array2.length; i++) {
    if (array2[i].length > maior.length) {
        maior = array2[i];
    }
    if (array2[i].length < menor.length) {
        menor = array2[i];
    }
}

console.log('A menor array é: ' + menor);
console.log('A maior array é: ' + maior);