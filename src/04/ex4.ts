// Impressão de Etiquetas

// Uma linha de produção de computadores precisa implementar uma nova funcionalidade, ao sistema de gestão usado em sua fábrica, para geração automática de etiquetas dos produtos. Implemente uma função que receba um objeto, conforme exemplo abaixo, como argumento e retorne uma lista com todas as informações das etiquetas geradas.

// ```javascript
//     {
//         produto: 'CPU Dual Core 3.0GHZ',
//         lote: 321,
//         ano: 2022,
//         qtd: 5
//     }
// ```

// O resultado para o exemplo acima será:

// ```javascript
// ;[
//     "321-2022-001",
//     "321-2022-002",
//     "321-2022-003",
//     "321-2022-004",
//     "321-2022-005",
// ]

const ticketPrinters = (
  printer: { produto: string; lote: number; ano: number; qtd: number }[]
) => {
  const result: string[] = [];
  printer.forEach((printer) => {
    for (let i = 1; i <= printer.qtd; i++) {
      result.push(
        `${printer.lote}-${printer.ano}-${i.toString().padStart(3, "0")}`
      );
    }
  });
  return result;
};

console.log(
  ticketPrinters([
    {
      produto: "CPU Dual Core 3.0GHZ",
      lote: 321,
      ano: 2022,
      qtd: 5,
    },
  ])
);
