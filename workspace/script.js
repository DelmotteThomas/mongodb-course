let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');



//Exercice : 1

//Dans lesquels a joué Keanu Reeves

const moviesEx1 = db.movies
.find({
    actors : {
        $in: ["Keanu Reeves"]
    }
})


console.log(moviesEx1);

