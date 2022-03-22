//Formas de imprimir aspas dentro de aspas
let umaString = 'Um "texto"';
console.log(umaString);
umaString = "Outro \"texto\"";
console.log(umaString);

// A barra invertida(\) é utilizada como caractere de escape
//Se vc quiser imprimir a \ dentro do conscole deve-se colocar \\, caso contrário ela irá retornar uma especie de espaço
let utilizandoBarra = 'Um \texto';
console.log(utilizandoBarra);
utilizandoBarra = 'Um \\texto';
console.log(utilizandoBarra);

//As strings são indexadas, cada caractere possui um indice, lembrando que começam do 0[
//           0123456789
umaString = "Caracteres";
console.log(umaString[0]);//Imprimindo den acordo com o primeiro indice
console.log(umaString.charAt(6));//Imprimindo de acordo com o indice 6
console.log(umaString.concat(' ', 'em', ' ', 'uma variável'));//O concat serve para concatenar, possui a mesma função que o + em uma String

//Fazer pesquisa do indice
console.log(umaString.indexOf('C'));
console.log(umaString.indexOf('c', 0));//Procurando c após o indice 0
console.log(umaString.lastIndexOf('s'));//Busca o caractere de trás para frente

//Expressões regulares
console.log(umaString.match(/[a-z]/g));//Retornando todas as letras minusculas da variável
console.log(umaString.search(/[x]/)); //Similar ao indexOf e aceita expressões
console.log(umaString.replace('Caracteres', 'Caractere'));//Subistituindo os valores
umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.replace(/r/, '#'));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length); //Mostra o tamanho da String
console.log(umaString.slice(2, 6));//Onde começa e onde termina
