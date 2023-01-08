const mongoose = require('mongoose')
const Category = require('./Category')
const Utilisateur = require('./Utilisateur')

const schema = mongoose.Schema({
  
    nom : String,
    reference : String,
    image : {
        name : String,
        path : String,
        size : Number,
        type_image : String
    },
    prix : Number,
    description : String,
    category_id : {type : mongoose.Schema.Types.ObjectId , ref : Category},
    utilisateur_id : {type : mongoose.Schema.Types.ObjectId , ref : Utilisateur},

    stock : {type : Number , default : 0},
})

module.exports = mongoose.model('Produit' , schema)