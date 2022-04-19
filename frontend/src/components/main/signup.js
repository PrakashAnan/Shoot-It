import React from 'react';
import { Button, Card, CardContent, Checkbox, FormControlLabel, Grid, Paper, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { Formik } from "formik";
import app_config from "../../config";
<<<<<<< HEAD
import "./signup.css";
=======
>>>>>>> 8ad030aa0ca2813c5d6ec0678fe58104c4780532

const url = app_config.api_url;

// 1. Create a form object
const signupForm = {
  name:"",
  username: "",
  mobileno: "",
  password: "",
};

// 2. Create a submit callback function

const signupSubmit = (values) => {
  console.log(values);
  // 1. URL
  // 2. request method
  // 3. Data
  // 4. Data format



  // fetch function is used to request in frontend from backend.


  fetch(url + "/admin/add", {
    method: "POST",
    body: JSON.stringify(values),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registered Successfully",
        });

      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};


const UserSignup = () => {
  return (
    <div >
        
        <Paper className='back'>
    
        <Grid container justifyContent="center">
          <Grid item md={4} sm={2}>
            <Card className='mt-5 mb-5 card'>
              {/* for making card color */}
              <CardContent>
                <h1>Signup Here</h1>

                <Formik
                  initialValues={signupForm}
                  onSubmit={signupSubmit}
                >
                  {({ values, handleChange, handleSubmit,errors}) => (
                    <form onSubmit={handleSubmit}>

                        <TextField
                        className="w-100"
                        autoComplete="off"
                        placeholder="Name"
                        label="Name"
                        id="name"
                        onChange={handleChange}
                        value={values.name}
                        helperText={errors.name}
                        error={Boolean(errors.name)}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="Username"
                        label="username"
                        id="username"
                        onChange={handleChange}
                        value={values.username}
                        helperText={errors.username}
                        error={Boolean(errors.username)}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="Mobile No"
                        label="mobileno"
                        id="mobileno"
                        onChange={handleChange}
                        value={values.mobileno}
                        helperText={errors.mobileno}
                        error={(errors.mobileno)}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="Password"
                        label="password"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                        helperText={errors.password}
                        error={Boolean(errors.password)}
                      />

                      <TextField
                        className="w-100 mt-3"
                        autoComplete="off"
                        placeholder="Email"
                        label="email"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                        helperText={errors.email}
                        error={Boolean(errors.email)}
                      />

                      

                      <div className="mt-3 save">
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="save password"
                        />
                      </div>

                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        className="button w-100"
                      >
                        Signin To Continue
                      </Button>
                    </form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

    </div>
  )
}

export default UserSignup;