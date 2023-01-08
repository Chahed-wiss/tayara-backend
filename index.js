// 1- importations
const express = require('express')
const mongoose = require('mongoose')


// 2 - initialisation
const serveur = express()
// pour accepter le bosy json du requete http
serveur.use(express.json())
serveur.use(express.static('./'))

//connection au serveur de la base de données
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/tayara' , (erreur , success)=>{
    if(erreur){console.log('Erreur')
}else{
    console.log('Mongodb connected')
  }
})

// 3 - Traitement (API)
/* 
Api :
- requete HTTP (req) (Demande de l'utilisateur (front))
- reponse HTTP (res) (Reponse pour l'utilisateur , tableau, objet, chaine ...)
- path : nom de l'api exemple : / , /movies , /afficher_joueurs
- méthode :
    - get : affichage
    - post : ajouter
    - put : modification
    - delete : suppression
*/

require('./apis')(serveur)




// 4 - Lancement du serveur

serveur.listen(5000, () => {
    console.log('Serveur en cours')
})



