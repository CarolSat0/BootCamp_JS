let nomes = ["Ana", "Bruno", "Carolina", "Eduardo", "Fernadna"];
let posicao;

function parametros(){
    console.log(nomes);
    nomes.push(prompt("Digite o nome desejado a inserir"));
    posicao = nomes.indexOf(prompt("Digite o numero do nome desejado <br> Ana <br> Bruno <br> Carolina <br> Eduardo <br> Fernadna"));
}

parametros();