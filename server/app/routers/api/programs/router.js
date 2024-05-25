const express = require("express");

const router = express.Router();

const { browse, readOne } = require("../../../controllers/programActions");

router.get("/", browse);

router.get("/:id", readOne);

/* ************************************************************************* */

module.exports = router;
