import mongoose from "mongoose";
import { UserModel } from "./schemas/userNflixSchema.ts";
import { MovieModel } from './schemas/moviesSchemaCorrectif.ts'

async function init() {
    try { 
        const connection = await mongoose.connect('mongodb://root:test123@localhost:27017/sample_mflix?authSource=admin');

        console.log("Connecté à " + connection.connection.db?.databaseName)
    } catch(e) {
        console.log("Une erreur est survenue :", e);
    }

     const users = await UserModel.findOne({
        name: "Bowen Marsh"
    });

      

    const newUser = new UserModel({
        name: "Jean Jacques",
        email: "Jean@Test.eu",
        password: "pudipudi1997",
        daysConnected: 0,
        address: {
            number: 16,
            street: "Rue de la Loi",
            city: "Bruxelles",
            country: "Belgique",
            box: "Bte 3"
        }
    });

    await newUser.save();

    console.log(users);

    const movies = await MovieModel.findOne({
        title: "The Godfather"
    });

    console.log(movies);

    const newMovie = new MovieModel({
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        genres: [ "Crime", "Drama" ],
        runtime: 175,
        cast: [ "Marlon Brando", "Al Pacino", "James Caan" ],
        title: "The Godfather II",
        fullplot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        counries: [ "USA" ],
        released: 1974  ,
        directors: [ "Francis Ford Coppola" ],
        rated: "R",
        awards: {
            wins: 1 ,
            nominations: 11 ,
            text: "Won 1 Oscar. Another 32 wins & 11 nominations."
        },
        lastupdated: new Date("2015-08-26 00:03:50.123000000"),
        year: 1974,
        imdb: {
            rating: 9.0,
            votes: 1349663,
            id: 240
        },
        type: "movie"
    });

    await newMovie.save();
    console.log("Nouveau film ajouté :", newMovie);


     const newMovieAction = new MovieModel({
        plot: " A skilled thief is offered a chance to have his past crimes forgiven, by implanting another person's idea into a target's subconscious.",
        genres: [ "Comedy" ],
        runtime: 175,
        cast: [ "Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page" ],
        title: "Inception",
        fullplot: " A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        counries: [ "USA" ],
        released: 2010  ,
        directors: [ "Christopher Nolan" ],
        rated: "PG-18",
        awards: {
            wins: 152 ,
            nominations: 204 ,
            text: "Won 4 Oscars. Another 152 wins & 204 nominations."
        },
        lastupdated: new Date("2018-08-26 00:03:50.123000000"),
        year: 2010,
        imdb: {
            rating: 8.8,
            votes: 2000000,
            id: 27205
        },
        type: "movie"
    });

    await newMovieAction.save();
    console.log("Nouveau film ajouté :", newMovieAction);


      const matrix = await MovieModel.findOne({
        title: "The Matrix"
        
        });

        // Changer le titre du film matrix
        if (matrix) {
            matrix.title = "The Matrique";
            await matrix.save();
            console.log("Film mis à jour :", matrix);
        }

        const jurassic = await MovieModel.findOne(
            { 
                title: "Jurassic Park" },
            
        );

        // Delete via le modele
        await jurassic?.deleteOne();
        console.log("Film supprimé :", jurassic);

        // delete  via la collection

        await MovieModel.deleteOne({ title: "Jurassic Park" });
        
}


init();