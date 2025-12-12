import mongoose from "mongoose";
import { UserModel } from "./schemas/userNflixSchema.ts";



async function init() {
    try { 
        mongoose.set('debug', true);
        let connection = await mongoose.connect('mongodb://root:test123@localhost:27017/sample_mflix?authSource=admin', {
            
        });

        console.log("Connecté à " + connection.connection.db?.databaseName);
    } catch(e) {
        console.log("Une erreur est survenue :", e);
    }

    const users = await UserModel.findOne({
        email: "amaury@triptyk.eu"
    });

    users.overwrite({
        lastName: 'Amaury',
        firstName: 'Deflorenne',
        email: "amaury@triptyk.eu",
        password: "123456789"
    });

    await UserModel.findAndSave(users._id.toString(), {
        lastName: 'Amaury',
        firstName: "Larry",
        email: "amaury@triptyk.eu"
    });
}

init();