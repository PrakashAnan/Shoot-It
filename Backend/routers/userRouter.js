const router = require ("express").Router()
const Model = require("../models/userModel")

router.post("/add",(req,res) => {
    console.log(req.body);

    new Model(req.body)
    .save()
    .then((data)=>{
        console.log("User data saved sucessfully");
        res.status(200).json(data)
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
   })
})

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


router.post("/checklogin", (req, res) => {
  let formdata = req.body;
  // req.body k through formdata mn data nikl rhe hai
  Model.findOne({ username: formdata.username })
    // findOne humlog isliye use kar rhe hai taaki data array k form mn mat aaye
    .then((data) => {
      // username mn se jo data aaya hai wo kch data variable mn aaega
      if (data) {
        // data jo yha aaega wo match krega if k condtion mn
        console.log("data found");
        if (data.password === formdata.password) {
          // data pass ko client k pass se match krega
          console.log("login successfull");
          res.status(200).json({ status: "success" });
          // client ko pta chlne k liye response dikhane k liye
        } else {
          console.log("password incorrect");
          res.status(300).json({ status: "fail" });
        }
      } else {
        console.log("data not found");
        res.status(300).json({ status: "fail" });
      }
    });
});


module.exports=router;






// const router = require("express").Router();
// const Model = require("../models/userModel");

// router.post("/add", (req, res) => {
//   console.log(req.body);

//   new Model(req.body)
//     .save()
//     .then((data) => {
//       console.log("user data saved successfully..");
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json(err);
//     });
// });


// module.exports = router;
