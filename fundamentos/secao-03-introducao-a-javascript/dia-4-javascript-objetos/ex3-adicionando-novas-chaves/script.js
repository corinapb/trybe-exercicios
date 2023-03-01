// Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {

};

function addProperty(object, key, value) {
    object[key] = value;
}

let newKey = 'name';
let firstName = 'Corina';

addProperty(student, newKey, firstName);

newKey = 'email';
let email = 'corinapbachmann@gmail.com';

addProperty(student, newKey, email);

newKey = 'phone';
let phone = '48991446159';

addProperty(student, newKey, phone);

newKey = 'github';
let github = 'corinapb';

addProperty(student, newKey, github);

newKey = 'linkedin';
let linkedin = 'Corina P. Bachmann';

addProperty(student, newKey, linkedin);

console.log(student);