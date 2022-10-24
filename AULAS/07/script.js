function verificaMaiorNum(num1, num2){
     if(num1>=num2){
        if(num1 == num2){
            console.log("O número " +num1+ " é igual ao número " +num2);
        }else{
            console.log("O número " +num1+ " é maior que o número " +num2);
        }
     }else{
        console.log("O número " +num1+ " é menor que o número " +num2);
     }
}

// verificaMaiorNum(100,30);

function teste(){
    alert("Estou na function teste");
    return nome;
}

//console.log(teste());

// let mgs = (nome)=>{ // arrow function
//     return nome
// }

//console.log(mgs("Carol"));

// (function(produto, preco){
//     alert("O produto é "+produto+ " e o preço é de R$"+preco);
// })("Biscoito", 2.56)

let v1 = prompt("Digite o valor 1");
let v2 = prompt("Digite o valor 2");

const soma = (valor1, valor2)=>{
    let resultado = parseFloat(valor1) + parseFloat(valor2);
    console.log(resultado);
}

soma(v1,v2);