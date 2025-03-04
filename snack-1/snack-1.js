// DOM
const headElm = document.getElementById("bici-leggera") 
// Array's objects

const bici = [
    {
        nome: "Tarmac",
        peso : 6.8,
    },
    {
        nome: "Trek",
        peso : 6.7,
    },
    
    {
        nome: "Canyon",
        peso : 6.6,
    },
    {
        nome: "Pinarello",
        peso : 6.8,
    },
    {
        nome: "BMC",
        peso : 6.9,
    },
    {
        nome: "Giant",
        peso : 6.7,
    }
]

//const
let biciLeggera = null
let prev = Infinity

// comparison
for(let i = 0; i < bici.length; i++){
    const comp = bici[i].peso
    
    if(comp < prev){
        prev = comp
        biciLeggera = bici[i]
    }
}

// PRINT

headElm.innerHTML = `La bici più leggera è la ${biciLeggera.nome} con il peso di ${biciLeggera.peso}kg`
