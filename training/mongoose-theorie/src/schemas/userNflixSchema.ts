import { Schema, model } from "mongoose";


const schema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

export const UserModel = model('users', schema);
// userNflix sera le nom de la collection dans la BDD (ajout d'un 's' à la fin)
