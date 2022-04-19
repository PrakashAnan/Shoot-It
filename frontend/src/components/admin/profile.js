import { Button, Card, CardContent, Grid, Paper, TextField } from "@mui/material";
import React from "react";

const AdminProfile = () => {

  const url = app_config.api_url;

  // 1. Create a form object
  const UserForm = {
    name: "",
    username: "",
    mobile: "",
    // branch: "",
    password: "",
  };

  // 2. Create a submit callback function

  const userSubmit = (values) => {
    console.log(values);
    // 1. URL
    // 2. request method
    // 3. Data
    // 4. Data format



    // fetch function is used to request in frontend from backend.
    fetch(url + "/user/add", {
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


  return (
    <div>
      <h1>Signup Here</h1>
      <Paper className="login-container2">
        <Grid container justifyContent="center">
          <Grid md={3} sm={4}>
            <Card>
              <CardContent className="sign">
                <h2 className="text">Sign-up Here</h2>

                <Formik initialValues={UserForm} onSubmit={userSubmit} >
                  {({ values, handleChange, handleSubmit }) => (

                    <form onSubmit={handleSubmit}>

                      <TextField className="w-100 mt-3 name"
                        placeholder="Name"
                        label="name"
                        variant="outlined"
                        id="name"
                        onChange={handleChange}
                        value={values.name}

                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="Username"
                        label="Username"
                        type="string"
                        variant="outlined"
                        id="username"
                        onChange={handleChange}
                        value={values.username}

                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="mobile no"
                        label="mobile number"
                        type="string"
                        variant="outlined"
                        id="name"
                        onChange={handleChange}
                        value={values.mobile}

                      />
                      {/* 
                          <TextField
                              className="w-100 mt-3"
                              placeholder="Branch"
                              label="Branch"
                              type="string"
                              variant="outlined"
                              //   helperText="Enter strong password"
                              
                          /> */}

                      <TextField
                        className="w-100 mt-3"
                        placeholder="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        id="name"
                        onChange={handleChange}
                        value={values.password}
                      />

                      <Button color="error"
                        variant="contained"
                        className="w-50 mt-3"
                        type="submit">
                        submit
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
  );
};

export default AdminProfile;
