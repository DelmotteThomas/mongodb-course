let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');





// Exercice : 4

// Dans lesquels ont joué conjointement Chris O'Donnellet Matt Damon
const moviesEx4 = db.movies
.find({
    actors: {
        $all: ["Chris O'Donnell", "Matt Damon"]
    }
})



console.log(moviesEx4);

