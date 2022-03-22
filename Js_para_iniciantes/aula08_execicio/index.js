let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/*
    Primeira forma: 
        let aux;
        aux = varA;
        varA = varB;
        varB = varC;
        varC = aux; 
        
    Segunda forma:
        [varA, varB, varC] = [varB, varC, varA]
*/

console.log(varA, varB, varC);

