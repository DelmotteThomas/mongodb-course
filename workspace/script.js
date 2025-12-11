let db = connect("mongodb://root:test123@localhost:27017?authSource=admin");
db = db.getSiblingDB("sample_mflix");

const result = db.comments.aggregate([
    {
        $lookup: {
            from: "movies",
            localField: "movie_id",
            foreignField: "_id",
            as: "linked_movie"
        }
    },
    {
        $unwind: "$linked_movie"
    },
    {
        $match: {
            linked_movie: {
                $exists: true
            }
        }
    }
]);

console.log(result);