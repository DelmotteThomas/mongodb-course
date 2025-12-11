import { model, Schema } from "mongoose";


const AwardSchema = new Schema({
    wins : {
        type: Number
    },
    nominations : {
        type : Number
    },
    text : {
        type : String
    }

})

const imbdSchema = new Schema({
    rating : {
        type : Number
    },
    votes : {
        type : Number
    },
    id : {
        type : Number
    }
})

const tomatoeVSchema = new Schema({
    rating : {
        type : Number
    },
    numReviews : {
        type : Number
    },
    meter : {
        type : Number
    }
})

const tomatoesSchema = new Schema({
    viewer : {
        type : tomatoeVSchema
    },
    fresh : {
        type : Number
    },
    critic : {
        type : tomatoeVSchema
    },
    rotten : {
        type : Number
    },
    lastUpdated : {
        type : Date
    }
})





const MovieSchema = new Schema({
    plot :{
        type: String,
    },
    genres : {
        type: [String],
    },
    runtime:{
            type: Number,
    },
    cast: {
        type: [String],
    },
    poster:{
        type:String
    },
    title:{
        type:String
    },
    fullplot : {
        type:String
    },
    languages : {
        type:[String]
    },
    released : {
        type : Date
    },
    directors : {
        type : [String]
    },
    rated: {
        type : String
    },
    awards : {
        type : AwardSchema
    },
    lastupdated : {
        type : Date
    },
    year : {
        type : Number
    },
    imdb : {
        type : imbdSchema
    },
    countries : {
        type : [String]
    },
    type : {
        type : String
    },
    tomatoes : {
        type : tomatoesSchema
    }

})

export const MovieModel2 = model ("movies",MovieSchema)