// Code pour changer l'image

var monImage = document.querySelector('img');
monImage.onclick = function() 
    {
        var monSrc = monImage.getAttribute('src');
        if(monSrc === 'images/prog.jpg') {
                monImage.setAttribute('src','images/prog2.jpg');            
            } else {
                monImage.setAttribute('src','images/prog.jpg');
            }
    }

// Personnaliser le message H1

var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
    var monNom = prompt('Entrer votre nom');
    localStorage.setItem('nom', monNom);
    monTitre.textContent = 'Pakadjok au top, ' + monNom;
}

if(!localStorage.getItem('nom')){
    définirNomUtilisateur();
    } else {
    var nomEnregistré = localStorage.getItem('nom');
    monTitre.textContent = 'Pakadjok au top' + nomEnregistré;
}

monBouton.onclick = function () {
    définirNomUtilisateur ();
}

