// let frutas = [
//     {fruta: "Maça", preco: 3.5},
//     {fruta: "Melancia", preco: 5},
// ]

// function listaFrutas(f){
//     for(let produto of f){ //produto percorre frutas
//         for(let p in produto){
//             console.log(`${p} -> ${produto[p]}`)
//         }
//     }
// }

// listaFrutas(frutas);

// function SomaValorFrutas(vf){
//     for(let produto of vf){
//         for(let f in produto){
//             if(typeof)
//         }
//     }
// }

// SomaValorFrutas(frutas);

window.onload=function(){
    function tabuada(numero){
        let tabuada = 0;
        if(typeof numero !== 'number'){
            alert("Digire um valor numerico valido");
        }else{
            if(numero <1 || numero >10){
                alert("Digite um valor entre 1 e 10");
            }else{
                console.log(`Tabuada do ${numero}`);
                while(tabuada<=10){ //tabuada é o contador
                    console.log(`${numero} x ${tabuada} = ${(numero *tabuada)}`);
                    tabuada++;
                }
            }
        }

        
    }

    tabuada(' ');
}
