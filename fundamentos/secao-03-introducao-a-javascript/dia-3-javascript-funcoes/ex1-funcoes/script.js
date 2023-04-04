// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

let balance = 10;

console.log('Balance: ' + balance);

// Adicione um valor ao saldo.

function add(value) {
    return balance + value;
}

console.log('Add: ' + add(2));

// Subtraia um valor do saldo.

function subtract(value) {
    return balance - value;
}

console.log('Subtract: ' + subtract(4));


// Multiplique o valor do saldo por uma taxa.

function multiply(rate) {
    return balance * rate;
}

console.log('Multiply: ' + multiply(2));

// Divida o valor do saldo.

function divide(value) {
    return balance / value;
}

console.log('Divide: ' + divide(4));
