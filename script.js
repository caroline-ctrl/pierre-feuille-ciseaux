function test() {
    let essaie = document.getElementsByTagName("IMG")
    for (let i = 0; i < essaie.length; i++) {
        essaie[i].style.filter = "blur(5px)" // met les img en flouetées
        essaie[i].id = "img" // change l'id de toutes les images en "img"
    }

    // donne un mot aléatoir dans le tableau pour la rep de l'ordi
    let tab = ["pierre", "feuille", "ciseaux"]
    let newWord = Math.floor(Math.random() * tab.length)
    document.getElementById('ordi').innerHTML = tab[newWord]


    let scorePerso = 0
    let scoreOrdi = 0
    
    if (document.getElementById("perso").textContent == document.getElementById("ordi").textContent){
        document.getElementById("result").innerHTML = "égalité"

    } else if ((document.getElementById("perso").textContent == "pierre") && (document.getElementById("ordi").textContent == "ciseaux")){
        document.getElementById("result").innerHTML = "Vous avez 1 point : La pierre broie les ciseaux"
        scorePerso += 1

    } else if ((document.getElementById("perso").textContent == "pierre") && (document.getElementById("ordi").textContent == "feuille")){
        document.getElementById("result").innerHTML = "Vous perdez le point : La feuille enveloppe la pierre"
        scoreOrdi += 1

    } else if ((document.getElementById("perso").textContent == "feuille") && (document.getElementById("ordi").textContent == "pierre")){
        document.getElementById("result").innerHTML = "Vous avez 1 point : La feuille enveloppe la pierre"
        scorePerso += 1

    } else if ((document.getElementById("perso").textContent == "feuille") && (document.getElementById("ordi").textContent == "ciseaux")){
        document.getElementById("result").innerHTML = "Vous perdez le point : Les ciseaux coupent la feuille"
        scoreOrdi += 1

    } else if ((document.getElementById("perso").textContent == "ciseaux") && (document.getElementById("ordi").textContent == "pierre")){
        document.getElementById("result").innerHTML = "Vous perdez le point : La pierre broie les ciseaux"
        scoreOrdi += 1

    } else if ((document.getElementById("perso").textContent == "ciseaux") && (document.getElementById("ordi").textContent == "feuille")){
        document.getElementById("result").innerHTML = "Vous avez 1 point : Les ciseaux coupent la feuille"
        scorePerso += 1
    }

    document.getElementById('scorePerso').innerHTML = scorePerso
    document.getElementById('scoreOrdi').innerHTML = scoreOrdi

}



let tests;
// permet de recupérer la valeur de "value" et l'affiche dans un "p"
document.getElementById('img1').addEventListener('click', () => {
    tests = document.getElementById('img1').getAttribute("value")
    document.getElementById("perso").innerHTML = tests;
    document.getElementById('perso').textContent = tests
}, {
    once: true,
});


document.getElementById("img2").addEventListener('click', () => {
    tests = document.getElementById('img2').getAttribute('value')
    document.getElementById('perso').innerHTML = tests;
    document.getElementById('perso').textContent = tests
}, {
    once: true,
})


document.getElementById("img3").addEventListener('click', () => {
    tests = document.getElementById('img3').getAttribute('value')
    document.getElementById('perso').innerHTML = tests;
    document.getElementById('perso').textContent = tests
}, {
    once: true,
})


