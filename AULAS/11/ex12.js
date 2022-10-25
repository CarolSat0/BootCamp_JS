let palavra = prompt("Digite uma palavra");

function dadosPalavra(p){
    document.write(`A palavra inserida possui ${p.length}<br>`);
    document.write(`Convertendo a palavra em MAIUSCULA fica: ${p.toUpperCase()}<br>`);
    let terceiraLetra = palavra.slice(2,3);
    document.write(`A 3ª letra da palavra é: ${terceiraLetra}<br>`);
    let trocaLetra = p.replace(terceiraLetra, "X");
    document.write(`A 3ª letra substituida por X fica: ${trocaLetra}`);
}

dadosPalavra(palavra);