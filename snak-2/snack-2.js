// ARRAY DI OGGETTI
const squadre = [
    { nome : "Lazio", falli : 0, punti : 0,},
    { nome : "Milan", falli : 0, punti : 0,},
    { nome : "Inter", falli : 0, punti : 0,},
    { nome : "Roma", falli : 0, punti : 0,},
    { nome : "Juventus", falli : 0, punti : 0,},
    { nome : "Atalanta", falli : 0, punti : 0,},
    { nome : "fiorentina", falli : 0, punti : 0,},
    { nome : "Bologna", falli : 0, punti : 0,},
    { nome : "Torino", falli : 0, punti : 0,},
    { nome : "Napoli", falli : 0, punti : 0,},
    { nome : "Como", falli : 0, punti : 0,},
]

// FUNCTION

for (let i = 0; i < squadre.length; i++){
    squadre[i].falli = Math.floor((Math.random() * 100) + 1);
    squadre[i].punti = Math.floor((Math.random() * 100) + 1);
    console.log(`${squadre[i].nome} falli ${squadre[i].falli}`)
}

