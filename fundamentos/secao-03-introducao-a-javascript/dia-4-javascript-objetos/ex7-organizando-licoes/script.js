// Exercícios – Bônus

// Exercício 1
// (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados, por exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno estiver à esquerda de um número maior que ele, ele deverá ser subtraído, por exemplo: IX = 10 - 1 = 9.

/* | I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 | */

let numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function conversorRomanos(romano) {
    let first = numerosRomanos[romano[0]];
    let second = numerosRomanos[romano[1]];

    if (first > second) {
        console.log(second + first);
    } else {
        console.log(second - first);
    }
}

/*function converterRomanos(romano) {
    let length = romano.length;

    for (let index = romano.length - 1; index >= 0; index -= 1) {

    }
    console.log(length);
}

converterRomanos('XV');*/

// Exercício 2
// Crie uma função chamada arrayOfNumbers, que receberá a variável vector como parâmetro.
// Por meio de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado pela função no fim.

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(array) {
    let evenArray = [];

    for (let index1 = 0; index1 < array.length; index1 += 1) {
        let insideArray = array[index1];

        for (let index2 = 0; index2 < insideArray.length; index2 += 1) {
            let number = insideArray[index2];
            if (number % 2 === 0) {
                evenArray.push(number);
            }
        }
    }

    console.log(evenArray);
}

arrayOfNumbers(vector);

// 🚀 Exercício 3

// Por meio do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’] deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

let basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

function objectBasket(array) {
    let fruitsObject = {};

    for (let index = 0; index < basket.length; index += 1) {
        let fruit = array[index];
        if (fruitsObject.hasOwnProperty(fruit)) {
            fruitsObject[fruit] += 1;
        } else {
            fruitsObject[fruit] = 1;
        }
    }

    console.log(fruitsObject);

    let list = [];

    for (fruit in fruitsObject) {
        let message = `${fruitsObject[fruit]} ${fruit}`;
        if (fruitsObject[fruit] > 1) {
            message += 's';
        }
        list.push(message);
    }

    console.log(`Sua cesta possui: ${list.join(', ')}.`);

}

objectBasket(basket);

// Exercício 4

let moradores = {
    blocoUm: [
        {
            nome: 'Luíza',
            sobrenome: 'Guimarães',
            andar: 10,
            apartamento: 1005,
        },
        {
            nome: 'William',
            sobrenome: 'Albuquerque',
            andar: 5,
            apartamento: 502,
        },
    ],
    blocoDois: [
        {
            nome: 'Murilo',
            sobrenome: 'Ferraz',
            andar: 8,
            apartamento: 804,
        },
        {
            nome: 'Zoey',
            sobrenome: 'Brooks',
            andar: 1,
            apartamento: 101,
        },
    ],
};

// Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}° andar, apartamento ${moradores.blocoDois[1].apartamento}`);

// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois, faça o mesmo para os moradores do bloco 2.

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
    console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
}

for (let index = 0; index < moradores.blocoDois.length; index += 1) {
    console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
}

// 🚀 Bônus – Organização de lições

// Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função para contar o número de estudantes que assistiram às aulas de Matemática.

// Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função que retorne um objeto que represente o relatório da pessoa instrutora, as aulas ministradas e o número total de estudantes. A saída deverá ser a seguinte:

console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */