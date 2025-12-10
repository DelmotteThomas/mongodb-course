let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

db = db.getSiblingDB('sample_mflix');

// // Augmenter la note IMDB des critiques de 5 pour tous les films dans lesquels a joué Charlize Theron.
// db.movies.updateMany({
//     cast: 'Charlize Theron'
// }, {
//     $inc: {
//         "imdb.rating": 5
//     }
// });

// // Supprimer les films réalisés par Harald Zwart
// db.movies.deleteMany({
//     directors: 'Harald Zwart'
// });

// db.movies.updateMany({
//     title: {
//         $in: ["+1", "Anamorph"]
//     }
// }, {
//     $push: {
//         cast: "key Key"
//     }
// });

// db.movies.updateOne({
//     title: "The Matrix"
// }, {
//     $pull: {
//         cast: 'Keanu Reeves'
//     }
// });

    
const theMatrix = db.movies.findOne({
    title: 'The Matrix'
});

delete theMatrix._id;
    
const updateJurassic = db.movies.replaceOne({
    title: "Titanic"
}, theMatrix);

console.log(updateJurassic);