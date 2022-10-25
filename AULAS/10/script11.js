let nomes = ["Ana", "Bruno", "Carolina", "Eduardo", "Fernadna"];

// document.write(`Array antes da inserção: <br>${nomes.join(`<br>`)} <br>`);
// let NovoNome = nomes.push(prompt("Digite um novo nome"));
// let PNome = nomes.indexOf(prompt("Digite um número"));
// console.log(PNome);

// function parametros(){
//     document.write(`<br>Quantidades de elementos em array: ${nomes.length-1}<br>`);
//     document.write(`Você escolheu o índice ${PNome} que é o elemento ${nomes[PNome]}<br>`);
//     document.write(`A quantidade atual de elementos no array é de: ${nomes.length}`)
// }

function adicionarNome(tabela, NovoNome,index){
    document.write(`Quantidade de elementos: ${nomes.length}<br>`);
    document.write(`Você escolheu o índice ${index} que é o elemento ${nomes[index]}<br>`);
    document.write(`A quantidade atual de elementos: ${nomes.length}`)
}

adicionarNome(nomes, "Gui", 2);