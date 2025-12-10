let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
// USE technocite
db = db.getSiblingDB('sample_mflix');

const movies = db.movies.find({
    genres: {
        $all: ["Romance", "War"]
    }
});


// SELECT title FROM movies WHERE releadsed is NULL
const moviesExists = db.movies.find({
    released:  {
        $exists: false
    }
})
.projection({
    title: 1,
    year: true,
    _id: 0
})

.sort({
    title: 1
});


console.log(movies);

console.log(moviesExists);
