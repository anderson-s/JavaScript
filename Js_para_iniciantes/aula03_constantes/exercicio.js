/* 
    Escreva Fulano de tal tem 19 anos, pesa 70 kg
    Tem 1.8 de altura e seu IMC é de 25.50505058474
    Fulano nasceu em 2002
*/
const nome = 'Fulano';
const sobrenome = 'de Tal';
const idade = 19;
const peso = 70;
const altura = 1.8;
let anoNascimento = 2002;

let imc; // peso / (altura ^ 2)

imc = peso/(altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa`, peso, `kg`);
console.log(`Tem`, altura, `de altura e seu IMC é de`, imc);
console.log(nome, 'nasceu em ', anoNascimento);