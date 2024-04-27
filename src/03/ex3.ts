//Crie uma função que recebe um array de números como argumentos. A funcão deverá montar uma tabuada de multiplicação para cada número do array passado no argumento da função. O resultado da tabuada deverá ser impresso conforme exemplo abaixo.

// ### Exemplo

// ```javascript
// ;[1, 5, 2]
// ```

// Caso o array informado como argumento da função seja o array acima, deverá imprimir:

// ```
// 1 x 0 = 0
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 4 = 4
// 1 x 5 = 5
// 1 x 6 = 6
// 1 x 7 = 7
// 1 x 8 = 8
// 1 x 9 = 9
// 1 x 10 = 10
// ---------------

// 5 x 0 = 0
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50
// --------------

// 2 x 0 = 0
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

const arrayOfNumbers = (numTypes: Array<number>) => {
  for (let numType of numTypes) {
    console.log(`Tabuada do ${numType}`);
    for (let i = 0; i <= 10; i++) {
      const result = numType * i;
      console.log(`${numType} x ${i} = ${result}`);
    }
    console.log("---------------");
  }
};

arrayOfNumbers([1, 5, 7]);
