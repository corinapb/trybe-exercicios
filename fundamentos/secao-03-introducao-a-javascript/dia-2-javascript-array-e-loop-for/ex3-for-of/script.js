// Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
}


let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
    resultado -= index;
    console.log(resultado);
};
console.log(resultado);