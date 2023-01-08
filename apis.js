module.exports = (serveur)=>{

const utilisateur = require('./controllers/utilisateurs.controller')

serveur.get('/utilisateurs' , utilisateur.afficher)
serveur.get('/utilisateurs/:_id' , utilisateur.details)
serveur.post('/utilisateurs' , utilisateur.ajouter)
serveur.put('/utilisateurs/:_id' , utilisateur.modifier)
serveur.delete('/utilisateurs/:_id' , utilisateur.supprimer)
serveur.post('/inscription' , utilisateur.inscription)
serveur.post('/connexion' , utilisateur.connexion)  

const Category = require('./Controllers/category.controller')

serveur.get('/category' , Category.afficher)
serveur.get('/category/:_id' , Category.details)
serveur.post('/category' , Category.ajouter)
serveur.put('/category/:_id' , Category.modifier)
serveur.delete('/category/:_id' , Category.supprimer)

const Produit = require('./Controllers/produit.controller')

serveur.get('/produit' , Produit.afficher)
serveur.get('/produit/:_id' , Produit.details)
serveur.post('/produit' , Produit.ajouter)
serveur.put('/produit/:_id' , Produit.modifier)
serveur.delete('/produit/:_id' , Produit.supprimer)

};