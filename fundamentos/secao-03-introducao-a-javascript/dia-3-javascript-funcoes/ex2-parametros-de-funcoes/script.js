// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClients(client) {
    if (typeof client !== 'string') {
        return 'Erro. O parâmetro não é uma string.'
    }
    return clientesTrybeBank.push(client);
}

console.log(addClients(10));

addClients('Ana');
console.log(clientesTrybeBank);

addClients('Chris');
console.log(clientesTrybeBank);

// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

function deleteClient(client) {
    if (typeof client !== 'string') {
        return 'Erro. O parâmetro não é uma string.'
    }
    let index = clientesTrybeBank.indexOf(client);
    clientesTrybeBank.splice(index, 1);
}

deleteClient('Ada');
console.log(clientesTrybeBank);