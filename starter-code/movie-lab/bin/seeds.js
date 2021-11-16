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
    {
        name: "Marlon Brando",
        occupation: "actor",
        catchPhrase: "I'm gonna make him an offer he can't refuse",
    },
    {
        name: "Al Pacino",
        occupation: "actor",
        catchPhrase: "My father made him an offer he couldn't refuse",
    },
    {
        name: "James Caan",
        occupation: "actor",
        catchPhrase:
            "What are you gonna do? Nice college boy, didn't want to get mixed up in the family business. Now you want to gun down a police captain. Why? Because he slapped you in the face a little? What do you think this like the Army where you can shoot 'em from a mile away? No you gotta get up like this and, badda-bing, you blow their brains all over your nice Ivy League suit. C'mere.",
    },
    {
        name: "Diane Keaton",
        occupation: "actor",
        catchPhrase: "Charles Boyle loves me",
    },
    {
        name: "Christian Bale",
        occupation: "actor",
        catchPhrase: "I'm Batman.",
    },
    {
        name: "Heath Ledger",
        occupation: "actor",
        catchPhrase: "A-Ta-Ta-Ta-Ta, let's not blow this out of proportion.",
    },
    {
        name: "Aaron Eckhart",
        occupation: "actor",
        catchPhrase:
            "You either die a hero or live long enough to see yourself become the villain.",
    },
    {
        name: "Michael Caine",
        occupation: "actor",
        catchPhrase: "Some men just want to watch the world burn.",
    },
    {
        name: "Gary Oldman",
        occupation: "actor",
        catchPhrase:
            "He's the hero Gotham deserves but not the one it needs right now.",
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

const Movie = require("../models/Movie");

const movies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        director: "Frank Darabont",
        duration: "2h 22min",
        genre: ["Crime", "Drama"],
        rate: 9.3,
        poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
        title: "The Godfather",
        year: 1972,
        director: "Francis Ford Coppola",
        duration: "2h 55min",
        genre: ["Crime", "Drama"],
        rate: 9.2,
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
        title: "The Godfather: Part II",
        year: 1974,
        director: "Francis Ford Coppola",
        duration: "3h 22min",
        genre: ["Crime", "Drama"],
        rate: 9,
        poster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    },
    {
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        duration: "2h 32min",
        genre: ["Action", "Crime", "Drama", "Thriller"],
        rate: 9,
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
        title: "12 Angry Men",
        year: 1957,
        director: "Sidney Lumet",
        duration: "1h 36min",
        genre: ["Crime", "Drama"],
        rate: 8.9,
        poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        plot: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    },
    {
        title: 'Schindler"s List',
        year: 1993,
        director: "Steven Spielberg",
        duration: "3h 15min",
        genre: ["Biography", "Drama", "History"],
        rate: 8.9,
        poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        plot: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        director: "Quentin Tarantino",
        duration: "2h 34min",
        genre: ["Crime", "Drama"],
        rate: 8.9,
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
        director: "Peter Jackson",
        duration: "3h 21min",
        genre: ["Adventure", "Drama", "Fantasy"],
        rate: 8.9,
        poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    },
    {
        title: "Il buono, il brutto, il cattivo",
        year: 1966,
        director: "Sergio Leone",
        duration: "3h 2min",
        genre: ["Western"],
        rate: 8.9,
        poster: "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg",
        plot: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    },
    {
        title: "Fight Club",
        year: 1999,
        director: "David Fincher",
        duration: "2h 19min",
        genre: ["Drama"],
        rate: 8.8,
        poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    },
];

Movie.insertMany(movies)
    .then((movies) => {
        console.log(`Yay, ${movies.length} movies were added to the database`),
            mongoose.connection.close();
    })
    .catch((err) => console.log(err));
