let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');



// Exercice : 7

//Qui ont une note supérieur à 8 et un rating supérieur à 8 des critiques
const moviesEx7 = db.movies
.find({
    $and : [
        {"imdb.rating": { $gt :8}},
        {'metacritic' : { $gt:8}}
    ]
    
})

console.log(moviesEx7);

