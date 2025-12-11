let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");

db = db.getSiblingDB('sample_mflix');


// selectionner le nombre de film par realisateur ayant un rating inférieur à 5
// Limiter le résultat à 10 element puis enregistrer le resultat dans une collection nommée "lame_directors"

const result = db.movies.aggregate ([
    {
        $match: {
            "imdb.rating": { 
                $lt: 5
            }
        }
    },
    {
      $unwind: "$directors"
    },
    // compter le nombre de film par directeurs
    {
      $group : {
         _id: "$directors", count: {$count:{}}

      }
    },
    // Trier par ordre décroissant
    { 
      $sort : { count : -1 }
    },
    {
        $limit: 10
    },
    {
      $out : {
        db:"sample_mflix",
        coll : "lame_directors"
      }
    }
]);

    console.log(result);

const lameDirectors = db.lame_directors.find();
      console.log(lameDirectors);



// const aggregation = db.movies.aggregate([
//     {
//         $match: {
//             year: {
//                 $gte: 2010
//             }
//         }
//     },
//     {
//         $count: "total_count"
//     }
// ]);

// console.log(aggregation);