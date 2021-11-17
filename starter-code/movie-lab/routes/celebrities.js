const express = require("express");
const router = express.Router();

const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
        .then((celebritiesFromDb) => {
            console.log(celebritiesFromDb);
            res.render("celebrities/index", { celebrities: celebritiesFromDb, doctitle: "Celebrities" });
        })
        .catch((err) => next(err));
});

router.get("/celebrities/new", (req, res, next) => {
    res.render("celebrities/new", { doctitle: "Add a new celebrity"});
});

router.get("/celebrities/:id", (req, res, next) => {
    const id = req.params.id;
    Celebrity.findById(id)
        .then((celebritiesFromDb) => {
            res.render("celebrities/show", { celebrities: celebritiesFromDb, doctitle: celebritiesFromDb.name });
        })
        .catch((err) => next(err));
});

router.post("/celebrities", (req, res, next) => {
    const { name, occupation, catchPhrase, picture } = req.body;

    Celebrity.create({
        name,
        occupation,
        catchPhrase,
        picture,
    })
        .then((createdCelebrity) => {
            res.redirect(`/celebrities/${createdCelebrity._id}`);
        })
        .catch((err) => next(err), res.render("celebrities/new"));
});

router.get("/celebrities/:id/delete", (req, res, next) => {
    const id = req.params.id;
    Celebrity.findByIdAndRemove(id)
        .then(() => {
            res.redirect("/celebrities");
        })
        .catch((err) => next(err));
});

router.get("/celebrities/:id/edit", (req, res, next) => {
    const id = req.params.id;
    Celebrity.findById(id)
        .then((celebrity) => {
            res.render("celebrities/edit", { celebrity, doctitle: `Edit ${celebrity.name}` });
        })
        .catch((err) => next(err));
});

router.post("/celebrities/:id", (req, res, next) => {
    const id = req.params.id;
    const { name, occupation, catchPhrase, picture } = req.body;

    Celebrity.findByIdAndUpdate(
        id,
        {
            name,
            occupation,
            catchPhrase,
            picture,
        },
        { new: true }
    )
        .then((updatedCelebrity) => {
            res.redirect(`/celebrities/${updatedCelebrity._id}`);
        })
        .catch((err) => next(err));
});

module.exports = router;
