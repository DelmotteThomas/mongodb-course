let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');





// Exercice 8

// Qui ne sont jamais sortis 

const moviesEx8 = db.movies
.find({
    released: {$exists: false}
})
.projection({
    title: 1,
    _id: 0
});

console.log(moviesEx8);

