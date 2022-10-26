//while

let loop = 0;

while(loop<10){
    console.log(loop);
    loop++;
}

let cores = ["Verde", "Vermelho"];

while(loop<cores.length){
    console.log(cores[loop]);
    loop++;
}

let teste = 0;

do{
    teste = Number(prompt("Digite 0 para sair"));

    switch(teste){
        case 0:
            alert("Sair do sistema");
        break;
        case 1:
            alert("cadastrando");
        break;
        case 2:
            alert("consultando");
        break;
        default:
            alert("opção inválida");
        break;
    }
}while(teste != 0);

