let frutas = ["Melancia", "Banana", "maça", "Morango"]; 
frutas.push("Jabuticaba", "uva");

for(let i=0; i<frutas.length; i++){ //incrementação
    console.log(frutas[i]);
}

console.log("        ");

for(i=frutas.length; i>=0; i--){ //decrementação
    console.log(frutas[i]);
}