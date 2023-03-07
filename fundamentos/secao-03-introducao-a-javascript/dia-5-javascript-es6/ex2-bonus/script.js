// Crie duas funções JavaScript com as seguintes especificações:

// Função 1: Escreva uma função substituaX que substitua a letra ‘x’ em uma frase.

/* 
Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!'.
A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
*/

const substituaX = nome => {
    const frase = 'Tryber x aqui!';

    let fraseX = frase.replace("x", nome);

    return fraseX;
};

console.log(substituaX('Bebeto'));


// Função 2: Escreva uma função minhasSkills que receberá o retorno da Função 1 por parâmetro e retornará uma nova string.

const minhasSkills = func => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let valoresConcatenados = `${func} Minhas três principais habilidades são: ${skills.join(', ')}`;

    return valoresConcatenados;
}

console.log(minhasSkills(substituaX('Bebeto')));