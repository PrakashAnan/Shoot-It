// import React from 'react';
// import { Button, Card, CardContent, Checkbox, FormControlLabel, Grid, Paper, TextField } from "@mui/material";
// import Swal from "sweetalert2";
// import { Formik } from "formik";
// import app_config from "../config";
import "./signup.css";

// const url = app_config.api_url;

// // 1. Create a form object
// const signupForm = {
//   name:"",
//   username: "",
//   mobileno: "",
//   password: "",
//   email:"",
// };

// const signupSubmit = (values) => {
//   console.log(values);

//   fetch(url + "/user/add", {
//     method: "POST",
//     body: JSON.stringify(values),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((res) => {
//       console.log(res.status);
//       if (res.status === 200) {
//         Swal.fire({
//           icon: "success",
//           title: "Success",
//           text: "Registered Successfully",
//         });

//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// };

// const UserSignup = () => {
//   return (
//     <div >

//         <Paper className='back'>

//         <Grid container justifyContent="center">
//           <Grid item md={4} sm={2}>
//             <Card className='mt-5 mb-5 card'>
//               {/* for making card color */}
//               <CardContent>
//                 <h1>Signup Here</h1>

//                 <Formik
//                   initialValues={signupForm}
//                   onSubmit={signupSubmit}
//                 >
//                   {({ values, handleChange, handleSubmit,errors}) => (
//                     <form onSubmit={handleSubmit}>

//                         <TextField
//                         className="w-100"
//                         autoComplete="off"
//                         placeholder="Name"
//                         label="Name"
//                         id="name"
//                         onChange={handleChange}
//                         value={values.name}
//                         helperText={errors.name}
//                         error={Boolean(errors.name)}
//                       />

//                       <TextField
//                         className="w-100 mt-3"
//                         autoComplete="off"
//                         placeholder="Username"
//                         label="username"
//                         id="username"
//                         onChange={handleChange}
//                         value={values.username}
//                         helperText={errors.username}
//                         error={Boolean(errors.username)}
//                       />

//                       <TextField
//                         className="w-100 mt-3"
//                         autoComplete="off"
//                         placeholder="Mobile No"
//                         label="mobileno"
//                         id="mobileno"
//                         onChange={handleChange}
//                         value={values.mobileno}
//                         helperText={errors.mobileno}
//                         error={(errors.mobileno)}
//                       />

//                       <TextField
//                         className="w-100 mt-3"
//                         autoComplete="off"
//                         placeholder="Password"
//                         label="password"
//                         id="password"
//                         onChange={handleChange}
//                         value={values.password}
//                         helperText={errors.password}
//                         error={Boolean(errors.password)}
//                       />

//                       <TextField
//                         className="w-100 mt-3"
//                         autoComplete="off"
//                         placeholder="Email"
//                         label="email"
//                         id="email"
//                         onChange={handleChange}
//                         value={values.email}
//                         helperText={errors.email}
//                         error={Boolean(errors.email)}
//                       />

//                       <div className="mt-3 save">
//                         <FormControlLabel
//                           control={<Checkbox defaultChecked />}
//                           label="save password"
//                         />
//                       </div>

//                       <Button
//                         variant="contained"
//                         color="secondary"
//                         type="submit"
//                         className="button w-100"
//                       >
//                         Signin To Continue
//                       </Button>
//                     </form>
//                   )}
//                 </Formik>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Paper>

//     </div>
//   )
// }

// export default UserSignup;

const UserSignup = () => {
  return (
    <div className="signup_div">
      <header>
        <div className="">
          <div className="mask intro rgba-gradient d-flex justify-content-center align-items-center">
            <div className="container ">
              <div className="row mt-5">
                <div className="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
                  <h1
                    className="h1-responsive font-weight-bold wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    Sign up right now!{" "}
                  </h1>
                  <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                  <h6 className="mb-3 wow fadeInLeft" data-wow-delay="0.3s">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                  <a
                    className="btn btn-outline-white wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    Learn more
                  </a>
                </div>

                <div className="col-md-6 col-xl-5 mb-4">
                  <div className="card wow fadeInRight" data-wow-delay="0.3s">
                    <div className="card-body">
                      <div className="text-center">
                        <h3 className="white-text">
                          <i className="fa fa-user white-text"></i> Register:
                        </h3>
                        <hr className="hr-light" />
                      </div>

                      <div className="md-form">

                        <i className="fa fa-user prefix white-text active"></i>
                        <input
                          type="text"
                          id="form3"
                          className="white-text form-control"
                        />
                        <label htmlFor="form3" className="active">
                          Your Name
                        </label>
                      </div>

                      <div className="md-form">
                        <i className="fa fa-envelope prefix white-text active"></i>
                        <input
                          type="email"
                          id="form2"
                          className="white-text form-control"
                        />
                        <label htmlFor="form2" className="active">
                          Your email
                        </label>
                      </div>     
                      <div className="md-form">
                        <i className="fa fa-lock prefix white-text active"></i>
                        <input
                          type="password"
                          id="form4"
                          className="white-text form-control"
                        />
                        <label htmlFor="form4">Your password</label>
                      </div>
                      <div className="md-form">
                        <i className="fa-solid fa-mobile prefix white-text active"></i>
                        <input
                          type="password"
                          id="form5"
                          className="white-text form-control"
                        />
                        <label htmlFor="form4">Your MobileNo</label>
                      </div>
                 
                      <div className="text-center mt-4">
                        <button className="btn btn-indigo">Sign up</button>
                        <hr className="hr-light mb-3 mt-4" />
                        <div className="inline-ul text-center d-flex justify-content-center">
                          <a className="p-2 m-2 tw-ic">
                            <i className="fab fa-twitter white-text"></i>
                          </a>
                          <a className="p-2 m-2 li-ic">
                            <i className="fab fa-linkedin-in white-text"> </i>
                          </a>
                          <a className="p-2 m-2 ins-ic">
                            <i className="fab fa-instagram white-text"> </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  );
};
export default UserSignup;
