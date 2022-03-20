//Variáveis são salvas na memória em tempo de execução dos códigos
//Não podemos criar variáveis com palavras reservadas pelo JS
//Variáveis precisam ter nomes significativos, pois facilita o significado delas em aplicações
//Não pode começar o nome de uma variável com número
//Elas não podem conter espaços ou traços
//Utilizamos camelCase, ou seja, variáveis compostas começam com letra minuscula e a segunda parte com maiuscula
//Case-sensitive --> o tamanho das letras importam
//Não podemos redeclarar variáveis com let
//NÃO UTILIZAR VAR, E SIM LET quando os valores forem alterar
let nome; //Declarando a variável 
nome = "Andeson"; //Inicializando a variável
let sobrenome; //Declarando a variável
sobrenome = "Silva";  //Inicializando a variável

console.log( nome, sobrenome,'nasceu em 2002');
console.log("Atualmente,", nome, sobrenome,"mora em Canindé");
console.log(`${nome} ${sobrenome} é estudante`);
