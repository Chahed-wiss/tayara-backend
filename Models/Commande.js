const mongoose = require('mongoose')
const Produit = require('./Produit')
const Utilisateur = require('./Utilisateur')

const schema = mongoose.Schema({
  
    quantite : Number,
    date_commande : {type :Date , default : Date.now()},
    etat : {type : String , default : 'En attente'},
  
    utilisateur_id : {type : mongoose.Schema.Types.ObjectId , ref : Utilisateur},
    produit_id : {type : mongoose.Schema.Types.ObjectId , ref : Produit},

})


module.exports = mongoose.model('Commande' , schema)