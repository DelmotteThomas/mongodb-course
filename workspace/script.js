const { act } = require("react");

let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

db = db.getSiblingDB("sample_mflix");

// Augmenter la note IMDB des critiques de 5 pour tous
// les films dans lesquels a joué Charlize Theron.

// trouver les films avec Charlize Theron
const charlizeMovies = db.movies.find({
  cast: "Charlize Theron",
});
//console.log(charlizeMovies);

const updateResult = db.movies.updateMany(
  {
    cast: "Charlize Theron",
  },
  {
    $inc: { "imdb.rating": 5 },
  }
);

const updatedMovies = db.movies.find({
  actors: "Charlize Theron",
});
//console.log(updatedMovies);

//Supprimer les films réalisés par Harald Zwart

const deleteResult = db.movies.deleteMany({
  directors: "Harald Zwart",
});

// Ajouter l'acteur Key Key aux films "+1" et "Anamorph"




const addKeyKeyToMovies = db.movies.updateMany(
  {
    title: { $in: ["+1", "Anamorph"] },
  },
  {
    $push: {
      cast: "Key Key",
    },
  },
  {
    upsert: true,
  }
);

console.log(replaceKeyKey);

// Supprimmez "Keanu Reeves" de "The Matrix".
db.movies.updateOne({
    title:"The Matrix"
}, {$pull:{
    cast:'Keanu Reeves'
}
}); 

// Remplacez "Jurassic Park" par le film "The Matrix"
const matrix = db.movies.findOne({
    title: "The Matrix"
});
console.log(matrix);

const jurassic  = db.movies.replaceOne({
    title: "Jurassic Park"
}, {
    title: "The Matrix",
}  );
console.log(jurassic);