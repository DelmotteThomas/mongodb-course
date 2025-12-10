let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');

//Exercice : 1
//Dans lesquels a joué Keanu Reeves

// const moviesEx1 = db.movies
// .find({
//     cast : {
//         $in: ["Keanu Reeves"]
//     }
// })

// console.log(moviesEx1);


// Exercice : 2
// Qui sont des comédies 

// const moviesEx2 = db.movies
// .find({
//     genres:  {
//         $in:["Comedy"]
//     }
// })
// .projection({
//     title: 1,
//     genres: 1,
//     _id: 0
// });

//console.log(moviesEx3);

// Exercice : 3
// sortis entre 2002 et 2008
// const moviesEx3 = db.movies
// .find({
//     released: {
//         $gte: ISODate("2002-01-01T00:00:00Z"),
//         $lte: ISODate("2008-12-31T23:59:59Z")
//     }
// })

// Correction 
// const moviesBetween2002And2008 = db.movies
// .find({
//     year:{ $gte: 2002, $lte: 2008 }
// })

// console.log(moviesEx3);

// Exercice : 4

// Dans lesquels ont joué conjointement Chris O'Donnellet Matt Damon
// const moviesEx4 = db.movies
// .find({
//     actors: {
//         $all: ["Chris O\'Donnell", "Matt Damon"]
//     }
// })



// console.log(moviesEx4);


// Exercice : 5
//Réalisés par Neil Burger ou Brad Furman
// const moviesEx5 = db.movies
// .find({
//     $or:[
//         { directors :'Neil Burger'},
//         { directors : 'Brad Furman'}

//         ]
// })
// console.log(moviesEx5);

//Exercice : 6
// Trouver le film le plus anciens

// const oldestMovie = db.movies
// .find()
// .sort({ released: 1 })
// .limit(1);
// console.log(oldestMovie);


// Exercice : 7

//Qui ont une note supérieur à 8 et un rating supérieur à 8 des critiques
// const moviesEx7 = db.movies
// .find({
//     $and : [
//         {"imdb.rating": { $gt :8}},
//         {'tomatoes.critic.rating' : { $gt:8}}
//     ]
    
// })

// console.log(moviesEx7);

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

