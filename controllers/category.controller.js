const Category = require("../Models/Category");

exports.afficher= async(req ,res) =>{
  const resultat = await Category.find();
  res.send(resultat);
};
exports.details = async(req , res)=>{
    const resultat = await Category.findOne({_id : req.params._id})
    res.send(resultat)
}

exports.ajouter = async(req , res)=>{
    const resultat = new Category(req.body)
    resultat.save().then((success)=>{

        res.send(resultat)
    }).catch((erreur)=>{
        res.send(erreur)
    })


}

exports.modifier = async(req , res)=>{
   Category.updateOne({_id : req.params._id} , req.body , (erreur , success)=>{
    if(erreur){
        res.send(erreur)
    }else{
        res.send(success)
    }
   })
   
}

exports.supprimer = async(req , res)=>{
    const resultat = await Category.deleteOne({_id : req.params._id})
    res.send(resultat)
}
