const express = require("express");

const router = express.Router();

const { welcome } = require("../../controllers/sayActions");

router.get("/", welcome);

// Import And Use Routers Here

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
