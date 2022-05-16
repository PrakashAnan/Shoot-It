import {
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../config";
// import "./login.css";

const Login = () => {
  // const url = app_config.api_url;

  // const loginForm = {
  //   username: "",
  //   password: "",
  // };

  // const loginSubmit = (values) => {
  //   console.log(values);
  //   fetch(url + "/user/checklogin", {
  //     method: "POST",
  //     body: JSON.stringify(values),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     console.log(res.status);
  //     if (res.status === 200) {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Success",
  //         text: "Loggedin Successfully",
  //       })
  //     } else if (res.status === 300) {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Failed",
  //         text: "Loggedin Failed",
  //       });
  //     }
  //   });
  // };

  return (
    //  <div>
    //   <Paper className="loginback">
    //     <Grid container justifyContent="center">
    //       <Grid item md={4} sm={2}>
    //         <Card className="mt-4 mb-4">
    //           <CardContent className="inline-background">
    //             <p className="h3 text-center mb-3 mt-3">Login Here</p>
    //             <Formik initialValues={loginForm} onSubmit={loginSubmit}>
    //               {({ values, handleChange, handleSubmit }) => (
    //                 <form on onSubmit={handleSubmit}>
    //                   <TextField
    //                     className="w-100 mt-5"
    //                     placeholder="Username/email"
    //                     label="Username"
    //                     id="username"
    //                     onChange={handleChange}
    //                     value={values.username}
    //                   />

    //                   <TextField
    //                     className="w-100 mt-3"
    //                     placeholder="Password"
    //                     label="Password"
    //                     id="password"
    //                     onChange={handleChange}
    //                     value={values.password}
    //                   />

    //                   <div className="mt-3">

    //                     <FormControlLabel
    //                       control={<Checkbox defaultChecked />}
    //                       label="Remember Me"
    //                     />
    //                   </div>

    //                   <Button
    //                     variant="contained"
    //                     type="submit"
    //                     color="secondary"
    //                     className="button mt-2 w-100 "
    //                   >
    //                     Login Here
    //                   </Button>
    //                 </form>
    //               )}
    //             </Formik>

    //             <div className="mt-2">
    //               <p className="or">Or Login Using</p>
    //             </div>

    //             {/* social media icons */}
    //             <div className="pad mt-4">
    //               <a href="" className="fa-brands fa-whatsapp"></a>
    //               <a href="" className="fa-brands fa-instagram"></a>
    //               <a href="" className="fa-brands fa-facebook-f"></a>
    //             </div>

    //             <div className="link mt-5">
    //               <p>
    //                 Forget<a href=""> Password?</a>
    //               </p>
    //             </div>
    //             <div className="acc mt-3">
    //               <p>
    //                 Don't Have An Account?<a href="">Sign up</a>
    //               </p>
    //             </div>

    //           </CardContent>
    //         </Card>
    //       </Grid>
    //       <Grid item md={4} sm={2}>
    //         <Card className="mt-4">

    //           <div className="third">

    //         <img className='img-fluid sideimg'  src='https://images.pexels.com/photos/1178337/pexels-photo-1178337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>

    //         </div>

    //         </Card>
    //       </Grid>
    //     </Grid>
    //   </Paper>
    // </div>

    <header>
      {/* <navbar className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <strong>Login Page</strong>
          </a>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-7"
            aria-controls="navbarSupportedContent-7"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
            </ul>
            <form className="form-inline">
              <div className="md-form my-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </navbar> */}

      {/* <!--Intro Section--> */}
      <section className="view intro_2" style={{height: '100vh'}}>
        <div className="mask rgba-stylish-strong h-100 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5">
                {/* <!--Form with header--> */}
                <div className="card wow fadeIn" data-wow-delay="0.3s">
                  <div className="card-body">
                    {/* <!--Header--> */}
                    <div className="form-header purple-gradient">
                      <h3>
                        <i className="fas fa-user mt-2 mb-2"></i> Log in:
                      </h3>
                    </div>

                    {/* <!--Body--> */}
                    <div className="md-form">
                      <i className="fas fa-user prefix white-text"></i>
                      <input
                        type="text"
                        id="orangeForm-name"
                        className="form-control"
                      />
                      <label for="orangeForm-name">Your name</label>
                    </div>
                    <div className="md-form">
                      <i className="fas fa-envelope prefix white-text"></i>
                      <input
                        type="text"
                        id="orangeForm-email"
                        className="form-control"
                      />
                      <label for="orangeForm-email">Your email</label>
                    </div>

                    <div className="md-form">
                      <i className="fas fa-lock prefix white-text"></i>
                      <input
                        type="password"
                        id="orangeForm-pass"
                        className="form-control"
                      />
                      <label for="orangeForm-pass">Your password</label>
                    </div>

                    <div className="text-center">
                      <Button className="btn purple-gradient btn-lg">
                        Sign up
                      </Button>
                      {/* <hr> */}
                      <div className="inline-ul text-center d-flex justify-content-center">
                        <a className="p-2 m-2 fa-lg tw-ic">
                          <i className="fab fa-twitter white-text"></i>
                        </a>
                        <a className="p-2 m-2 fa-lg li-ic">
                          <i className="fab fa-linkedin-in white-text"> </i>
                        </a>
                        <a className="p-2 m-2 fa-lg ins-ic">
                          <i className="fab fa-instagram white-text"> </i>
                        </a>
                      </div>
                      {/* </hr> */}
                    </div>
                  </div>
                </div>
                {/* <!--/Form with header--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Login;
