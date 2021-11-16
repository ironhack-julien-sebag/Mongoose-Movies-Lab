const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Celebrity = require("./Celebrity");
const CelebrityModel = new Celebrity();

const movieSchema = new Schema(
    {
        title: {
            type: String,
            unique: true,
        },
        year: Number,
        director: String,
        duration: String,
        genre: Array,
        rate: Number,
        plot: String,
        poster: String,
        cast: [
            {
                type: Schema.Types.ObjectId,
                ref: "Celebrity",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
