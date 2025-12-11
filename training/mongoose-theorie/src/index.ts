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

    //console.log(users);

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
  
}


init();