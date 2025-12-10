let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

db = db.getSiblingDB('sample_mflix');

// const Amaury = db.movies.find({
//     actors: "Amaury Reeves"
// });

// console.log(Amaury);

// db.movies.updateOne(
//     { directors: 'Denis Villeneuve' },
//     { 
//         $push: { actors: "Amaury Reeves" },
//           $pull: { genres: "Drama" },
//           $set: { "directors.$" : "Patate Man" }
//     }
// );

const upsertResult = db.movies.updateOne({
    year: -999
}, {
    $set: {
        title: "Jurassic Pâques"
    }
},{
    upsert: true
});

console.log(upsertResult);

const movie = db.movies.find({
    _id: ObjectId('693989beb485593f09dd0310')
});

console.log(movie);