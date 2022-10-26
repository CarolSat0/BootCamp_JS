// i=2;

// for(let x=0; x<=10; x++){
//     console.log(`O valor da interação é ${x} o i mais ele mesmo ${i++}`);
// }

let Pessoas = {
    nome: "Carolina Sato",
    idade: 22,
    profissão: "estagiaria"
}

for(let propriedades in Pessoas){
    console.log(Pessoas[propriedades]);
}

let frutas = ["melancia", "banana", "manga"];

for(let nomeFrutas of frutas){
    console.log(nomeFrutas);
}

let herois = [
    {
        identidadeSecreta: "Steven Roger",
        heroi: "Capitão America",
    },
    {
        identidadeSecreta: "Tony Stark",
        heroi: "Homem de ferro",
    },
    {
        identidadeSecreta: "Peter Packer",
        heroi: "Homem aranha",
    },
];

herois.push({identidadeSecreta:"Diana", heroi:"Mulher maravilha"});

for(let marvel of herois){ //traz o objeto (não consegue ler direto o objeto)
    for(let m in marvel){
        console.log(`${m} -> ${marvel[m]}`);
    }
}