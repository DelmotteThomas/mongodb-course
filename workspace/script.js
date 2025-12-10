let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');





// Exercice : 5
//Réalisés par Neil Burger ou Brad Furman
const moviesEx5 = db.movies
.find({
    $or:[
        { directors :'Neil Burger'},
        { directors : 'Brad Furman'}

        ]
})
console.log(moviesEx5);

