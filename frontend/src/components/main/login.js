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
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../config";
import "./login.css";

const Login = () => {
  const url = app_config.api_url;

  const loginForm = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const loginSubmit = (values) => {
    console.log(values);
    fetch(url + "/user/checklogin", {
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
        });
        res.json().then((data) => {
          if (data.isAdmin) {
            sessionStorage.setItem("admin", JSON.stringify(data));
            navigate("/admin/addequipment");
          } else {
            sessionStorage.setItem("user", JSON.stringify(data));
            navigate("/main/listproduct");
          }
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

  return (
    <div>
      <Paper className="loginback">
        <Grid container justifyContent="center">
          <Grid item md={4} sm={6}>
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

                <div className="mt-2">
                  <p className="or">Or Login Using</p>
                </div>

                {/* social media icons */}
                <div className="pad mt-4">
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
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} sm={2}>
            <Card className="mt-4">
              <div className="col-md-12 col-sm-6">
                <img
                  className="img-fluid sideimg "
                  src="https://images.pexels.com/photos/1178337/pexels-photo-1178337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                ></img>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
