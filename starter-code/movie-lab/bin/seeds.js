const mongoose = require("mongoose");

const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/movie-lab");

const celebrities = [
    {
        name: "Tom Cruise",
        occupation: "actor",
        catchPhrase: "Hey, I'm 150cm",
    },
    {
        name: "Rone",
        occupation: "musician",
        catchPhrase: "I'm the best artist on Earth",
    },
    {
        name: "Kim Kardashian",
        occupation: "unknown",
        catchPhrase: "I'm the most useless person on Earth",
    },
];

Celebrity.insertMany(celebrities)
    .then((celebrities) => {
        console.log(
            `Success, ${celebrities.length} celebrities were added to the database!`
        ),
            mongoose.connection.close();
    })
    .catch((err) => console.log(err));
