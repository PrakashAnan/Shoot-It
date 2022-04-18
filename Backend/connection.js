const mongoose=require("mongoose");
// import k liye use kiye hai or isme koi / nii qnki ye dirct node module se aaya hai
const api_config=require("./config");

const url=api_config.db_url;

mongoose.connect(url)
// for the connection


.then( () => {
    console.log("connection successful")
})
.catch( (err) => {
    console.error(err)

});
module.exports=mongoose;