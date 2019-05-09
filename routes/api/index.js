const router = require("express").Router();
const wellnessRoutes = require("./wellness");

// Book routes
router.use("/wellness", wellnessRoutes);

module.exports = router;
