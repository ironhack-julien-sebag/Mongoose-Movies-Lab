const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");
const Celebrity = require("../models/Celebrity");

router.get("/movies", (req, res, next) => {
    Movie.find().then((moviesFromDb) => {
        res.render("movies/index", { movies: moviesFromDb });
    });
});

router.get("/movies/new", (req, res, next) => {
    Celebrity.find()
        .then((celebrityFromDb) => {
            res.render("movies/new", { celebrity: celebrityFromDb });
        })
        .catch((err) => next(err));
});

router.get("/movies/:id", (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)
        .populate("cast")
        .then((movieFromDb) => {
            res.render("movies/detail", { movie: movieFromDb });
        })
        .catch((err) => next(err));
});

router.post("/movies", (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster, plot, cast } =
        req.body;

    Movie.create({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
        plot,
        cast,
    })
        .then((createdMovie) => {
            console.log(createdMovie.cast);
            res.redirect(`/movies/${createdMovie._id}`);
        })
        .catch((err) => next(err));
});

router.get("/movies/:id/delete", (req, res, next) => {
    const id = req.params.id;

    Movie.findByIdAndDelete(id)
        .then(() => {
            res.redirect("/movies");
        })
        .catch((err) => next(err));
});

router.get("/movies/:id/edit", (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)
        .populate("cast")
        .then((movie) => {
            Celebrity.find().then((celebrities) => {
                let options = "";
                let selected = "";
                celebrities.forEach((celebrity) => {
                    selected = movie.cast
                        .map((el) => el._id)
                        .includes(celebrity._id)
                        ? "selected"
                        : "";
                    options += `<option value="${celebrity._id}" ${selected}>${celebrity.name}</option>`;
                });
                console.log(options);

                res.render("movies/edit", { movie, options });
            });
        })
        .catch((err) => next(err));
});

module.exports = router;
