// Soletrando

// Implemente uma função que receba uma string (um nome qualquer) e seja capaz de soletrar a string informada. O retorno da função será um conjunto de letras separadas por hífens, conforme exemplo abaixo.

// Caso o nome informado seja `programador`, a função deve retornar:

// ```
// p-r-o-g-r-a-m-a-d-o-r

const spellNames = (nome: string) => {
    return nome.split('').join('-');
}

console.log(spellNames('programador'));