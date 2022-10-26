let frutas = [
    {fruta: "Maça", preco: 3.5},
    {fruta: "Melancia", preco: 5},
]

function listaFrutas(f){
    for(let produto of f){ //produto percorre frutas
        for(let p in produto){
            console.log(`${p} -> ${produto[p]}`)
        }
    }
}

listaFrutas(frutas);

function SomaValorFrutas(vf){
    for(let produto of vf){
        for(let f in produto){
            console.log(produto[f]+produto[f+1]);
        }
    }
}

SomaValorFrutas(frutas);