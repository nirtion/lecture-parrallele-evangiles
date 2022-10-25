/* Définir un écouteur d'événement et une fonction pour que le bouton "chronologie" affiche les événements */
const boutonChronologie = document.getElementById('chronologie');
const menuChronologie = document.getElementById('menuChronologie');
boutonChronologie.addEventListener("click", function() {
    if (menuChronologie.style.display === "none"){
        menuChronologie.style.display = "block";
    }
    else{
        menuChronologie.style.display = "none";
    }
})

/* Créer une liste de tous les liens de la chronologie pour pouvoir itérer dessus un écouteur d'événement qui fait que quand on clique sur un événement, le menu de chronologie disparait */
const liens = document.getElementsByClassName('lien');
const listeLiens = Array.prototype.slice.call(liens)
listeLiens.forEach(lien => {
    lien.addEventListener("click", event => {
        menuChronologie.style.display = "none";
    })
  })


/* Ecouteur d'événement sur le bouton de traduction pour que cela change la traduction de l'ensemble des extraits */
const boutonTraduction = document.getElementById('traduction');
const s21 = document.querySelectorAll("div[trad='S21']");
const listeS21 = Array.prototype.slice.call(s21)
const crampon = document.querySelectorAll("div[trad='crampon']");
const listeCrampon = Array.prototype.slice.call(crampon)

var chgtTraduction = true;

function traduire(){
    if (chgtTraduction){
        for (let i=0; i<listeS21.length; i++){
            listeS21[i].style.display = "block";
            }; 
        for(let i=0; i<listeCrampon.length; i++){
            listeCrampon[i].style.display = "none";
        }
    } else {
        for (let i=0; i<listeS21.length; i++){
            listeS21[i].style.display = "none";
            }; 
        for(let i=0; i<listeCrampon.length; i++){
            listeCrampon[i].style.display = "block";
        }
    }
    chgtTraduction = !chgtTraduction
}

boutonTraduction.addEventListener('click', traduire)


/* Transformer les indications de traduction en bouton qui traduit uniquement le passage */
const indicationCrampon = document.querySelectorAll("div[indicationCrampon]");
const listeIndicationsCrampon = Array.prototype.slice.call(indicationCrampon);

const indicationS21 = document.querySelectorAll("div[indicationS21]");
const listeIndicationsS21 = Array.prototype.slice.call(indicationS21);

     /* Pour les indications crampon */
for(let i=0; i<listeIndicationsCrampon.length; i++){
    listeIndicationsCrampon[i].addEventListener('click', function(){
        var traductionExtrait = true;
        var passage = listeIndicationsCrampon[i].parentNode;
        var ciblesCollection=passage.children;
        var cibles = Array.prototype.slice.call(ciblesCollection);
        cibles.shift(); /* pour ne garder que les éléments de la liste qui ont l'attribut traduction */
        var extraitCrampon = [];
        var extraitS21 = [];
        for(let j=0; j<cibles.length; j++){
            let attribut = cibles[j].getAttribute('trad');
            if (attribut == "crampon"){
                extraitCrampon.push(cibles[j]);
            }
            else {
                extraitS21.push(cibles[j]);
            }
        }
    for(let k=0; k<extraitCrampon.length; k++){
        extraitCrampon[k].style.display = "none";
    }
    for(let m=0; m<extraitS21.length; m++){
        extraitS21[m].style.display = "block";
    }
    })
}

     /* Pour les indications S21 */
for(let i=0; i<listeIndicationsS21.length; i++){
    listeIndicationsS21[i].addEventListener('click', function(){
        var traductionExtrait = true;
        var passage = listeIndicationsS21[i].parentNode;
        var ciblesCollection=passage.children;
        var cibles = Array.prototype.slice.call(ciblesCollection);
        cibles.shift(); /* pour ne garder que les éléments de la liste qui ont l'attribut traduction */
        var extraitCrampon = [];
        var extraitS21 = [];
        for(let j=0; j<cibles.length; j++){
            let attribut = cibles[j].getAttribute('trad');
            if (attribut == "S21"){
                extraitS21.push(cibles[j]);
            }
            else {
                extraitCrampon.push(cibles[j]);
            }
        }
    for(let k=0; k<extraitS21.length; k++){
        extraitS21[k].style.display = "none";
    }
    for(let m=0; m<extraitCrampon.length; m++){
        extraitCrampon[m].style.display = "block";
    }
    })
} 