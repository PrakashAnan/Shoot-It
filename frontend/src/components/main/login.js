import { Card, CardContent, Grid, Paper, TextField,Button, Checkbox, FormControlLabel } from '@mui/material';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import app_config from '../../config';
import "./login.css";

const url = app_config.api_url;

const loginForm = {
    username: "",
    password: "",
  };

  const loginSubmit = (values) => {
    console.log(values);
    fetch(url + "/admin/checklogin", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Loggedin Successfully",
        }).then(() => {
          res.json().then((data) => {
            sessionStorage.setItem("user", JSON.stringify(data));
            // navigate("/liststudent");
          });
        });
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Loggedin Failed",
        });
      }
    });
  };

const Login = () => {
  return (
    <div>
      <Paper className="loginback">
        <Grid container justifyContent="center">
          <Grid item md={4}>
            <Card className="mt-4 mb-4">
              <CardContent className="inline-background">
                <p className="h3 text-center mb-3 mt-3">Login Here</p>

                <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form on onSubmit={handleSubmit}>
                      <TextField
                        className="w-100 mt-5"
                        placeholder="Username/email"
                        label="Username"
                        id="username"
                        onChange={handleChange}
                        value={values.username}
                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="Password"
                        label="Password"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                      />

                      <div className="mt-3">
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Remember Me"
                        />
                      </div>

                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        className="button mt-2 w-100 "
                      >
                        Login Here
                      </Button>
                    </form>
                  )}
                </Formik>

                <div className="">
                  <p className="or">Or Sign Up Using</p>
                </div>

                {/* social media icons */}
                <div className="mt-4">
                  <a href="" className="fa-brands fa-whatsapp"></a>
                  <a href="" className="fa-brands fa-instagram"></a>
                  <a href="" className="fa-brands fa-facebook-f"></a>
                </div>

                <div className="link mt-5">
                  <p>
                    Forget<a href=""> Password?</a>
                  </p>
                </div>
                <div className="acc mt-3">
                  <p>
                    Don't Have An Account?<a href="">Sign up</a>
                  </p>
                </div>

                {/* <WhatsAppIcon /> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
};

export default Login;