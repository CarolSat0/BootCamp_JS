let dados = [];
let IMC;
let x = 0;

function solicitar_dados(){
    dados.push(prompt("Digite o seu nome"));
    dados.push(Number(prompt("Digite o seu peso")));
    dados.push(Number(prompt("Digite a sea altura (com ponto (.) no lugar da vírgula (,)")));
}

solicitar_dados();

function apresentar(){
    document.write(`NOME: ${dados[0]} <br> PESO: ${dados[1]}kg <br> ALTURA: ${dados[2]} <br>`);
}

apresentar(dados);

IMC = dados[1]/(dados[2]**2);

console.log(x);
console.log(IMC.toFixed(2));

if(18.5<=IMC&&IMC<=24.9){
    x = 1;
}else{
    if(25.0<=IMC&&IMC<=29.9){
        x=2;
    }
}
if(30<=IMC&&IMC<=40){
    x=3;
}else{
    if(40<IMC){
        x=4;
    }
}

console.log(x);

switch(x){
    case 1:
        document.write(`IMC: ${IMC.toFixed(2)}, seu peso é normal`);
    break
    case 2:
        document.write(`IMC: ${IMC.toFixed(2)}, você está com sobrepeso`);
    break;
    case 3:
        document.write(`IMC: ${IMC.toFixed(2)}, você está com obesidade`);
    break;
    case 4:
        document.write(`IMC: ${IMC.toFixed(2)}, você está com obesidade grave`);
    break;
}

