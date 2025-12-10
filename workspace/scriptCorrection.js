let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

db = db.getSiblingDB('sample_mflix');

const filmsKeanu = db.movies.find({
    cast: 'Keanu Reeves'
})
.projection({
    title: true,
    cast: true
})

// console.log(filmsKeanu);

const comedies = db.movies.find({
    genres: 'Comedy'
});

console.log(comedies);

const moviesBetween2002And2008 = db.movies.find({
    year: {
        $gte: 2002,
        $lte: 2008
    } 
});

console.log(moviesBetween2002And2008);

// 
const chrisDamon = db.movies.find({
    cast: {
        $all: ['Chris O\'Donnell', 'Matt Damon']
    }
})

console.log(chrisDamon);

const neilOuFurman = db.movies.find({
    directors: {
        $in : ['Neil Burger', 'Brad Furman']
    }
})

console.log(neilOuFurman);

/*
    $or: [
        {
            directors: 'Neil Burger'
        },
        {
            directors: 'Brad Furman'
        }
    ]
*/

const oldest = db.movies.find({
    year: {
        $exists: true
    }
})
.sort({
    year: 1
})
.limit(1);

console.log(oldest);

// notes imdb 

const imdbSup8 = db.movies.find({
    "imdb.rating": {
        $gt: 8
    },
    "tomatoes.critic.rating": {
        $gt: 8
    }
});

console.log(imdbSup8);

const jamaisSorti = db.movies.find({
    released: {
        $exists: false
    }
})

console.log(jamaisSorti);