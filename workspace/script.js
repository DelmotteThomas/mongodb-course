let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');






//Exercice : 6
// Trouver le film le plus anciens

const oldestMovie = db.movies
.find()
.sort({ released: 1 })
.limit(1);
console.log(oldestMovie);



