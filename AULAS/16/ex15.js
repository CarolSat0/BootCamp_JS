window.onload=function(){
    //     function tabuada(numero){
    //         
    
            
    //     }

    const tab = document.querySelector("#tabuada");
    const btn = document.querySelector("#Calcular");
    const resp = document.querySelector("#resposta");
    
    btn.addEventListener('click', function(){
        let numero = Number(tab.value);
        let tabuada = 0;
            if(isNaN(numero)){
                resp.innerHTML = "Digire um valor numerico valido";
            }else{
                if(numero <1 || numero >10){
                    resp.innerHTML = "Digite um valor entre 1 e 10";
                }else{
                    console.log(`Tabuada do ${numero}`);
                    resp.innerHTML = `tabuada do ${tab.value}`
                    while(tabuada<=10){ //tabuada é o contador
                        resp.innerHTML +=`<br> ${numero} x ${tabuada} = ${(numero * tabuada)}`;
                        tabuada++;
                    }
                }
            }
    });
}