import { model, Schema, Model } from "mongoose";


const addressSchema = new Schema({
    street: {
        type: String,

    },
    number: {
        type: Number
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    box: {
        type: String
    }
})

// Défini l'instance du document
interface UserNflixInterface {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    daysConnected?: number,
    address: {
        street: string,
        number: number,
        city: string,
        country: string,
        box: string
    }
    
}

// Défini le modèle avec les méthodes d'instance 
interface UserMethodsInterface {
    getFullName(): string
}
// Défini le modèle avec les méthodes statiques
interface UserStaticsInterface {
    findAndSave(id:string, data:Partial<UserNflixInterface>): Promise<void>;
}

const schema = new Schema <
    UserNflixInterface,
    Model<UserNflixInterface>,
    UserMethodsInterface,
    {},
    {},
    UserStaticsInterface
>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    daysConnected: {
        required: false,
        type: Number,
        min: 0,
        max: 3000
    },
    address: {
        type: addressSchema
    }
}, {
    methods: {
        getFullName() {
            if (!this.firstName || !this.lastName) {
                return 'Anonymous';
            }
            return this._id + ' ' + this.firstName + ' ' + this.lastName;
        }
    },
    statics:{
        // récupère le record par son id, le modifie avec les données passées en paramètre et le sauvegarde
        async findAndSave(id:string, data: UserNflixInterface){
                const record =  await this.findById(id);

                // mettre les propriétés de data dans le record
                if(record){
                    Object.assign(record, data);
                    await record.save();
                }
        }
    }
});

export const UserModel = model("users", schema);