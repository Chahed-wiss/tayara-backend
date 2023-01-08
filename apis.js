var multipart = require('connect-multiparty');
var upload_produit = multipart({uploadDir : './uploads/produits'});

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

serveur.post('/produit', upload_produit , Produit.ajouter)

serveur.put('/produit/:_id' , Produit.modifier)
serveur.delete('/produit/:_id' , Produit.supprimer)

serveur.get('/filterByCategory/:category_id' , Produit.filterByCategory)
serveur.post('/filterAll' , Produit.filterAll)



const Commande = require('./Controllers/commande.controller')

serveur.get('/commande' , Commande.afficher)
serveur.get('/commande/:_id' , Commande.details)
serveur.post('/commande' , Commande.ajouter)
serveur.put('/commande/:_id' , Commande.modifier)
serveur.delete('/commande/:_id' , Commande.supprimer)
serveur.put('/modifier_etat/:_id/:etat' , Commande.modifier_etat)
};