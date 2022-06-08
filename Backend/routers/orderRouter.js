const router = require("express").Router();
const Model = require("../models/orderModel");


router.post("/add", (req, res) => {
  console.log(req.body);
  
    new Model(req.body)
      .save()
      .then((data) => {
        console.log("user order saved successfully..");
        res.status(200).json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
    });
    router.get("/getall", (req, res) => {
      Model.find({})
        .then((data) => {
          console.log("user list fetched successfully..");
          res.status(200).json(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    });
    

  router.delete("/delete/:id", (req, res) => {
    Model.findByIdAndDelete(req.params.id)
      .then((data) => {
        console.log("Equipment data deleted Successfully..");
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get("/getbyid/:id", (req, res) => {
    Model.findById(req.params.id)
      .then((data) => {
        console.log("Equipment data fetched..");
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get("/getbyuser/:id", (req, res) => {
    Model.find({user : req.params.id}).populate('equipment')
      .then((data) => {
        console.log("Equipment data fetched..");
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.put("/update/:id", (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => {
        console.log("Equipment data updated..");
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;