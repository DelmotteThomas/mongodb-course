let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');




// Exercice : 3
// sortis entre 2002 et 2008
const moviesEx3 = db.movies
.find({
    released: {
        $gte: ISODate("2002-01-01T00:00:00Z"),
        $lte: ISODate("2008-12-31T23:59:59Z")
    }
})


console.log(moviesEx3);