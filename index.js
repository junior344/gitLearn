var pseudET = document.getElementById("pseudo");
pseudET.value = "Monpseudo";

//affichez d'un message textule pour la saisir du pseudo

pseudET.addEventListener("focus", function(){
    document.getElementById("aiderpseudo").textContent="entrez votre pseudo";
});

// suppression du message contextuel pour la saisir du psuedo

pseudET.addEventListener("blur", function(e) {
    document.getElementById("aidepseudo").textContent="";
});

pseudET.focus();  //focus sur la barre d'ecriture

// demande de confirmation par email

document.getElementById("confirmation").addEventListener("change", function(e){
    console.log("demande de confirmation  :"+ e.target.checked);
});

//affichage la nationalité 
document.getElementById("nationalite").addEventListener("change", function(e){
    console.log("code  de nationalité :"+e.target.value);
});

//verifier la longueur du mot de passse 

document.getElementById("passe").addEventListener("input", function(e){
    var passe = e.target.value // valeur a saisir dans le champs vide 
    var longpasse = "faible";
    var colormsg = "red"; //longueur faible => color red
    if (passe.length >= 8){
        longpasse="suffisant";
        colormsg = "green";// longueur suffisant => color vert
    }else if (passe.length >=4){
        longpasse="moyenne";
        colormsg="orange"; // longueur moyenne => color orange 
    }
    var aidempelt = document.getElementById("aidepasse");
    aidempelt.textContent = "longueur"+longpasse;
    aidempelt.style.color = colormsg;
});