const Commande = require("../Models/Commande");
const Produit = require("../Models/Produit");

exports.afficher= async(req ,res) =>{
  const resultat = await Commande.find();
  res.send(resultat);
};
exports.details = async(req , res)=>{
    const resultat = await Commande.findOne({_id : req.params._id})
    res.send(resultat)
}

exports.ajouter = async(req , res)=>{
    const resultat = new Commande(req.body)
    resultat.save().then((success)=>{

        res.send(resultat)
    }).catch((erreur)=>{
        res.send(erreur)
    })


}

exports.modifier = async(req , res)=>{
   Commande.updateOne({_id : req.params._id} , req.body , (erreur , success)=>{
    if(erreur){
        res.send(erreur)
    }else{
        res.send(success)
    }
   })
   
}

exports.supprimer = async(req , res)=>{
    const resultat = await Commande.deleteOne({_id : req.params._id})
    res.send(resultat)
}

exports.modifier_etat = async(req,res)=>{
    if(req.params.etat == 'Confirmer'){
    var cmd = await Commande.findOne({_id : req.params._id})
    var prod = await Produit.findOne({_id : cmd.produit_id})

    if(prod.stock >= cmd.quantite){
    prod.stock = prod.stock - cmd.quantite
    cmd.etat = 'confirmer'
    await prod.save()
    await cmd.save()

    res.send({'Success' : 'Commande bien confirmée'})
    }else{
        res.send({'erreur' : 'out of stock'})
    }

    }else{
    await Commande.updateOne({_id : req.params._id},{etat : req.params.etat})
    res.send({"updated" : "success"})
    }
}