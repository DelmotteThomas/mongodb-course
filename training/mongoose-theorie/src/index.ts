import mongoose from "mongoose";


import { UserModel } from "./schemas/userNflixSchema.ts";

async function init() {
    try { 
        const connection = await mongoose.connect('mongodb://root:test123@localhost:27017/sample_mflix?authSource=admin');

        console.log("Connecté à " + connection.connection.db?.databaseName)
    } catch(e) {
        console.log("Une erreur est survenue :", e);
    }

    const users = await UserModel.find();
     console.log(users);
}

init();