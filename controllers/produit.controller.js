const Produit = require("../Models/Produit");

exports.afficher= async(req ,res) =>{
  const resultat = await Produit.find().populate('category_id').populate('utilisateur_id');
  res.send(resultat);
};
exports.details = async(req , res)=>{
    const resultat = await Produit.findOne({_id : req.params._id}).populate('category_id');
    res.send(resultat)
}

exports.ajouter = async(req , res)=>{
    const resultat = new Produit(req.body)
    resultat.save().then((success)=>{

        res.send(resultat)
    }).catch((erreur)=>{
        res.send(erreur)
    })


}

exports.modifier = async(req , res)=>{
   Produit.updateOne({_id : req.params._id} , req.body , (erreur , success)=>{
    if(erreur){
        res.send(erreur)
    }else{
        res.send(success)
    }
   })
   
}

exports.supprimer = async(req , res)=>{
    const resultat = await Produit.deleteOne({_id : req.params._id})
    res.send(resultat)
}
