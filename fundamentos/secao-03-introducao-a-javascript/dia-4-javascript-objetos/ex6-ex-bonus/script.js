// Organizando lições

// Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.

function addNight(object, key, value) {
    object[key] = value;
}

addNight(lesson2, 'turno', 'noite');

console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listKeys(object) {
    for (let key in object) {
        console.log(key);
    }
}

listKeys(lesson1);

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

function sizeObject(object) {

}

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function listValues(object) {
    for (let key in object) {
        console.log(object[key]);
    }
}

listValues(lesson3);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });

console.log(allLessons);

// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

function sumStudents(lessons) {
    let sum = 0;
    for (let key in lessons) {
        let students = lessons[key].numeroEstudantes;
        sum += students;
    }
    console.log(sum);
}

sumStudents(allLessons);

// Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. 

function valueKey(lesson, position) {

}

// Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. 

function check(object, key, value) {
    if (object[key] === value) {
        console.log(true);
    } else {
        console.log(false);
    }
};

check(lesson3, 'turno', 'noite');

check(lesson3, 'materia', 'Maria Clara');

