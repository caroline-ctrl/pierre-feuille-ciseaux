let scores = {
    pointPerso: 0,
    pointOrdi: 0
}

////////////////////////////////////////////////
// permet de cacher le choix du nombre de manche
let nbrparty = document.getElementById('nbrparty')
let contentCart = document.getElementById("contentCart")
contentCart.style.display = "none"

function cach() {
    if (getComputedStyle(nbrparty).display != "none") {
        nbrparty.style.display = "none"
        contentCart.style.display = "block"
    }

    if (getComputedStyle(contentCart).display = "none") {
        contentCart.style.display = "block"
    }

}
contentCart.onclick = cach
nbrparty.onclick = cach



////////////////////////////////////////////
// recupère la valeur du bouton de la manche
function choice(value) {
    document.getElementById("choiceParty").innerHTML = value;
}



//////////////////////////////
// reponse aléatoire de l'ordi
function choiceComputer() {
    let tab = ["PIERRE", "FEUILLE", "CISEAUX"]
    let newWord = Math.floor(Math.random() * tab.length)
    document.getElementById('carteOrdi').innerHTML = tab[newWord]
}





///////////////////////////////////////////////////
// recupère la valeur de la carte et 
//affiche la valeur de la carte et la rep de l'ordi
function choicePerso(value) {
    document.getElementById("carte").innerHTML = value
    choiceComputer()
    rules()
    breakParty()
}



//////////////////////////////////////////////////////
// Arrete le jeu quand le nombre de points est atteint
function breakParty() {
    let nbr = document.getElementById("choiceParty").textContent

    if (nbr == scores.pointOrdi) {
        location.replace("/finishOrdi.html")
    } else if (nbr == scores.pointPerso) {
        location.replace("/finishPerso.html")
    }
}




/////////////////
// regles du jeu
function rules() {
    let perso = document.getElementById("carte").textContent
    let ordi = document.getElementById("carteOrdi").textContent

    if (perso == ordi) {
        document.getElementById("result").innerHTML = "égalité"
    } else if ((perso == "PIERRE") && (ordi == "FEUILLE")) {
        document.getElementById("result").innerHTML = "Vous perdez le point : La feuille enveloppe la pierre"
        scores.pointOrdi++
        document.getElementById("scorePerso").innerHTML = scores.pointPerso
        document.getElementById("scoreOrdi").innerHTML = scores.pointOrdi
        return scores.pointOrdi

    } else if ((perso == "PIERRE") && (ordi == "CISEAUX")) {
        document.getElementById("result").innerHTML = "Vous avez 1 point : La pierre broie les ciseaux"
        scores.pointPerso++
        document.getElementById("scorePerso").innerHTML = scores.pointPerso
        document.getElementById("scoreOrdi").innerHTML = scores.pointOrdi
        return scores.pointPerso

    } else if ((perso == "FEUILLE") && (ordi == "PIERRE")) {
        document.getElementById("result").innerHTML = "Vous avez 1 point : La feuille enveloppe la pierre"
        scores.pointPerso++
        document.getElementById("scorePerso").innerHTML = scores.pointPerso
        document.getElementById("scoreOrdi").innerHTML = scores.pointOrdi
        return scores.pointPerso

    } else if ((perso == "FEUILLE") && (ordi == "CISEAUX")) {
        document.getElementById("result").innerHTML = "Vous perdez le point : Les ciseaux coupent la feuille"
        scores.pointOrdi++
        document.getElementById("scorePerso").innerHTML = scores.pointPerso
        document.getElementById("scoreOrdi").innerHTML = scores.pointOrdi
        return scores.pointOrdi

    } else if ((perso == "CISEAUX") && (ordi == "PIERRE")) {
        document.getElementById("result").innerHTML = "Vous perdez le point : La pierre broie les ciseaux"
        scores.pointOrdi++
        document.getElementById("scorePerso").innerHTML = scores.pointPerso
        document.getElementById("scoreOrdi").innerHTML = scores.pointOrdi
        return scores.pointOrdi

    } else if ((perso == "CISEAUX") && (ordi == "FEUILLE")) {
        document.getElementById("result").innerHTML = "Vous avez 1 point : Les ciseaux coupent la feuille"
        scores.pointPerso++
        document.getElementById("scorePerso").innerHTML = scores.pointPerso
        document.getElementById("scoreOrdi").innerHTML = scores.pointOrdi
        return scores.pointPerso

    }
}