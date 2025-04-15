let frutas = ["Maçã", "Pêra", "Banana"];

frutas.map(fruta =>{
    console.log(`Fruta: ${fruta}`);

    for(let letra of fruta){
        console.log(letra);
    }

    console.log(`---`)
})