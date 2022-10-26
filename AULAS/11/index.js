//primeira forma de se criar objetos

// function Pessoa(nome){
//     this.nome = nome;
// }

// Pessoa.prototype.msg = function(){//permite que outras classes utilize essa msg                    
//     alert("Olá!" + this.nome);       //evita sobrecarga de memória
// } 
// let NovaPessoa = new Pessoa("Carol");
// let OutraPessoa = new Pessoa("Gui");

// NovaPessoa.msg();
// OutraPessoa.msg();

// // console.log(NovaPessoa.nome);
// // NovaPessoa.msg();

// console.log(NovaPessoa);

//segunda forma de se criar objeto

// let Pessoa2 = {
//     'nome':' ',
//     'idade': ' '
// }

// Pessoa2.__proto__.msg = function(){
//     alert("Olá! "+Pessoa2.nome);
// }
// let P = Pessoa2;
// P.nome = "Carol";
// P.msg();
// console.log(P);

//terceira forma - cadastro

let Pessoa3 = [
    {
        'nome' : 'Carol',
        'idade' : 22,
        'genero' : 'F'
    },
    {
        'nome' : 'Guilherme',
        'idade' : 24,
        'genero' : 'M'
    },
    {
        'nome' : 'Maria',
        'idade' : 20,
        'genero' : 'F'
    },
    {
        'nome' : 'Claudio',
        'idade' : 24,
        'genero' : 'M'
    },
]

let NPessoa = Pessoa3;
console.log(`Existem ${NPessoa.length} cadastradas!`);
console.log(NPessoa[0].nome);