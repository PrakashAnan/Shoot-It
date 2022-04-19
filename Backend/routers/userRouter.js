const router = require("express").Router();
const Model = require("../models/userModel");

router.post("/add", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user data saved successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});


module.exports = router;
